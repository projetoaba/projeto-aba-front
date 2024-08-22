import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'
import '@/app/globals.css'
import AssessmentsTable from '@/components/shared/table/assessments'
import { CardAssessment } from '@/components/shared/cards/assessment'
import { Button } from "@/components/shared/ui/button"
import Link from 'next/link'

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

export default function Assessments() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LoggedNavigationMenu />
      <div className="flex flex-col">
        <LoggedNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center px-4">
            <h1 className="text-lg font-semibold md:text-2xl">Avaliações - Isaque</h1>
            <div className="w-full flex-1"></div>
            <Link href="/patients/12/assessments/new">
              <Button className="mt-4">Novo</Button>
            </Link>
          </div>          
          <div
            className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm py-8"
          >            
            <AssessmentsTable/>
          </div>
        </main>
      </div>
    </div>
  )
}