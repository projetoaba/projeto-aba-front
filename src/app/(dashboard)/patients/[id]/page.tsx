import '@/app/globals.css'
import PatientsTable from '@/components/shared/table/patients'

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

const patient = {name: 'Isaque', }

export default function PatientProfileScreen() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{patient.name}</h1>            
          </div>        
          <div
            className="flex flex-1 w-full justify-center rounded-lg border border-dashed shadow-sm py-8"
          >
            
          </div>
    </main>
  )
}