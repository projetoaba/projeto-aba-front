import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'
import '@/app/globals.css'
import { Button } from "@/components/shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card"
import Link from "next/link"

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

interface CardAssessmentProps {    
    name: string;
    description: string
}

  export const CardAssessment = ({
    name, description
  }: CardAssessmentProps) =>  {
    return (
      <Card x-chunk="dashboard-02-chunk-0" className='w-200'
      >
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>{name}</CardTitle>
          <CardDescription>
          {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          <Link href="/patients/12/assessments/vbmapp">
            <Button size="sm" className="w-full">
              Iniciar
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }
  