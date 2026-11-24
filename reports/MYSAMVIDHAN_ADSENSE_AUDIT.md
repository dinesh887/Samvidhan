# MySamvidhan AdSense Readiness Audit

**Audit date:** 24 November 2026  
**Live site reviewed:** [mysamvidhan.in](https://www.mysamvidhan.in/)  
**Workspace reviewed:** local React/Vite project in this repository  
**Scope:** read-only review. This audit creates reports only; no site code or production changes were made.

## Executive verdict

**Verdict: Not ready to apply yet. Internal readiness score: 58/100.**

The live website has a substantial base: 21 constitutional article explainers, 12 current-affairs explainers, English and Marathi switching, FAQ and legal pages, a working sitemap and robots file, and a matching AdSense publisher record in `ads.txt`. A 51-URL crawl (50 HTML page URLs plus sitemap) returned HTTP 200 for each crawled URL.

The main blocker is the live Article 14 page: it labels its content a “sample educational structure,” tells readers to verify it before relying on it, and then repeats much of the explanation in a second section. That visible placeholder and duplication undermine trust and originality on a central educational page. The production privacy policy also needs reconciliation with actual scripts and the workspace policy: production loads Google Analytics 4 and AdSense, while local privacy copy says analytics are not used. A second privacy URL duplicates the first with a separate self-canonical.

These are review findings, not a prediction of Google’s approval decision. Google says sites should provide unique, relevant content, useful navigation and a good user experience; it publishes no minimum word-count requirement in the readiness guidance. Word counts below are descriptive evidence, not pass/fail thresholds. [Google: Make sure your site's pages are ready for AdSense](https://support.google.com/adsense/answer/7299563?hl=en)

### Internal score breakdown

This is a transparent editorial/technical rubric for prioritization, not a Google score.

| Area | Score | Reason |
|---|---:|---|
| Originality and editorial finish | 10/20 | Broad useful coverage, but Article 14 has sample copy and repetition; review reusable boilerplate across the corpus. |
| Helpfulness and depth | 13/20 | Most article pages have structured explainers; several destination pages are deliberately concise and quiz scraping sees only its initial state. |
| Accuracy and sourcing | 8/15 | Article/current-affairs entries have sources in local data, but live factual claims were not exhaustively checked against primary law/orders; some live topic hubs lack direct citations. |
| Trust and transparency | 8/15 | About, Contact, Privacy, Terms and Disclaimer exist; publisher identity and contact operations are not independently verified; privacy implementation needs reconciliation. |
| Crawlability and technical SEO | 10/15 | Most discovered pages return 200 and have title/description; duplicate privacy canonicals, route gaps, sitemap divergence and SPA rendering need resolution. |
| UX and accessibility | 6/10 | Main navigation, headings, language toggle and quiz interface are present; no full keyboard/screen-reader/mobile audit was performed. |
| Ad implementation and policy readiness | 3/5 | Live AdSense loader and publisher ID are consistent with ads.txt. Account state, ad behavior and consent setup are unknown. |
| **Total** | **58/100** | **Not ready** |

## Coverage and method

- Crawled the live domain and reviewed 50 HTML pages plus the XML sitemap. All 51 crawl responses were HTTP 200.
- Scraped page titles, descriptions, robots directives, rendered main content, headings, paragraphs, images and links. Counts are in [the page inventory CSV](MYSAMVIDHAN_PAGE_CONTENT_INVENTORY.csv).
- Probed production routes directly. `/search`, `/preamble`, `/fundamental-rights/right-to-equality`, `/amendments/42nd-amendment-1976`, and `/terms-and-conditions` returned 404 in this review. The sampled page families are available at their live routes; the workspace contains additional routes not currently found live.
- Interactively checked English/Marathi switching on the home page, Article 14, a current-affairs story and Terms. Those sampled pages changed languages. This is not a complete translation or legal accuracy review of all pages.
- Inspected local route/data definitions, sitemap generator, robots and ads files, privacy/contact implementation, and source records. Local source counts: 21 articles, 12 current-affairs records, 6 Fundamental Rights entries, 6 amendment entries, 34 FAQs and 160 quiz questions across 8 topics. These are **workspace** counts and should not be confused with production page availability.
- Reviewed Google’s official AdSense readiness, program policies, required privacy disclosures and supported-language guidance. Marathi is an AdSense-supported language. [Google: Supported languages](https://support.google.com/adsense/answer/9727?hl=en)
- Did not use AdSense account access, Search Console, analytics dashboard, inbox access, Lighthouse/PageSpeed, a full WCAG/axe audit, or a constitutional-law expert review. No live ad delivery or account approval status is asserted.

### Measurement notes

Visible-word and character metrics in the CSV are approximate counts from Firecrawl’s rendered main-content extraction, with navigation/image alt and Markdown link syntax removed where possible. They can vary by extraction and dynamic state. Paragraph and heading counts are extracted blocks. In particular, the main-content extractor reports zero H1s for the article/current-affairs detail templates even though raw HTML checks on representative pages showed H1 elements. Treat those zeros as an extraction limitation and verify all rendered headings directly before making a sitewide claim. The quiz count represents the initial scrape state, not the total interactive quiz.

## Live page and content review

### Homepage and navigation

The home page has a clear educational purpose, a search entry point, popular article links and entry cards for core constitutional topics. It also presents both languages. Home search/list navigation should be verified against production: the separate `/search` route returned 404, even though the local project includes a SearchPage route. Do not publish search links to a missing route.

The live brand metadata and title use “Samvidhan”/“MySamvidhan” inconsistently across page titles and Open Graph metadata. The workspace brand is MySamvidhan, while several production pages title themselves “Samvidhan.” Normalize the public brand name in titles, site metadata and social previews.

### Constitutional articles

All 21 live article detail routes were discovered and returned 200. The listing aggregates article-card copy, so its extracted 4,880 words are not a standalone editorial-length measure. Individual article extracts range from 472 words (Article 24) to 2,642 (Article 22), with many detailed structured pages. These counts alone neither establish thin content nor prove usefulness.

**P0 — Article 14 requires editorial correction before applying.** The English and Marathi page include sample-structure language and a warning that the content must be verified, followed by a substantially repeated explanation. Remove placeholder language only after replacing it with reviewed, accurate editorial content; retain an appropriate source and legal-education context. Confirm both language versions after correction.

The workspace has source records for all 21 articles. Production pages should expose direct, relevant primary-source references, distinguish constitutional text from interpretation, and cite judgments when explaining judicially developed tests or doctrines. The Legislative Department’s Constitution of India page is a suitable starting point for official text: [Legislative Department: Constitution of India](https://legislative.gov.in/constitution-of-india/). The audit did not independently certify the accuracy of every article or translation.

### Current affairs

Twelve live story routes were crawled and returned 200. Extracted copy ranges from 344 to 1,036 words. Stories have structured sections and source attribution in the inspected pages; the CEC appointment story is the shortest sampled story and surfaced one news source. For legal/current affairs, provide direct links to the court order, statute, government notice or official data whenever available, along with publication/update dates and procedural status. A linked news report is useful context but should not substitute for the primary document when one exists.

Every dated claim, case status and Marathi translation needs editorial review. This review did not independently verify all 12 stories against the source documents. Update, correct or archive stale stories so that old developments do not read as current.

### Core topic hubs, quiz and FAQ

- **Fundamental Rights:** concise overview of six groups; no individual detail routes were found live. The workspace has six entries. Production probes found a representative detail route, `/fundamental-rights/right-to-equality`, returning 404.
- **Fundamental Duties:** concise overview covering all 11 duties; add citations to official text and mark plain-language commentary as interpretation.
- **Directive Principles:** concise guide and examples; link to the corresponding official constitutional provisions and identify selected examples.
- **Amendments:** six selected items with official amendment-PDF links and a statement that the selection is not exhaustive. The workspace has six amendment records, but no `.sources` field was found on those records. Direct links exist in the live overview; detail routes should be checked before advertising them as available. A representative local amendment route returned 404 live.
- **Quiz:** the live route works and the initial view exposes only one question to the scraper. The workspace bank contains 160 questions/8 topics. Validate scoring, explanations, accessibility and language parity through an interactive QA pass.
- **FAQ:** 34 answers in workspace and a substantial live FAQ page. Review legal answers for currency and link out to primary sources where a short answer could be misconstrued as legal advice.

Do not add text merely to satisfy an imagined word threshold. Expand only where it helps explain a topic, demonstrate original analysis or guide the reader.

### About, Contact and legal pages

- **About:** the live page contains mission/vision and project purpose, but the extracted copy does not name the publisher, maintainer or responsible organization. Add only truthful identity information so visitors can evaluate accountability.
- **Contact:** a public email address is visible. The crawl cannot establish that the mailbox is monitored or that messages receive a response. Confirm the address operationally.
- **Privacy:** production policy is present and says it uses Google Analytics and AdSense. Google requires privacy-policy disclosures about Google and other vendors’ advertising cookies, personalized advertising and available opt-outs. Compare the exact live policy against actual settings, vendors and consent behavior. [Google: Required content](https://support.google.com/adsense/answer/1348695?hl=en)
- **Terms and Disclaimer:** both are present and explain site use / educational limitations. Keep jurisdiction, operator/contact details and disclaimers consistent with actual services and review them professionally where needed.
- **Duplicate privacy routes:** both `/privacy` and `/privacy-policy` returned 200 and declared separate self-canonicals; the latter was marked `noindex, follow` in crawl metadata. Keep one public canonical URL, redirect or otherwise consolidate the other, and ensure sitemap/internal links all use the selected canonical.

## Technical SEO, ads.txt and crawlability

### Live production findings

- `https://www.mysamvidhan.in/robots.txt` returned 200. It allows general crawling, disallows `/dashboard`, `/progress`, `/bookmarks`, `/premium-quiz` and `/api/`, and references the sitemap. Confirm that excluding premium quiz is intended; it is linked from exam-preparation content.
- `https://www.mysamvidhan.in/sitemap.xml` returned 200 and lists 49 URLs. It includes `/privacy`, not the duplicate `/privacy-policy`. It does not expose several workspace routes such as preamble and individual rights/amendment pages. Ensure it lists only canonical, indexable pages that return 200.
- `https://www.mysamvidhan.in/ads.txt` returned 200 and contains `google.com, pub-9135851077311162, DIRECT, f08c47fec0942fa0`. The publisher ID matches the live AdSense script and the local `index.html` account meta value. This confirms the file’s visible record matches the configured ID; it does not verify account ownership, seller authorization beyond that record, account status, or ads.txt processing in AdSense.
- Live HTML loads Google Analytics 4 (`G-6B60XXVX8E`) and the AdSense script for `ca-pub-9135851077311162`. These are observed code integrations, not proof that analytics events/ad impressions are working.
- Live titles and descriptions were present on crawled pages. Some detail page H1 values were missed by the main-content extractor; verify with rendered-page inspection and Search Console URL Inspection.
- Live SPA content was available to the rendered crawl. Confirm Google can render important routes in Search Console; an HTTP 200 alone does not prove indexing.
- Workspace routes/configuration are ahead of production in several places. A representative route mismatch is documented above. The local generated sitemap has 62 URLs, versus 49 on production. Align the deployment, links, canonicals and sitemap to one actual published route set.
- The workspace’s internal link checker previously reported 140 declared links and no broken local routes. This is a source-level check, not an external-link check or a substitute for live crawl testing.
- A prior workspace build completed but reported a large JavaScript chunk (about 1.41 MB minified / 291 KB gzip). This is a local build observation and was not verified as the production bundle. Run Lighthouse/Core Web Vitals against production after deployment to measure actual performance; this audit did not assign performance scores.

### Google policy and account checks

Google’s program policies apply to publishers using AdSense code. Review the full current policies and keep monitoring them; this audit is not a legal or AdSense-account review. [Google: AdSense Program policies](https://support.google.com/adsense/answer/48182?hl=en)

Marathi is supported, so language selection itself is not an obstacle. The inspected language toggle changed sampled pages, but factual and linguistic review remains necessary across all pages. If serving personalized ads to users in the EEA, UK or Switzerland, check the current Google-certified CMP and IAB TCF requirements for the account and implementation. This audit did not inspect the ad-serving regions, consent configuration or account settings. [Google: Consent management requirements](https://support.google.com/adsense/answer/13554116?hl=en)

## Priority action summary

See [the separate action plan](MYSAMVIDHAN_ADSENSE_ACTION_PLAN.md) for owners, evidence and completion criteria.

1. **P0:** Replace Article 14’s sample warning and duplicated explanation with fact-checked original copy; review English and Marathi together.
2. **P1:** Make the production privacy policy accurately describe observed GA4, AdSense, cookies/personalization, vendors and opt-outs; reconcile the workspace copy before deploying.
3. **P1:** Consolidate duplicate privacy routes and repair/redirect intended public routes that return 404; regenerate sitemap from the actual production route list.
4. **P1:** Add and verify primary-source references across constitutional explainers and legal/current-affairs claims; prioritize all dated case/event claims.
5. **P1:** Publish accurate operator/contact details and confirm the contact inbox works.
6. **P2:** Test all routes in both languages, quiz behavior, keyboard/screen-reader basics, mobile layout, external links and Search Console rendering.
7. **P2:** Measure production performance and validate ads/consent using the actual account and region configuration.

## Limitations

This is a readiness audit, not a guarantee of AdSense approval or a legal opinion. Google reviews the complete site and account, and its policy/application outcome cannot be inferred from a crawl. No access was available to AdSense, Search Console, the GA dashboard, contact inbox or consent-management settings. Constitutional-law claims and all 12 news stories were not exhaustively fact-checked against primary documents; translation quality was sampled, not comprehensively assessed. Automated word, paragraph and heading extraction has the limitations above.
