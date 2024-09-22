import '@/app/globals.css'
import { Button } from '@/components/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,    
  Users,
} from "lucide-react"

import Link from 'next/link'

const TopHeader = () => {
  return (
  <div className="grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 justify-center">  
  <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium px-2">
        Pacientes em atendimento
      </CardTitle>
      <Users className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+2350</div>
      <p className="text-xs text-muted-foreground">
      </p>
      <Link href="/patients">
      <Button className='mt-2' size="sm" variant="secondary">Ver todos</Button>
      </Link>
    </CardContent>
  </Card>
  <Card x-chunk="A card showing the total sales and the percentage difference from last month.">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Avaliações</CardTitle>      
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+12,234</div>
      <p className="text-xs text-muted-foreground">
        +19% from last month
      </p>
    </CardContent>
  </Card>
  <Card x-chunk="A card showing the total active users and the percentage difference from last hour.">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Agendamentos</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">+573</div>
      <p className="text-xs text-muted-foreground">
        +201 since last hour
      </p>
    </CardContent>
  </Card>
</div>)
}

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div
            x-chunk="An empty state showing no products with a heading, description and a call to action to add a product."
            className="flex flex-1 py-8 justify-center rounded-lg border border-dashed shadow-sm w-full"
          >
            <div className="flex flex-col gap-1 text-center">
            <TopHeader/>
            </div>
          </div>
        </main>
  )
}
