# IA au travail — page d'appel à participation

Exemple de landing page statique en français pour recruter des professionnels utilisant l'IA au travail pour un entretien de recherche de 45 minutes.

## Voir le site

Ouvrir `index.html` dans un navigateur, ou servir ce dossier avec `python3 -m http.server 8000` puis ouvrir `http://localhost:8000`.

## Activer la réservation

Dans `script.js`, remplacer la chaîne vide de `bookingUrl` par l'URL HTTPS de la page de réservation dédiée à ces entretiens. Les boutons de la page pointeront alors vers cette URL. Tant que l'URL est absente, ils conduisent à la section de réservation et celle-ci indique que le lien reste à ajouter.

Le texte actuel ne précise ni l'enregistrement ni les modalités de traitement des données. Ajouter ces informations uniquement après validation du protocole de recherche.

## Publier sur GitHub Pages

Le workflow `.github/workflows/pages.yml` publie automatiquement le site à chaque push sur `main`. Il peut aussi être lancé manuellement depuis l'onglet **Actions** du dépôt. Seuls `index.html`, `styles.css` et `script.js` sont inclus dans le site publié ; le guide d'entretien reste dans le dépôt.

Dans les paramètres du dépôt GitHub, choisir **Settings → Pages → Build and deployment → Source: GitHub Actions**. La première publication fournira l'adresse du site dans le résultat du workflow.
