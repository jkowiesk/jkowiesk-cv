// @ts-ignore
import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Float, Plane, SpotLight } from '@react-three/drei'
import { useSkinnedMeshClone } from '@/hooks/useSkinnedMeshClone'
import { portalPosition } from '@/utils/global'

type Props = {
  position: { x: number; y: number; z: number }
}

export default function Venus({ position }: any) {
  const spotLight = useRef<any>()
  const venus = useRef<any>()
  const { x, y, z } = position

  const obj = useSkinnedMeshClone('/models/venus.glb')
  const rand = useMemo(() => {
    return Math.random()
  }, [])

  const spotLightPosition = [x, y + 2, z]

  useEffect(() => {})

  return (
    <>
      {/*
      // @ts-ignore */}
      <Float
        position={[x, y, z]}
        speed={1} // Animation speed, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        rotationIntensity={4} // XYZ rotation intensity, defaults to 1
        rotation={[(rand * Math.PI) / 3.5, 0, 0]}>
        <primitive ref={venus} object={obj.scene} scale={0.15} />
      </Float>
      {/*
        // @ts-ignore */}
    </>
  )
  /* <mesh ref={venus} scale={0.001} geometry={obj.children[0].geometry}>
      <meshLambertMaterial args={[]} />
    </mesh> */
}
