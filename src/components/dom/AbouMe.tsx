import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import TypingText from './TypingText'

export default function AboutMe() {
  const [wasInView, setWasInView] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView && !wasInView) {
      setWasInView(true)
      console.log('test')
    }
  }, [inView])

  return (
    <section className='flex flex-col py-14 h-[100vh] px-28'>
      <div className='flex justify-between w-full'>
        <h1 className='text-5xl text-headline'>
          About <span className='textGradient bg-gradient-to-t'>me</span>
        </h1>
        <motion.span
          whileHover={{ rotate: [0, -20, 20, 0] }}
          onAnimationComplete={(e) => {
            rotate: 0
          }}
          transition={{ duration: 1 }}
          whileTap={{ scale: 0.9 }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='url(#grad1)'
            strokeWidth='1.5'
            className='w-12 h-12'
            viewBox='0 0 24 24'>
            <linearGradient id='grad1' x1='0%' x2='100%' y1='0%' y2='0%'>
              <stop offset='0%' stopColor='#647DEE'></stop>
              <stop offset='100%' stopColor='#FC2977'></stop>
              {/* <stop offset='0%' style='stop-color:#b794f4;stop-opacity:1' />
                  <stop offset='50%' style='stop-color:#ed64a6;stop-opacity:1' />
                  <stop offset='100%' style='stop-color:#f56565;stop-opacity:1' /> */}
            </linearGradient>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'></path>
          </svg>
        </motion.span>
      </div>

      <div className='flex justify-between h-full mx-16'>
        <div className='flex flex-col mt-16 text-3xl text-gray-300 w-fit gap-2 h-fit'>
          <h2>
            <span className='text-6xl textGradient'>I</span>{' '}
            {wasInView && <TypingText>am a computer science student</TypingText>}
          </h2>
          <h2>
            <span className='text-6xl textGradient'>I</span>{' '}
            {wasInView && <TypingText>love exploring cutting-edge tech!</TypingText>}
          </h2>
          <h2>
            <span className='text-6xl textGradient'>I</span>{' '}
            {wasInView && <TypingText>am interested in web development</TypingText>}
          </h2>
          <h2>
            <span className='text-6xl textGradient'>I</span>{' '}
            {wasInView && <TypingText>honed my skills through many group projects</TypingText>}
          </h2>
        </div>

        <div ref={ref} className='flex-1 h-full grid place-items-center'>
          <Image src='/img/hello.png' alt='wave' width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
