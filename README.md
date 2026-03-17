# WebExtension Starter

A [Vite](https://vitejs.dev/) and [CRXJS](https://crxjs.dev/) powered WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/), [FireFox](https://addons.mozilla.org/en-US/developers/), etc.) starter template.

[中文文档](./README_CN.md)

## Features

- ⚡️ **Instant HMR** - use **Vite** and **CRXJS** on dev (no more refresh!)
- 🥝 Vue 3 - Composition API, [`<script setup>` syntax](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) and more!
- 💬 Effortless communications - powered by [`webext-bridge`](https://github.com/serversideup/webext-bridge) and [VueUse](https://github.com/antfu/vueuse) storage
- 🌈 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand Atomic CSS engine.
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 📦 [Components auto importing](./src/components)
- 🖥 Content Script - Use Vue even in content script
- 🌍 WebExtension - isomorphic extension for Chrome, Firefox, and others

## Pre-packed

### WebExtension Libraries

- [`crxjs/vite-plugin`](https://github.com/crxjs/chrome-extension-tools) - Build cross-browser extensions with native HMR and zero-config setup
- [`vitest-environment-web-ext`](https://github.com/crxjs/vitest-environment-web-ext) - Vitest environment for WebExtension
- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - WebExtension browser API Polyfill with types
- [`webext-bridge`](https://github.com/serversideup/webext-bridge) - effortlessly communication between contexts

### Vite Plugins

- [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) - components auto import

### Vue Plugins

- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### UI Frameworks

- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand Atomic CSS engine

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [web-ext](https://github.com/mozilla/web-ext) - Streamlined experience for developing web extensions

## Use the Template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/flippedround/vitesse-crxjs/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

> If you don't have pnpm installed, run: npm install -g pnpm

```bash
npx degit flippedround/vitesse-crxjs my-webext
cd my-webext
pnpm i
```

## Usage

### Folders

- `src` - main source.
  - `content` - scripts and components to be injected as `content_script`
  - `background` - scripts for background.
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `assets` - assets used in Vue components
- `dist` - built files, also serve stub entry for Vite on development.
- `manifest.config.ts` - manifest for the extension.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `dist/` folder**.

`web-ext` auto reload the extension when `dist/` files changed.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `dist`, you can upload `release` to appropriate extension store.

## Credits

- [Vitesse-webext](https://github.com/antfu/vitesse-webext) - the base template
- [CRXJS](https://crxjs.dev/) - Chrome Extension Tools for Vite


