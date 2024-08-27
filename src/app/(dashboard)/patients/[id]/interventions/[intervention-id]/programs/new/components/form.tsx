import { Button } from "@/components/shared/ui/button"
import { CirclePlus } from "lucide-react"
import * as React from "react"
import FormLabelWithHelp from "./labels";

import { useActionState, useState } from "react";

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
import { help } from "./../data/tooltips"
import { Separator } from "@/components/shared/ui/separator"

import { Input } from "@/components/shared/ui/input";
import { ToggleGroupDemo } from "@/components/shared/toggle-group/toogle-group-button"

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
export default function NewProgramForm() {

    const [state, formAction] = useActionState(saveProgram, null);
    const [count, setNumChildren] = useState(0);
    const [procedureOptions, setProcedure] = useState([]);

    const id = React.useId()


    const addComponent = () => {
        setNumChildren((count) => count + 1)
    }

    let children = [];
    for (var i = 0; i < count; i += 1) {
        children.push(<Input key={i} name={`action.${i}`} />);
    };

    return (<form action={formAction}>
        <div className="grid gap-6 pt-8">
            <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-4">
                    <Label htmlFor={`name-${id}`}>Nome *</Label>
                    <Input
                        id={`name-${id}`}
                        name="name"
                        placeholder="Nome do programa"
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor={`area-${id}`}>Habilidade *</Label>
                    <Select name="ability">
                        <SelectTrigger id={`ability-${id}`} aria-label="Ability">
                            <SelectValue placeholder='Selecione a habilidade' />
                        </SelectTrigger>
                        <SelectContent>
                            {abilities.map((ability, index) => <SelectItem defaultChecked={false} key={index} value={ability}>{ability}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor={`description-${id}`}>Objetivos *</Label>
                <Textarea
                    id={`description-${id}`}
                    name="goals"
                    placeholder="Inclua detalhadamente os objetivos esperados."
                />
            </div>

            <div className="grid gap-2">
                <FormLabelWithHelp
                    label="Ajudas"
                    tooltip={help.helps}
                    htmlFor={`supports-${id}`} />
                <Textarea
                    id={`supports-${id}`}
                    name="supports"
                    placeholder="Quais dicas serão utilizadas para esse programa? Qual o critério para utilizar dicas?"
                />
            </div>

            <Separator className="my-4" />
            <h2 className="'text-2xl font-semibold leading-none tracking-tight">Método</h2>
            <div className="grid grid-cols-1 gap-6">
                <Label htmlFor={`description-${id}`}>Procedimento de ensino *</Label>
                <ToggleGroupDemo
                    name="procedure-type"
                    options={['Ensino por Tentativas (DTT)', 'Ensino Incidental (IT)']}
                    onChange={(s: string) => setProcedure(procedures[s])} />
            </div>

            <div className="grid grid-cols-1 gap-4">
                <Label htmlFor={`description-${id}`} hidden={procedureOptions == null}>Tipo de procedimento</Label>
                <ToggleGroupDemo name="procedure-mode" options={procedureOptions ? procedureOptions : []} />
            </div>

            <h2 className="'text-2xl font-semibold leading-none tracking-tight">Estímulos *</h2>
            <div className="items-center grid gap-2">
                {children}
                <Button type="button" size="lg" variant="outline" onClick={addComponent}>
                    <CirclePlus className="h-4 w-4 mr-4" /> Adicionar esímulo
                </Button>
            </div>
            <div className="grid gap-4">
                <FormLabelWithHelp label="Resposta esperada" tooltip={help.expectedAnswer} htmlFor={`description-${id}`} />
                <Textarea
                    id={`description-${id}`}
                    name="helps"
                    placeholder={help.expectedAnswer}
                />
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
                <Label htmlFor={`acquisition-${id}`}>Quantidade de tentativas</Label>
                <Input
                    id={`retries-${id}`}
                    name="retries"
                    className="lg:w-64 xl:w-64 sm:w-full"
                    placeholder="Tentativas"
                    type="number"
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Label htmlFor={`steps-${id}`}>Passos de ensino</Label>
                <Textarea
                    id={`steps-${id}`}
                    name="steps"
                    placeholder={help.expectedAnswer}
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                <Label htmlFor={`description-${id}`}>Esquema de reforçamento</Label>
                <Select name="ability">
                    <SelectTrigger id={`ability-${id}`} aria-label="Ability">
                        <SelectValue placeholder='Selecione' />
                    </SelectTrigger>
                    <SelectContent>
                        {reforcements.map((ref, index) => <SelectItem defaultChecked={false} key={index} value={ref}>{ref}</SelectItem>)}
                    </SelectContent>
                </Select>
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
    </form>)
}