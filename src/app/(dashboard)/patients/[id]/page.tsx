"use client"
import '@/app/globals.css'
import { api } from '@/lib/api'
import { useEffect, useState } from "react"
import { useParams } from 'next/navigation'
import { Separator } from "@/components/shared/ui/separator"
import { CardAction } from './components/cards'
import {SummaryHeader} from './components/summary'

export type Patient = {
  id: string
  birthdate: string
  created_at: string,
  status: "em plano" | "novo" | "desligado" | "failed"
  name: string
}

export default function PatientProfileScreen() {
  const [patient, setPatient] = useState<Patient | null>(null)
  const params = useParams() as {id:string | null};

  useEffect(() => {
    api().get(`/api/patients/${params?.id}`)
      .then(function (response) {
        console.log(response.data);
        const data = response.data
        setPatient(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{patient?.name}</h1>            
          </div>        
          <div
            className="grid grid-cols-1 w-full rounded-lg border border-dashed shadow-sm py-8 px-8 "
          >                               
            <div className='grid gap-2 grid-cols-1'>
              <h3><strong>Nome</strong>: {patient?.name}</h3>
              <h3>Data de Nascimento: {patient?.birthdate}</h3>
              <h3>Data de Cadastro: {patient?.created_at}</h3>            
            </div>
            <Separator className="my-4" />   
            <SummaryHeader/>                       
          </div>
    </main>
  )
}
