from flask import Flask, request, jsonify
from flask_cors import CORS
from modules.chatbot.chatbot import MonkeyIslandChatbot
import os
import json

app = Flask(__name__)
CORS(app)

# Définir le chemin absolu une seule fois
current_dir = os.path.dirname(os.path.abspath(__file__))
data_path = os.path.join(current_dir, 'data', 'monkey_island_data.json')
print(f"Searching for data file at: {data_path}")

# Vérifier si le répertoire 'data' existe, sinon le créer
data_dir = os.path.join(current_dir, 'data')
if not os.path.exists(data_dir):
    os.makedirs(data_dir)

# Créer le fichier JSON s'il n'existe pas
if not os.path.exists(data_path):
    default_data = {
        "conversations": []
    }
    with open(data_path, 'w') as f:
        json.dump(default_data, f, indent=4)

# Initialiser le chatbot en passant le chemin du fichier
chatbot = MonkeyIslandChatbot(data_path=data_path)

@app.route('/')
def home():
    return jsonify({"message": "Ocean Explorer API is running"})

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({'error': 'Message is required'}), 400
            
        message = data['message']
        # Get response from the chatbot
        response = chatbot.get_response(message)
        
        # Ensure we have a valid response
        if not response or 'response' not in response:
            return jsonify({'error': 'Invalid response from chatbot'}), 500
            
        return jsonify(response)
        
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")  # For debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
