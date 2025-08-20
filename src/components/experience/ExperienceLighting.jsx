import { Environment } from '@react-three/drei'
import React from 'react'
import { AmbientLight } from 'three'

export default function ExperienceLighting() {
  return (
    <>
        <Environment files={'/hdri.hdr'}/>
    </>
  )
}
