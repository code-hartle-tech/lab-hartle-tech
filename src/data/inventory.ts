// lab.hartle.tech card inventory — source of truth for the dashboard.
// One CardItem per system/product. Categories rendered in array order.
// Operator decisions captured 2026-05-16; refine later as products/palettes evolve.

export interface CardItem {
  /** Display name shown in the card. */
  name: string;
  /** One-line tagline (sentence, ends with period). */
  tagline: string;
  /** Public URL — if null, card shows internal URL only (or hides off-tailnet). */
  urlPublic?: string | null;
  /** Tailnet-only URL (internal wiki, admin UI). Hidden off-tailnet. */
  urlInternal?: string | null;
  /** Single brand-accent color (hex). The ONLY brand-color surface in the card. */
  brandAccent: string;
  /** 2–4 short tag chips, displayed under the tagline. */
  tags?: string[];
  /** Build status — controls a subtle pill on the card. */
  status?: 'live' | 'wip' | 'planned' | 'private';
  /** If true, card only renders for tailnet visitors. */
  tailnetOnly?: boolean;
  /** Optional sub-bullet list (e.g. Loki/Tempo/Prometheus under Grafana). */
  subItems?: string[];
}

export interface Category {
  name: string;
  blurb?: string;
  items: CardItem[];
}

