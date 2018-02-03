/*-
 * ⭐️ HomeEntry
 *
 * This is the login entry file for star wars code challenge.
 *
-*/

import AbstractEntry from '../core/entry'

class HomeEntry extends AbstractEntry {
  start ({ initilizationData }) {
    console.log(this.eventBus.x + this.eventBus.y, initilizationData)
  }
}

export default HomeEntry
