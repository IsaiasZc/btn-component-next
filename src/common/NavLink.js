import React from 'react'

const NavLink = ({ name }) => {
  return (
    <a href='#' className='text-neutral-400 font-medium hover:text-black'>{ name }</a>
  )
}

export default NavLink
