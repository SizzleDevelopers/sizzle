import {combineReducers} from 'redux'
import auth from './auth'
import events from './events'
import resources from './resources'

const reducers = combineReducers({auth, events, resources})

export default reducers
