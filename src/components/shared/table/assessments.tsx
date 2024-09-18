"use client"

import * as React from "react"
import {
  ColumnDef,
} from "@tanstack/react-table"
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

const data: Assesment[] = [
  {
    id: "m5gr84i9",
    created_at: "2024-08-12 13:00:01",
    type: "vb-mapp",    
  },
  {
    id: "3u1reuv4",
    created_at: "2024-08-12 13:00:01",
    type: "vb-mapp",
  },
]

export type Assesment = {
  id: string
  type: string
  created_at: string
  completed_at?: string
}

export default function AssessmentsTable() {
  const [patients, setPatients] = useState<Assesment[]>([])
  useEffect(() => {
    api().get('/api/patients')
      .then(function (response) {
        console.log(response.data);
        const data = response.data.data
        setPatients(data)
      })
      .catch(function (error) {
        console.log(error);
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
              <TableHead>Data de Nascimento</TableHead>
              <TableHead className="text-right">...</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">VBMAPP</TableCell>
                <TableCell>{patient.created_at}</TableCell>
                <TableCell>{patient.completed_at}</TableCell>
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
                        onClick={() => navigator.clipboard.writeText(patient.id)}
                      >
                        Copiar paciente
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem><Link href="patients/12/assessments">Avaliaçoes</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link href="patients/12/interventions">Programas</Link> </DropdownMenuItem>
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
