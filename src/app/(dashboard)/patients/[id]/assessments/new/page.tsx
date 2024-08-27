import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'
import '@/app/globals.css'
import AssessmentsTable from '@/components/shared/table/assessments'
import { CardAssessment } from '@/components/shared/cards/assessment'
import { Button } from "@/components/shared/ui/button"

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

export default function NewAssessment() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center px-4">
            <h1 className="text-lg font-semibold md:text-2xl">Nova Avaliação</h1>
            <div className="w-full flex-1"></div>            
          </div>
          <div
            className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm py-0"
          >
            <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4">
                <CardAssessment name={"VB-MAPP"} description={'Avaliação de transição'}/>
                <CardAssessment name={"VB-MAPP"} description='Avaliação de marcos do desenvolvimento'/>
                <CardAssessment name='VB-MAPP' description='avaliação de tarefas'/>
              </div>
            </div>
          </div>
        </main>
  )
}