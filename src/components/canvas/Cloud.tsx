import { Cloud, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Fogs() {
  const fogTexture = useTexture('/textures/fog.png')

  fogTexture.wrapS = THREE.MirroredRepeatWrapping
  fogTexture.repeat.x = 2
  useFrame(({ clock }) => {
    fogTexture.offset.x = clock.getElapsedTime() / 20
    fogTexture.offset.y = (Math.sin(clock.getElapsedTime() / 5) + 0.3) * 0.1
  })

  return (
    <>
      <mesh rotation-y={Math.PI / 2} position={[-32, 4, -16]}>
        <planeGeometry args={[32, 10, 1, 1]} />
        <meshBasicMaterial color='#7F5AF0' alphaTest={0.001} opacity={0.4} transparent alphaMap={fogTexture} />
      </mesh>
      <mesh position={[-16, 4, -32]}>
        <planeGeometry args={[32, 10, 1, 1]} />
        <meshBasicMaterial color='#7F5AF0' alphaTest={0.001} opacity={0.4} transparent alphaMap={fogTexture} />
      </mesh>

      <mesh position={[16, 4, -32]}>
        <planeGeometry args={[32, 10, 1, 1]} />
        <meshBasicMaterial color='#7F5AF0' alphaTest={0.001} opacity={0.4} transparent alphaMap={fogTexture} />
      </mesh>
      <mesh rotation-y={-Math.PI / 2} position={[32, 4, -16]}>
        <planeGeometry args={[32, 10, 1, 1]} />
        <meshBasicMaterial color='#7F5AF0' alphaTest={0.001} opacity={0.4} transparent alphaMap={fogTexture} />
      </mesh>
    </>
  )
}
