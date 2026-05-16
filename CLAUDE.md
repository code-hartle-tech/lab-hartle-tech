# lab.hartle.tech — Claude house rules

Inherits HARTLE.TECH org-wide rules (Nine Golden Rules, etc.). For the full handoff see the void wiki at https://void.hartle.tech/claude/handoff.

This file documents what's project-specific.

## What this site is

Portfolio dashboard for HARTLE.TECH. Tailnet-only by Caddy gate. Replaces the old `gethomepage` install with Astro + Open Props for recruiter-grade quality. Each system/product gets a card; categories group them; brand colors enter via one `--brand-accent` CSS variable per card (3px left stripe + status pill + hover glow only — never as a surface).

## Adding a card

Edit `src/data/inventory.ts`:

1. Pick the right `Category` array
2. Append a `CardItem` with `name`, `tagline`, `urlPublic` or `urlInternal`, `brandAccent` hex, `tags[]`, `status`
3. Tailnet-only items: set `tailnetOnly: true` (UI hides them off-tailnet by data attr — Caddy gate is the real boundary)

## Card design contract — non-negotiable

The visual constraint is what makes this NOT look like a homelab dashboard:

- **Brand color enters via ONE variable** (`--brand-accent`) per card
- **Brand color appears ONLY** as: 3px left stripe, header dot, hover glow at 12% opacity, status-pill tint, arrow tint on hover
- **Brand color NEVER appears as**: card background, card border (default state), text color, full-opacity fill
- **Everything else** (surface, text, tag chips, borders, shadows) uses global semantic tokens (`--surface-*`, `--text-*`)
- Cards use identical typography across the grid — no per-brand fonts

Breaking the contract = rainbow-Skittles failure mode = "this looks like every gethomepage tutorial." Don't.

## Anti-patterns

Do NOT add:
- Service uptime dots / status badges (this is a portfolio, not a status page)
- Per-card background gradients in brand colors (Skittles trap)
- Search bar (~30 items, scanning is faster)
- Hero avatar / "Hi I'm…" copy
- Iconify dump / Simple Icons everywhere
- Animated backgrounds, gradient meshes, noise textures

## Deploy

- Push to `develop` → GHA builds + pushes to GHCR
- Flux Image Automation in `hartle.tech-terraform/k8s/workloads/product-docs/lab-hartle-tech/` picks up the new image
- Caddy on VPS reverse_proxies `lab.hartle.tech` → ClusterIP

## Brand

Multi-product showcase, so the SITE itself uses a neutral palette (HARTLE.TECH = no single brand color for the dashboard chrome; it's the gallery, not a piece). Topbar mark uses a conic gradient through the products' brand colors as a subtle reference. Light + dark mode toggleable; OKLCH-authored where per-card brand colors are involved.

## Things that need explicit operator approval

- Adding categories beyond the 6 canonical ones
- Putting the site behind a non-tailnet auth scheme (current: tailnet-only IP gate at Caddy)
- Breaking the per-card visual contract
