import vue from '@vitejs/plugin-vue'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        plugins: [vue()],
        test: {
          name: 'Component',
          include: ['src/components/**/*.test.ts'],
          browser: {
            enabled: true,
            provider: playwright(),
            // https://vitest.dev/config/browser/playwright
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
      {
        test: {
          name: 'WebExtension E2E',
          include: ['e2e/**/*.test.ts'],
          // https://crxjs.dev/guide/test/installation
          environment: 'web-ext',
          environmentOptions: {
            'web-ext': {
              path: './dist',
              targetUrl: 'https://example.com',
            },
          },
        },
      },
    ],
  },
})
