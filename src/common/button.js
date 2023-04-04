import React from 'react'

const options = {
  original: {
    def: 'bg-neutral-200 rounded-md text-neutral-700',
    hover: 'bg-neutral-400 rounded-md text-neutral-700'
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

const sizes = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3'
}

const colors = {
  default: {
    def: '!bg-neutral-200',
    hover: '!bg-neutral-400'
  },
  primary: {
    def: '!bg-blue-600 !text-white',
    hover: '!bg-blue-800 !text-white'
  },
  secondary: {
    def: '!bg-gray-600 !text-white',
    hover: '!bg-gray-800 !text-white'
  },
  danger: {
    def: '!bg-red-600 !text-white',
    hover: '!bg-red-800 !text-white'
  }
}

const Button = ({
  option,
  optionValue,
  textContent,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
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

  return (
    <>
      <button name={`${option} ${optionValue}`}
      className={ `font-medium ${size ? sizes[size] : sizes.md} flex gap-2 ${hover ? classObj.hover : classObj.def} ${disabled ? ' !text-gray-400' : ''} ${(color ? colors[color][hover ? 'hover' : 'def'] : '')}`}
      >
        {startIcon && <span className='material-symbols-outlined'>{startIcon}</span>}
        { textContent || 'Default'}
        {endIcon && <span className='material-symbols-outlined'>{endIcon}</span>}
      </button>
    </>
  )
}

export default Button
