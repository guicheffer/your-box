/*- ⭐️ Common Mediator
 * ----------------------------------------------
 *
 * Mediates events which belong to all `yourbox.com` project
 *
-*/

import _ from 'lodash'

import abstractMediator from '../core/mediator'

const mediator = _.assign(Object.create(abstractMediator), {})

export default mediator
