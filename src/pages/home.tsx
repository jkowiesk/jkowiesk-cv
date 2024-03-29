import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AboutMe from '@/components/dom/AbouMe'
import Skills from '@/components/dom/Skills'
import { LastHoveredBallProvider } from '@/contexts/lastHoveredBall'
import { useEffect, useState } from 'react'
import Curtain from '@/components/dom/Curtain'
import Education from '@/components/dom/Education'
import Projects from '@/components/dom/Projects'
import Contact from '@/components/dom/Contact'
import Footer from '@/components/dom/Footer'
import { scrollToSection } from '@/utils/functions'

const BackgroundStage = dynamic(() => import('@/components/canvas/BackgroundStage'), { ssr: false })

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
              <h1 className='text-contrast'>Software dev</h1>
            </div>
            <Image src='/icons/avatar.png' alt='avatar' width={200} height={200} />
          </div>
          <a
            onClick={() => {
              scrollToSection('#about-me')
            }}
            className='fixed left-0 right-0 mx-auto cursor-pointer bottom-12 w-fit group'>
            <ArrowDown />
          </a>
        </main>

        <div className='relative flex flex-col w-full bg-gradient-to-l from-black to-background z-2 gap-32'>
          <AboutMe />
          <Education />
          <LastHoveredBallProvider>
            <Skills />
          </LastHoveredBallProvider>
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

Page.canvas = (props) => <BackgroundStage {...props} />

export async function getStaticProps() {
  return { props: { title: 'Home' } }
}

const ArrowDown = () => {
  return (
    <motion.svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className='w-24 h-24 mx-auto  text-paragraph group-hover:text-headline'
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror',
      }}>
      <motion.path d='M19.5 9L12 16.5L4.5 9' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <motion.path d='M19.5 15L12 22.5L4.5 15' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <motion.path d='M19.5 3L12 10.5L4.5 3' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      <motion.path d='M19.5 9L12 16.5L4.5 9' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </motion.svg>
  )
}
