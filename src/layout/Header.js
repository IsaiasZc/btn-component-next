import NavLink from '@/common/NavLink'
import React from 'react'

const options = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid']

const Header = () => {
  return (
    <nav className='w-1/5 max-w-max min-h-screen p-7 bg-neutral-100'>
        <h3 className='text-lg font-bold pb-32'>Button Web Page</h3>
        <div className='flex flex-col gap-5'>
          {
            options.map((option, idx) => {
              return <NavLink key={`nav-${idx}}`} name={option}/>
            })
          }
        </div>
    </nav>
  )
}

export default Header
