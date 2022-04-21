import { combineReducers } from 'redux'
import { postsReducer } from '../redux/postsReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
})
