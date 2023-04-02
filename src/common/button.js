import React from 'react'

const Button = ({ content, classes }) => {
  console.log('Button', content)
  return (
    <>
      <button className={classes} >{content}</button>
    </>
  )
}

export default Button
