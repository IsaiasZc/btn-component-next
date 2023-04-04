import React from 'react'
import BtnPair from './BtnPair'
import MultiBtns from './MultiBtns'

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

      {/* Here Begins the multiButtons */}

      <MultiBtns
      titles={[
        'size="sm"',
        'size="md"',
        'size="lg"'
      ]}
      btnsProps={[
        {
          option: 'disableShadow',
          size: 'sm'
        },
        {
          option: 'disableShadow',
          size: 'md'
        },
        {
          option: 'disableShadow',
          size: 'lg'
        }
      ]}

      />

      <MultiBtns
      titles={[
        'color="default"',
        'color="primary"',
        'color="secondary"',
        'color="danger"'
      ]}
      btnsProps={[
        {
          option: 'original',
          textContent: 'Default',
          color: 'default'
        },
        {
          option: 'original',
          textContent: 'Primary',
          color: 'primary'
        },
        {
          option: 'original',
          textContent: 'Secondary',
          color: 'secondary'
        },
        {
          option: 'original',
          textContent: 'Danger',
          color: 'danger'
        }
      ]}
      hover
      />
    </>
  )
}

export default Buttons
