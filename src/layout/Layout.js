import Buttons from '@/containers/Buttons'
import React from 'react'

const Layout = () => {
  return (
    <main className="w-full overflow-x-auto h-screen dark:bg-slate-800 ">
      <div className="pl-20">
        <h1 className="text-2xl my-12 font-medium dark:text-white">Buttons</h1>
        <Buttons />
      </div>
    </main>
  )
}

export default Layout
