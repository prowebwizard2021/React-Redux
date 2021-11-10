import { combineReducers } from 'redux'
import themeReducer from '../reducers/theme'

const rootReducer = combineReducers({
    theme: themeReducer
})

export default rootReducer