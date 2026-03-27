# Projet IHM GPHY 2025-2026 - AgroVitrine

## Membres de l'équipe
- [Diop Serigne Mansour]
- [Ndour El Hadji Fallou]
- [Seckou Abdoulaye Maiga]

## Présentation du projet
Ce site vitrine présente une collection de produits agroalimentaires. L'architecture a été conçue pour être totalement générique : les composants font le rendu des données basées sur un schéma défini dans `src/data/schema.js`, permettant de changer de thème de collection sans modifier le code de structure.

## Fonctionnalités implémentées
* **Affichage dynamique** : Grille de produits avec recherche en temps réel.
* **CRUD complet** : Ajout et suppression d'éléments avec persistance via LocalStorage.
* **Ergonomie** : 
    * Validation de formulaire avec conservation des saisies en cas d'erreur.
    * Gestion de la navigation (si on rafraîchit la page produit, on reste dessus).
    * Interface responsive occupant tout l'espace écran.

## Comment lancer le projet
1.  Extraire l'archive.
2.  Lancer `npm install` dans le terminal.
3.  Lancer `npm run dev`.
4.  Ouvrir le lien local (ex: http://localhost:5173).

## Architecture
* `/src/components` : Composants réutilisables.
* `/src/pages` : Vues principales (Catalogue, Création, Détails).
* `/src/data` : Fichiers JSON et schémas de données.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
