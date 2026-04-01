# Banque de Service

Site vitrine Angular pour `Banque de Service`, avec page d'accueil, liste des services, page detail, theme visuel personnalise, logo de marque et loader de navigation.

## Stack

- Angular 20
- TypeScript
- Angular Router
- Bootstrap / Bootstrap Icons

## Lancer le projet

Installer les dependances :

```bash
npm install
```

Demarrer le serveur de developpement :

```bash
npm start
```

Application accessible sur :

```text
http://localhost:4200/
```

## Build

Generer une version de production :

```bash
npm run build
```

Les fichiers generes sont places dans :

```text
dist/banque-de-service
```

## Scripts utiles

```bash
npm start
npm run build
npm run watch
npm test
```

## Structure du projet

```text
src/
  app/
    data/                Donnees des services
    layout/              Header, footer et shell principal
    pages/
      home/              Page d'accueil
      event-listing/     Liste des services
      event-detail/      Detail d'un service
  styles.css             Surcharges globales et theme

public/
  images/                Images du site
  logo.png               Logo principal
  logo.jpg               Variante logo
  loader.mp4             Video du loader
```

## Personnalisation rapide

- Modifier les contenus des services dans [src/app/data/services.ts](src/app/data/services.ts)
- Modifier le theme global dans [src/styles.css](src/styles.css)
- Modifier le header et le footer dans [src/app/layout/site-shell.component.html](src/app/layout/site-shell.component.html)

## Notes

- Les zones d'intervention sont actuellement configurees sur `Yaounde`
- Le numero de contact configure est `+237 96918906`
- Le site utilise un loader global pendant les changements de page
