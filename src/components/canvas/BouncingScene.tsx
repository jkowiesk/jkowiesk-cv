// scene written with r3f and drei (react-three-fiber and react-three-drei) it has floor and bouncing balls when you click over them they , stops ball and camera centers on the ball that
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, OrbitControls, Preload, RoundedBox, useHelper, useMatcapTexture } from '@react-three/drei'
import { SKILLS, cameraDefault, starsToSize } from '@/utils/global'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useTexture } from '@react-three/drei'
import * as CANNON from 'cannon'
import Ball from './Ball'

type Wall = {
  position: [number, number, number]
  rotation: [number, number, number]
}

const WALLS: Wall[] = [
  { position: [0, 0, -5], rotation: [0, 0, 0] },
  { position: [0, 0, 5], rotation: [0, 0, 0] },
  { position: [-5, 0, 0], rotation: [0, Math.PI / 2, 0] },
  { position: [5, 0, 0], rotation: [0, -Math.PI / 2, 0] },
]

export default function BouncingScene(props) {
  return (
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000, position: [0, 4, -8] }} {...props}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} position={[5, 3, 1]} />
      {/*
      @ts-ignore */}
      <ContactShadows position={[0, -0.49, 0]} scale={10} far={3} blur={3} color={'white'} />
      <BouncingStage />
      <Preload all />
    </Canvas>
  )
}
/* eslint-disable react/display-name */
const BouncingStage = () => {
  const lastCheck = useRef(0)

  const softMaterial = new CANNON.Material('soft')
  const hardMaterial = new CANNON.Material('hard')

  const world = useRef<CANNON.World>()
  const [balls, setBalls] = useState<[CANNON.Body, number][]>([])
  const [numHovering, setNumHovering] = useState<number>(0)

  const [matCapTexture] = useMatcapTexture('1B1B1B_999999_575757_747474')

  /*   const floorTexture = useTexture('/square2.png')
  floorTexture.wrapS = THREE.RepeatWrapping
  floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(2, 2) */

  /* const lookPoint = useMemo(() => new THREE.Vector3([0, 0, 0]), []) */

  const directionalLight = useRef<THREE.DirectionalLight>()

  // @ts-ignore
  // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  useEffect(() => {
    const element = document.getElementById('bouncingScene')
    if (numHovering > 0) {
      element.style.cursor = 'pointer'
    } else {
      element.style.cursor = 'default'
    }
  }, [numHovering])

  useEffect(() => {
    world.current = new CANNON.World()
    const floorBody = new CANNON.Body()
    const floorShape = new CANNON.Plane()
    // make floor position [0, 0, 0]

    const softHardContactMaterial = new CANNON.ContactMaterial(hardMaterial, softMaterial, {
      friction: 0,
      restitution: 1,
    })

    world.current.addContactMaterial(softHardContactMaterial)
    world.current.gravity.set(0, -9.82, 0) // set gravity to y-axis

    floorBody.mass = 0
    floorBody.material = hardMaterial
    floorBody.addShape(floorShape)
    floorBody.position.set(0, -0.5, 0)
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(-1, 0, 0), Math.PI / 2)

    for (let { position, rotation } of WALLS) {
      const wallShape = new CANNON.Box(new CANNON.Vec3(10, 50, 0.5))
      const wallBody = new CANNON.Body({ mass: 0, shape: wallShape, material: hardMaterial })
      wallBody.position.set(...position)
      wallBody.quaternion.setFromEuler(...rotation, 'XYZ')
      world.current.addBody(wallBody)
    }

    world.current.addBody(floorBody)

    SKILLS.forEach(({ rating }, idx) => {
      const mass = 1

      const shape = new CANNON.Sphere(starsToSize.get(rating))
      const body = new CANNON.Body({ mass, shape, material: softMaterial })
      body.position.set(Math.random() * 4 - 4, Math.random() * 3 + 2, Math.random() * 4 - 4)

      world.current.addBody(body)
      setBalls((prev) => [...prev, [body, idx]])
    })
  }, [])

  const randomImpulseCord = useCallback(() => {
    return (Math.random() < 0.5 ? -1 : 1) * Math.random() * 4 + 1
  }, [])

  useFrame((_, delta) => {
    if (world.current) {
      world.current.step(1 / 60, delta, 3)

      lastCheck.current += delta

      if (lastCheck.current > 1) {
        // if ball to slow give it impulse in random direction
        for (let ball of balls.map((ball) => ball[0] as CANNON.Body)) {
          // @ts-ignore
          if (ball.velocity.length() < 2) {
            ball.applyImpulse(
              // make vector be increse by random number between 1 and 3
              new CANNON.Vec3(randomImpulseCord(), Math.random() * 3 + 2, randomImpulseCord()),
              ball.position,
            )
          }
        }
        lastCheck.current = 0
      }
    }
  })

  return (
    <>
      {/*
      @ts-ignore */}
      <RoundedBox
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[10, 10, 1]} // Width, height, depth. Default is [1, 1, 1]
        radius={0.5} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
      >
        <meshMatcapMaterial matcap={matCapTexture} />
      </RoundedBox>

      {balls.map(([ballBody, skillIdx]) => (
        <Ball key={skillIdx} ballBody={ballBody} skillIdx={skillIdx} setNumHovering={setNumHovering} />
      ))}
    </>
  )
}
