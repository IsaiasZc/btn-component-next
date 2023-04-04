import React from 'react'

const options = {
  original: {
    def: 'bg-neutral-200 bg-neutral-200 rounded-md text-neutral-700',
    hover: 'bg-neutral-200 bg-neutral-400 rounded-md text-neutral-700'
  },
  variant: {
    outline: {
      def: 'bg-neutral-200 bg-white rounded-md border text-blue-600 border-blue-500',
      hover: 'bg-blue-100 rounded-md border border-blue-500 text-blue-600'
    },
    text: {
      def: 'bg-neutral-200 bg-white rounded-md text-blue-600',
      hover: 'bg-blue-100 rounded-md text-blue-600'
    }
  },
  disableShadow: {
    def: '!bg-blue-600 rounded-md !text-white',
    hover: '!bg-blue-600 rounded-md !text-white'
  },
  disabled: {
    def: 'bg-neutral-200 bg-neutral-200 rounded-md text-gray-400',
    hover: 'bg-blue-100 rounded-md text-gray-400'
  }
}

const Button = ({
  option,
  optionValue,
  textContent,
  disabled,
  startIcon,
  endIcon,
  hover = false
}) => {
  // console.log('Button', content)

  let classObj

  // Detectamos las opciones que escribió el usuario para darle el CSS correspondiente
  if (option && optionValue) {
    classObj = options[option][optionValue]
  } else if (option) {
    classObj = options[option]
  } else {
    classObj = options.original
  }

  console.log(classObj)

  return (
    <>
      <button name={`${option} ${optionValue}`}
      className={ `font-medium px-4 py-2 flex gap-2 ${hover ? classObj.hover : classObj.def} ${disabled ? ' !text-gray-400' : ''}`}
      >
        {startIcon && <span className='material-symbols-outlined'>{startIcon}</span>}
        { textContent || 'Default'}
        {endIcon && <span className='material-symbols-outlined'>{endIcon}</span>}
      </button>
    </>
  )
}

export default Button
