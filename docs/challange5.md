# Interactive Pirate Guide Challenge: Monkey Island 2.0

## Overview
Create an engaging user assistance feature (chatbot, FAQ, etc.) themed around the Monkey Island universe, leveraging Ollama 3.2:8b LLM for natural language processing and response generation.

### Core Requirements

#### User Assistance Features
- Interactive help system styled in Monkey Island theme
- Character-driven responses and interactions
- Integration of game references and pirate vocabulary
- Pop culture references and humor elements

#### Technical Requirements
1. **LLM Integration (Ollama 3.2:8b)**
   - Local model deployment and configuration
   - Custom prompt engineering for pirate-themed responses
   - Context window management (max 4096 tokens)
   - Response temperature optimization (0.7-0.9 recommended)
   - Model fine-tuning options for character personalities

2. **API Implementation**
   - REST API endpoints for chat interactions
   - WebSocket support for real-time responses
   - Rate limiting (max 30 requests/minute)
   - Response caching system
   - Error handling and fallback responses

3. **Design Elements**
   - Monkey Island visual styling
   - Themed UI components
   - Character-appropriate animations
   - Retro gaming aesthetics

4. **Content Development**
   - JSONL format for training data
   - Custom knowledge base integration
   - Conversation flow mapping
   - Response templates in YAML format

### Technical Architecture

1. **Backend Stack**
   - FastAPI/Flask for API development
   - Redis for caching and rate limiting
   - PostgreSQL for conversation history
   - Docker containerization
   - Nginx reverse proxy

2. **Model Configuration**
   - Model quantization (GGUF format)
   - Custom model settings:
     ```yaml
     context_length: 4096
     temperature: 0.8
     top_p: 0.9
     repeat_penalty: 1.1
     ```

3. **Performance Requirements**
   - Response time < 2 seconds
   - 99.9% uptime
   - Memory usage < 16GB
   - Support for concurrent users (min 100)

### Additional Technical Submission Requirements
1. **Infrastructure Documentation**
   - Docker compose configuration
   - Model deployment guide
   - Performance optimization strategies
   - Scaling considerations

2. **API Documentation**
   - OpenAPI/Swagger specification
   - Authentication methods
   - Rate limiting details
   - Endpoint descriptions

3. **Model Training Data**
   - Sample JSONL training files
   - Prompt templates
   - Character personality definitions
   - Response formatting guidelines

## Evaluation Criteria

### Core Assessment (70%)
- Creative implementation (30%)
- Technical functionality (20%)
- User experience (20%)

### Bonus Features (30%)
- Easter egg creativity
- Reference integration
- Humor quality
- Visual design

## Prize
- €1000 in gift vouchers (shared among winning team members)

## Submission Requirements
1. **Video Demonstration**
   - YouTube link showcasing feature usage
   - Highlight of key functionalities
   - Demonstration of Easter eggs
   - User interaction examples

2. **Technical Documentation**
   - Implementation details
   - Feature documentation
   - Easter egg guide
   - Integration instructions

## Contact
Submit through the official challenge platform (video submission via YouTube link)

## Sponsor Information
3DS OUTSCALE, a Dassault Systèmes brand
- Website: https://fr.outscale.com
- LinkedIn: https://www.linkedin.com/company/outscale
- Twitter: https://twitter.com/outscale_fr
