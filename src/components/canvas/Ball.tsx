// write a component in which circles would bounce inside it and then when you hover over them they would change color and text would change

import { motion } from 'framer-motion-3d'
import { forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, useTexture } from '@react-three/drei'
import { primary, SKILLS, starsToSize } from '@/utils/global'
import { LastHoveredBallContext, SetLastHoveredBallContext } from '@/contexts/lastHoveredBall'

type Props = {
  ballBody: CANNON.Body
  skillIdx: number
}

export default function Ball({ ballBody, skillIdx }: Props) {
  const ball = useRef<THREE.Mesh>()
  const setLastHovered = useContext(SetLastHoveredBallContext)
  const { color, name, customTexture, rating } = SKILLS[skillIdx]
  let texturePath: string
  if (customTexture) {
    texturePath = '/skills/textures/' + name + '.png'
  } else {
    texturePath = '/skills/textures/black.png'
  }

  const texture = useTexture(texturePath)

  const alphaTexture = useTexture('/skills/textures/' + name + '-alpha.png')

  // @ts-ignore
  const radius = starsToSize.get(rating)

  useEffect(() => {
    console.log(ballBody)
  }, [])

  useFrame(() => {
    if (ball.current && ballBody) {
      const { x, y, z } = ballBody.position
      ball.current.position.set(x, y, z)

      const { x: rx, y: ry, z: rz } = ballBody.quaternion
      const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz))
      ball.current.quaternion.copy(quaternion)
    }
  })

  const onBallDown = useCallback(() => {
    // make ball bigger and set speed to
    setLastHovered(skillIdx)
  }, [])

  const onBallUp = useCallback(() => {
    // make ball bigger and set speed to 0
  }, [])

  return (
    <>
      <motion.mesh
        ref={ball}
        position={[-1, -1, -1]}
        onPointerDown={onBallDown}
        onPointerUp={onBallUp}
        animate={{ x: 0, y: 0, z: 0 }}>
        <sphereGeometry args={[radius, 20, 20]} />
        <meshLambertMaterial color={color} />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[radius + 0.01, 20, 20]} />
          <meshLambertMaterial map={texture} alphaMap={alphaTexture} transparent />
        </mesh>
      </motion.mesh>
    </>
  )
}
