import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_ALERT,
  SHOW_LOADER,
} from './types'

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
})

// REDUX THUNK

// export const fetchPosts = () => async (dispatch) => {
//   try {
//     dispatch(showLoader())

//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/posts?_limit=5'
//     )
//     const json = await response.json()

//     setTimeout(async () => {
//       dispatch({ type: FETCH_POSTS, payload: json })
//       dispatch(hideLoader())
//     }, 1500)
//   } catch (err) {
//     dispatch(showAlert('api error' + err, 5000))
//     dispatch(hideLoader())
//   }
// }

// ТАКЖЕ НО С REDUX SAGA

export const fetchPosts = () => ({
  type: REQUEST_POSTS,
})

export const showLoader = () => ({
  type: SHOW_LOADER,
})

export const hideLoader = () => ({
  type: HIDE_LOADER,
})

export const showAlert =
  (text, timeout = 2000) =>
  (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, timeout)
  }

export const hideAlert = () => ({
  type: HIDE_ALERT,
})
