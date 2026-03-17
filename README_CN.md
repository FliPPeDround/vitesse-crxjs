# WebExtension 启动模板

一个基于 [Vite](https://vitejs.dev/) 和 [CRXJS](https://crxjs.dev/) 的 WebExtension ([Chrome](https://developer.chrome.com/docs/extensions/reference/)、[FireFox](https://addons.mozilla.org/en-US/developers/) 等) 启动模板。

## 特性

- ⚡️ **即时 HMR** - 在开发中使用 **Vite** 和 **CRXJS**（无需刷新！）
- 🥝 Vue 3 - Composition API、[`<script setup>` 语法](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) 等！
- 💬 轻松通信 - 由 [`webext-bridge`](https://github.com/serversideup/webext-bridge) 和 [VueUse](https://github.com/antfu/vueuse) storage 驱动
- 🌈 [UnoCSS](https://github.com/unocss/unocss) - 即时按需原子 CSS 引擎
- 🦾 [TypeScript](https://www.typescriptlang.org/) - 类型安全
- 📦 [组件自动导入](./src/components)
- 🖥 Content Script - 在 content script 中使用 Vue
- 🌍 WebExtension - 适用于 Chrome、Firefox 等的跨浏览器扩展

## 内置工具

### WebExtension 库

- [`crxjs/vite-plugin`](https://github.com/crxjs/chrome-extension-tools) - 使用原生 HMR 和零配置构建跨浏览器扩展
- [`vitest-environment-web-ext`](https://github.com/crxjs/vitest-environment-web-ext) - WebExtension 的 Vitest 环境
- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - 带有类型的 WebExtension browser API Polyfill
- [`webext-bridge`](https://github.com/serversideup/webext-bridge) - 在不同上下文之间轻松通信

### Vite 插件

- [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) - 无需导入即可直接使用 `browser` 和 Vue Composition API
- [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) - 组件自动导入

### Vue 插件

- [VueUse](https://github.com/antfu/vueuse) - 有用的 Composition API 集合

### UI 框架

- [UnoCSS](https://github.com/unocss/unocss) - 即时按需原子 CSS 引擎

### 代码风格

- 使用 Composition API 和 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配合 [@antfu/eslint-config](https://github.com/antfu/eslint-config)，单引号，无分号

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - 快速、节省磁盘空间的包管理器
- [web-ext](https://github.com/mozilla/web-ext) - 为开发 WebExtension 提供的简化体验

## 使用模板

### GitHub 模板

[在 GitHub 上从此模板创建仓库](https://github.com/flippedround/vitesse-crxjs/generate)。

### 克隆到本地

如果你更喜欢手动操作以获得更清晰的 git 历史

> 如果你没有安装 pnpm，请运行：npm install -g pnpm

```bash
npx degit flippedround/vitesse-crxjs my-webext
cd my-webext
pnpm i
```

## 使用方法

### 文件夹结构

- `src` - 主要源代码。
  - `content` - 作为 `content_script` 注入的脚本和组件
  - `background` - 后台脚本
  - `components` - 在 popup 和选项页面中自动导入的共享 Vue 组件
  - `assets` - Vue 组件中使用的资源
- `dist` - 构建文件，也在开发中为 Vite 提供存根入口
- `manifest.config.ts` - 扩展的清单文件

### 开发

```bash
pnpm dev
```

然后 **在浏览器中使用 `dist/` 文件夹加载扩展**。

当 `dist/` 文件更改时，`web-ext` 会自动重新加载扩展。

### 构建

要构建扩展，请运行

```bash
pnpm build
```

然后打包 `dist` 下的文件，你可以将 `release` 上传到相应的扩展商店。

## 致谢

- [Vitesse-webext](https://github.com/antfu/vitesse-webext) - 基础模板
- [CRXJS](https://crxjs.dev/) - Vite 的 Chrome 扩展工具
