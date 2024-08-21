import { LoggedNavigationMenu, LoggedNavbar } from '@/components/shared/navbar/logged'
import '@/app/globals.css'
import { Button } from "@/components/shared/ui/button"

export const iframeHeight = "800px"

export const containerClassName = "w-full h-full"

import { Label } from "@/components/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group"

export type VBMappForm = {
  category: {label: string
              id: string}
  options: Array<string>
}

const form : Array<VBMappForm> = [
  {category : {label : 'Comportamentos Negativos',
                id: '1'},
  options: [
    'Não demonstra nenhum comportamento negativo significante',
    'Engaja-se semanalmente em alguns comportamentos negativos menores, mas a recuperação é rápida',
    'Emite diariamente uma variedade de comportamentos negativos menores (e.g., choro, recusa verbal, se jogar no chão)',
    'Emite diariamente comportamentos negativos mais severos (e.g., birras, jogar objetos, destruição de propriedade)',
    'Frequentemente a criança emite comportamento negativo severo que é perigoso a si própria ou outras pessoas (e.g., agressões, auto-lesivos)'
]},
{category : {label : 'Controle instrucional (fuga/esquiva de demandas instrucionais)',
                id: '2'},
  options: [
    'Tipicamente cooperativa com instruções e demandas dos adultos',
    'Algumas demandas evocam comportamentos de não obediência menores, mas a recuperação é rápida',
    'Emite comportamento de não obediência algumas vezes ao dia, com presença de birras ou outros comportamentos menores',
    'Emite comportamento de não obediência várias vezes ao dia, com birras longas e comportamentos mais severos',
    'Comportamento de não obediência domina o dia da criança, comportamentos negativos podem ser severos e perigosos'
]}
]

interface OptionsGroupProps {    
  options: Array<string>;
}

const RadioGroupDemo = ({options} : OptionsGroupProps) => {
  return (
    <RadioGroup defaultValue="comfortable" className='py-4'>
      {options.map((item, index) => 
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={index.toString()} id={index.toString()} />        
        <Label htmlFor={index.toString()}>{index} - {item}</Label>
      </div>)}
    </RadioGroup>
  )
}

export default function NewAssessment() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <LoggedNavigationMenu />
      <div className="flex flex-col">
        <LoggedNavbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center px-8">
            <h1 className="text-lg font-semibold md:text-2xl">VB Mapp - Avaliaçáo de barreiras</h1>            
          </div>
          <div
            className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm py-0"
          >
            <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4">
                <h3>0 = Nenhum problema</h3>
                <h3>1= Problema ocasional</h3>
                <h3>2 = Problema moderado</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4">
                {form.map((item) => 
                  <div>
                    <h3>{item.category?.id}. {item.category?.label}</h3>
                    <RadioGroupDemo options={item.options}/>
                    </div>
                )}

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}