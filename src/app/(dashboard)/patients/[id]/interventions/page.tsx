'use client'
import '@/app/globals.css'
import InterventionsTable from './components/table'
import Link from 'next/link'
import { Button } from '@/components/shared/ui/button'
import { useParams } from 'next/navigation'

export default function InterventionsScreen() {
  const params = useParams();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Planos de Intervenção</h1>
            <div className="w-full flex-1"></div>
            <Link href={`/patients/${params?.id}/interventions/new`}>
              <Button className="mt-4">Novo Plano</Button>
            </Link>
          </div>          
          <div
            className="flex flex-1 w-full justify-center rounded-lg border border-dashed shadow-sm py-8"
          >
            <InterventionsTable/>
          </div>
    </main>
  )
}
