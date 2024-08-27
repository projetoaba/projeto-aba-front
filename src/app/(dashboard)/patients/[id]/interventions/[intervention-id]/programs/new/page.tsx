"use client"

import * as React from "react"
import {
  CardDescription,
  CardTitle,
} from "@/components/shared/ui/card"

import NewProgramForm from "./components/form";

export const saveProgram = async (
  previousState: any,
  formData: FormData
) => {
  try {
    const programResult = Object.fromEntries(formData);
    console.log(programResult)
  } catch (error: unknown) {
    console.log(error);
  }
};

const procedures = {
  "ensino-por-tentativas-dtt": ['Sequencial', 'Randômico'],
  "ensino-incidental-it": ['Sequencial']
};

const reforcements = ['Esquema de reforçamento continuo (CRF)',
  'Esquema de razão fixa (FR)',
  'Esquema de razão variavel (VR)',
  'Esquema de intervalo Fixo (FI)',
  'Esquema de intervalo variavel (VI)'
]

export default function NewProgramPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center py-4">
        <h1 className="text-lg font-semibold md:text-2xl">
          Programa de ensino
        </h1>
      </div>

      <div className="px-8 pb-4 border border-gray-200 rounded-lg">
        <div className="text-gray-600 space-y-3 py-8">
          <CardTitle>Novo</CardTitle>
          <CardDescription>
            Programa para evolução de habilidade
          </CardDescription>
          <NewProgramForm/>
        </div>
      </div>
    </main>
  );
}
