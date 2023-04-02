import Header from '@/layout/Header'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <div className='flex w-screen'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
