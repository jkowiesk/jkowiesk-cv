import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import Shader from '@/templates/Shader/Shader'
import Floor from './Floor'
import Sun from './Sun'
import Venus from './Venus'
import { CameraControls, Environment } from '@react-three/drei'
import useMouse from '@/hooks/useMouse'
import { useFrame, useThree } from '@react-three/fiber'
import { VENUSES, cameraDefault, portalPosition, portalRadius } from '@/utils/global'
import { ScrollTicker, state } from '@/templates/Scroll'

const CAMERA_SPEED = 0.08

export default function Stage() {
  const portal = useRef<any>()
  const isInPortal = useRef<boolean>(false)
  const lookAtPoint = useMemo(() => new THREE.Vector3(portalPosition[0], -3, portalPosition[2]), [])
  let { mouseX, mouseY } = useMouse()

  const cameraCenter = useRef<{ y: number; z: number }>({ y: cameraDefault[1], z: cameraDefault[2] })

  useFrame(({ camera }) => {
    if (isInPortal.current) {
    }

    const tempX = camera.position.x
    const tempY = camera.position.y
    const [defaultX] = cameraDefault

    const isCameraCloseToPortal = camera.position.z < portalPosition[2] + portalRadius

    if (isCameraCloseToPortal) {
      if (camera.position.y < 0.1) camera.position.y = -2
      isInPortal.current = true
      mouseX = 0.0
      mouseY = 0.5
    } else if (camera.position.z < portalPosition[2] + 2 * portalRadius) {
      mouseY = -0.5
    }
    camera.position.x += (defaultX + mouseX * 2 - tempX) * CAMERA_SPEED
    camera.position.y += (cameraCenter.current.y - mouseY * 1.2 - tempY) * CAMERA_SPEED

    if (isCameraCloseToPortal && camera.position.y < 0.5) {
      camera.lookAt(lookAtPoint)
      return
    }
    camera.lookAt(portal.current.position)
  })

  /* useEffect(() => {
    console.log(test)
  }) */

  return (
    <>
      <Environment background resolution={512}>
        <Sun />
      </Environment>
      <ScrollTicker cameraCenter={cameraCenter} />
      {VENUSES.map(({ position }, idx) => (
        <Venus key={idx} position={position} />
      ))}
      <mesh ref={portal} position={[0, -0.3, -10]}>
        <cylinderGeometry args={[portalRadius, portalRadius, 0.5, 64]} />
        <meshStandardMaterial side={THREE.DoubleSide} color={'#000000'} />
      </mesh>
      <mesh ref={portal} position={[0, -2, -10]}>
        <boxGeometry args={[1, 1, 5]} />
        <meshBasicMaterial side={THREE.DoubleSide} color={'#000000'} />
      </mesh>
      <Floor />
    </>
  )
}
