/*-
 * ⭐️ Home file
 *
 * Responsible for the main SPA webapp imports
 *
-*/

import HomeEntry from './home/entry'

// eslint-disable-next-line no-undef
const browser = window

const initialize = () => {
  if (browser.setupApp) {
    browser.setupApp({
      before: (appName = 'App') => {
        browser[appName] = {
          HomeEntry,
        }
      },
    })
  } else { throw Error('Missing setup app implementation.') }
}

initialize()
