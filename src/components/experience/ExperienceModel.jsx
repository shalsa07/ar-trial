'use client'
import React, { useEffect, useRef } from 'react'
import ExperienceGLTFLoader from './ExperienceGLTFLoader'
import { useThree } from '@react-three/fiber'
import GUI from 'lil-gui'

export default function ExperienceModel({data}) {
    const {scene}=useThree()
    const ref = useRef()

    useEffect(() => {
        const gui = new GUI()
        gui.add(ref.current.position, 'x', -100,100)
        gui.add(ref.current.position, 'y', -100,100)
        gui.add(ref.current.position, 'z', -100,100)
        
        return () => {
            gui.destroy()
        }
    }, [])

    useEffect(() => {
        if (data?.position) {
            const [x, y, z] = data.position.split(',').map(Number)
            ref.current.position.set(x, y, z)
        }
    }, [data?.position])
    
    // console.log('ExperienceModel:',data)
  return (
    <group 
        ref={ref}
    >
        {data?.supportFiles?.map((i,index)=>
            <group key={index} name={i?.name}>
                <ExperienceGLTFLoader path={i}/>
            </group>
        )}
        {data?.hideLevel?.map((i,index)=>
            <group key={index} name={i?.name}>
                <ExperienceGLTFLoader path={i}/>
            </group>
        )}
        {data?.modelsFiles?.map((i,index)=>
            <group key={index}  name={i?.name}>
                <ExperienceGLTFLoader path={i}/>
            </group>
        )}
    </group>
  )
}
