import json
import yaml
import random
from typing import Dict
from pathlib import Path
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import os

os.environ['TRANSFORMERS_CACHE'] = 'E:/transformers_cache'  # Remplacez par un chemin avec suffisamment d'espace

class MonkeyIslandChatbot:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(MonkeyIslandChatbot, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return

        # Initialisation du modèle avec Hugging Face
        self.tokenizer = AutoTokenizer.from_pretrained("facebook/opt-125m")
        
        # Chargement du modèle sans quantization
        self.model = AutoModelForCausalLM.from_pretrained(
            "facebook/opt-125m",
            device_map="auto",
            torch_dtype=torch.float16
        )
        
        # Configuration du modèle
        self.default_model_settings = {
            "temperature": 0.8,
            "top_p": 0.9,
            "max_length": 4096
        }

        # Initialize and load data
        self._load_character_templates()
        self._load_monkey_island_data()

        self._initialized = True

    def _load_character_templates(self):
        """Load character templates."""
        try:
            template_path = Path("config/character_templates.yaml")
            with open(template_path, encoding='utf-8') as f:
                self.character_templates = yaml.safe_load(f)
        except Exception as e:
            raise Exception(f"Error loading character templates: {str(e)}")

    def _load_monkey_island_data(self):
        """Load Monkey Island data."""
        try:
            json_path = Path("data/monkey_island_data.json")
            with open(json_path) as f:
                self.monkey_island_data = json.load(f)
        except Exception as e:
            raise Exception(f"Error loading data: {str(e)}")

    def search_monkey_island_data(self, query: str) -> str:
        """Search Monkey Island data."""
        results = []
        for item in self.monkey_island_data:
            if query.lower() in item["title"].lower() or query.lower() in item["content"].lower():
                results.append(f"- **{item['title']}**: {item['content']}")
        return "\n".join(results) if results else "No relevant information found."

    def get_response(self, message: str, character: str = "guybrush") -> Dict:
        """Generate response with character personality."""
        try:
            search_results = self.search_monkey_island_data(message)
            character_template = self.character_templates.get(character, self.character_templates["guybrush"])
            
            # Get character-specific settings
            model_settings = character_template.get("model_settings", self.default_model_settings)
            
            # Add personality and style to response
            personality = character_template["personality"]
            speaking_style = character_template["speaking_style"]
            catchphrases = character_template.get("catchphrases", [])
            
            # Randomly add catchphrase 20% of the time
            response_text = search_results
            if catchphrases and random.random() < 0.2:
                response_text = f"{random.choice(catchphrases)}\n{response_text}"

            return {
                "response": response_text,
                "character": character_template["name"],
                "model_settings": model_settings
            }

        except Exception as e:
            return {"response": "An error occurred!", "error": str(e)}

# Call the main function to run the bot.
if __name__ == "__main__":
    def main():
        chatbot = MonkeyIslandChatbot()
        print("🏴‍☠️ Welcome to Monkey Island Chatbot! (type 'quit' to exit)")
        while True:
            message = input("You: ")
            if message.lower() == 'quit':
                break
            response = chatbot.get_response(message)
            print(f"{response['character']}: {response['response']}")

    main()
