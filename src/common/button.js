import React from 'react'

const options = {
  original: {
    def: 'font-medium px-4 py-2 bg-neutral-200 bg-neutral-200 rounded-md text-neutral-700',
    hover: 'font-medium px-4 py-2 bg-neutral-200 bg-neutral-400 rounded-md text-neutral-700'
  },
  variant: {
    outline: {
      def: 'font-medium px-4 py-2 bg-neutral-200 bg-neutral-200 rounded-md text-neutral-100',
      hover: 'font-medium px-4 py-2 bg-neutral-200 bg-neutral-400 rounded-md text-neutral-300'
    }
  }
}

const Button = ({ variant, color, original = false, hover = false }) => {
  // console.log('Button', content)

  let classObj

  // Detectamos las opciones que escribió el usuario para darle el CSS correspondiente
  if (variant) {
    classObj = options.original
  } else {
    classObj = options.original
  }

  return (
    <>
      <button
      className={ hover ? classObj.hover : classObj.def}
      >
        { color || 'Default'}
      </button>
    </>
  )
}

export default Button
