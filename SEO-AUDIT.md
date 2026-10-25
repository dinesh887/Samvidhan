# Technical SEO, Schema, and AdSense Audit

## Scope and baseline

This audit reviewed the React/Vite route and metadata configuration, JSON-LD generation, visible breadcrumbs, article and Current Affairs records, prerendering, sitemap and robots handlers, `llms.txt` output, and Vercel routing. The pre-change findings are recorded in [SEO-BASELINE.md](./SEO-BASELINE.md).

The audit covered all 44 prerendered route outputs:

- Homepage: `/`
- Listings: `/articles`, `/current-affairs`
- Constitution learning pages: `/fundamental-rights`, `/fundamental-duties`, `/directive-principles`, `/amendments`, `/learn`, `/exam-preparation`
- Interactive and help pages: `/quiz`, `/faq`
- Informational pages: `/about`, `/contact`, `/privacy`, `/privacy-policy`, `/terms`, `/disclaimer`
- All 21 existing article details: `/article/:id`
- All 6 existing Current Affairs details: `/current-affairs/:slug`

The wider route review also included client-only utility/product pages (`/dashboard`, `/progress`, `/premium-quiz`, `/notes`, `/bookmarks`, `/premium`), article search/filter query states, and the unknown-route handler. Parts and Schedules do not have dedicated routes or content sets.

## Changes made

- Added shared metadata and structured-data utilities and used them in client navigation and prerendering, so page-specific metadata and JSON-LD are present in generated HTML as well as after client-side route changes.
- Localized page titles, descriptions, breadcrumb labels, `html lang`, and schema language to the active English/Marathi selection. No language-specific URL or `hreflang` alternate was introduced because both languages use the same URL.
- Added canonical, robots, Open Graph, Twitter card, image, and image-alt metadata. Article pages use existing article images; other routes use the existing logo image.
- Unified visible and structured breadcrumb hierarchy. Article pages no longer emit a second inline `Article`/`BreadcrumbList` block.
- Removed unsupported article-schema author identity and unsubstantiated `dateModified` values. Current Affairs pages use `Article` rather than asserting that every record qualifies as a `NewsArticle`; date fields are included only when present in the source record.
- Set `/privacy-policy` as a non-indexable alias while retaining the route, and excluded non-indexable Premium and utility routes from the sitemap. Added page-specific noindex metadata for client-only utility routes.
- Corrected the article-list metadata to disclose that the content is selected.
- Removed request-time fabricated sitemap `lastmod` values, included Current Affairs details in local sitemap generation, and excluded the non-indexable privacy alias.
- Updated generated LLM content to include Current Affairs and removed the unsupported Schedules-coverage claim.
- Replaced Vercel's broad SPA catch-all rewrite with explicit rewrites for known client-only routes, allowing prerendered routes to remain file-backed and unknown paths to reach host 404 handling. This hosting behavior has not been verified on a deployed Vercel environment.

No article, Current Affairs, or other content-source records were changed as part of this technical SEO task. No backend APIs, database configuration, authentication, AdSense configuration, publisher ID, or `ads.txt` were changed.

## Structured data emitted

All structured data is emitted as one `samvidhan-jsonld` JSON-LD graph per eligible page:

- Homepage: `Organization`, `WebSite`, `WebPage`
- Article details: `Article` with `BreadcrumbList`
- Current Affairs details: `Article` with `BreadcrumbList`
- Article and Current Affairs listings: `CollectionPage`, `ItemList`, and `BreadcrumbList`
- About and Contact: `AboutPage` or `ContactPage` with `BreadcrumbList`
- FAQ: `FAQPage` only on `/faq`, using visible page questions and answers
- Other eligible pages: `WebPage` and the matching visible `BreadcrumbList`
- The homepage has no redundant Home breadcrumb. Non-indexable and filtered search states do not receive structured data.

No author, credentials, publication date, modification date, organization address, social account, official affiliation, reviews, or ratings were invented. FAQ markup is syntactically present but does not imply eligibility for a Google rich result.

## Technical checks performed

- `npm run build`: **passed**; Vite built client and SSR bundles and prerendered 44 routes.
- Generated-HTML validation: **44/44 pages passed all 9 checks** for a unique title, canonical, social image tags, valid JSON-LD, expected schema/breadcrumb counts, and rendered page content.
- Representative schema output checked: homepage, article list, Article detail, Current Affairs detail, FAQ, About, and Contact.
- Sitemap handler check: **43 URLs**, zero duplicates, includes Current Affairs details, excludes `/privacy-policy`, and contains no `lastmod`.
- LLM output check: includes Current Affairs and does not claim Schedules coverage.
- Prior local browser checks found language switching updates the document language, metadata, and breadcrumbs; filtered article searches are noindex and suppress schema.
- There is no configured project test script. The test runner found no test files.
- The build reports a 1,496.66 kB minified JavaScript bundle (345.70 kB gzip), above Vite's 500 kB warning threshold. This is a performance concern, not changed in this SEO task.

## Outstanding validation and concerns

### Manual technical validation

- Run Google's [Rich Results Test](https://search.google.com/test/rich-results) on representative live URLs (homepage, Article detail, Current Affairs detail, FAQ, About, and Contact). This was not run in this audit.
- After an approved deployment, use Search Console URL Inspection to verify Google's rendered HTML, canonical selection, indexing, and schema. No deployment or Search Console inspection was performed.
- Verify unknown-route HTTP status and each explicit utility-route rewrite on Vercel. Local Vite preview previously returned HTTP 200 for an unknown route; Vite preview does not enforce `vercel.json`, so the updated Vercel behavior remains unconfirmed.
- Test representative routes at desktop/mobile sizes and run Lighthouse. No new Lighthouse measurement or cross-device audit was run for this SEO task.
- The default social image is the existing SVG logo. Some social crawlers may not render SVG previews consistently; there is no dedicated raster share image in the existing assets.
- Sitemap and robots behavior were checked locally; production HTTP responses were not independently validated.

### Content quality and AdSense

Technical metadata and schema do not resolve an AdSense “Low value content” decision and do not guarantee approval. The existing [CONTENT-AUDIT.md](./CONTENT-AUDIT.md) records content and product concerns from the earlier content review. Editorial review remains recommended for:

1. All 21 Article records: verify quoted text, legal interpretations, Marathi terminology, and referenced judgments against authoritative primary sources.
2. All 6 Current Affairs records: verify dates, claims, source links, and continued relevance. Some records are explicitly marked unverified; the CEC appointment-law item needs a clearer substantiated account of the split-verdict outcome.
3. All 6 amendment summaries: verify amendment numbers, dates, titles, and legal effects against the official amendment acts.
4. Added Rights, Duties, and Directive Principles explanations and translations: cross-check against official Constitution text.
5. Privacy and Terms: have a qualified reviewer check actual data practices, third-party consent/retention, and applicable legal requirements.
6. Utility/product pages: Dashboard and Progress display fixed/demo values; Premium has no real payment integration; Premium Quiz currently presents a standard quiz question; Notes are brief; Exam Preparation advertises resources not separately implemented on those pages.
7. Parts and Schedules: dedicated resources do not exist and require editorial approval before being added.

No new constitutional or legal claims were added or independently verified during this technical SEO work. The previous content audit lists its consulted sources and caveats; do not treat its constitutional summaries as verified until the editorial cross-check is complete.

## Preservation

Public route patterns and article slugs are unchanged. The `/privacy-policy` route remains available but is noindex; `/privacy` remains the indexable privacy page. Search, quizzes, bookmarks, filters, language switching, prerendering, existing AdSense configuration, and backend behavior were not intentionally changed. No production deployment was performed.
