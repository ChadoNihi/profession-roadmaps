import {app} from 'hyperapp'
import {actions} from 'js/actions/index.js'
import {state} from 'js/state/index.js'
import {view} from 'js/views/index.js'

import 'styles/index_roadmaps.scss'

app({
  state,
  view,
  actions
})