export const INVENTORY: Category[] = [
  {
    name: 'Products',
    blurb: "What we're shipping.",
    items: [
      {
        name: 'hartle.tech',
        tagline: 'The org itself — marketing landing for HARTLE.TECH.',
        urlPublic: 'https://hartle.tech',
        brandAccent: '#00E5FF',
        tags: ['netlify', 'marketing'],
        status: 'live',
      },
      {
        name: 'NearTrace',
        tagline: 'Android BLE scanner. Forensic-grade nearby-device discovery.',
        urlPublic: 'https://neartrace.app',
        brandAccent: '#00E5FF',
        tags: ['android', 'ble', 'forensics'],
        status: 'live',
      },
      {
        name: 'Medusa',
        tagline: 'ESP32-S3 in a phone case. Passive RF recon, defensive research.',
        urlPublic: 'https://medusa.hartle.tech',
        urlInternal: 'https://medusa.hartle.tech/wiki/',
        brandAccent: '#04D94F',
        tags: ['esp32', 'wifi', 'ble', 'pcb'],
        status: 'wip',
      },
      {
        name: 'DumpSock',
        tagline: 'Cloudless iPhone backup. Your data, your socket.',
        urlPublic: 'https://dumpsock.hartle.tech',
        urlInternal: 'https://dumpsock.hartle.tech/wiki/',
        brandAccent: '#E62A28',
        tags: ['iphone', 'backup', 'local-first'],
        status: 'live',
      },
      {
        name: 'Nosferato',
        tagline: 'NOT-SAFE-FOR-APP-STORES Pi rig. Vampire-hacker-rat lane.',
        urlPublic: 'https://nosferato.hartle.tech',
        brandAccent: '#FF00FF',
        tags: ['pi-zero-2w', 'nsfas'],
        status: 'wip',
      },
    ],
  },

  {
    name: 'Infrastructure',
    blurb: 'The plumbing.',
    items: [
      {
        name: 'OpenBao',
        tagline: 'Secrets vault. Every credential lives here.',
        urlInternal: 'https://openbao.hartle.tech',
        brandAccent: '#00F0FF',
        tags: ['secrets', 'k3s'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy aliases: cortex / bao .hartle.tech'],
      },
      {
        name: 'Headlamp',
        tagline: 'k3s control plane. Pods, services, helmreleases.',
        urlInternal: 'https://headlamp.hartle.tech',
        brandAccent: '#326CE5',
        tags: ['k3s', 'cluster-admin'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy alias: k8s.hartle.tech'],
      },
      {
        name: 'Flux',
        tagline: 'GitOps reconciliation status. Sources, kustomizations, helmreleases.',
        urlInternal: 'https://flux.hartle.tech',
        brandAccent: '#5468FF',
        tags: ['gitops', 'flux-v2'],
        status: 'live',
        tailnetOnly: true,
      },
    ],
  },

  {
    name: 'Identity & Auth',
    items: [
      {
        name: 'Authentik',
        tagline: 'Identity provider. Decides who gets in.',
        urlInternal: 'https://authentik.hartle.tech',
        brandAccent: '#FD4B2D',
        tags: ['oidc', 'sso'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy aliases: bouncer / auth .hartle.tech'],
      },
    ],
  },

  {
    name: 'Observability',
    items: [
      {
        name: 'Grafana',
        tagline: 'Metrics, logs, traces — Loki + Tempo + Prometheus pre-wired.',
        urlInternal: 'https://grafana.hartle.tech',
        brandAccent: '#F46800',
        tags: ['lgtm', 'helm'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Loki — logs', 'Tempo — traces', 'Prometheus — metrics'],
      },
    ],
  },

  {
    name: 'Documentation',
    blurb: 'Where the knowledge lives. Convention: public = docs, tailnet-only = wiki.',
    items: [
      // ── Org-wide ────────────────────────────────────────────────
      {
        name: 'docs.hartle.tech',
        tagline: 'Public engineering docs (architecture, integration guides, products).',
        urlPublic: 'https://docs.hartle.tech',
        brandAccent: '#00E5FF',
        tags: ['vitepress', 'public'],
        status: 'wip',
      },
      {
        name: 'wiki.hartle.tech',
        tagline: 'Org-wide internal wiki. Runbooks, decisions, lore.',
        urlInternal: 'https://wiki.hartle.tech',
        brandAccent: '#00F0FF',
        tags: ['vitepress', 'wiki'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy alias: void.hartle.tech'],
      },
      // ── tools.hartle.tech (TAILNET-ONLY per operator decision) ──
      {
        name: 'tools.hartle.tech',
        tagline: 'Per-tool reference cards — internal, tailnet-only.',
        urlInternal: 'https://tools.hartle.tech',
        brandAccent: '#1E40AF',
        tags: ['vitepress', 'wiki'],
        status: 'live',
        tailnetOnly: true,
      },
      // ── NearTrace (HARTLE.TECH-side engineering surface) ────────
      {
        name: 'NearTrace docs',
        tagline: 'Public engineering docs on hartle.tech (counterpart to wiki).',
        urlPublic: 'https://neartrace.hartle.tech/docs/',
        brandAccent: '#00E5FF',
        tags: ['vitepress', 'public'],
        status: 'wip',
      },
      {
        name: 'NearTrace wiki',
        tagline: 'Tailnet engineering wiki on hartle.tech.',
        urlInternal: 'https://neartrace.hartle.tech/wiki/',
        brandAccent: '#00E5FF',
        tags: ['vitepress', 'wiki'],
        status: 'wip',
        tailnetOnly: true,
      },
      // neartrace.app docs/wiki intentionally NOT listed here — they're
      // downstream copies promoted from neartrace.hartle.tech on release.
      // The hartle.tech-side cards above are the single source of truth.

      // ── Medusa ──────────────────────────────────────────────────
      {
        name: 'Medusa docs',
        tagline: 'Public engineering docs.',
        urlPublic: 'https://medusa.hartle.tech/docs/',
        brandAccent: '#04D94F',
        tags: ['vitepress', 'public'],
        status: 'live',
      },
      {
        name: 'Medusa wiki',
        tagline: 'Tailnet engineering wiki.',
        urlInternal: 'https://medusa.hartle.tech/wiki/',
        brandAccent: '#04D94F',
        tags: ['vitepress', 'wiki'],
        status: 'live',
        tailnetOnly: true,
      },
      // ── DumpSock ────────────────────────────────────────────────
      {
        name: 'DumpSock docs',
        tagline: 'Public docs (user + dev guide).',
        urlPublic: 'https://dumpsock.hartle.tech/guide/getting-started',
        brandAccent: '#E62A28',
        tags: ['vitepress', 'public'],
        status: 'live',
      },
      {
        name: 'DumpSock wiki',
        tagline: 'Tailnet engineering wiki.',
        urlInternal: 'https://dumpsock.hartle.tech/wiki/',
        brandAccent: '#E62A28',
        tags: ['vitepress', 'wiki'],
        status: 'live',
        tailnetOnly: true,
      },
      // ── Nosferato ───────────────────────────────────────────────
      {
        name: 'Nosferato docs',
        tagline: 'Public engineering docs (NSFAS lane).',
        urlPublic: 'https://nosferato.hartle.tech/docs/',
        brandAccent: '#FF00FF',
        tags: ['vitepress', 'public'],
        status: 'wip',
      },
      {
        name: 'Nosferato wiki',
        tagline: 'Tailnet engineering wiki.',
        urlInternal: 'https://nosferato.hartle.tech/wiki/',
        brandAccent: '#FF00FF',
        tags: ['vitepress', 'wiki'],
        status: 'wip',
        tailnetOnly: true,
      },
    ],
  },

  {
    name: 'Platforms',
    blurb: 'Third-party consoles we operate through.',
    items: [
      {
        name: 'GitHub org',
        tagline: 'Source of truth. Repos, issues, releases.',
        urlPublic: 'https://github.com/code-hartle-tech',
        brandAccent: '#6B7280',
        tags: ['github'],
        status: 'live',
      },
      {
        name: 'Tailscale admin',
        tagline: 'Mesh network admin. ACLs, machines, DNS.',
        urlPublic: 'https://login.tailscale.com/admin',
        brandAccent: '#6B7280',
        tags: ['mesh'],
        status: 'live',
      },
      {
        name: 'Cloudflare',
        tagline: 'DNS for neartrace.app + hartle.tech (managed via Terraform).',
        urlPublic: 'https://dash.cloudflare.com',
        brandAccent: '#6B7280',
        tags: ['dns'],
        status: 'live',
      },
      {
        name: 'OVH',
        tagline: 'VPS host — vps-ab94220c · Gravelines · 4 vCore / 8 GB.',
        urlPublic: 'https://www.ovh.com/manager/dedicated/index.html',
        brandAccent: '#6B7280',
        tags: ['vps'],
        status: 'live',
      },
      {
        name: 'AWS',
        tagline: 'HARTLE.TECH account — burst capacity for future AI workloads.',
        urlPublic: 'https://200546423693.signin.aws.amazon.com/console',
        brandAccent: '#6B7280',
        tags: ['cloud'],
        status: 'live',
      },
    ],
  },

  {
    name: 'Projects',
    blurb: 'GitHub Project boards — where work lives.',
    items: [
      {
        name: 'All project boards',
        tagline: 'Quest #1 · DevOps #6 · Enroll #4 · Claude Code #5 · Nosferato #2 · Medusa #8.',
        urlPublic: 'https://github.com/orgs/code-hartle-tech/projects',
        brandAccent: '#6B7280',
        tags: ['kanban'],
        status: 'live',
      },
    ],
  },
];
