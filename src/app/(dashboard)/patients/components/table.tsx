"use client"

import * as React from "react"

import { ArrowUpDown, ChevronDown, MoreHorizontal, EyeIcon, Pen, Trash } from "lucide-react"

import { Button } from "@/components/shared/ui/button"
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
import {useMediaQuery} from '@/hooks/use-media-query'

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

  const matches = useMediaQuery('(min-width:980px)');

  return (
    <div className="w-full px-6">
      <div className="flex items-center px-0 py-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >Nome</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead>...</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (              
              <TableRow key={patient.id}>    
                <TableCell>
                <Link href={`patients/${patient.id}`}>
                  {patient.name}
                  </Link>
                  </TableCell>                
                <TableCell>{patient.status}</TableCell>
                <TableCell>{patient.birthdate}</TableCell>
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
                      <DropdownMenuItem><Link href={`/patients/`}>Prévia</Link></DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>}

                {matches && <TableCell>
                  <div className="grid grid-cols-3 w-[80px]">
                  <Link href={`/patients/${patient.id}`}><EyeIcon className="h-4 w-4"/></Link>
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
