import PostForm from './components/PostForm'
import Posts from './components/Posts'
import FetchedPosts from './components/FetchedPosts'

function App() {
  return (
    <div className='container pt-3'>
      <h1 style={{ textAlign: 'center' }}>React</h1>
      <hr />
      <div className='row'>
        <PostForm />
      </div>

      <div className='row'>
        <div className='col'>
          <h2>Sync posts</h2>
          <Posts posts={[]} />
        </div>
        <div className='col'>
          <h2>Async posts</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default App

/*
  REDUX SAGA - позволяет работать с сайд эффектами (реакциями)
  
*/ 