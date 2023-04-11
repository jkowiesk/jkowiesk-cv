import { scrollToSection } from '@/utils/functions'
import { motion } from 'framer-motion'

type Prpos = {
  children: string
  goTo: string
}

export default function Next({ children, goTo }) {
  return (
    <motion.a
      onClick={() => scrollToSection(goTo)}
      className='absolute left-0 right-0 p-2 mx-auto bg-transparent cursor-pointer rounded-xl hover:bg-gradient-to-l group bottom-[5vh] max-w-fit hover:gradientFlashy'>
      <a className=' textGradientFlashy bg-gradient-to-l group-hover:text-headline'>{children}</a>
    </motion.a>
  )
}
