import { defineConfig } from 'astro/config';

// lab.hartle.tech — portfolio dashboard.
// Tailnet-only by Caddy gate; published as static + served by caddy:2-alpine
// in a k3s pod. See: k8s/workloads/lab-hartle-tech/ (post-merge).
export default defineConfig({
  site: 'https://lab.hartle.tech',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  // No integrations needed — vanilla CSS + zero JS islands by default.
});
