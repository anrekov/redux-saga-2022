import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

function Posts({ posts }) {
  if (!posts.length) {
    return <p className='text-center '>No posts</p>
  }
  return posts.map((post) => <Post post={post} key={post.id} />)
}

const mapStateToProps = (state) => ({ posts: state.posts.posts })

export default connect(mapStateToProps, null)(Posts)
