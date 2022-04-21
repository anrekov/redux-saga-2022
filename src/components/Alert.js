import React from 'react'

export const Alert = ({ text }) => {
  if (!text) {
    return null
  }

  return (
    <div className='alert alert-warning' role='alert'>
      {text}
    </div>
  )
}
