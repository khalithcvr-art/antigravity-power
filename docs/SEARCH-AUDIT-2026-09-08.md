# Website search and accuracy audit — 8 September 2026

Scope: first technical and content-risk review of the verified live antigravity-power source. Not a ranking, traffic, competitor or Core Web Vitals measurement. No Search Console data was accessed. No numerical SEO score is claimed.

## Verified fixes
- Sitemap uses www while canonical used apex: standardised canonical and organisation URLs to www.
- Service pages inherited the homepage canonical: rendered canonical now matches each service path.
- Returning home could retain service metadata: homepage title/description/social metadata reset.
- Organisation logo and service image referenced nonexistent asset paths: switched to existing public images.
- Arabic alternates pointed to /ar and ?lang=ar, neither implemented by the language toggle: removed misleading alternate declarations. Arabic UI remains; crawlable Arabic routes need a separate implementation.
- Removed stale sitemap lastmod dates instead of fabricating page modification dates.

Build and browser-rendered homepage, Meydan and IFZA canonical checks passed. These tests do not prove search-engine indexing. Initial HTML remains a single-page app shell; per-route prerendering is a high-priority next step.

## Remaining priorities
1. Content accuracy: review government API integration, approval guarantees, fixed issuance times, bank guarantees, partnership assertions and business-volume statistics against owner evidence. Existing claims are not verified by this audit. Review price tables and structured-data FAQ answers together with visible content; do not invent new prices or replace case-specific advice with generic claims.
2. Generate per-route HTML and metadata, handle unknown paths as actual 404 responses, and implement persistent Arabic routes with matching alternates. Current catch-all rewrite can produce soft 404s.
3. Reduce initial JavaScript (current build warns about a roughly 699 KB chunk). Measure real mobile performance before claiming a speed score.
4. Verify Search Console ownership, indexed pages, sitemap submission, actual search queries and conversion measurement. Do not claim rankings from a site: query.
5. Build concise, evidence-backed service FAQs and service-specific enquiry paths: Abu Dhabi employment vs family residency, company formation, PRO renewals, with consultant review for case-dependent requirements.
6. Verify Google Business Profile details against company records and connect genuine reviews only with permission and provenance. Do not invent testimonials.

AEO/GEO follow accurate, accessible, useful search content; no special AI schema or guaranteed placement is supported. Sources:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

No lead submissions, customer notifications, CRM changes or DNS changes in this audit.
