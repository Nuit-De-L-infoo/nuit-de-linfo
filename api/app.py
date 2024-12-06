from flask import Flask, request, jsonify
from flask_cors import CORS
from modules.chatbot.chatbot import MonkeyIslandChatbot
import os

app = Flask(__name__)
CORS(app)

# Initialize the chatbot
chatbot = MonkeyIslandChatbot()

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
