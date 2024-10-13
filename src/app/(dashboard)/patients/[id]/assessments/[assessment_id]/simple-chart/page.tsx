'use client'
import { useEffect, useState } from "react"
import { api } from '@/lib/api'
import { useParams } from 'next/navigation'
import { AssessmentsAnswer } from "@/api/assessment-applications"
import { Activity, } from "lucide-react"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/shared/ui/chart"
  import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
 import Component from './components/chart' 
import LineChart from "./components/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "rgb(var(--primary-main))",
    icon: Activity,
  },
} satisfies ChartConfig

export default function PatientsScreen() {
    const [assessment, setAssessment] = useState<AssessmentsAnswer[] | undefined>([])
    const params = useParams() as {assessment_id:string | null};

  useEffect(() => {
    api().get(`/api/assessments-applications/${params?.assessment_id}/chart-simple`)
      .then(function (response) {        
        const data = response.data            
        setAssessment(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Resultados</h1>            
          </div>          
          <div
            className="flex flex-1 w-full justify-center rounded-lg border border-dashed shadow-sm py-8"
          >      
            {/* <div className="w-full"> */}
            <LineChart dataset={assessment}/>
            {/* </div> */}
          </div>
    </main>
  )
}