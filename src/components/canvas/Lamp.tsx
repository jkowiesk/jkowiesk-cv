// @ts-ignore
import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Float, Plane, SpotLight } from '@react-three/drei'
import { useSkinnedMeshClone } from '@/hooks/useSkinnedMeshClone'
import { background, bodyLampColor, portalPosition, primary, secondary } from '@/utils/global'

type Props = {
  position: { x: number; y: number; z: number }
  rotationY: number
}

export default function Lamp({ position, rotationY }: Props) {
  const spotLight = useRef<any>()
  const lamp = useRef<any>()
  const lampHelper = useRef<any>()

  const { x, y, z } = position
  const spotLightPosition = [-0.04, 1.85, 0.8]
  const lampHelperPosition = [spotLightPosition[0], spotLightPosition[1] - 1, spotLightPosition[2]]

  const obj = useSkinnedMeshClone('/models/urban_street_light.glb')
  const [glassMesh, bodyMesh] = obj.scene.children[0].children[0].children[0].children[0].children
  const rand = useMemo(() => {
    return Math.random()
  }, [])

  useEffect(() => {
    spotLight.current.target = lampHelper.current
    glassMesh.material = new THREE.MeshNormalMaterial({ color: primary })
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: bodyLampColor })
    bodyMaterial.metalness = 0.45
    bodyMaterial.roughness = 0.65
    bodyMesh.material = bodyMaterial
  }, [])

  useEffect(() => {
    console.log(position)
  }, [])

  return (
    <>
      {/*
      @ts-ignore */}
      <Float
        position={[x, y, z]}
        speed={1} // Animation speed, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        rotationIntensity={2} // XYZ rotation intensity, defaults to 1
        /* rotation={[(rand * Math.PI) / 4, (rand * Math.PI) / 2, 0]} */
      >
        <group rotation-y={rotationY}>
          <primitive ref={lamp} object={obj.scene} scale={0.5} />
          {/*
          @ts-ignore */}
          <SpotLight ref={spotLight} position={spotLightPosition} angle={Math.PI / 16} color={primary} />
          <object3D ref={lampHelper} position={lampHelperPosition} />
        </group>
      </Float>
    </>
  )
}
