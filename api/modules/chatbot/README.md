# Module Chatbot Monkey Island 🏴‍☠️

## Description
Ce module implémente un chatbot interactif basé sur l'univers de Monkey Island, capable d'interagir avec les utilisateurs en adoptant différentes personnalités de personnages du jeu.

## Fonctionnalités principales

### Personnages disponibles
- **Guybrush Threepwood**: Aspirant pirate maladroit mais déterminé
- **Kip Largo**: Héros malgré lui, pirate amateur
- **Banana Jack**: Singe rusé et opportuniste  
- **Capitaine Morve-Verte**: Méchant caricatural et maladroit
- **Le Guide Magique**: Sarcastique et énigmatique

### Configuration du modèle
- Modèle de base: facebook/opt-125m
- Format: float16 pour optimisation mémoire
- Paramètres par défaut:
  - Temperature: 0.8
  - Top_p: 0.9
  - Max length: 4096

### Personnalisation des réponses
- Chaque personnage possède:
  - Une personnalité définie
  - Un style de parole unique
  - Des phrases fétiches
  - Des paramètres de modèle optimisés

## Architecture technique

### Fichiers principaux
- `chatbot.py`: Classe principale MonkeyIslandChatbot
- `config/character_templates.yaml`: Configuration des personnages
- `data/monkey_island_data.json`: Base de connaissances du jeu

### Fonctionnalités clés
- Singleton pattern pour une seule instance
- Chargement automatique des templates et données
- Recherche contextuelle dans la base de connaissances
- Génération de réponses personnalisées par personnage