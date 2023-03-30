import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import Shader from '@/templates/Shader/Shader'
import Floor from './Floor'
import { Sun, SunEnvironment } from './Sun'
import Venus from './Venus'
import { CameraControls, Environment, SpotLight, Stars, useHelper } from '@react-three/drei'
import useMouse from '@/hooks/useMouse'
import { useFrame, useThree } from '@react-three/fiber'
import { LAMPS, VENUSES, cameraDefault, portalPosition, portalRadius } from '@/utils/global'
import { ScrollTicker, state } from '@/templates/Scroll'
import { useRouter } from 'next/router'
import Lamp from './Lamp'
import Text from './Text'

const CAMERA_SPEED = 0.08

type Props = {
  title: string
  setLoaded: () => void
}

export default function Stage({ title, setLoaded }: Props) {
  const portal = useRef<any>()
  const spotLight = useRef<any>()
  const cameraCenter = useRef<{ y: number; z: number }>({ y: cameraDefault[1], z: cameraDefault[2] })

  const lookAtPoint = useMemo(() => new THREE.Vector3(portalPosition[0], -3, portalPosition[2]), [])
  let { mouseX, mouseY } = useMouse()
  const router = useRouter()
  const [isRouting, setIsRouting] = useState<boolean>(false)

  useEffect(() => {
    if (isRouting) {
      router.push('home')
    }
  }, [isRouting])

  useEffect(() => {
    setLoaded()
  })

  useFrame(({ camera }) => {
    const tempX = camera.position.x
    const tempY = camera.position.y
    const [defaultX] = cameraDefault

    const isCameraCloseToPortal = camera.position.z < portalPosition[2] + portalRadius

    if (isCameraCloseToPortal) {
      if (camera.position.y < 0.1) {
        camera.position.y = -2
        setIsRouting(true)
      }
      mouseX = 0.0
      mouseY = 0.5
    } else if (camera.position.z < portalPosition[2] + 2 * portalRadius) {
      mouseY = -0.5
    }
    camera.position.x += (defaultX + mouseX * 6 - tempX) * (CAMERA_SPEED / 4)

    camera.position.y += (cameraCenter.current.y - mouseY * 0.9 - tempY) * CAMERA_SPEED

    camera.lookAt(portal.current.position)
  })

  return (
    <>
      <Stars fade />
      <Environment>
        <SunEnvironment />
      </Environment>
      <Sun />
      <ScrollTicker cameraCenter={cameraCenter} />
      {VENUSES.map(({ position }, idx) => (
        <Venus key={idx} position={position} />
      ))}
      {LAMPS.map(({ position, rotationY }, idx) => (
        <Lamp key={idx} position={position} rotationY={rotationY} />
      ))}
      <mesh ref={portal} position={[0, -0.3, -10]}>
        <cylinderGeometry args={[portalRadius, portalRadius, 0.5, 64]} />
        <meshStandardMaterial side={THREE.DoubleSide} color={'#000000'} />
      </mesh>
      <mesh ref={portal} position={[0, -2, -10]}>
        <boxGeometry args={[1, 1, 5]} />
        <meshBasicMaterial side={THREE.DoubleSide} color={'#000000'} />
      </mesh>
      <Text />
      <Floor />
    </>
  )
}
