"use server";
import "@/app/globals.css";
import { Button } from "@/components/shared/ui/button";

import { Label } from "@/components/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import { vbmappFormData } from "./form-data";

interface OptionsGroupProps {
  options: Array<string>;
  name: string;
}

const RadioGroupDemo = ({ options, name }: OptionsGroupProps) => {
  return (
    <RadioGroup name={name} className="py-4">
      {options.map((item, index) => {
        const value = `${name}-${index}`;

        return (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>
              {index + 1} - {item}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default async function VBMAppPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center px-8">
        <h1 className="text-lg font-semibold md:text-2xl">
          VB Mapp - Avaliaçáo de barreiras
        </h1>
      </div>
      <div className="flex flex-1 justify-center rounded-lg border border-dashed shadow-sm py-0">
        <div className="grid auto-rows-max items-start lg:col-span-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 py-4">
            <h3>0 = Nenhum problema</h3>
            <h3>1 = Problema ocasional</h3>
            <h3>2 = Problema moderado</h3>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4">
            <h3>3 = Problema persistente</h3>
            <h3>4 = Problema severo</h3>
          </div>
          <form className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 px-4 py-8">
            {vbmappFormData.map((item) => (
              <div className="py-4" key={item.name}>
                <h3>
                  {item.category?.id}. {item.category?.label}
                </h3>

                <RadioGroupDemo name={item.name} options={item.options} />
              </div>
            ))}

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 px-4 py-4">
              <Button
                type="button"
                size="sm"
                className="w-full"
                variant="outline"
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                size="sm"
                className="w-full"
                variant="secondary"
              >
                Salvar
              </Button>

              <Button type="button" size="sm" className="w-full">
                Finalizar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
