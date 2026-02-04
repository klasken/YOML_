# Rapport de Design et Accessibilité : Gym Connect

Ce document détaille les choix de conception visuelle et les mesures d'accessibilité mises en place pour la plateforme **Gym Connect**.

---

## 1. Justification des choix de Design (UI/UX)

L'interface de Gym Connect a été pensée pour répondre aux besoins de sportifs en mouvement, nécessitant une lecture rapide et une interaction efficace.

* **Identité Visuelle (Couleur #2D427B) :** * Le bleu profond a été choisi pour instaurer un sentiment de **confiance** et de **stabilité**.
    * Contrairement au rouge ou à l'orange (souvent saturés dans le fitness), ce bleu favorise la concentration et le sérieux de l'entraînement communautaire.
* **Utilisation de la "Card UI" (Interface par cartes) :** * Chaque séance est isolée dans une carte blanche pour éviter la surcharge cognitive.
    * Cela permet à l'utilisateur de scanner les informations (Qui, Où, Quoi) en un coup d'œil lors d'un défilement rapide sur mobile.
* **Hiérarchie de l'Information :** * Le bouton **"Rejoindre"** est l'élément le plus visible de chaque carte pour inciter à l'action principale : la mise en relation.
    * L'utilisation de photos de profil circulaires humanise l'application et renforce l'aspect sécurisant du réseau social.
* **Navigation Latérale (Sidebar) :** * Le menu à gauche permet de libérer l'espace central pour le flux de contenu ("Live Feed"), facilitant ainsi la lecture sur les écrans larges comme sur les tablettes.

---

## 2. Explication des décisions d'Accessibilité (A11y)

L'accessibilité a été placée au cœur du développement pour garantir que tous les sportifs, quelles que soient leurs capacités ou leurs conditions d'entraînement, puissent utiliser le service.

* **Contraste de Couleurs :** * Le texte blanc sur le fond bleu `#2D427B` offre un rapport de contraste élevé.
    * Cela garantit une lisibilité optimale, même pour les utilisateurs souffrant de déficience visuelle ou utilisant l'application en plein soleil (proche des baies vitrées des salles).
* **Zones de Clic Optimisées :** * Tous les boutons interactifs ont une taille minimale de **48x48 pixels**.
    * Cette décision facilite l'utilisation pour les personnes ayant des difficultés de précision motrice ou utilisant l'application avec des mains fatiguées/moites après un effort intense.
* **Utilisation de Polices Sans-Serif :** * L'utilisation de typographies simples et sans empattements améliore la lisibilité pour les utilisateurs dyslexiques et assure une clarté maximale sur les écrans de smartphones.

---

## Spécifications Techniques du Logo
* **Code Couleur Primaire :** `#2D427B`
* **Concept :** Alliance de l'haltère (Force) et des ondes de connexion (Réseau/Wi-Fi) pour symboliser le concept de "Gym Connect".
