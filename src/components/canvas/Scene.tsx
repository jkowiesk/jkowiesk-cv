import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { cameraDefault } from '@/utils/global'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000, position: cameraDefault }} {...props}>
      <color args={['#080a0b']} attach='background' />
      {<directionalLight intensity={0.1} position={[0, 1, 0]} />}
      <ambientLight intensity={0.1} />
      {children}
      <Preload all />
    </Canvas>
  )
}
