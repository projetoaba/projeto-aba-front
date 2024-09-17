"use client"

import * as React from "react"

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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/ui/table"
import Link from "next/link"
import { api } from '@/lib/api'
import { useEffect, useState } from "react"

export type Patient = {
  id: string
  birthdate: string
  status: "em plano" | "novo" | "desligado" | "failed"
  name: string
}

export default function PatientsTable() {
  const [patients, setPatients] = useState<Patient[]>([])
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
              <TableHead className="w-[100px]">Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead className="text-right">...</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.name}</TableCell>
                <TableCell>{patient.status}</TableCell>
                <TableCell>{patient.birthdate}</TableCell>
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
