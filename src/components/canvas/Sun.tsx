import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export default function Sun() {
  const sun = useRef<any>()

  return (
    <mesh ref={sun} scale={0.8} position={[0, 0, -1]}>
      <circleGeometry args={[1, 40]} />
      <meshBasicMaterial color={'red'} />
    </mesh>
  )
}
