import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/shared/ui/card"
  import Link from "next/link"
  import { Button } from '@/components/shared/ui/button'
  import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,   
    FileCheck2, 
    Users,
  } from "lucide-react"
  import {Patient} from '@/api/patient'

type SummaryProps = {
  patient: Patient | null}

export const SummaryHeader = ({patient}: SummaryProps) => {
  const summary = {assessments: 2, interventions: 0}
    return (
    <div className='grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>  
        <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{summary.assessments}</CardTitle>
        <FileCheck2 className="h-8 w-8 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-sm font-bold">Avaliações</div>
            <p className="text-xs text-muted-foreground">
            </p>
            <Link href={`/patients/${patient?.id}/assessments`}>
            <Button className='mt-2' size="sm" variant="outline" disabled={summary.assessments == 0}>Ver todos</Button>
            </Link>
        </CardContent>
        </Card>
        <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">0</CardTitle>
        <FileCheck2 className="h-8 w-8 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-sm font-bold">Planos de intervenção</div>
            <p className="text-xs text-muted-foreground">
            </p>
            <Link href={summary.interventions == 0 ? '#' : 'patients/'}>
            <Button className='mt-2' size="sm" variant="outline" disabled={summary.interventions == 0}>
              Ver todos
              </Button>
            </Link>
        </CardContent>
        </Card>
  </div>)
  }