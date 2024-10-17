'use client'
import { useEffect, useState } from "react"
import { api } from '@/lib/api'
import { useParams } from 'next/navigation'
import { AssessmentsAnswer } from "@/api/assessment-applications"
import { Activity, } from "lucide-react"
import Link from "next/link"

import {
    ChartConfig,
  } from "@/components/shared/ui/chart"
import LineChart from "./components/chart"
import { Button } from '@/components/shared/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "rgb(var(--primary-main))",
    icon: Activity,
  },
} satisfies ChartConfig

export const SummaryHeader = ({patient_id}: any) => {
  const summary = {assessments: 2, interventions: 0}
    return (
    <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>  
        <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{summary.assessments}</CardTitle>        
        </CardHeader>
        <CardContent>
            <div className="text-sm font-bold">Avaliações</div>
            <p className="text-xs text-muted-foreground">
            </p>
            <Link href={`/patients/${patient_id}/assessments`}>
            <Button className='mt-2' size="sm" variant="outline" disabled={summary.assessments == 0}>Ver todos</Button>
            </Link>
        </CardContent>
        </Card>        
  </div>)
  }

export default function PatientsScreen() {
    const [assessment, setAssessment] = useState<AssessmentsAnswer[] | undefined>([])
    const [patient_id, setPatient] = useState<Number | undefined>()
    const params = useParams() as {assessment_id:string | null};

  useEffect(() => {
    api().get(`/api/assessments-applications/${params?.assessment_id}/chart-simple`)
      .then(function (response) {        
        const data = response.data.answers
        setPatient(response.data.interviewed_id)
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
          <SummaryHeader patient_id={patient_id}/>
          <div
            className="flex flex-1 w-full justify-center rounded-lg border border-dashed shadow-sm py-8"
          >      
            <LineChart dataset={assessment}/>
            {/* </div> */}
          </div>
    </main>
  )
}