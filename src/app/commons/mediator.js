/*- ⭐️ Main Mediator
 * ----------------------------------------------
 *
 * Mediates events which belong to all `your box` project
 *
-*/

import _ from 'lodash'

import abstractMediator from '../core/mediator'

const mediator = _.assign(Object.create(abstractMediator), {
  y: 8,
})

export default mediator
