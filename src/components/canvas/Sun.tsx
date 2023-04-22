import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useTexture } from '@react-three/drei'

type Props = {
  position?: [number, number, number]
}

export function Sun({ position = [0, 0, -30] }: Props) {
  const [sunTexture, alphaTexture] = useTexture(['/textures/sun.png', '/textures/sunAlpha.png'])
  let [x, y, z] = position
  y += 3.5

  return (
    <>
      <mesh scale={0.8} position={[x, y, z]}>
        <sphereGeometry args={[8, 40, 40]} />
        <meshBasicMaterial map={sunTexture} transparent alphaMap={alphaTexture} />
      </mesh>
      <mesh scale={0.8} position={[x, y, z + 1]}>
        <sphereGeometry args={[8.2, 40, 40]} />
        <meshPhysicalMaterial
          map={sunTexture}
          alphaMap={alphaTexture}
          transparent
          opacity={0.1}
          alphaTest={0.001}
          color={'red'}
        />
      </mesh>
    </>
  )
}

export function SunEnvironment() {
  const sun = useRef<any>()
  const [sunTexture] = useTexture(['/textures/sun.png'])

  return (
    <mesh ref={sun} scale={0.8} position={[0, 0, -1]}>
      <circleGeometry args={[1, 40]} />
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}
