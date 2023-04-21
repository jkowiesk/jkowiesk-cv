import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { SphereGeometryProps, useLoader } from '@react-three/fiber'
import Shader from '@/templates/Shader/Shader'
import Fogs from './Cloud'

type Props = {
  simple?: boolean
}

export default function Floor({ simple }: Props) {
  const material = useRef<any>()
  const plane = useRef<any>()
  const floor = useRef<any>()

  const ROW = 256

  useEffect(() => {
    if (plane.current) {
      const count = plane.current.attributes.position.count
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
      plane.current.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    }
  }, [])

  useEffect(() => {
    floor.current.renderOrder = 1
  }, [floor])

  return (
    <>
      <mesh ref={floor} rotation-x={-1} position={[0, 0, -8]}>
        <planeGeometry ref={plane} args={[64, 64, ROW, ROW]} />
        <Shader ref={material} />
      </mesh>
      {!simple && <Fogs />}
    </>
  )
}
