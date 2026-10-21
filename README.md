# IA au travail — site Hugo

Ce site présente une recherche doctorale sur la confiance dans les outils d'IA au travail. Il est généré avec [Hugo](https://gohugo.io/) à partir de `content/_index.md`.

## Modifier la page

- Changer les textes, les personnes, les liens des logos ou `booking_url` dans `content/_index.md`.
- Modifier la mise en page dans `layouts/index.html` et les styles dans `static/styles.css`.
- Les quatre logos sont dans `static/img/`.

Le texte après le front matter de `_index.md` apparaît dans la section « La recherche ». Le reste du contenu éditorial se trouve dans son front matter. Tant que `booking_url` est vide, les boutons mènent à la section de réservation et affichent le message d'attente. Pour activer la réservation, renseigner une URL HTTPS dédiée aux entretiens.

Le texte actuel ne précise ni l'enregistrement ni les modalités de traitement des données. Ajouter ces informations uniquement après validation du protocole de recherche.

## Prévisualiser et générer

Avec Hugo v0.168.0 ou une version compatible :

```sh
hugo server
```

Ouvrir l'adresse locale indiquée par Hugo. Pour générer les fichiers du site :

```sh
hugo --minify
```

Hugo crée `public/` ; ce dossier est ignoré par Git. Le protocole d'entretien reste dans le dépôt et n'est pas publié.

## Publier sur GitHub Pages

Le workflow `.github/workflows/pages.yml` construit le site avec Hugo puis publie `public/` à chaque push sur `main`. Il peut aussi être lancé manuellement depuis l'onglet **Actions**. La source de GitHub Pages doit être réglée sur **GitHub Actions** dans les paramètres du dépôt.
