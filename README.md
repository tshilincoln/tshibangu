# 🚀 Portfolio Tshibangu Mukendi Abraham

Portfolio personnel moderne construit avec Next.js 16, React 19, Tailwind CSS 4 et TypeScript.

## ✨ Fonctionnalités

- ✅ **Design moderne et responsive** avec Tailwind CSS 4
- ✅ **Animations fluides** avec Framer Motion
- ✅ **Mode sombre/clair** avec système de thème personnalisé
- ✅ **Formulaire de contact** avec EmailJS
- ✅ **Blog intégré** avec système de routing dynamique
- ✅ **Optimisation des images** avec Next.js Image
- ✅ **Performance optimale** avec Next.js 16 et Turbopack
- ✅ **TypeScript** pour une meilleure qualité de code

## 🛠️ Technologies utilisées

- **Framework:** Next.js 16.0.1
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Emails:** EmailJS
- **Icons:** React Icons
- **Language:** TypeScript 5

## 📦 Installation

1. **Cloner le projet**

```bash
git clone https://github.com/tonprofil/tshibangu-portfolio.git
cd tshibangu-portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer les variables d'environnement**

```bash
# Copier le fichier .env.example vers .env.local
cp .env.example .env.local
```

Ensuite, remplir les variables dans `.env.local` :

- Créer un compte sur [EmailJS](https://www.emailjs.com/)
- Obtenir vos credentials (Service ID, Template ID, Public Key)
- Les ajouter dans `.env.local`

4. **Lancer le serveur de développement**

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📂 Structure du projet

```
tshibangu/
├── public/
│   ├── assets/
│   │   ├── og/              # Images Open Graph
│   │   └── projects/        # Images des projets
│   └── icons/               # Icônes et favicons
├── src/
│   ├── app/
│   │   ├── blog/            # Pages du blog
│   │   ├── contact/         # Page de contact
│   │   ├── projects/        # Pages des projets
│   │   ├── globals.css      # Styles globaux
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── about/           # Section À propos
│   │   ├── blog/            # Composants du blog
│   │   ├── contact/         # Formulaire de contact
│   │   ├── hero/            # Section Hero
│   │   ├── menu/            # Menu de navigation
│   │   ├── projects/        # Cartes de projets
│   │   ├── skills/          # Section Compétences
│   │   ├── theme/           # Bouton de thème
│   │   └── Footer.tsx       # Footer
│   ├── context/
│   │   └── ThemeContext.tsx # Context du thème
│   ├── data/
│   │   ├── articles.ts      # Données des articles
│   │   ├── projects.ts      # Données des projets
│   │   └── skills.ts        # Données des compétences
│   └── utils/
│       └── metadata.ts      # Métadonnées SEO
├── .env.local               # Variables d'environnement
├── .env.example             # Exemple de variables
└── package.json
```

## 🚀 Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer la version de production
npm run start    # Lancer le serveur de production
npm run lint     # Vérifier le code avec ESLint
```

## 📝 Personnalisation

### Modifier les informations personnelles

- **Profil:** Modifier `src/components/hero/Hero.tsx`
- **Compétences:** Éditer `src/data/skills.ts`
- **Projets:** Éditer `src/data/projects.ts`
- **Articles:** Éditer `src/data/articles.ts`

### Ajouter des projets

Ajouter un nouveau projet dans `src/data/projects.ts` :

```typescript
{
	id: "mon-projet",
	title: "Mon Projet",
	description: "Description du projet",
	image: "/assets/projects/mon-projet.jpg",
	category: "web",
	tags: ["React", "Next.js"],
	github: "https://github.com/...",
	demo: "https://demo.com"
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Déployer le dossier .next
```

## 📧 Contact

- **Email:** tshiabraham@gmail.com
- **Téléphone:** +243 854 309 793
- **Localisation:** Mbuji-Mayi, RDC
- **GitHub:** [tonprofil](https://github.com/tonprofil)
- **LinkedIn:** [tshibanguabraham](https://linkedin.com/in/tshibanguabraham)

## 📄 Licence

© 2025 Tshibangu Mukendi Abraham. Tous droits réservés.

---

**Made with ❤️ in Mbuji-Mayi, RDC**
