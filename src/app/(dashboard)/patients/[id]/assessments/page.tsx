'use client'
import '@/app/globals.css'
import AssessmentsTable from '@/components/shared/table/assessments'
import { Button } from "@/components/shared/ui/button"
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function PatientAssessments() {
  const params = useParams();  
  return (    
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center px-4">
            <h1 className="text-lg font-semibold md:text-2xl">Avaliações</h1>
            <div className="w-full flex-1"></div>          
            <Link href={`/patients/${params?.id}/assessments/new`}>
              <Button className="mt-4">Novo</Button>
            </Link>
          </div>          
          <div
            className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm py-8"
          >                      
            <AssessmentsTable/>            
          </div>
        </main>
  )
}
