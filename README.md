# Boilerpla.te

## Description

Boilerpla.te est une application web moderne construite avec Next.js, offrant une authentification sécurisée et une expérience utilisateur fluide. Ce projet sert de point de départ robuste pour développer des applications web complexes avec des fonctionnalités d'authentification intégrées.

## Fonctionnalités

- Authentification utilisateur avec support pour Google, GitHub et Instagram
- Routes protégées avec middleware d'authentification

## Librairies Principales

- [React](https://reactjs.org/) - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- [Next.js](https://nextjs.org/) - Framework React pour le développement d'applications web
- [NextAuth.js](https://next-auth.js.org/) - Solution d'authentification pour Next.js
- [Prisma](https://www.prisma.io/) - ORM pour Node.js et TypeScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.org/) - Superset typé de JavaScript

## Dépendances Additionnelles

- [lucide-react](https://lucide.dev/) - Bibliothèque d'icônes pour React
- [next-themes](https://github.com/pacocoursey/next-themes) - Gestion des thèmes pour Next.js
- [shadcn/ui](https://ui.shadcn.com/) - Collection de composants React réutilisables et personnalisables
- [zod](https://github.com/colinhacks/zod) - Bibliothèque de validation de schéma TypeScript-first
- [react-hook-form](https://react-hook-form.com/) - Bibliothèque performante pour la gestion des formulaires en React

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/boilerpla.te.git
   cd boilerpla.te
   ```

2. Installez les dépendances :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires pour l'authentification.

   - DATABASE_URL
   - AUTH_SECRET

4. Lancez le serveur de développement :

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir l'application.


6. Configurez les routes protégées :
   Assurez-vous d'ajouter vos routes privées dans le fichier `middleware.ts` pour qu'elles soient correctement protégées par l'authentification. Par exemple :

   ```typescript
   export const config = {
     matcher: ["/dashboard", "/profile", "/api/private"]
   }
   ```

   Cela garantira que seuls les utilisateurs authentifiés pourront accéder à ces routes.



## Structure du Projet

- `app/` - Contient les composants et les pages de l'application
- `components/` - Composants réutilisables
- `auth.ts` - Configuration de l'authentification
- `middleware.ts` - Middleware pour la protection des routes

## Déploiement

Cette application peut être facilement déployée sur la plateforme Vercel :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/votre-nom-utilisateur/boilerpla.te)

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
