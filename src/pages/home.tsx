import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AboutMe from '@/components/dom/AbouMe'
import Skills from '@/components/dom/Skills'
import { LastHoveredBallProvider } from '@/contexts/lastHoveredBall'
import { useEffect, useState } from 'react'
import Curtain from '@/components/dom/Curtain'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49

const BackgroundStage = dynamic(() => import('@/components/canvas/BackgroundStage'), { ssr: false })

// Dom components go here
export default function Page(props) {
  const [isCurtainOpen, setIsCurtainOpen] = useState(true)

  useEffect(() => {
    const curtainClose = setTimeout(() => {
      setIsCurtainOpen(false)
    }, 1000)

    return () => clearTimeout(curtainClose)
  }, [])

  return (
    <>
      {isCurtainOpen && <Curtain />}
      <div>
        <main className='relative w-[100vw] h-[100vh] grid place-items-center z-1'>
          <div className='absolute top-0 left-0 bg-black w-[100vw] h-[100vh] opacity-70'></div>
          <div className='fixed flex items-center justify-between w-1/3 h-64'>
            <div className='text-5xl'>
              <h1 className='text-2xl text-paragraph'>Hi I&#39;m,</h1>
              <h1 className='text-headline'>Jakub Kowieski</h1>
              <h1 className='text-contrast'>Front-end dev</h1>
            </div>
            <Image src='/icons/avatar.png' alt='avatar' width={200} height={200} />
          </div>
        </main>

        <div className='relative w-full bg-gradient-to-l from-black to-background z-2'>
          <AboutMe />
          <LastHoveredBallProvider>
            <Skills />
          </LastHoveredBallProvider>
        </div>
      </div>
    </>
  )
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <BackgroundStage {...props} />

export async function getStaticProps() {
  return { props: { title: 'Home' } }
}

{
  /* <div className='relative flex items-center justify-between w-1/3 h-64'>
  <div className='text-5xl'>
    <h1 className='text-paragraph'>Hi I&#39;m,</h1>
    <h1 className='text-headline'>Jakub Kowieski</h1>
    <h1 className='text-contrast'>Front-end dev</h1>
  </div>
  <Image className='' src='/icons/avatar.png' alt='avatar' width={200} height={200} />
</div> */
}
