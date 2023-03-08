import * as THREE from 'three'
import { useEffect, useMemo, useRef } from 'react'
import Shader from '@/templates/Shader/Shader'
import Floor from './Floor'
import Sun from './Sun'
import Venus from './Venus'
import { CameraControls } from '@react-three/drei'
import useMouse from '@/hooks/useMouse'
import { useFrame } from '@react-three/fiber'
import { cameraDefault } from '@/utils/global'

const CAMERA_SPEED = 0.08

export default function Stage() {
  const material = useRef<any>()
  const cameraRef = useRef<any>()
  const lookAtPoint = useMemo(() => new THREE.Vector3(0, 0, 0), [])
  const { mouseX, mouseY } = useMouse()

  const venuses = [{ position: { x: -2, y: 1, z: 2 } }, { position: { x: 2, y: 1, z: 2 } }]
  useFrame(({ camera }) => {
    const tempX = camera.position.x
    const tempY = camera.position.y
    const [defaultX, defaultY] = cameraDefault

    camera.position.x += (defaultX + mouseX * 1.2 - tempX) * CAMERA_SPEED
    camera.position.y += (defaultY - mouseY * 1.2 - tempY) * CAMERA_SPEED

    camera.lookAt(lookAtPoint)
  })

  useEffect(() => {
    console.log()
  })
  return (
    <>
      {/* <Environment preset='night' background={background} blur={blur}  /> */}
      <Sun />
      {venuses.map(({ position }, idx) => (
        <Venus key={idx} position={position} />
      ))}
      <Floor />
    </>
  )
}
