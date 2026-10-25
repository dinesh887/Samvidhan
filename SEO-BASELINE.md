# Technical SEO and Schema Baseline

**Captured:** 25 October 2026, before changes for the technical SEO task.  
**Source inspection:** React/Vite code, route configuration, prerendering script, API handlers, and existing public files.

## Existing implementation

- `PageMeta.jsx` updates title, description, canonical, robots, basic Open Graph, and basic Twitter tags in a client-side effect.
- `SchemaJsonLd.jsx` builds an Organization, WebSite, WebPage, BreadcrumbList, Article, NewsArticle, and FAQPage graph in a client-side effect.
- `Breadcrumbs.jsx` renders visible localized breadcrumbs, but the JSON-LD hierarchy is separately implemented in `SchemaJsonLd.jsx`.
- Article detail pages have additional inline Article and BreadcrumbList JSON-LD. Their breadcrumb label uses generic “Article N”/“कलम N” instead of the visible article title, and overlaps the shared schema graph.
- The prerender script writes page titles, descriptions, canonical, robots, OG, and Twitter metadata, then inserts server-rendered markup. It does not insert the schema graph or OG image tags, and its metadata is English-only. Client effects do not execute during server rendering.
- Article schema has no `datePublished`; `dateModified` is emitted only from an optional `lastVerified` field. It has an image, author/publisher identity, keywords, and related links, but author identity is asserted as the site organization without visible author attribution.
- Every Current Affairs detail is currently typed `NewsArticle`, and its `dateModified` is set equal to its publication date, irrespective of the item's verified/source status.
- The homepage graph describes the site as an Organization and emits a SearchAction. No business address or social profiles are present in the schema, nor should they be invented.
- Basic OG and Twitter title/description are present, but OG image, Twitter image, locale, and language alternates were not found.

## Technical routes and files

- Canonical origin in site configuration: `https://www.mysamvidhan.in`.
- Static `public/robots.txt` permits crawl and blocks dashboard, progress, bookmarks, premium quiz, and `/api/`; it advertises `/sitemap.xml`.
- Sitemap generation exists in API and Vite middleware. The API sitemap stamps every URL with the request-time date, not a content-derived modification date. It includes both `/privacy` and `/privacy-policy`; Current Affairs paths are included by the API but omitted from the Vite middleware-generated sitemap.
- Prerendering emits routes based on indexable `seoRoutes` and all article/current-affairs records; it does not emit a prerendered 404 route.
- `/privacy` and `/privacy-policy` are both indexable aliases with identical content and self-canonical route rendering. This creates duplicate-content/canonical inconsistency unless both are intentionally distinct.
- Search query variants use noindex in the article page component, but prerendered HTML is only generated for the clean `/articles` path. Unknown paths use the app fallback and are not statically prerendered.
- `/llms.txt` and `/llms-full.txt` are served by API/Vite handlers. The full LLM document lists Article summaries. The short LLM document claims Schedules coverage even though no dedicated route/content was found in the application audit.
- The HTML template has `lang="en"`; language switching is client-side and no alternate-language URL/hreflang scheme exists.
- No test script is configured in `package.json`. The previously observed production build prerendered 45 routes and had a large-chunk warning; this baseline run did not modify files.

## Conflicts and risk items to resolve

1. Duplicate Article BreadcrumbList JSON-LD (inline page data and global graph) and differing crumb labels.
2. Structured data absent from prerendered HTML for global pages; client-only effects cannot provide server-visible schema.
3. Current Affairs `dateModified` is asserted without an actual modification timestamp; NewsArticle classification is not justified for all records.
4. Indexable privacy URL alias has duplicate content and self-canonicalization.
5. Dynamic API sitemap uses fabricated request-time lastmod; local Vite sitemap omits Current Affairs detail routes.
6. Page-specific metadata and breadcrumb structured data are not fully consistent across SSR and client rendering.
7. OG/Twitter image metadata is absent.
8. Language is fixed to English in prerendered HTML. Since translations use the same URL and client-side choice, adding hreflang alternates would be misleading without language-specific canonical URLs.
9. Existing generated LLM text claims Schedules coverage that is not represented by an actual route.

This is a code-level baseline, not a Google Rich Results Test, Search Console, or live production crawl result.
