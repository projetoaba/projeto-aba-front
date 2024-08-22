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
]},
{category : {label : 'Repertório de Mando ausente, fraco ou comprometido',
                id: '3'},
  options: [
    'O repertório de mando está crescendo consistentemente e está proporcional aos outros marcos',
    'Mandos ocorrem, ecóicos são fortes, mas a pontuação dos marcos para tatos e habilidades de ouvinte são maiores do que as de mando',
    'Mandos são limitados a um grupo pequeno de reforçadores comestíveis, apesar da presença de habilidades fortes de tatos, ouvinte e ecóicos.',
    'Mandos são muito limitados, necessitam da presença de dicas para ocorrerem, são decorados, as respostas não correspondem às OMs, comportamentos negativos funcionam como mandos, ocorrência de mandos inapropriados.',
    'Nenhum mando eficiente, comportamentos negativos associados, mesmos problemas descritos no item 3 acima podem ocorrer.'
]},
{category : {label : 'Repertório de Tato ausente, fraco ou comprometido',
              id: '4'},
  options: [
    'O repertório de tato está crescendo consistentemente e está proporcional aos outros marcos',
    'Tatos ocorrem, ecóicos são fortes, mas as habilidades de ouvinte notoriamente superam os tatos',
    'Tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, tatos necessitam da presença de dicas para ocorrerem, são decorados ou a criança tenta adivinhá-los, manutenção necessária',
    'Muitos tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, “empaca” para aprender nomes e verbos, os tatos são decorados, ocorrem com somente uma palavra a despeito de um repertório de ouvinte de múltiplas palavras, não são espontâneos, generalização falha',
    'Habilidades de tato mínimas apesar da presença de habilidades de ouvinte e ecóicos fortes, tentativas repetidas de ensinar tatos sem sucesso.'
]},
{category : {label : 'Repertório de Tato ausente, fraco ou comprometido',
              id: '5'},
  options: [
    'O repertório de tato está crescendo consistentemente e está proporcional aos outros marcos',
    'Tatos ocorrem, ecóicos são fortes, mas as habilidades de ouvinte notoriamente superam os tatos',
    'Tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, tatos necessitam da presença de dicas para ocorrerem, são decorados ou a criança tenta adivinhá-los, manutenção necessária',
    'Muitos tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, “empaca” para aprender nomes e verbos, os tatos são decorados, ocorrem com somente uma palavra a despeito de um repertório de ouvinte de múltiplas palavras, não são espontâneos, generalização falha',
    'Habilidades de tato mínimas apesar da presença de habilidades de ouvinte e ecóicos fortes, tentativas repetidas de ensinar tatos sem sucesso.'
]},
{category : {label : 'Repertório de ecóico ausente, fraco ou comprometido',
              id: '6'},
  options: [
    'O repertório de ecóico está crescendo consistentemente e está proporcional aos outros marcos',
    'Ecóicos ocorrem, porém a imitação motora é marcadamente mais forte do que o ecóico',
    'Dependente de dicas para emissão de ecóico, a transferência de controle do ecóico para novos operantes é difícil, falha em generalizar habilidades ecóicas',
    'Demonstra ecolalia imediata ou tardia, precisa de treino intensivo para adquirir novos ecóicos',
    'Não apresenta habilidades ecóicas, mas tem outras habilidades, usa sinais ou PECS, treino de ecóico pode evocar comportamentos negativos'
]},
{category : {label : 'Habilidades de Percepção Visual e de Emparelhamento com o Modelo ausentes, fracas ou comprometidas',
              id: '7'},
  options: [
    'O repertório de tato está crescendo consistentemente e está proporcional aos outros marcos',
    'Tatos ocorrem, ecóicos são fortes, mas as habilidades de ouvinte notoriamente superam os tatos',
    'Tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, tatos necessitam da presença de dicas para ocorrerem, são decorados ou a criança tenta adivinhá-los, manutenção necessária',
    'Muitos tatos errados ocorrem, ecóicos e habilidades de ouvinte são fortes, “empaca” para aprender nomes e verbos, os tatos são decorados, ocorrem com somente uma palavra a despeito de um repertório de ouvinte de múltiplas palavras, não são espontâneos, generalização falha',
    'Não apresenta habilidades de emparelhamento com o modelo mas mostra outras habilidades, as tentativas de ensinar tarefas de MTS falham repetidamente e comportamentos de fuga e esquiva ocorrem nestas tarefas.'
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
        <RadioGroupItem value={index.toString() + Math.random()} id={index.toString()} />        
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
            <div className='grid auto-rows-max items-start lg:col-span-2'>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 py-4">
                <h3>0 = Nenhum problema</h3>
                <h3>1 = Problema ocasional</h3>
                <h3>2 = Problema moderado</h3>
              </div>
              <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4">
                <h3>3 = Problema persistente</h3>
                <h3>4 = Problema severo</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 px-4 py-8">
                {form.map((item) => 
                  <div className='py-4'>
                    <h3>{item.category?.id}. {item.category?.label}</h3>
                    <RadioGroupDemo options={item.options}/>
                  </div>
                )}

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 py-4">
                <Button size="sm" className="w-full" variant="outline">Cancelar</Button>
                <Button size="sm" className="w-full" variant="secondary">Salvar</Button>
                <Button size="sm" className="w-full">Finalizar</Button>
              </div>              
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}