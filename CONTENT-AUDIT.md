# MySamvidhan Content Audit

**Audit date:** 25 October 2026  
**Scope:** Public-facing educational content, informational pages, discoverability, and the visible claims of utility pages.

## Pages and route groups audited

- Homepage: `/`
- Article index and search/filter states: `/articles`, including query and category filters
- Article detail pages: `/article/:id` (21 existing records)
- Current Affairs listing and detail pages: `/current-affairs`, `/current-affairs/:slug` (6 existing records)
- Constitution learning pages: `/fundamental-rights`, `/fundamental-duties`, `/directive-principles`, `/amendments`
- Interactive and saved-resource pages: `/quiz`, `/premium-quiz`, `/bookmarks`
- Informational pages: `/about`, `/contact`, `/privacy`, `/privacy-policy`, `/terms`, `/disclaimer`, `/faq`
- Learning and product pages: `/learn`, `/exam-preparation`, `/notes`, `/premium`, `/dashboard`, `/progress`
- Unknown-route handling: `*`

The existing app has no dedicated Parts or Schedules routes or content sets. No new routes were created for them.

## Changes made

- **Article discovery:** Reconciled the article filter categories with the `categoryKey` values present in the existing article data. The old Union Government, State Government, and Judiciary filters could return no records. The updated filters use existing categories, and a browser smoke check confirmed that all ten displayed category filters return matching article links.
- **Accurate category labels:** Replaced the unsupported “landmark Supreme Court judgments”/“Important Cases” destination with the existing Current Affairs section. Category descriptions now describe the available constitutional provisions rather than unimplemented case-study content.
- **Fundamental Rights:** Fixed the `21a` link to the existing `21A` article, connected the existing Articles 23 and 24 to the exploitation section, clarified that the page is a selected study guide, and added a link to the Legislative Department’s official documents listing.
- **Fundamental Duties:** Added bilingual context identifying Article 51A and Part IV-A, noting that the page is a simplified study aid, and pointing to the official Constitution documents listing.
- **Directive Principles:** Added a bilingual, explicitly non-exhaustive guide to selected Articles 38, 39A, 40, and 48A and linked the official documents listing.
- **Amendments:** Clarified that the six displayed amendment entries are a selection and that their summaries are not authoritative legal text. Added a link to the official documents listing; existing records were not marked verified.
- **Articles and search:** Clarified that the index contains selected simplified explanations rather than the full Constitution. Empty search results now offer working links to all available article explanations and the Fundamental Rights guide. Existing filtered URLs and no-index behavior were not changed.
- **Homepage and quiz:** Added a short bilingual learning path using existing routes. The quiz page now explains its one-question-at-a-time format and links to the article explanations; the quiz engine and question data were not changed.
- **Privacy policy:** Replaced generic statements with descriptions aligned to the inspected implementation: Google Analytics and AdSense scripts, browser-local language/bookmark storage, email contact, third-party controls, and links to Google’s relevant privacy/advertising controls.
- **Terms:** Added bilingual wording that describes browser-local language/bookmark preferences and the current quiz-session behavior.

## Pages that did not need generic expansion

- The 21 Article detail pages already render substantial, page-specific explanations, examples, and related learning material. They were not expanded mechanically.
- About, Contact, FAQ, and Disclaimer already serve their stated purposes. The Contact page has a working email link; no website contact form was found.
- Current Affairs entries were not expanded because their claims and dates require source verification first.

## Sources consulted

- [Legislative Department, Ministry of Law & Justice — Constitution of India documents](https://www.legislative.gov.in/documents). The public listing exposed the Constitution of India and Constitution (Amendment) Acts collections. Individual document pages could not be retrieved for a direct text comparison in this environment, so the constitutional additions in this audit still require editorial cross-check against the official text before being treated as verified.
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Google information about advertising technologies](https://policies.google.com/technologies/ads)
- [Google Ads Settings](https://adssettings.google.com/)
- [Google Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout)
- Local implementation inspected for the privacy-policy update: `index.html` third-party script declarations and the language/bookmark browser-storage contexts.

No Supreme Court judgment or current-affairs claim was independently verified during this audit.

## Human editorial review still required

1. **All six Current Affairs records:** Re-check the dates, claims, source URLs, and whether each item remains current. Several records are explicitly marked `verified: false`. In particular, the CEC appointment-law item’s “split verdict explained” headline is not substantiated with a clear account of the split outcome in the visible article body.
2. **All six amendment summaries:** The data identifies these as sample/unverified entries. Check each number, year, title, and legal effect against the corresponding official Amendment Act before presenting them as verified.
3. **All 21 constitutional Article records:** Check verbatim text, interpretation, Marathi terminology, and any judgment/reference claims against authoritative primary sources. Their existing depth is not itself evidence of legal accuracy.
4. **New constitutional context on the Rights, Duties, and Directive Principles pages:** The official documents index is linked, but the individual official text could not be retrieved here. Cross-check the summaries and Marathi wording before treating them as final legal explanations.
5. **Privacy and Terms:** The text was aligned to the code inspected, but it should be reviewed by a qualified privacy/legal reviewer for the site’s jurisdictions and actual third-party consent and retention practices.
6. **Parts and Schedules:** These topics have no dedicated route or content set. Creating complete resources requires editorial/content approval; no placeholder pages were added.
7. **Utility/product surfaces:** Dashboard and Progress display fixed/demo values; Premium plan selection is not connected to a real payment service; Premium Quiz currently displays the first standard quiz question; Notes are brief descriptions rather than a developed notes library; and Exam Preparation advertises resources that are not separately implemented on these pages. Their underlying product behavior was not changed in this content audit.
8. **Article index metadata:** The visible page now discloses that it contains selected Articles, while its existing SEO title/description still imply broader coverage. SEO metadata was intentionally left unchanged; resolve this mismatch only with separate SEO approval.

## Preservation and validation

- No route definitions, slugs, canonical URLs, backend APIs, database data, authentication/payment code, article or Current Affairs source records, language-switching logic, SEO generation, structured-data generation, prerendering, AdSense scripts, or `ads.txt` were changed.
- `npm run build` succeeded and prerendered 45 public routes. Vite still reports a minified JavaScript bundle of 1,493.67 kB, above its 500 kB warning threshold.
- Browser smoke checks confirmed that all ten article category filters have results, the English empty-search state offers navigation, the Marathi Directive Principles page renders the source link, and the sampled 390 px layout has no horizontal overflow.
- The package has no test or Lighthouse script. A full Lighthouse comparison was not run; no performance improvement or AdSense approval is claimed.
- No production deployment was performed.
