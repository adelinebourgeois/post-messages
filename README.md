## Description

Interface capable de lister et poster des messages.

## Architecture

Le composant **App** contient un composant **MessageList** et **MessageForm**.  
**MessageList** => affiche la liste des messages.  
**MessageForm** => formulaire pour poster un message.

## Outils

Ce projet est mis en place avec [Create React App](https://github.com/facebook/create-react-app).  
Il utilise **Redux**.  
L'interface est mise en forme avec la librairie [Material UI](https://material-ui.com/).  
Le linter est **ESLint**.  
Les tests utilisent **Jest** et **react-testing-library**.

### Installer les dépendances

```
npm install
```

### Lancer l'application en local

```
npm start | yarn start
```

### Lancer les tests

```
npm test | yarn test
```