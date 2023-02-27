import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { SphereGeometryProps, useLoader } from '@react-three/fiber'
import Shader from '@/templates/Shader/Shader'

export default function Floor() {
  const floor = useLoader(THREE.TextureLoader, '/square.png')

  const material = useRef<any>()
  const sphere = useRef<any>()

  const ROW = 15

  useEffect(() => {
    if (sphere.current) {
      const count = sphere.current.attributes.position.count
      const randoms = new Float32Array(count)

      for (let i = ROW + 1; i < count; i += 2) {
        const rand = Math.random() + 0.1

        if (i % (ROW + 1) === 0 && i !== ROW + 1) {
          i += ROW + 1
        }

        randoms[i - ROW - 1] = rand
        randoms[i - ROW] = rand
        randoms[i] = rand
        randoms[i + 1] = rand
      }
      sphere.current.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    }
  }, [])

  /* useEffect(() => {
    console.log(floor)
  }, [floor]) */

  return (
    <mesh>
      <planeGeometry ref={sphere} args={[5, 5, ROW, ROW]} />
      <Shader ref={material} />
    </mesh>
  )
}
