import type { WebExtBrowser } from 'vitest-environment-web-ext'
import { expect, it } from 'vitest'

declare const browser: WebExtBrowser

it('popup should display correctly', async () => {
  const popupPage = await browser.getPopupPage()

  const title = await popupPage.title()
  expect(title).toBeTruthy()
})
