"use client"

import * as React from "react"

import { Button } from "@/components/shared/ui/button"
import { CirclePlus, MessageCircleQuestion} from "lucide-react"

import { useActionState, useState } from "react";

import {
  CardDescription,
  CardTitle,
} from "@/components/shared/ui/card"
import { Label } from "@/components/shared/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select"
import { Textarea } from "@/components/shared/ui/textarea"
import abilities from "@/constants/aba/habilities"
import {help} from "./data/tooltips"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shared/ui/toggle-group"
import { Input } from "@/components/shared/ui/input";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" className="grid gap-2 grid-cols-2">
      <ToggleGroupItem value="bold" aria-label="Toggle bold" variant="outline" name="randomico">
        Randomico
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" variant="outline" name="sequencial">
        Sequencial
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

import FormLabelWithHelp from "./components/labels";

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


export default function VBMAppPage() {
  const [state, formAction] = useActionState(saveProgram, null);
  const [count, setNumChildren] = useState(0);
  const id = React.useId()

  const addComponent = () => {
    setNumChildren((count) => count + 1)
  }

  let children = [];
  for (var i = 0; i < count; i += 1) {
    children.push(<Input key={i} name={`action.${i}`} />);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center px-8 py-4">
        <h1 className="text-lg font-semibold md:text-2xl">
          Programas
        </h1>
      </div>

      <div className="px-8 pb-4 border border-gray-200 rounded-lg">
        <div className="text-gray-600 space-y-3 py-8">
          <CardTitle>Novo</CardTitle>
          <CardDescription>
            Programa para evolução de habilidade
          </CardDescription>
          <form action={formAction}>
            <div className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-1">
                <div className="grid gap-2">
                  <Label htmlFor={`area-${id}`}>Habilidade</Label>
                  <Select defaultValue="billing" name="ability">
                    <SelectTrigger id={`area-${id}`} aria-label="Area">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {abilities.map((ability, index) => <SelectItem key={index} value={ability}>{ability}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`description-${id}`}>Objetivos</Label>
                <Textarea
                  id={`description-${id}`}
                  name="goals"
                  placeholder="Inclua detalhadamente os objetivos esperados."
                />
              </div>  
              <div className="grid gap-2">
                <FormLabelWithHelp label="Resposta esperada" tooltip={help.expectedAnswer} htmlFor={`description-${id}`}/>
                <Textarea
                  id={`description-${id}`}
                  name="helps"
                  placeholder={help.expectedAnswer}
                />
              </div>
              <div className="grid gap-2">
                <FormLabelWithHelp 
                label="Ajudas"
                tooltip={help.helps} 
                htmlFor={`goal-${id}`}/>
                <Textarea
                  id={`description-${id}`}
                  name="helps"
                  placeholder="Inclua detalhadamente os objetivos esperados."
                />
              </div>         
              <h2 className="'text-2xl font-semibold leading-none tracking-tight'">Método</h2>
              <div className="grid grid-cols-1 gap-6">
                <Label htmlFor={`description-${id}`}>Tipo de aplicação</Label>
                <ToggleGroupDemo />
              </div>
              <h2 className="'text-2xl font-semibold leading-none tracking-tight'">Estímulos</h2>

              <div className="grid grid-cols-1 gap-6">
                {children}
                <Button type="button" size="lg"  variant="outline" onClick={addComponent}>
                  <CirclePlus className="h-4 w-4" /> Adicionar esímulo
                </Button>
              </div>

            </div>
            <div className="flex space-x-4 pt-16">
              <Button type="button" size="lg" className="w-full" variant="outline">
                Cancelar
              </Button>

              <Button type="submit" size="lg" className="w-full" variant="default">
                Salvar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
