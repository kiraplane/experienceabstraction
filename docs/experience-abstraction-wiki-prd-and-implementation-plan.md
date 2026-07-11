# Experience Abstraction Wiki PRD and Implementation Plan

## 1. Project Summary

- Game: Experience Abstraction
- Platform: Roblox
- Site: Experience Abstraction Wiki
- Canonical: https://www.experienceabstraction.wiki
- Project / GitHub / Cloudflare name: experienceabstraction
- Official experience: https://www.roblox.com/games/131320856116838/Experience-Abstraction
- Creator: pawlooz (Roblox User ID 1693631698)
- Place ID: 131320856116838
- Universe ID: 10352185757
- Checked: 2026-07-11

The game is a new, data-thin social experience inspired by The Amazing Digital Circus. Its official description confirms three ways to abstract: isolate from other players, remain in darkness for a long time, or stay near already abstracted players. The site must clearly separate pawlooz's Roblox experience from GLITCH and the original series.

## 2. Research Method

### Serper long-tail discovery

Balanced mode was run on 2026-07-11 using the shared SERPER_API_KEY without printing or copying the key.

- Seed keywords: experience abstraction; experience abstraction wiki; experience abstraction roblox; experience abstraction guide; experience abstraction game.
- Requests: 5 autocomplete + 5 search requests for related searches / People Also Ask.
- Approximate request count: 10.
- Modifier autocomplete: not used.
- Bulk per-candidate SERP verification: not used.

The head term is ambiguous outside Roblox. Exact-game results consistently surface the official Roblox page and current how-to-abstract videos. Generic psychology, programming, healthcare, philosophy, and game-studio results are unrelated and must be ignored.

### Current source checks

- Roblox Games API confirmed current title, creator, Social genre, 30-player server size, creation date, update timestamp, Place ID and Universe ID.
- Roblox media API exposed three approved screenshots and the current game icon.
- Roblox badge API returned no badges on 2026-07-11.
- YouTube oEmbed confirmed exact-game videos from Roblox Master Guides, The Red Ai, codeshunterx4, and craby19.
- AllThings.How publishes one focused article around the same three official abstraction conditions.

## 3. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| experience abstraction | exact game / ambiguous head | / | P0 | keep | Serper autocomplete; official Roblox organic result | Pair with Roblox and wiki context to disambiguate. |
| experience abstraction wiki | wiki hub | / | P0 | keep | User requirement; autocomplete includes exact phrase | Homepage H1 and WebSite schema own the intent. |
| experience abstraction roblox | platform identity / play | /official-links | P0 | keep | Serper autocomplete; official Roblox result | Official link and identity facts. |
| how to abstract in experience abstraction | mechanic workflow | /guides/how-to-abstract | P0 | keep | Multiple exact YouTube results; competitor article; official description | Strongest standalone guide intent. |
| how to get abstract in experience abstraction roblox | mechanic workflow | /guides/how-to-abstract | P0 | keep | Exact YouTube title | Merge with the canonical how-to page. |
| experience abstraction gameplay | game overview | /gameplay | P1 | keep | Serper autocomplete; exact gameplay video | Explain verified loop without inventing systems. |
| experience abstraction guide | guide hub | /guides | P1 | keep | Seed keyword; exact how-to result | Hub for current and future guides. |
| how to avoid abstraction | survival / prevention | /guides/how-to-avoid-abstraction | P1 | keep | Official conditions; competitor heading | Mirror the verified conditions conservatively. |
| experience abstraction beginner guide | first-session route | /guides/beginner-guide | P1 | keep | Exact-game gameplay videos; normal player workflow | Original practical guide with verified mechanics only. |
| experience abstraction official link | safe play entry | /official-links | P1 | keep | Official Roblox page | Prevent wrong-game and fake-download confusion. |
| experience abstraction codes | redeem codes | none | P2 | watch | No autocomplete, PAA, official code field, badge or reliable source | Do not launch a codes page. |
| experience abstraction tier list | ranking | none | P3 | ignore | No ranked entities or search evidence | Template residue; do not create. |
| experience abstraction characters | entity database | none | P2 | watch | No current search/source support | Revisit only after game-specific demand emerges. |
| experience abstraction map / locations | navigation | none | P2 | watch | No exact long-tail evidence | Do not infer named locations from TADC lore. |
| experience abstraction endings | ending tracker | none | P3 | ignore | No confirmed ending system | Unsupported. |
| abstraction tadc wiki | original-series lore | none | P3 | ignore | Related search points to GLITCH fandom | Wrong entity for this site. |
| addition abstraction wiki | different Roblox game | none | P3 | ignore | SERP result for a separate place | Strict entity exclusion. |
| experience abstraction psychology / programming / healthcare | generic term | none | P3 | ignore | Serper related/PAA noise | Not game intent. |
| experience abstraction scripts / exploits | unsafe | none | P3 | ignore | Safety policy | Never publish cheat or exploit instructions. |

## 4. One-Long-Tail-One-Page Coverage

