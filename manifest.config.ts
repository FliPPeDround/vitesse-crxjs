import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  action: {
    default_icon: 'src/assets/icon-512.png',
    default_popup: 'src/popup/index.html',
  },
  background: {
    service_worker: 'src/background/main.ts',
  },
  content_scripts: [{
    js: ['src/content/main.ts'],
    matches: ['<all_urls>'],
  }],
  options_ui: {
    page: 'src/options/index.html',
    open_in_tab: true,
  },
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
  host_permissions: ['*://*/*'],
  permissions: [
    'tabs',
    'storage',
    'activeTab',
    'sidePanel',
  ],
  icons: {
    16: 'src/assets/icon-512.png',
    48: 'src/assets/icon-512.png',
    128: 'src/assets/icon-512.png',
  },
})
