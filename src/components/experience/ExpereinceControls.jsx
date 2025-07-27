import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { degToRad } from 'three/src/math/MathUtils'

export default function ExpereinceControls({data}) {
    // console.log('ExpereinceControls:',data)
  return (
    <OrbitControls
        minDistance={data?.minDistance}
        maxDistance={data?.maxDistance}
        maxPolarAngle={degToRad(90)}
        minPolarAngle={degToRad(0)}
    />
  )
}
