// @ts-nocheck
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './glsl/shader.vert'
import fragment from './glsl/shader.frag'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const textureLoader = new THREE.TextureLoader()

const squareTexture = textureLoader.load('/square.png')
squareTexture.wrapS = THREE.RepeatWrapping
squareTexture.wrapT = THREE.RepeatWrapping

const SomeShader = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.05, 0.0, 1),
    uTexture: squareTexture,
  },
  vertex,
  fragment,
)

SomeShader.key = THREE.MathUtils.generateUUID

extend({ SomeShader })
// eslint-disable-next-line react/display-name
const Shader = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()

  useImperativeHandle(ref, () => localRef.current)

  useFrame((_, delta) => (localRef.current.time += delta))
  return <someShader ref={localRef} glsl={THREE.GLSL3} key={SomeShader.key} {...props} attach='material' />
})

export default Shader
