import json
import yaml
import random
from typing import Dict
from pathlib import Path
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import os
from sentence_transformers import SentenceTransformer
import numpy as np
from typing import List, Tuple

os.environ['TRANSFORMERS_CACHE'] = 'E:/transformers_cache'  # Remplacez par un chemin avec suffisamment d'espace

class MonkeyIslandChatbot:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super(MonkeyIslandChatbot, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self, data_path=None):
        if self._initialized:
            return
            
        self.data_path = data_path
        
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
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        self.embeddings_cache = {}
        self._initialize_embeddings()

        self._initialized = True

    def _initialize_embeddings(self):
        """Pré-calculer les embeddings pour tous les documents."""
        print("Initialisation des embeddings...")
        for item in self.monkey_island_data:
            text = f"{item['title']} {item['content']}"
            if text not in self.embeddings_cache:
                self.embeddings_cache[text] = self.embedding_model.encode(text)

    def _get_similar_documents(self, query: str, top_k: int = 3) -> List[Tuple[float, dict]]:
        """Récupérer les documents les plus similaires en utilisant la similarité cosinus."""
        query_embedding = self.embedding_model.encode(query)
        
        similarities = []
        for item in self.monkey_island_data:
            text = f"{item['title']} {item['content']}"
            doc_embedding = self.embeddings_cache[text]
            similarity = np.dot(query_embedding, doc_embedding) / (
                np.linalg.norm(query_embedding) * np.linalg.norm(doc_embedding)
            )
            similarities.append((similarity, item))
        
        # Trier par similarité décroissante
        similarities.sort(reverse=True, key=lambda x: x[0])
        return similarities[:top_k]
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
            json_path = self.data_path if self.data_path else Path("./monkey_island_data.json")
            with open(json_path) as f:
                self.monkey_island_data = json.load(f)
        except Exception as e:
            raise Exception(f"Error loading data: {str(e)}")

    def search_monkey_island_data(self, query: str) -> str:
        """Recherche améliorée avec RAG pour trouver les informations pertinentes."""
        query_lower = query.lower()
        results = []

        # Recherche exacte
        exact_matches = []
        for item in self.monkey_island_data:
            title_match = query_lower in item["title"].lower()
            content_match = query_lower in item["content"].lower()
            
            if title_match or content_match:
                exact_matches.append(item)

        # Si on trouve des correspondances exactes
        if exact_matches:
            for item in exact_matches:
                results.append(f"- **{item['title']}**: {item['content']}")

        # Ajouter des résultats similaires sémantiquement
        similar_docs = self._get_similar_documents(query)
        for similarity, item in similar_docs:
            if similarity > 0.5:  # Seuil de similarité
                result_str = f"- **{item['title']}**: {item['content']}"
                if result_str not in results:  # Éviter les doublons
                    results.append(result_str)

        # Ajouter un indicateur de pertinence
        if results:
            context = "\n\nContexte supplémentaire qui pourrait vous intéresser:\n"
            return "\n".join(results[:1]) + context + "\n".join(results[1:]) if len(results) > 1 else results[0]
        
        return "Aucune information pertinente trouvée."




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
