import '@/app/globals.css'
import DataTableDemo from './components/table'

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

export default function PatientsScreen() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Pacientes</h1>            
          </div>
          {/* className="flex items-center px-0" */}
          <div
            className="flex flex-1 w-full justify-center rounded-lg border border-dashed shadow-sm py-8"
          >
            <DataTableDemo/>
          </div>
    </main>
  )
}