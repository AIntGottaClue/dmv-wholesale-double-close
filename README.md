# DMV Wholesale Double Close (Astro)

Astro site for wholesale double close transactional funding across the Washington, DC metro area (the DMV). 43 static pages: home (metro), 40 city service-area pages, privacy policy, terms of service.

## Coverage

City pages cover every place with 30,000+ population in the Washington-Arlington-Alexandria, DC-VA-MD-WV MSA (OMB Bulletin 23-01, July 2023), grouped by county in the nav:

- District of Columbia: Washington
- Arlington County: Arlington
- City of Alexandria: Alexandria
- Fairfax County: Centreville, Reston, McLean, Burke, Annandale, Oakton, Fair Oaks, West Falls Church, Springfield
- Loudoun County: Leesburg, Ashburn, South Riding, Sterling
- Prince William County: Dale City, Lake Ridge, Woodbridge, Linton Hall
- City of Manassas: Manassas
- Montgomery County: Germantown, Silver Spring, Gaithersburg, Bethesda, Rockville, Aspen Hill, Wheaton, North Bethesda, Potomac, Olney, Montgomery Village, Clarksburg
- Prince George's County: Bowie, Clinton, Chillum, College Park, Laurel
- Charles County: Waldorf
- Frederick County: Frederick

MSA counties with no 30,000+ place (Stafford, Spotsylvania, Fauquier, Culpeper, Warren, Clarke, Rappahannock in VA; Jefferson in WV; the cities of Fairfax, Falls Church, Manassas Park and Fredericksburg) are covered by the metro home page, which names them as part of the service area. Populations: ACS 2024 5-year estimates (Census Reporter), cross-checked against the 2020 decennial census; Laurel, MD is included on its 2020 census count of 30,060 (its ACS 2024 5-year estimate of 29,798 sits just below the line).

## Build

    npm install
    npm run build      # outputs static site to dist/
    npm run preview    # local preview of the build

## Deploy on Cloudflare Pages

Option A: connect the repo. Build command `npm run build`, output directory `dist`.
Option B: upload the contents of `dist/` directly as a static site.

## Fill before launch

1. `YOUR-DOMAIN.com` in `astro.config.mjs` and `src/data/cities.ts` (used for canonical URLs, Open Graph, sitemap, and JSON-LD).
2. `G-XXXXXXXXXX` in `src/layouts/Base.astro` (GA4 measurement ID, two spots in the same snippet).
3. The AirChatty tracking ID in `src/layouts/Base.astro` currently matches the Atlanta sites. Confirm it is the ID you want for this site.

After launch, send a live test submission to confirm leads land in GHL.

## Structure

- `src/data/cities.ts` - all city content, brand name, trust bar, and the fee schedule. To add a city, add one entry here; the page, nav menu, footer links, and JSON-LD are generated automatically. Each city carries `state` / `stateName` / `county` fields that drive the menu grouping, the local-note marker, and structured data.
- `src/data/metro.ts` - home page content.
- `src/pages/[slug].astro` - city page generator.
- `src/components/CityContent.astro` - shared page body (hero, form, sections, sticky mobile CTA).
- `src/components/DealForm.astro` - the deal form and success card.

## Form pattern (matches GHL mapping)

- Form id/name: `DMV-Wholesale-Double-Close-Form` on every page (same single-form pattern as the Atlanta site).
- Fields: `full_name`, `phone`, `email`, textarea `id="wdc_details"` `name="wdc_detials"` (misspelling intentional).
- Hidden `wdc_location` field carries the city name on city pages. Hidden honeypot field `website`: ignore any GHL lead where it has a value.
- Phone is normalized client-side to +1XXXXXXXXXX before the tracker captures the submit.
- Submissions are captured by the AirChatty script; there is no form backend. After submit the form swaps to a Deal Received card with a Submit another deal option.

## Design

Same design system as the Atlanta site: Inter and DM Serif Display, navy/white surfaces, green CTAs, diagonal hero lines, hero form card, trust bar, county-grouped Service Areas mega menu, native FAQ accordion, floating Submit Deal button, and a full-width mobile sticky CTA that hides while the hero form is visible. Copy follows the standing rules: no eyebrow or kicker labels, no hero subheadline, no em dashes, no invented stats, and no named firms.

Preview the built site from the project root: `python3 -m http.server 8000 -d dist` (then open http://localhost:8000/). To change source, run `npm install` once and `npm run build` before serving dist again.
