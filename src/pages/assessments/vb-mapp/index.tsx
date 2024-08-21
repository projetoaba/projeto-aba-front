import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'
import '@/app/globals.css'
import PatientsTable from '@/components/shared/table/patients'

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

export default function VBMapp() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LoggedNavigationMenu />
      <div className="flex flex-col">
        <LoggedNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Pacientes</h1>
          </div>
          <div
            className="flex flex-1 w-full items-center justify-center rounded-lg border border-dashed shadow-sm"
          >
            <PatientsTable/>
          </div>
        </main>
      </div>
    </div>
  )
}