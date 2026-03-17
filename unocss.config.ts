import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    /**
     * Use vue-scoped mode for style isolation in content scripts.
     * See: file://./vite.config.ts#L40
     * However, presetWind4 causes variable loss under vue-scoped mode,
     * so presetWind3 is used here instead.
     * See: https://github.com/unocss/unocss/issues/1324
     */
    presetWind3(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
