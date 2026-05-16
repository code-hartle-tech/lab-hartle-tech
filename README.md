# lab.hartle.tech

> Portfolio dashboard for HARTLE.TECH — every product, infrastructure surface, knowledge base, and external console in one card grid. Tailnet-only.

**Live at** [lab.hartle.tech](https://lab.hartle.tech) (tailnet members only). Replaces the previous `gethomepage` installation with a recruiter/business-partner-grade portfolio surface.

## Stack

- **[Astro](https://astro.build/)** — static site, zero JS by default
- **[Open Props](https://open-props.style/)** — design tokens via CDN, no build dependency
- Vanilla CSS with custom-properties, container queries, and View Transitions
- Container runtime: `caddy:2-alpine` (in-pod static server)
- Deploy: GHA → GHCR → Flux Image Automation → k3s

## Local dev

```bash
npm install
npm run dev
# → http://localhost:5179
```

## Build

```bash
npm run build     # produces dist/
npm run preview   # serves dist/ locally
```

## Docker

```bash
docker build -t lab-hartle-tech .
docker run --rm -p 8080:80 lab-hartle-tech
# → http://localhost:8080
```

## Architecture

```
code-hartle-tech/lab-hartle-tech     (this repo)
        │
        ▼ push to develop
GHA → docker buildx → ghcr.io/code-hartle-tech/lab-hartle-tech:sha-N-XXXX
        │
        ▼ Flux ImageRepository + ImagePolicy
hartle.tech-terraform/k8s/workloads/product-docs/lab-hartle-tech/
        │
        ▼ Deployment → ClusterIP Service
Caddy on VPS (lab.hartle.tech vhost) → reverse_proxy → cluster
```

## Card design contract

Each card uses one `--brand-accent` CSS variable. Brand color enters via:
- 3px left stripe
- Status pill background tint
- Hover glow (12% opacity)
- Arrow color on hover

Everything else (surface, text, borders, tags) uses global neutral tokens. This prevents the rainbow-Skittles failure mode while letting each card *feel* like its product.

## Adding a card

Edit `src/data/inventory.ts`:

```ts
{
  name: 'My New Thing',
  tagline: 'One-line description.',
  urlPublic: 'https://newthing.hartle.tech',
  brandAccent: '#04D94F',
  tags: ['tag1', 'tag2'],
  status: 'wip',
},
```

Add it to the appropriate `Category.items` array. Build, push to develop, Flux deploys it.

## License

Apache 2.0 — see [LICENSE](./LICENSE) and [NOTICE](./NOTICE).

## Contact

[contact@hartle.tech](mailto:contact@hartle.tech)
