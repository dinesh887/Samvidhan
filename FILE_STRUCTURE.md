# Samvidhan प्रोजेक्टची फाइल रचना

Samvidhan हा React, Vite आणि Tailwind CSS वापरून तयार केलेला इंग्रजी व मराठी शैक्षणिक वेबसाइट प्रोजेक्ट आहे.

```text
Samvidhan/
├── api/                         # Vercel serverless endpoints आणि SEO मजकूर
│   ├── llms-full.txt.js
│   ├── llms.txt.js
│   ├── llmsUtils.js
│   ├── robots.txt.js
│   └── sitemap.xml.js
├── public/                      # थेट वेबसाइटवर उपलब्ध होणाऱ्या स्थिर फाइल्स
│   ├── ads.txt
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── articles/             # संविधानातील कलमांची चित्रे
│       ├── books/                # पुस्तकांची चित्रे
│       └── mysamvidhan-logo.svg
├── dist-server/                  # SSR build व prerender नंतर तयार होणाऱ्या फाइल्स
│   ├── entry-server.js           # तयार केलेला server-side rendering bundle
│   ├── ads.txt
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                   # build मध्ये कॉपी केलेली images
│       ├── articles/
│       ├── books/
│       └── mysamvidhan-logo.svg
├── scripts/
│   └── prerender.mjs             # तयार पानांचे prerendering
├── src/
│   ├── components/               # पुन्हा वापरता येणारे UI घटक
│   ├── context/                  # भाषा, थीम, लॉगिन आणि bookmarks state
│   ├── data/                     # लेख, प्रश्नमंजुषा, योजना व इतर साइट मजकूर
│   ├── pages/                    # वेबसाइटची स्वतंत्र पृष्ठे
│   ├── services/                 # payment सारख्या बाह्य सेवा
│   ├── utils/                    # search आणि SEO सहाय्यक functions
│   ├── App.jsx                   # मुख्य routing आणि app layout
│   ├── entry-server.jsx          # server-side rendering entry
│   ├── index.css                 # जागतिक styles
│   └── main.jsx                  # browser entry point
├── .env.example                 # आवश्यक environment variables चे उदाहरण
├── index.html                   # वेबसाइटचे HTML entry आणि metadata
├── package.json                 # dependencies आणि npm scripts
├── package-lock.json            # dependencies ची लॉक केलेली आवृत्ती
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── vercel.json                  # Vercel deployment configuration
├── vite.config.js                # Vite आणि React configuration
└── README.md                    # प्रोजेक्टची ओळख व सुरुवात करण्याच्या सूचना
```

## `src/` मधील महत्त्वाचे भाग

- `components/` — Navbar, Footer, cards, search, FAQ, जाहिरात आणि इतर UI घटक.
- `context/` — `AuthContext`, `BookmarkContext`, `LanguageContext` आणि `ThemeContext`.
- `data/` — `articles.js`, `currentAffairs.js`, `quizData.js`, `notes.js`, `plans.js` तसेच कायदेशीर आणि SEO मजकूर.
- `pages/` — Home, Articles, Current Affairs, Quiz, Notes, Premium आणि इतर पृष्ठे.
- `services/` — payment प्रक्रिया हाताळणारा `paymentService.js`.
- `utils/` — `searchArticles.js` आणि `seoUtils.js` सारखी सहाय्यक functions.

## सामान्य commands

```bash
npm install       # dependencies install करा
npm run dev       # development server सुरू करा
npm run build     # production build आणि prerender तयार करा
npm run preview   # production build स्थानिकरीत्या पहा
```

`dist/` आणि `dist-server/` या build दरम्यान तयार होणाऱ्या directories आहेत. `node_modules/` मध्ये install केलेल्या dependencies असतात. या directories source code नाहीत.
