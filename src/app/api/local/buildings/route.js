import ExperienceWrapper from '@/components/experience/ExperienceWrapper'
import { buildingDB } from '@/libs/database'
import React from 'react'

export async function GET(req,{params}) {
    const data={buildingDB}
    // const {id}=await params
    console.log(data)
    return Response.json(data)
}