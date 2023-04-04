import Button from '@/common/button'
import React from 'react'

const BtnPair = ({ title = '', Btnprop }) => {
  // Recibimos el prop y se lo pasamos
  return (
    <div className='font-medium flex pb-10'>
      <div className='btn flex flex-col items-start w-60'>
        <span className='pb-4'>&lt;Button {title} /&gt;</span>
        <Button {...Btnprop}/>
      </div>

      <div className='btn flex flex-col items-start w-60'>
        <span className='pb-4 text-gray-400 font-normal'>
          &:hover, &:focus
        </span>
        <Button {...Btnprop} hover/>
      </div>
    </div>
  )
}

export default BtnPair
