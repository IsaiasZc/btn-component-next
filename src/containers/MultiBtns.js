import Button from '@/common/button'
import React from 'react'

const MultiBtns = ({ hover = false, titles = [], btnsProps = [] }) => {
  return (
    <section className=" flex flex-col dark:text-white">
      <div className="font-medium flex pb-10 gap-20">
        {btnsProps.map((btnProp, index) => (
          <div
            key={`multi-bnt-${index}}`}
            className="btn flex flex-col items-start w-60  min-w-max"
          >
            <span className="pb-4">&lt;Button {titles[index]} /&gt;</span>
            <Button {...btnProp} />
          </div>
        ))}
      </div>
      {hover && (
        <div className="font-medium flex pb-10 gap-20">
          {btnsProps.map((btnProp, index) => (
            <div
              key={`multi-bnt-${index}}`}
              className="btn flex flex-col items-start w-60  min-w-max"
            >
              <span className="pb-4">&lt;Button {titles[index]} /&gt;</span>
              <Button {...btnProp} hover/>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MultiBtns
