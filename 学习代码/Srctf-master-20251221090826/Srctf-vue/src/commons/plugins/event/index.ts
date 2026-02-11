import { SHJParseEvent } from '@shjjs/visual-ui'

import { executeSwitchViewAction } from './actions/switchViewAction'
import { executeStateAction } from './actions/stateAction'
import { executeVisibledAction } from './actions/visibleAction'
import { executePageAction } from './actions/pageAction'

SHJParseEvent.addAction('switchView', executeSwitchViewAction)
SHJParseEvent.addAction('state', executeStateAction)
SHJParseEvent.addAction('visibled', executeVisibledAction)
SHJParseEvent.addAction('page', executePageAction)
