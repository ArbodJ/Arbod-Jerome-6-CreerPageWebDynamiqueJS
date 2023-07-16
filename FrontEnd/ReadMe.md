# Créer une page en dynamique avec JavaScript.

Faire d'un protfolio style site vitrine, permettre a un utlisateur de classé les photos de projet par catégorie. Aussi permettre a l'administrateur de pouvoir acceder à ses projets et de les deplacés a sa guise de supprimer un projet ou l'ensemble des photos et d'en ajoputer une nouvelle.

Pour acceder au site allez sur le dossier Backend du projet puis taper en ligne de commande **npm start**.

## Résumé des etapes effectuées.

### Etape 1 :
  Mise en place de l'environnemt de developpement :
  - Installation NodeJS.
  - Installation npm.
  - Récuperation du repo GitHub du Projet.
  - Analyse des dossiers récuperés, et du code HTML5 CSS3.
  - Prendre connaissance de Kanban.
  - Découvrir la documentation Swagger de l'API.
  - Tester que tout est opérationnel (nodejs, npm start, kanban, swagger, affichage du portfolio, API).

### Etape 2 :
  Affichage en dynamique des block photos-textes et supprimer le code html de ceux-ci :
  - Effacement du code HTML.
  - Recuperation de l'url de l'API.
  - Travail sur le DOM et API.

### Etape 3 :
  Ajouter des filtres pour afficher les travaux par catégorie :
  - Ajout d'une div pour les filtres.
  - Création de bouton et du texte pour chaque catégories.
  - Ajout du style CSS, positionnement, et évènement click sur chaque boutons.

### Etape 4 :
  Integreer la page de connexion du portfolio :
  - Integrer un formulaire de connexion.
  - Si identifiant ou mot de passe incorrect afficher une message d'erreur.
  - Si identifiant et mot passe correct rediriger vers le mode edition du portfolio.

### Etape 5 :
  Ajouter une modale pour gérer les projets :
  - Integrer un modale avec affichage de tous les projets present sur le portfolio. Accessible par un lien "modifier".
  - Modale pouvant etre fermer soit sur un click sur l'icon croix ou par click en dehors du modale.
  - Integrer une fonction permettant la suppression d'un projets. suppression depuis le modale et suppression immediat dans le portfolio en même temps.
  - Ajout d'un bouton "ajouter une photo" redirection vers un deuxieme modale.
  - Ajout d'un texte cliquable pour la suppression de tous les projets.

### Etape 6 :
  Integrer le formulaire pour l'ajout d'un projet :
  - Un champ pour uploader une image.
  - Un champ pour nommer le projet.
  - Un champ pour selectionner une catégorie parmi les catégories disponibles.
