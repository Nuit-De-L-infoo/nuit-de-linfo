# Module Chatbot Monkey Island 🏴‍☠️

## Description
Ce module implémente un chatbot interactif basé sur l'univers de Monkey Island, développé dans le cadre du défi "L'île aux singes 2.0" de la Nuit de l'Info. Il offre une expérience d'assistance utilisateur immersive en adoptant les personnalités emblématiques de la série.

## Contexte du Défi
- **Événement**: Nuit de l'Info
- **Sponsor**: 3DS OUTSCALE
- **Objectif**: Créer une fonctionnalité d'aide utilisateur originale et immersive
- **Critères d'évaluation**:
  - Originalité de l'approche
  - Intégration de l'univers Monkey Island
  - Qualité de l'humour et références
  - Design et expérience utilisateur

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

## Spécificités du projet

### Intégration culturelle
- Références aux jeux Monkey Island
- Easter eggs cachés
- Citations célèbres de la série
- Énigmes et devinettes thématiques

### Aspects techniques innovants
- Interface conversationnelle adaptative
- Système de reconnaissance du contexte
- Gestion des émotions des personnages
- Mécanismes de progression dans le dialogue

## Déploiement et utilisation
- Instructions d'installation
- Guide de configuration
- Exemples d'utilisation
- Documentation API