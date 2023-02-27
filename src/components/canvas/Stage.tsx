import * as THREE from 'three'
import { useLayoutEffect, useMemo, useRef } from 'react'
import { SphereGeometryProps } from '@react-three/fiber'
import Shader from '@/templates/Shader/Shader'
import Floor from './Floor'

export default function Stage() {
  const material = useRef<any>()

  return (
    <>
      <Floor />
    </>
  )
}
