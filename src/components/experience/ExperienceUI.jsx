'use client'
import { useExperienceContext } from '@/libs/contextProviders/experienceContext'
import { ACTIONS_EXPERIENCE } from '@/libs/contextProviders/reducerExperience'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

export default function ExperienceUI({data,options,styleTopCss,styleCss,styleBtnCss,setExpandContainer,expandContainer,activeBtnIndex,handleHideLevelClick,handleSnapPoint,handleModeClick}) {
    const {experienceState,experienceDispatch}=useExperienceContext()
    const [objectHiddenState,setObjectHiddenState]=useState(false)
    const [levelList,setLevelList]=useState(data?.hideLevel || [])
    const [levelListUpdate,setLevelListUpdate]=useState([])

    // const handleModeClick=(index)=>{
    //     // console.log('handleModeClick',index)
    //     index==0 && experienceDispatch({type:ACTIONS_EXPERIENCE._360_VIEW})
    //     index==1 && experienceDispatch({type:ACTIONS_EXPERIENCE.MODEL_VIEW})
    //     index==2 && experienceDispatch({type:ACTIONS_EXPERIENCE.AR_VIEW})
    // }

    // const handleHideLevelClick=(name)=>{
    //     // console.log('handleModeClick',name)
    //     const priorityList=[]
    //     levelList?.map(i=>priorityList?.push(i?.priority))
    //     if(!Array.isArray(priorityList)) {
    //         new Error("Input must be an array");
    //     }
    //     // console.log('handleHideLevelClick match',levelList)
    //     const lowestPriorityValue=Math.min(...priorityList)
    //     const matchBasedOnSelection=levelList?.find(i=>i?.name==name)
    //     // console.log('handleHideLevelClick match',matchBasedOnSelection?.priority)
    //     if(matchBasedOnSelection?.priority==lowestPriorityValue){
    //         // console.log('adjust the list')
    //         // console.log('object to hide:',matchBasedOnSelection)
    //         setLevelList(prev=>prev.filter(i=>i?.name!==matchBasedOnSelection?.name))
    //         experienceDispatch({type:ACTIONS_EXPERIENCE.HIDE_LEVEL,payload:{nameOfObject:matchBasedOnSelection?.name,visible:false,reset:false}})
    //         // console.log('updated the list:',levelList)
    //         // setObjectHiddenState(!objectHiddenState)
    //     }
    //     else if(levelList?.length==0){
    //         // console.log('there nothing to hide, reset')
    //         setLevelList(data?.hideLevel)
    //         experienceDispatch({type:ACTIONS_EXPERIENCE.HIDE_LEVEL,payload:{reset:true}})
    //     }
    //     else{
    //         console.log('lowestPriorityValue doesnt macthes object')
    //     }
    // }

    // const handleSnapPoint=(snapPoint)=>{
    //     // console.log('handleSnapPoint:',snapPoint)
    //     experienceDispatch({type:ACTIONS_EXPERIENCE.SNAPPOINT,payload:snapPoint})
    // }

    // console.log('ExperienceUI:',data?.hideLevel)
  return (
    <>
        {/* 3D OPTIONS BUTTONS */}
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

        {/* VIEWS BUTTONS */}
        {(experienceState?.modelMode || experienceState?.ARMode) && <div className={`btns-left-container flex flex-col gap-2 absolute z-20 my-auto left-2 md:left-2 h-fit ${expandContainer ? 'w-32' : 'w-16'} bg-black/75 rounded-3xl p-1 duration-300 ease-linear`}>
            <div className='flex flex-col gap-2 w-full h-full relative'>
                {/* EXPAND TOGGLE BUTTON */}
                <div onClick={()=>setExpandContainer(!expandContainer)} className='flex absolute bg-gray-300 rounded-full items-center justify-center my-auto top-0 bottom-0 -right-5 w-8 h-8 text-gray-500/75 cursor-pointer'>
                    {expandContainer ? <FaAngleLeft/> : <FaAngleRight/>}
                </div>

                {/* LEVEL HIDE BUTTONS */}
                {data?.hideLevel?.length>0 && <div className={styleCss}>
                    {data?.hideLevel?.map((i,index)=>
                        <div onClick={()=>handleHideLevelClick(i?.name)} className={styleBtnCss} key={index}>
                            {!expandContainer ? <span className='truncate text-nowrap overflow-hidden'>{i?.name}</span> : <span className='text-center'>{i?.name}</span>}
                        </div>
                    )}
                </div>}

                {/* VIEWS BUTTONS */}
                {data?.roomSnaps?.length>0 && <div className={styleCss}>
                    <div onClick={()=>handleSnapPoint('reset')} className={styleBtnCss}>
                        home
                    </div>
                    {data?.roomSnaps?.map((i,index)=>
                        <div onClick={()=>handleSnapPoint(i?.name)} className={styleBtnCss} key={index}>
                            {!expandContainer ? <span className='truncate text-nowrap overflow-hidden'>{i?.name}</span> : <span className='text-center'>{i?.name}</span>}
                        </div>
                    )}
                </div>}

                {/* COLOR BUTTONS */}
                {data?.color?.length>0 && <div className={styleCss}>
                    {data?.color?.map((i,index)=>
                        <div className={styleBtnCss} key={index}>
                            {!expandContainer ? <span className='truncate text-nowrap overflow-hidden'>{i?.name}</span> : <span className='text-center'>{i?.name}</span>}
                        </div>
                    )}
                </div>}
            </div>
        </div>}
    </>
  )
}