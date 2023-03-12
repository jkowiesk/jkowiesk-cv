import * as THREE from 'three'
import { useEffect, useRef } from 'react'

type Props = {
  position?: [number, number, number]
}

export default function Sun({ position = [0, 0, -1] }: Props) {
  const sun = useRef<any>()

  return (
    <mesh ref={sun} scale={0.8} position={position}>
      <circleGeometry args={[1, 40]} />
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}
