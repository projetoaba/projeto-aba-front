"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/shared/ui/button"
import { Checkbox } from "@/components/shared/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu"
import { Input } from "@/components/shared/ui/input"
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

function assessmentStatus(assessment: AssessmentsApplications) {
    if (assessment.completed_at){
      return 'Finalizado'
    }

    return 'Em andamento'
}

export default function AssessmentsTable() {
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
            {assessmentsApplications.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">VBMAPP</TableCell>
                <TableCell>{assessmentStatus(patient)}</TableCell>
                <TableCell>{patient.completed_at || '...'}</TableCell>
                <TableCell>{patient.created_at}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(patient.id)}>Deletar</DropdownMenuItem>                      
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
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
