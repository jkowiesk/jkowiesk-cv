import * as THREE from 'three'
import { useEffect, useRef } from 'react'

type Props = {
  position?: [number, number, number]
}

export function Sun({ position = [0, 0, -30] }: Props) {
  const sun = useRef<any>()

  return (
    <mesh ref={sun} scale={0.8} position={position}>
      <sphereGeometry args={[8, 40, 40]} />
      <meshLambertMaterial color={'red'} />
    </mesh>
  )
}

export function SunEnvironment() {
  const sun = useRef<any>()

  return (
    <mesh ref={sun} scale={0.8} position={[0, 0, -1]}>
      <circleGeometry args={[1, 40]} />
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}
