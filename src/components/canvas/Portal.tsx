import { portalRadius } from '@/utils/global'
import { Sparkles, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { ForwardedRef, Ref, forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import * as THREE from 'three'

const protalX = portalRadius - 0.3
const portalZ = portalRadius - 0.3
const portalPosition = [0, -0.3, -10]
const sparklesAmmount = 10

const Portal = () => {
  const [portalTexture, portalNormal] = useTexture(['/textures/portal.png', '/textures/portalNormal.png'])
  portalTexture.center = new THREE.Vector2(0.5, 0.5)
  const portal = useRef<any>()

  useFrame(({ clock }) => {
    if (portal.current) {
      portal.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  // generate sparkles on random positions around the portal
  const sparkles = useMemo(() => {
    const sparkles = []
    for (let i = 0; i < sparklesAmmount; i++) {
      const x = (Math.random() - 0.5) * 2 * protalX
      const y = portalPosition[1] - 0.2
      const z = -10 + (Math.random() - 0.5) * 2 * portalZ

      // make sure the sparkle we add is not too close to other sparkles already added
      const isTooClose = sparkles.some((sparkle) => {
        const [x1, y1, z1] = sparkle
        const distance = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2 + (z1 - z) ** 2)
        return distance < 0.5
      })

      if (isTooClose) {
        i--
        continue
      }
      sparkles.push([x, y, z])
    }
    return sparkles
  }, [])

  return (
    <>
      {sparkles.map((sparkle, i) => (
        <Sparkles key={i} position={sparkle} speed={0.5} color='#647DEE' size={2} noise={1} count={40} />
      ))}
      {/* <Sparkles position={[0, 0, -10]} speed={0.1} color='#7F5AF0' size={1} />
      <Sparkles position={[0, 0, -10]} speed={0.1} color='#7F5AF0' size={1} />
      <Sparkles position={[0, 0, -10]} speed={0.1} color='#7F5AF0' size={1} /> */}
      <mesh ref={portal} position={portalPosition}>
        <cylinderGeometry args={[portalRadius, portalRadius, 0.5, 64]} />
        <meshStandardMaterial side={THREE.DoubleSide} map={portalTexture} normalMap={portalNormal} />
      </mesh>
    </>
  )
}

export default Portal
