// make compopnent about my education
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import EducationSvg from '../../../public/img/education.svg'
import Next from './Next'

export default function Education() {
  const [isHover, setIsHover] = useState(false)
  const [wasInView, setWasInView] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref)

  if (inView && !wasInView) {
    setWasInView(true)
  }

  return (
    <section id='education' className='relative flex flex-col py-14 h-[100vh] px-28'>
      <Image
        priority
        src='/img/pigeon.gif'
        alt='Pigeon'
        className='absolute left-16 bottom-[49vh]'
        width={90}
        height={90}
      />
      <Image
        src='/img/education.png'
        className='absolute bottom-0 left-0 '
        alt='Education'
        ref={ref}
        width={600}
        height={600}
        loading='eager'
        priority
      />

      <div className='flex justify-between w-full'>
        <h1 className='text-5xl text-headline'>
          Educati<span className='textGradient bg-gradient-to-t'>on</span>
        </h1>
        <motion.span
          whileHover={{ rotate: [0, -20, 20, 0] }}
          onAnimationComplete={(e) => {
            rotate: 0
          }}
          transition={{ duration: 1 }}>
          <Hat />
        </motion.span>
      </div>

      <div className='flex justify-between h-full '>
        <div className='flex-1 px-16 py-8'></div>
        <div className='flex flex-col flex-none py-8 w-[45rem] gap-16'>
          <h2 className='text-5xl text-contrast'>Warsaw University of Technology</h2>
          <div className='flex gap-32'>
            <p className='text-xl min-content flex-grow-1 text-headline'>Computer Science, BE</p>
            <div className='relative flex-1 w-full flex-grow-4'>
              {wasInView && <AnimatedSVG />}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='absolute left-[6%] top-[-100%] text-purple-primary'>
                2020
              </motion.p>
              {!!wasInView && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1, delay: 3.5 } }}
                  className='absolute right-[6%] top-[-100%] text-purple-secondary'>
                  now
                </motion.p>
              )}
            </div>
          </div>
        </div>

        <h3 className='absolute text-2xl right-[5%] text-paragraph bottom-[5%]'>
          Always was eager to learn, especially computer science
        </h3>
      </div>
      <Next goTo='#skills'>what can I do ?</Next>
    </section>
  )
}

const Hat = () => (
  <svg fill='none' stroke='url(#grad1)' strokeWidth='1.5' className='w-16 h-16' viewBox='0 0 24 24'>
    <linearGradient id='grad1' x1='0%' x2='100%' y1='0%' y2='0%'>
      <stop offset='0%' stopColor='#647DEE'></stop>
      <stop offset='100%' stopColor='#FC2977'></stop>
    </linearGradient>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
    />
  </svg>
)

const AnimatedSVG = () => {
  const rectVariants = {
    initial: {
      width: '0%',
    },
    animate: {
      width: '80%',
      transition: {
        duration: 2,
        delay: 1,
        type: 'linear',
        // Add a delay to the rect animation to make it start after the SVG moves into view
      },
    },
  }

  return (
    <motion.svg className='absolute inset-0 w-full h-full'>
      <motion.rect
        variants={rectVariants}
        initial='initial'
        animate='animate'
        className='fill-current text-headline'
        x='10%'
        y='45%'
        height='15%'
      />
      <motion.circle className='fill-current text-paragraph' cx='10%' cy='50%' r='10' />
      <motion.circle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.5, duration: 0.5 } }}
        className='fill-current text-paragraph'
        cx='90%'
        cy='50%'
        r='10'
      />
    </motion.svg>
  )
}
