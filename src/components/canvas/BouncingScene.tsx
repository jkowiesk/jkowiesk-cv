// scene written with r3f and drei (react-three-fiber and react-three-drei) it has floor and bouncing balls when you hover over them they change color and centers on the ball
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useHelper } from '@react-three/drei'
import { cameraDefault } from '@/utils/global'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useTexture } from '@react-three/drei'

export default function BouncingScene(props) {
  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000 }} {...props}>
      <ambientLight intensity={0.05} />
      <BouncingStage />
      <OrbitControls />
      <Preload all />
    </Canvas>
  )
}

function BouncingStage() {
  const floorTexture = useTexture('/square2.png')
  floorTexture.wrapS = THREE.RepeatWrapping
  floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(10, 10)

  /* const lookPoint = useMemo(() => new THREE.Vector3([0, 0, 0]), []) */

  const directionalLight = useRef<THREE.DirectionalLight>()

  // @ts-ignore
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  useEffect(() => {}, [])

  return (
    <>
      <directionalLight ref={directionalLight} intensity={0.3} position={[3, 5, 3]} />
      <mesh rotation-x={Math.PI / 2} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='hotpink' />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]}>
        <planeGeometry args={[5, 5, 10]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>
    </>
  )
}
