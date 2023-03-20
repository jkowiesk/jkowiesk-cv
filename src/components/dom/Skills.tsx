// write a component in which circles would bounce inside it and then when you hover over them they would change color and text would change

import { motion } from 'framer-motion'
import { useState } from 'react'
import BouncingScene from '../canvas/BouncingScene'

export default function Skills() {
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }
  return (
    <section className='flex flex-col py-14 h-[100vh] px-28'>
      <BouncingScene />
    </section>
  )
}
