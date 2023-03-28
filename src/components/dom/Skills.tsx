// write a component in which circles would bounce inside it and then when you hover over them they would change color and text would change

import { motion } from 'framer-motion'
import { useContext, useMemo, useState } from 'react'
import { BsScrewdriver } from 'react-icons/bs'
import BouncingScene from '../canvas/BouncingScene'
import { LastHoveredBallContext } from '@/contexts/lastHoveredBall'
import { SKILLS } from '@/utils/global'
import Image from 'next/image'

export default function Skills() {
  const [isHover, setIsHover] = useState(false)
  const lastHovered = useContext(LastHoveredBallContext)

  const { name, displayName, color, description } = useMemo<Skill>(() => SKILLS[lastHovered], [lastHovered])

  return (
    <section className='flex flex-col py-14 h-[100vh] px-28'>
      <div className='flex justify-between w-full'>
        <h1 className='text-5xl text-headline'>
          Skil<span className='textGradient bg-gradient-to-t'>ls</span>
        </h1>
        <motion.div className='relative ' onHoverStart={() => setIsHover(true)} onHoverEnd={() => setIsHover(false)}>
          <motion.div animate={{ rotate: isHover ? -90 : 0, x: isHover ? -20 : 0, transition: { duration: 0.8 } }}>
            <Wrench />
          </motion.div>
          <motion.span
            className='absolute left-1 top-1'
            animate={{ rotate: isHover ? 90 : 0, x: isHover ? 20 : 0, transition: { duration: 0.8 } }}>
            <ScrewDriver />
          </motion.span>
        </motion.div>
      </div>

      <div className='flex justify-between h-full'>
        <div className='relative w-1/2'>
          <BouncingScene />
        </div>
        <div className='flex flex-col w-1/2 px-16 py-8'>
          <div className='flex items-center justify-between'>
            <span className='flex gap-8'>
              <motion.span
                key={lastHovered}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                style={{ color }}
                className='text-6xl '>
                {displayName}
              </motion.span>

              <motion.span
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                className='text-6xl text-headline'>
                {'{'}
              </motion.span>
            </span>

            <motion.span
              key={lastHovered}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}>
              <Image width={128} height={128} src={`/skills/icons/${name}.png`} alt='image' priority />
            </motion.span>
          </div>

          <section className='py-12 ml-8'>
            <h2 className='text-2xl text-contrast'>description: </h2>
            <p className='text-2xl whitespace-pre-wrap text-paragraph'>{description}</p>
          </section>

          <h1 className='text-6xl text-headline'>{'}'}</h1>
        </div>
      </div>
    </section>
  )
}

const Wrench = () => (
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
    </linearGradient>
    <path
      stroke-linecap='round'
      stroke-linejoin='round'
      d='M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z'
    />
    <path stroke-linecap='round' stroke-linejoin='round' d='M4.867 19.125h.008v.008h-.008v-.008z' />
  </svg>
)

const ScrewDriver = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='url(#grad1)'
    strokeWidth='0.8'
    className='w-16 h-16'
    viewBox='0 0 24 24'>
    <linearGradient id='grad1' x1='0%' x2='100%' y1='0%' y2='0%'>
      <stop offset='0%' stopColor='#647DEE'></stop>
      <stop offset='100%' stopColor='#FC2977'></stop>
    </linearGradient>
    <path d='M0 .995.995 0l3.064 2.19a.995.995 0 0 1 .417.809v.07c0 .264.105.517.291.704l5.677 5.676.909-.303a.995.995 0 0 1 1.018.24l3.338 3.339a.995.995 0 0 1 0 1.406L14.13 15.71a.995.995 0 0 1-1.406 0l-3.337-3.34a.995.995 0 0 1-.24-1.018l.302-.909-5.676-5.677a.995.995 0 0 0-.704-.291H3a.995.995 0 0 1-.81-.417L0 .995Zm11.293 9.595a.497.497 0 1 0-.703.703l2.984 2.984a.497.497 0 0 0 .703-.703l-2.984-2.984Z' />
  </svg>
)
