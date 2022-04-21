import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Loader } from './Loader'

function FetchedPosts() {
  const dispatch = useDispatch()
  const { fetchedPosts } = useSelector((state) => state.posts)
  const { loading } = useSelector((state) => state.app)

  if (loading) {
    return <Loader />
  }

  if (!fetchedPosts.length) {
    return (
      <button
        className='btn btn-primary'
        onClick={() => dispatch(fetchPosts())}
      >
        Load
      </button>
    )
  }

  return fetchedPosts.map((post) => <Post post={post} key={post.id} />)
}

export default FetchedPosts
