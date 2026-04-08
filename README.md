# Projet IHM GPHY 2025-2026 - AgroVitrine

## Membres de l'équipe
- DIOP Serigne Mansour
- NDOUR El Hadji Fallou
- MAIGA Seckou Abdoulaye

## Présentation du projet
Ce projet est une application web vitrine pour une collection de produits agroalimentaires. Développée avec React et Vite, elle offre une interface utilisateur moderne et responsive permettant de consulter, ajouter, modifier et supprimer des produits. L'architecture est conçue pour être générique grâce à un système de schéma de données, permettant de changer facilement de thème de collection sans modifier le code structurel.

## Fonctionnalités principales
- **Catalogue de produits** : Affichage en grille responsive avec recherche et navigation
- **Gestion CRUD complète** : Création, lecture, mise à jour et suppression de produits
- **Persistance des données** : Stockage local via LocalStorage
- **Formulaires intelligents** : Validation en temps réel, conservation des brouillons, prévisualisation d'images
- **Navigation persistante** : Utilisation de HashRouter pour maintenir l'état lors du rafraîchissement
- **Interface responsive** : Optimisée pour desktop et mobile
- **IHM optimisée** : Respect des heuristiques de Nielsen (visibilité système, contrôle utilisateur, prévention erreurs, etc.)

## Technologies utilisées
- **Frontend** : React 18 avec hooks
- **Routing** : React Router (HashRouter)
- **Styling** : CSS3 avec variables CSS et animations
- **Build** : Vite
- **Linting** : ESLint
- **État** : Context API + LocalStorage

## Comment exécuter le projet

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
1. Clonez ou téléchargez le projet
2. Ouvrez un terminal dans le dossier du projet
3. Installez les dépendances :
   ```bash
   npm install
   ```

### Lancement en développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173` (ou port suivant disponible).

### Build pour production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist`.

### Linting
```bash
npm run lint
```

## Architecture du projet

```
src/
├── components/           # Composants réutilisables
│   ├── CollectionContext.jsx    # Contexte pour la gestion d'état
│   ├── CollectionProvider.jsx   # Provider du contexte
│   ├── DataForm.jsx            # Formulaire générique basé sur schéma
│   ├── Header.jsx              # En-tête avec navigation
│   ├── ItemCard.jsx            # Carte produit
│   ├── Layout.jsx              # Layout principal
│   └── ...
├── pages/               # Pages principales
│   ├── Catalog.jsx      # Page catalogue
│   ├── Create.jsx       # Page création produit
│   ├── Details.jsx      # Page détails produit
│   └── Modify.jsx       # Page modification produit
├── data/                # Données et schémas
│   ├── produits.json    # Données initiales
│   └── schema.js        # Schéma des formulaires
├── App.jsx              # Composant racine
├── App.css              # Styles principaux
├── index.css            # Styles globaux
└── main.jsx             # Point d'entrée
```

### Architecture technique
- **Composants modulaires** : Séparation claire entre logique métier et présentation
- **État centralisé** : Utilisation du Context API pour la gestion des produits
- **Persistance** : LocalStorage pour la sauvegarde des données utilisateur
- **Routing** : Navigation basée sur les URL avec gestion des paramètres
- **Responsive design** : Media queries et flexbox/grid pour l'adaptation aux écrans
- **Accessibilité** : Labels, focus states, et structure sémantique

## Fonctionnement de l'application

1. **Page d'accueil** : Catalogue des produits avec grille responsive
2. **Création** : Formulaire pour ajouter un nouveau produit avec validation
3. **Détails** : Vue détaillée d'un produit avec possibilité de modification/suppression
4. **Modification** : Formulaire pré-rempli pour éditer un produit existant

Toutes les données sont sauvegardées automatiquement dans le navigateur.

## Conformité IHM
L'application respecte les principes d'ergonomie web :
- Visibilité de l'état du système
- Correspondance entre le système et le monde réel
- Contrôle et liberté de l'utilisateur
- Cohérence et standards
- Prévention des erreurs
- Reconnaissance plutôt que mémorisation
- Flexibilité et efficacité d'utilisation
- Design esthétique et minimaliste
- Aide à la reconnaissance et récupération d'erreurs
- Aide et documentation

---

Développé dans le cadre du cours IHM GPHY 2025-2026
