# Samvidhan — Understand the Constitution of India, Simply

A bilingual (English / Marathi) educational React website for exploring the
Constitution of India — built with React, Vite, Tailwind CSS, and React Router.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Important content note

This project ships with a small set of **sample** Articles, Amendments, and
Fundamental Duties records (see `src/data/`). Each `officialText` field is
explicitly marked `verified: false` and contains a placeholder string. Before
publishing, replace these placeholders with verified text from an
authoritative source (e.g. the Ministry of Law & Justice's Constitution of
India publication, india.gov.in, or legislative.gov.in) and update the
`source` and `lastVerified` fields on each record.

The `simpleExplanation`, `verySimple`, and `example` fields are original
educational content — not legal text — and are labelled as such in the UI.
The site includes a standing disclaimer that it does not provide legal advice.

## Adding more Articles

Add a new object to the `articles` array in `src/data/articles.js` following
the existing shape (id, title, category, officialText, simpleExplanation,
verySimple, example, keywords, relatedIds, source). No other code changes are
required — search, filtering, related-articles, and bookmarking all read from
this array automatically.

## Project structure

```
src/
  components/   Navbar, Footer, Hero, SearchBar, ArticleCard, CategoryCard,
                QuizCard, BookmarkButton, LanguageToggle, ThemeToggle,
                ChakraMark, DynamicIcon, ScrollToTop
  pages/        Home, Articles, ArticleDetails, FundamentalRights,
                FundamentalDuties, DirectivePrinciples, Amendments, Quiz,
                Bookmarks, About, NotFound
  context/      LanguageContext, ThemeContext, BookmarkContext
  data/         articles.js, categories.js, rights.js, duties.js,
                directivePrinciples.js, amendments.js, quizData.js, facts.js
  utils/        searchArticles.js
```

## Features

- English / Marathi language toggle (persisted to localStorage)
- Light / dark mode (persisted to localStorage)
- Article search (number, title, keywords, category) with category filters
  and ascending/descending sort
- Three-level explanation system per Article: Official Text → Simple
  Explanation → Very Simple, plus a real-life example
- Bookmark / save Articles via localStorage, with a dedicated Saved page
- Interactive scored quiz with progress bar and retry
- Date-rotating "Did You Know?" fact on the homepage
- Fully responsive, keyboard-accessible, dark-mode-aware
