import '@/app/globals.css'
import Link from "next/link"

import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            x-chunk="An empty state showing no products with a heading, description and a call to action to add a product."
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          >
            <div className="flex flex-col items-center gap-1 text-center">

            </div>
          </div>
        </main>
  )
}
