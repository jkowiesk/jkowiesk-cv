import * as THREE from 'three'
import { useEffect, useRef } from 'react'

export default function Sun() {
  const sun = useRef<any>()

  return (
    <mesh ref={sun} position={[0, 0, -20]}>
      <sphereGeometry args={[8, 30, 30]} />
      <meshLambertMaterial color={0xff0000} />
    </mesh>
  )
}
