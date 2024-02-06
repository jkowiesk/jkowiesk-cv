import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import { RouterLoading } from '@/components/dom/RouterLoading'
import { useRouter } from 'next/router'
import FirstLoading from '@/components/dom/FirstLoading'
import Stage from '@/components/canvas/Stage'
import { Michroma } from 'next/font/google'

const michroma = Michroma({ subsets: ['latin'], weight: '400' })

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const setLoaded = () => setIsLoading(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile)
    return (
      <>
        <Header title={pageProps.title} />
        <div
          className={`${michroma.className} text-center text-2xl fixed top-0 bottom-0 left-0 right-0 place-items-center w-full h-full text-purple-primary bg-background grid`}>
          Website is only available on desktop ☹
        </div>
      </>
    )

  return (
    <>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas({ ...pageProps, setLoaded })}
          </Scene>
        )}
      </Layout>
      {isLoading ? <FirstLoading /> : <Component {...pageProps} />}
      <RouterLoading />
    </>
  )
}
