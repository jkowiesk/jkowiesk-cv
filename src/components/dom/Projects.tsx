// section for my group projects and personal projects
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import Link from 'next/link'
import Image from 'next/image'

const lato = Lato({ weight: '400', subsets: ['latin'] })
const lato_bold = Lato({ weight: '700', subsets: ['latin'] })
const soundboard = localFont({ src: '../../fonts/soundboard.otf', preload: true })

// make a map with all the projects and their hover state

const PROJECTS = {
  pasty: false,
  soundboard: false,
  portfolio: false,
}

export default function Projects() {
  const [projectsHover, setProjectsHover] = useState(PROJECTS)
  const [wasInView, setWasInView] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref)

  if (inView && !wasInView) {
    setWasInView(true)
  }

  return (
    <section id='projects' className='flex flex-col py-14 h-[100vh] px-28 '>
      <div className='flex justify-between w-full'>
        <h1 className='text-5xl text-headline'>
          Projec<span className='textGradient bg-gradient-to-t'>ts</span>
        </h1>
        <ProjectIcon />
      </div>

      <div className='flex flex-col items-center w-full h-full pt-16 gap-16'>
        Firstly{' '}
        <h3 className='flex-none p-4 text-2xl text-center text-gray-300 w-[70ch] leading-[3rem] word-spacing'>
          <motion.span
            animate={{ y: projectsHover.pasty ? '-15px' : '0', rotate: projectsHover.pasty ? [0, -10, 10, 0] : 0 }}
            transition={{ y: { duration: 1 }, rotate: { repeat: Infinity, duration: 1, delay: 1, repeatDelay: 2 } }}
            className={`text-pasty relative inline-block ${lato.className}`}>
            Pasty
          </motion.span>{' '}
          which is a social media platform where you can share and copy stories, then{' '}
          <motion.span
            animate={{
              y: projectsHover.soundboard ? '-15px' : '0',
              rotate: projectsHover.soundboard ? [0, -10, 10, 0] : 0,
            }}
            transition={{ y: { duration: 1 }, rotate: { repeat: Infinity, duration: 1, delay: 1, repeatDelay: 2 } }}
            className={`text-sb inline-block ${soundboard.className}`}>
            Soundboard
          </motion.span>{' '}
          which is a simple app that lets you create your own custom Android soundboard with you&apos;re favorite
          sounds. And of course{' '}
          <motion.span
            animate={{
              y: projectsHover.portfolio ? '-15px' : '0',
              rotate: projectsHover.portfolio ? [0, -10, 10, 0] : 0,
            }}
            transition={{ y: { duration: 1 }, rotate: { repeat: Infinity, duration: 1, delay: 1, repeatDelay: 2 } }}
            className={`textGradient bg-gradient-to-t inline-block`}>
            my&nbsp;portfolio
          </motion.span>
          , where you can get to know things about me.
        </h3>
        <div className='flex flex-1 w-full gap-16'>
          <Link href='https://github.com/jkowiesk/Pasty' className='flex-1 px-8 gap-8'>
            <motion.article
              onHoverStart={() => setProjectsHover((prev) => ({ ...prev, pasty: true }))}
              onHoverEnd={() => setProjectsHover((prev) => ({ ...prev, pasty: false }))}
              animate={{ background: projectsHover.pasty ? '#f7bf4f4c' : '#00000000' }}
              className='flex flex-col items-center w-full h-full border-4 border-b-8 border-solid shadow-2xl border-pasty rounded-2xl'>
              <h2 className={`p-4 text-yellow-600 text-2xl ${lato_bold.className}`}>P A S T Y</h2>
              <span className='relative flex-none w-full overflow-hidden rounded-lg border-pasty border-y-2 h-[19rem] grid place-items-center'>
                <motion.img
                  animate={{ scale: projectsHover.pasty ? 1.2 : 1, transition: { duration: 2 } }}
                  src='/screenShots/pasty.png'
                  className='object-cover w-full'
                  alt='pasty'
                />
              </span>
              <div className='flex-1 w-full bg-pasty/30  '>
                <p className='p-2 text-headline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </motion.article>
          </Link>
          <Link href='https://github.com/jkowiesk/SoundboardGenerator' className='flex-1 px-8 gap-8'>
            <motion.article
              onHoverStart={() => setProjectsHover((prev) => ({ ...prev, soundboard: true }))}
              onHoverEnd={() => setProjectsHover((prev) => ({ ...prev, soundboard: false }))}
              animate={{ background: projectsHover.soundboard ? '#dd4c354c' : '#00000000' }}
              className='flex flex-col items-center w-full h-full border-4 border-b-8 border-solid shadow-2xl border-sb rounded-2xl'>
              <h2 className={`p-4 text-red-600 text-2xl ${soundboard.className}`}>Soundboard</h2>
              <span className='relative flex-none w-full overflow-hidden rounded-lg border-sb border-y-2 h-[19rem] grid place-items-center'>
                <motion.img
                  animate={{ scale: projectsHover.soundboard ? 1.2 : 1.02, transition: { duration: 2 } }}
                  src='/screenShots/soundboard.png'
                  className='object-cover w-full'
                  alt='soundboard'
                />
              </span>
              <div className=' w-full bg-sb/30  '>
                <p className='p-2 text-headline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </motion.article>
          </Link>
          <Link href='https://github.com/jkowiesk/jkowiesk-cv' className='flex-1 px-8 gap-8'>
            <motion.article
              onHoverStart={() => setProjectsHover((prev) => ({ ...prev, portfolio: true }))}
              onHoverEnd={() => setProjectsHover((prev) => ({ ...prev, portfolio: false }))}
              animate={{ background: projectsHover.portfolio ? '#ad54b44c' : '#00000000' }}
              className='flex flex-col items-center w-full h-full border-4 border-b-8 border-solid shadow-2xl border-purple-primary rounded-2xl'>
              <h2 className={`p-4 text-purple-secondary text-2xl `}>jkowiesk</h2>
              <span className='relative flex-none w-full overflow-hidden rounded-lg border-purple-primary border-y-2 h-[19rem] grid place-items-center'>
                <motion.img
                  animate={{ scale: projectsHover.portfolio ? 1.2 : 1, transition: { duration: 2 } }}
                  src='/screenShots/portfolio.png'
                  className='object-cover w-full'
                  alt='pasty'
                />
              </span>
              <div className='flex-1 w-full bg-purple-primary/30  '>
                <p className='p-2 text-headline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </motion.article>
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProjectIcon = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      fill='url(#grad1)'
      className='z-50 w-16 h-16'
      viewBox='0 0 1024 1024'
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}>
      <linearGradient id='grad1' x1='0%' x2='100%' y1='0%' y2='0%'>
        <stop offset='0%' stopColor='#647DEE'></stop>
        <stop offset='100%' stopColor='#FC2977'></stop>
      </linearGradient>
      <motion.path
        animate={{ opacity: isHover ? 1 : 0 }}
        d='M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z'></motion.path>
      <path d='M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 512H160V232h704v440z'></path>
    </motion.svg>
  )
}
