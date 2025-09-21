'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import ExperienceModel from './ExperienceModel'
import ExperienceControls from './ExperienceControls'
import LoadingComponent from '../LoadingComponent'
import { createXRStore, XR, XRDomOverlay } from '@react-three/xr'
import Experience360s from './Experience360s'
import ExperienceLighting from './ExperienceLighting'
import { useExperienceContext } from '@/libs/contextProviders/experienceContext'
import ExperienceLoader from './ExperienceLoader'
import { ACTIONS_EXPERIENCE } from '@/libs/contextProviders/reducerExperience'

export default function ExperienceWrapper({data, options, styleBtnCss, activeBtnIndex, handleModeClick}) {
    const [store] = useState(() => createXRStore())
    const {experienceState,experienceDispatch}=useExperienceContext()
 
    useEffect(() => {
        const handleARMode = async () => {
            const session = store.getState().session;
            try {
                if (experienceState?.ARMode) {
                    if (!session) {
                        console.log('Entering AR mode');
                        await store.enterAR();
                    }
                } else {
                    if (session) {
                        console.log('Exiting AR mode');
                        await session.end();
                    }
                }
            } catch (error) {
                console.error('Failed to toggle AR mode:', error);
            }
        }

        handleARMode()
    }, [experienceState?.ARMode, store])

    console.log('ExperienceWrapper:',data?.arPosition)

  return (
    <Canvas>
        <Suspense fallback={<ExperienceLoader/>}>
            <XR store={store}>
                {experienceState.ARMode && (
                    <XRDomOverlay>
                        {/* 3D OPTIONS BUTTONS */}
                        <div className='flex absolute top-0 left-0 w-full h-fit items-center justify-center'>
                            <div className='btn-options flex absolute gap-1 z-20 mx-auto top-20 w-fit rounded-full h-fit bg-black/75 items-center justify-center p-1 text-white'>
                                {options?.map((i,index)=>
                                    <div 
                                        onClick={()=>handleModeClick(index)} 
                                        className={styleBtnCss} key={index}
                                        style={{backgroundColor:activeBtnIndex==index ? 'gray' : 'black'}}
                                    >
                                        <span className='text-nowrap'>{i}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </XRDomOverlay>
                )}
                <ExperienceLighting/>
                {experienceState?.modelMode && <ExperienceModel data={data}/>}
                {experienceState?.ARMode && <group position={[0,0,0]}><ExperienceModel data={data}/></group>}
                {/* The model is already loaded when ARMode is true, this is for placement */}
                {experienceState?._360Mode && <Experience360s data={data}/>}
                {!experienceState?.ARMode && <ExperienceControls data={data}/>}
            </XR>
        </Suspense>
    </Canvas>
  )
}