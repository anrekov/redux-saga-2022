import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['fuck', 'php']

export const forbiddenWordsMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === CREATE_POST) {
      const found = forbidden.filter((w) => action.payload.title.includes(w))
      if (found.length) {
        return dispatch(showAlert('You are a spammer, go away!'))
      }
    }

    return next(action)
  }
