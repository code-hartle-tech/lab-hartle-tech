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
        name: 'tools.hartle.tech',
        tagline: 'Per-tool reference docs and hands-on lessons. RuFlo first, more incoming.',
        urlPublic: 'https://tools.hartle.tech',
        urlInternal: 'https://tools.hartle.tech/ruflo/wiki/',
        brandAccent: '#1E40AF',
        tags: ['docs', 'cheatsheets'],
        status: 'live',
      },
      {
        name: 'Nosferato',
        tagline: 'NOT-SAFE-FOR-APP-STORES Pi rig. Vampire-hacker-rat lane.',
        urlPublic: 'https://github.com/code-hartle-tech/nosferatos',
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
        name: 'Cortex',
        tagline: 'Secrets vault (OpenBao). Every credential lives here.',
        urlInternal: 'https://cortex.hartle.tech',
        brandAccent: '#00F0FF',
        tags: ['openbao', 'k3s'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy alias: bao.hartle.tech (parallel during rebrand)'],
      },
      {
        name: 'Headlamp',
        tagline: 'k3s control plane. Pods, services, helmreleases.',
        urlInternal: 'https://k8s.hartle.tech',
        brandAccent: '#326CE5',
        tags: ['k3s', 'cluster-admin'],
        status: 'live',
        tailnetOnly: true,
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
        name: 'Bouncer',
        tagline: 'Identity provider (Authentik). Decides who gets in.',
        urlInternal: 'https://bouncer.hartle.tech',
        brandAccent: '#00F0FF',
        tags: ['authentik', 'oidc'],
        status: 'live',
        tailnetOnly: true,
        subItems: ['Legacy alias: auth.hartle.tech (parallel during rebrand)'],
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
    blurb: 'Where the knowledge lives.',
    items: [
      {
        name: 'Void wiki',
        tagline: 'Org-wide internal wiki. Runbooks, decisions, lore.',
        urlInternal: 'https://void.hartle.tech',
        brandAccent: '#00F0FF',
        tags: ['vitepress', 'internal'],
        status: 'live',
        tailnetOnly: true,
      },
      {
        name: 'NearTrace docs',
        tagline: 'Public NearTrace user and developer docs.',
        urlPublic: 'https://docs.neartrace.app',
        brandAccent: '#00E5FF',
        tags: ['vitepress', 'public'],
        status: 'live',
      },
      {
        name: 'hartle.tech',
        tagline: 'Org marketing site.',
        urlPublic: 'https://hartle.tech',
        brandAccent: '#00E5FF',
        tags: ['netlify', 'marketing'],
        status: 'live',
      },
    ],
  },

  {
    name: 'External / Source',
    blurb: 'Third-party consoles we operate through.',
    items: [
      {
        name: 'GitHub org',
        tagline: 'Source of truth. Repos, issues, projects, releases.',
        urlPublic: 'https://github.com/code-hartle-tech',
        brandAccent: '#6B7280',
        tags: ['github'],
        status: 'live',
      },
      {
        name: 'GitHub Projects',
        tagline: 'Quest Board #1, DevOps #6, Enroll #4, Claude Code #5, Nosferato #2, Medusa #8.',
        urlPublic: 'https://github.com/orgs/code-hartle-tech/projects',
        brandAccent: '#6B7280',
        tags: ['kanban'],
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
];
