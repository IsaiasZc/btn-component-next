import Button from '@/common/button'
import React from 'react'

const BtnPair = ({
  title = '',
  secondTitle,
  BtnProp,
  ScndProp,
  OptToSecond = false,
  justOne = false
}) => {
  const optFirst = OptToSecond ? { ...BtnProp, option: undefined, optionValue: undefined } : BtnProp
  // Recibimos el prop y se lo pasamos
  return (
    <div className='font-medium flex pb-10 gap-20 dark:text-white'>
      <div className='btn flex flex-col items-start w-60  min-w-max'>
        <span className='pb-4'>&lt;Button {title} /&gt;</span>
        <Button {...optFirst}/>
      </div>

      {
        !justOne && (
          <div className='btn flex flex-col items-start w-60  min-w-max'>
            {
              secondTitle
                ? <span className='pb-4'>&lt;Button {secondTitle} /&gt;</span>
                : <span className='pb-4 text-gray-400 font-normal'>
              &:hover, &:focus
            </span>
            }
            {/* <span className='pb-4 text-gray-400 font-normal'>
              &:hover, &:focus
            </span> */}
            <Button {...(ScndProp || BtnProp)} hover={!OptToSecond}/>
          </div>
        )
      }
    </div>
  )
}

export default BtnPair
