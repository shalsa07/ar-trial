'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ExperienceModel from './ExperienceModel'
import { Environment } from '@react-three/drei'
import ExpereinceControls from './ExpereinceControls'
import LoadingComponent from '../LoadingComponent'
import { createXRStore, XR } from '@react-three/xr'

export default function ExperienceWrapper({data}) {
    const store = createXRStore()
    // console.log('ExperienceWrapper:',data)
  return (
    <Canvas>
        <Suspense 
            // fallback={<LoadingComponent/>}
        >
            <XR store={store}>
                <Environment preset="sunset"/>
                <ExperienceModel data={data}/>
                <ExpereinceControls data={data}/>
            </XR>
        </Suspense>
    </Canvas>
  )
}