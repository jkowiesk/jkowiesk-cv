import { Text3D } from '@react-three/drei'

export default function Text() {
  return (
    <>
      {/*
        // @ts-ignore */}
      <Text3D
        font='/fonts/helvetiker_regular.typeface.json'
        bevelEnabled
        bevelSize={0.03}
        scale={2}
        position={[-5, 15, -30]}>
        jkowiesk
        <meshNormalMaterial />
      </Text3D>
    </>
  )
}
