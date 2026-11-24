# MySamvidhan AdSense Readiness Action Plan

**Prepared:** 24 November 2026  
**Scope:** recommendations only; no site implementation changes made.

Use [the audit](MYSAMVIDHAN_ADSENSE_AUDIT.md) for evidence and limitations. The inventory CSV lists all 50 crawled HTML routes and page-specific observations.

## P0 — Resolve before applying

### 1. Correct Article 14 placeholder and duplicate copy

**Evidence:** Live `/article/14` contains “This content is a sample educational structure. Please verify all constitutional text against an authoritative source before relying on it.” The surrounding explanation is repeated in another section. The same warning was observed in Marathi.

**Actions**
- Have a constitutional-content editor verify the official text and explanation.
- Replace placeholder language with original, reviewed explanation; remove repeated copy.
- Keep clear separation between official text, plain-language interpretation and examples.
- Review both EN and MR versions for meaning, not just fluency.
- Confirm citations open to authoritative text and applicable judgments.

**Done when:** No sample/warning placeholder remains; no substantial accidental duplication remains; English and Marathi content have named editorial sign-off and working source links.

## P1 — Resolve before the application review

### 2. Reconcile privacy disclosures with live behavior

**Evidence:** Production HTML loads GA4 `G-6B60XXVX8E` and AdSense `ca-pub-9135851077311162`. Live Privacy says Analytics and AdSense are used. Workspace Privacy says no analytics. Google requires its advertising cookies, personalization and opt-out disclosures; the correct notice depends on actual settings and vendors.

**Actions**
- Decide whether GA4 remains in production and make the deployed policy match.
- Document the actual Google/third-party ad vendors, cookie behavior, personalization and opt-out instructions.
- Check consent-management behavior for regions/account settings where consent is required.
- Reconcile live and workspace policy copy so the next deploy does not reintroduce a mismatch.

**Done when:** Privacy disclosures accurately match the published scripts, account/ad settings, regions served and consent flow; test language toggles preserve the notice in both languages.

### 3. Consolidate policy URL and repair route/deployment mismatch

**Evidence:** Live `/privacy` and `/privacy-policy` both return 200 with distinct self-canonicals; `/privacy-policy` is also `noindex, follow`. Live sitemap contains `/privacy`. Live `/terms` works while local has a `/terms-and-conditions` canonical/route expectation that returned 404 live. Representative missing production paths include `/search`, `/preamble`, `/fundamental-rights/right-to-equality` and `/amendments/42nd-amendment-1976`.

**Actions**
- Select the canonical URL for each legal page and redirect/alias duplicates to that URL.
- Compare live routes with the routes intended to be public in the current workspace.
- Add redirects or deploy the intended routes; remove links to routes that are not meant to exist.
- Generate the production sitemap from the deployed canonical route list; exclude noindex/404 URLs.
- Check internal links and canonicals after deploy.

**Done when:** Every sitemap URL returns 200, has one matching canonical, is indexable as intended, and is reachable through a working internal link; obsolete URLs redirect or return a deliberate status.

### 4. Add primary-source citations and editorial review

**Evidence:** Local data has source arrays for all 21 articles and 12 current-affairs records, but some live hub pages have no direct primary-source links; local amendment records have no `.sources` field. The audit did not validate every claim.

**Actions**
- Add official constitutional provisions and amendment act links to each related explainer.
- For court stories, link the judgment/order or official court record, identify the court/procedural status and show publication/update dates.
- For government notifications, link the issuing department document.
- Review translations and factual changes through bilingual editorial sign-off.
- Create an update/review date process for changing law and current-affairs pages.

**Done when:** Each legal/factual article has links appropriate to its claims, those links work, and a reviewer has confirmed the summary against the source.

### 5. Verify publisher identity and contact operation

**Evidence:** About page explains the mission but does not identify a named operator in extracted content; Contact displays an email address but mailbox ownership/monitoring was not tested.

**Actions**
- Add accurate publisher/maintainer identity or organizational details that the operator is willing to make public.
- Confirm the contact address is controlled, monitored and presented consistently in About/Contact/legal pages.
- Send a controlled test message and confirm receipt; do not claim response service levels unless staffed.

**Done when:** Visitors can identify who operates the site and use a tested contact channel.

## P2 — Complete before or during final QA

### 6. Validate the full public page set

- Test every sitemap route and every in-site link against production after deployment.
- Check all 21 article and 12 current-affairs routes, plus core topic hubs, FAQ and legal pages.
- Decide whether premium quiz should remain excluded in robots.txt even though it is linked from exam-preparation content.
- Confirm page titles, descriptions, one visible H1, canonical, robots directive and language metadata for each route.
- Inspect important URLs with Google Search Console URL Inspection to confirm rendered content and indexing eligibility.

### 7. QA English/Marathi parity and accessibility

- Visit every route in both languages and check translated titles, content, navigation, metadata, legal disclaimers and error states.
- Review legal translations by a competent Marathi editor.
- Keyboard-test menu, language toggle, search, cards, accordions and quiz controls.
- Check focus visibility, labels, contrast, zoom/reflow and screen-reader announcements.
- Test mobile layout and long Marathi text wrapping.

### 8. Check quality without a word-count target

Prioritize user usefulness and originality over a minimum word count. The inventory flags the 87-word Learn hub, 57-word quiz extraction and 344-word CEC story for contextual review; the quiz’s scrape is incomplete because it is interactive. Expand only where the page lacks explanation, context, source links or a useful next step. A concise quiz or navigation hub can be appropriate when the interface itself provides value.

### 9. Measure production performance and verify advertising setup

- Run Lighthouse/PageSpeed and review Core Web Vitals on production home, article and current-affairs pages.
- Optimize the JavaScript bundle only if measured performance warrants it; the previous local build showed a large chunk, which may not equal the production bundle.
- In AdSense, verify account/site status, ads.txt recognition, ad placement behavior and any policy center alerts.
- Check actual consent requirements and implementation for audiences served; account-level state was unavailable during this audit.

## Evidence references

- [Google AdSense page readiness guidance](https://support.google.com/adsense/answer/7299563?hl=en)
- [Google AdSense program policies](https://support.google.com/adsense/answer/48182?hl=en)
- [Google required privacy-policy content](https://support.google.com/adsense/answer/1348695?hl=en)
- [Google supported languages](https://support.google.com/adsense/answer/9727?hl=en)
- [Google consent-management requirements](https://support.google.com/adsense/answer/13554116?hl=en)
- [Legislative Department: Constitution of India](https://legislative.gov.in/constitution-of-india/)
