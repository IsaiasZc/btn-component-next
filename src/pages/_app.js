import Header from '@/layout/Header'
import { useEffect, useState } from 'react'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  function toggleTheme () {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='flex w-full'>
      <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white absolute bottom-10 right-10" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
