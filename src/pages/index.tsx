import { Michroma } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import Scroll from '@/templates/Scroll'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import ArrowRight from '@/components/dom/ArrowRight'
import Link from 'next/link'

const Stage = dynamic(() => import('@/components/canvas/Stage'), { ssr: false })

const michroma = Michroma({ subsets: ['latin'], weight: '400' })

// simple header that apperas on top of the canvas and is not affected by the scroll effect (position: fixed)
export default function Page(props) {
  const [isShowing, setIsShowing] = useState(true)
  const [isObjective, setIsObjective] = useState(false)
  const [toHomepage, setToHomepage] = useState(false)
  useEffect(() => {
    const close = setTimeout(() => {
      setIsShowing(false)
      setIsObjective(true)
    }, 6000)

    return () => clearTimeout(close)
  }, [])

  // add timer that changes state after 20 seconds

  useEffect(() => {
    const close = setTimeout(() => {
      setToHomepage(true)
    }, 30000)

    return () => clearTimeout(close)
  }, [])

  useEffect(() => {
    const close = setTimeout(() => {
      setIsObjective(false)
    }, 13000)

    return () => clearTimeout(close)
  }, [])

  return (
    <Scroll>
      <AnimatePresence>
        {isShowing && (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 1 }}
            className={`fixed left-16 right-0 flex items-center mx-auto w-fit bottom-16 gap-4 ${michroma.className}`}>
            <h1 className='text-2xl text-headline'>Use mouse scroll to move</h1>
            <Image src='/gifs/mouse-scroll.gif' width={40} height={40} alt='mouse-scroll' />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isObjective && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 2 }}
            className={`fixed left-16 top-32 w-fit ${michroma.className}`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className='text-2xl text-contrast'>
              Objective:{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 3 } }}
              exit={{ opacity: 0 }}
              className='text-xl opacity-0 text-headline'>
              Get into the portal
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {toHomepage && (
          <motion.div
            initial={{ x: '0' }}
            animate={{ x: '-100px' }}
            transition={{ duration: 2 }}
            className={`fixed -right-16 top-32 w-fit ${michroma.className}`}>
            <Link href='/home'>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0 }}
                className='flex items-center justify-center text-2xl text-contrast gap-2'>
                go to <span className='text-purple-primary'>Home</span> page
                <ArrowRight />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Scroll>
  )
}

Page.canvas = (props) => <Stage {...props} />

export async function getStaticProps() {
  return { props: { title: 'Portal' } }
}
