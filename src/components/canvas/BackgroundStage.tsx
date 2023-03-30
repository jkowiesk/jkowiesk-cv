import * as THREE from 'three'

import Shader from '@/templates/Shader/Shader'
import Floor from './Floor'

import { useEffect, useMemo, useRef } from 'react'
import { Vector3, Vector3Props, useThree } from '@react-three/fiber'
import { DOM_VENUSES, cameraDefault } from '@/utils/global'
import Venus from './Venus'
import { Environment } from '@react-three/drei'
import { SunEnvironment, Sun } from './Sun'

type Props = {
  title: string
  setLoaded: () => void
}

export default function BackgroundStage({ title, setLoaded }: Props) {
  const test = useRef<any>()
  const { camera } = useThree()
  const lookAtPoint = useMemo<Vector3Props>(() => new THREE.Vector3(0, 0, 0), [])

  useEffect(() => {
    const [x, y, z] = cameraDefault
    camera.position.x = x
    camera.position.y = y
    camera.position.z = z
    camera.lookAt(lookAtPoint)
    setLoaded()
  }, [])

  return (
    <>
      <Environment>
        <SunEnvironment />
      </Environment>
      {DOM_VENUSES.map(({ position }, idx) => (
        <Venus key={idx} position={position} />
      ))}
      <Floor />
    </>
  )
}
