import {combineReducers} from 'redux'

import {mainView} from './view-reducer'

const rootReducer = combineReducers({
  mainContent : mainView 
})

export default rootReducer;