import React from 'react'
import BtnPair from './BtnPair'

const Buttons = () => {
  return (
    <>
      <BtnPair />
      <BtnPair title='variant="outline"' BtnProp={{
        option: 'variant',
        optionValue: 'outline'
      }}/>

      <BtnPair title='variant="text"' BtnProp={{
        option: 'variant',
        optionValue: 'text'
      }}/>

      <BtnPair
      title='disableShadow'
      BtnProp={{
        option: 'disableShadow'
      }}
      justOne/>

      <BtnPair
      title='Disabled'
      secondTitle='variant="text" disabled'
      OptToSecond={true}
      BtnProp={{
        textContent: 'Disabled',
        option: 'variant',
        optionValue: 'text',
        disabled: true
      }}
      />

      <BtnPair
      title='startIcon="add_shopping_cart"'
      secondTitle='endIcon="add_shopping_cart"'
      BtnProp={{
        option: 'disableShadow',
        startIcon: 'add_shopping_cart'
      }}
      ScndProp={{
        option: 'disableShadow',
        endIcon: 'add_shopping_cart'
      }}
      />
    </>
  )
}

export default Buttons
