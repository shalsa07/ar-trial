'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import ExperienceModel from './ExperienceModel'
import ExpereinceControls from './ExpereinceControls'
import LoadingComponent from '../LoadingComponent'
import { createXRStore, XR } from '@react-three/xr'
import Experience360s from './Experience360s'
import ExperienceLighting from './ExperienceLighting'
import { useExperienceContext } from '@/libs/contextProviders/experienceContext'
import ExperienceLoader from './ExperienceLoader'

export default function ExperienceWrapper({data}) {
    const store = createXRStore()
    const {experienceState,experienceDispatch}=useExperienceContext()
    // console.log('ExperienceWrapper:',experienceState)
  return (
    <Canvas>
        <Suspense 
            fallback={<ExperienceLoader/>}
        >
            <XR store={store}>
                <ExperienceLighting/>
                {experienceState?.modelMode && <ExperienceModel data={data}/>}
                {experienceState?._360Mode && <Experience360s data={data}/>}
                <ExpereinceControls data={data}/>
            </XR>
        </Suspense>
    </Canvas>
  )
}