| Long-tail | Existing page that can carry it | Coverage | Action | Proposed URL |
| --- | --- | --- | --- | --- |
| experience abstraction wiki | homepage | full | covered | / |
| experience abstraction roblox | none before launch | gap | new_page | /official-links |
| how to abstract in experience abstraction | none before launch | gap | new_page | /guides/how-to-abstract |
| how to get abstract | how-to-abstract | full | redirect/merge | /guides/how-to-abstract |
| how to avoid abstraction | none before launch | gap | new_page | /guides/how-to-avoid-abstraction |
| experience abstraction gameplay | none before launch | gap | new_page | /gameplay |
| experience abstraction beginner guide | none before launch | gap | new_page | /guides/beginner-guide |
| experience abstraction guide | guides hub | full | covered | /guides |
| experience abstraction codes | none | insufficient source | watch | none |
| experience abstraction tier list | none | unsupported | ignore | none |

## 5. Competitor Benchmark

### allthings.how

- Surface: one article, Experience Abstraction on Roblox: How to Abstract Explained.
- Data: the three conditions already present in the official Roblox description.
- Tool: none.
- Article entry points: direct search landing page with a short table and prevention advice.
- Match: publish a clearer how-to page with official-source boundaries, a video cross-check, FAQ, and internal next steps.
- Improve: add a full game hub, official-links page, gameplay page, guide hub, schema, sitemap, and entity-confusion warnings.

### YouTube

- D8mBiEX8am4, Roblox Master Guides: exact how-to-abstract intent; selected for /guides/how-to-abstract.
- sy6c-KlnDk0, The Red Ai: exact-game secondary cross-check.
- NDq-1TWZcOI, codeshunterx4: exact get-abstract wording; secondary cross-check.
- PpZ2Hv1X8w0, craby19: exact-game gameplay; selected as a supporting preview for the beginner/gameplay cluster.

### Search gaps

No dedicated Experience Abstraction wiki, structured database, map tool, code tracker, or character database was found. Because the game is extremely new and the official data surface is narrow, the launch opportunity is a trustworthy guide hub rather than a large speculative encyclopedia.

## 6. Information Architecture

Launch with 12 public URLs including legal pages:

1. /
2. /guides
3. /guides/how-to-abstract
4. /guides/how-to-avoid-abstraction
5. /guides/beginner-guide
6. /gameplay
7. /official-links
8. /disclaimer
9. /privacy
10. /terms
11. /cookie
12. /sitemap.xml (generated index surface, not a content page)

No codes, tier list, characters, items, map, endings, or database route ships at launch.

## 7. Page Requirements

### Homepage

- Compact dark digital-circus visual direction using official Roblox media.
- H1: Experience Abstraction Wiki.
- Primary CTA: How to Abstract.
- Secondary CTA: Play on Roblox.
- Short quick links: Abstract, Avoid, Beginner, Gameplay, Official.
- Visible next section in the first desktop and mobile viewports.
- Compact Start Here, Latest Guides, Mechanic Paths, keyword hub, FAQ and official CTA modules.
- WebSite, Organization and VideoGame JSON-LD.

### Guides hub

- Exact guide H1 and concise introduction.
- Featured and all-guide cards.
- ItemList schema.

### Guide details

- 600+ English words where the intent benefits from depth.
- Article and BreadcrumbList schema.
- Video placed after useful written context, not automatically above the fold.
- Explicit short related-route labels and wrapping-safe buttons.

### Gameplay and Official Links

- Gameplay: explain the verified social loop and the three risk conditions; label unknown timers or meters as unverified rather than guessing.
- Official Links: Roblox experience, creator profile, Place and Universe IDs, safe-link checklist, and wrong-game warnings.

## 8. Data and Source Model

Create src/data/experienceabstraction/ with:

- types.ts
- sources.ts
- guides.ts

Guide metadata must include sourceStrategy, videoSearchQueries, sourceNotes, checkedAt, video metadata, cover image and relatedRoutes. Public UI should remain player-facing; source details belong in data or compact attribution.

## 9. Visual Direction

- Base: near-black navy / purple.
- Primary: hot magenta.
- Secondary: electric cyan.
- Accent: warm circus yellow.
- Use approved Roblox icon and screenshots, not UTDZ assets.
- Avoid oversized hero height, decorative rings around the icon, and SaaS marketing sections.

## 10. Migration QA

Remove or replace all references to Universal Tower Defense Z, UTDZ, universaltowerdefense-z.wiki, Place 133410800847665, Universe 7488190691, creator group 33861560, Update 4, tower defense, units, codes, traits, relics, and source-specific route/data/component folders.

Inspect long guide labels at narrow sidebar widths. Desktop route groups must default closed except the active group; mobile must use an expandable menu.

## 11. Validation and Launch

- pnpm lint
- pnpm exec tsc --noEmit
- pnpm next:build
- pnpm build
- Local browser QA at desktop and mobile widths for /, /guides, all guide details, /gameplay, /official-links, /sitemap.xml and /robots.txt.
- Initialize clean Git history, create and push GitHub repo experienceabstraction.
- Deploy Cloudflare Worker experienceabstraction and bind apex + www with www canonical.
- Attempt Cloudflare GitHub automatic build connection.
- Create or reuse GA4 property/stream and update project + GA-GTM registries.
- Register Shipmanager as game_guide with exactly two active core links: homepage and /guides.
