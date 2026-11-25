# MySamvidhan

An English and Marathi educational website for exploring the Constitution of India through Articles, Fundamental Rights, Fundamental Duties, Directive Principles, Amendments, current affairs, FAQs, quizzes and study guides.

## Development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The build uses Vite and writes the static website to `dist/`. It also generates `public/sitemap.xml` from the supported local content routes before building. The project uses React and Vite; the deployed site does not depend on the separate server-rendered application files retained from the former `main` branch.

## Deployment

The GitHub `main` branch is intended for the Vercel project. Vercel should use the `npm run build` command and the `dist` output directory. Public content is bilingual and the language selector stores the selected language in the browser.

## Content and sources

The site is for educational information and is not legal advice. Article and current-affairs explanations include sources where available. Review source links and verification dates before publishing updates.
