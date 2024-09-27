"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { EyeIcon, Pen, Trash } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableFooter,
  TableRow,
} from "@/components/shared/ui/table"
import { api } from '@/lib/api'
import {AssessmentsApplications} from '@/api/assessment-applications'
import {useMediaQuery} from '@/hooks/use-media-query'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu"
import { Button } from '@/components/shared/ui/button'
import { MoreHorizontal } from "lucide-react"

function assessmentStatus(assessment: AssessmentsApplications) {
    if (assessment.completed_at){
      return 'Finalizado'
    }

    return 'Em andamento'
}

export default function AssessmentsTable() {
  const matches = useMediaQuery('(min-width:980px)');
  const [assessmentsApplications, setAssessmentsApplications] = useState<AssessmentsApplications[]>([])
  useEffect(() => {
    api().get('/api/assessments-applications')
      .then(function (response) {        
        const data = response.data.data
        setAssessmentsApplications(data)
      })
      .catch(function (error) {
        console.log(error);
        setAssessmentsApplications([])
      });
  }, []);

  return (
    <div className="w-full px-6">
      <div className="flex items-center px-0 py-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Protocolo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Finalizado em:</TableHead>
              <TableHead>Criado em:</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assessmentsApplications.map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell className="font-medium"><Link href={`assessments/${assessment.id}`}>VBMAPP</Link></TableCell>
                <TableCell>{assessmentStatus(assessment)}</TableCell>
                <TableCell>{assessment.completed_at || '...'}</TableCell>
                <TableCell>{assessment.created_at}</TableCell>
                {!matches && <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem><Link href={`assessments/${assessment.id}/simple-chart`}>Prévia</Link></DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>}

                {matches && <TableCell>
                  <div className="w-full grid grid-cols-3">
                  <Link href={`assessments/${assessment.id}/simple-chart`}><EyeIcon className="h-4 w-4"/></Link>
                  <Pen className="h-4 w-4"/>
                  <Trash className="h-4 w-4"/>
                  </div>                
                </TableCell>}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
