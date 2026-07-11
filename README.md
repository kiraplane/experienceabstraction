# Experience Abstraction Wiki

English Roblox guide site for **Experience Abstraction** at
`https://www.experienceabstraction.wiki`.

The site covers the three published abstraction conditions, survival routes,
beginner gameplay, verified Roblox identity, and video-supported guides. It is
built with Next.js and deployed to Cloudflare Workers through OpenNext.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation and deployment

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm next:build
pnpm cf:build
pnpm cf:deploy-only
```

Research, keyword decisions, source rules, and the implementation plan live in
`docs/experience-abstraction-wiki-prd-and-implementation-plan.md`.
