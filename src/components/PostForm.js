import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import { Alert } from './Alert'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const { title } = this.state

    if (!title.trim()) {
      return this.props.showAlert('Enter something!')
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    }

    this.props.createPost(newPost)
    this.setState({ title: '' })
  }

  changeInputHandler = (e) =>
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <Alert text={this.props.alert} />

        <div className='form-group'>
          <label htmlFor='title'>Post's label</label>
          <input
            type='text'
            className='form-control'
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>

        <button className='btn btn-success mt-2 mb-2' type='submit'>
          Create
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
}

const mapStateToProps = (state) => ({
  alert: state.app.alert,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
