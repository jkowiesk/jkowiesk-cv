// make compopnent about my education
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Education() {
  const [isHover, setIsHover] = useState(false)

  return (
    <section id='education' className='flex flex-col py-14 h-[100vh] px-28'>
      <Image src='/img/education.svg' className='absolute bottom-0 left-0' alt='Education' width={600} height={600} />

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
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
    />
  </svg>
)
