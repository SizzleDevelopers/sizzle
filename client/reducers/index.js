import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import ingredients from './ingredients'
import skills from './skills'
import locations from './locations'
import events from './events'
import resources from './resources'

const reducers = combineReducers({
  auth,
  quote,
  ingredients,
  skills,
  locations,
  events,
  resources
})

export default reducers
