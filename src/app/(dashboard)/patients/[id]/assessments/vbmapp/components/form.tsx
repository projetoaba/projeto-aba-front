"use client";
import { Button } from "@/components/shared/ui/button";

import { Label } from "@/components/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shared/ui/radio-group";
import { vbmappQuestions } from "./questions";
import { useActionState } from "react";
import { saveVbmappQuestions } from "../actions";
import { useParams } from 'next/navigation'
import { Input } from "@/components/shared/ui/input";

interface OptionsGroupProps {
  options: Array<string>;
  name: string;
}

const RadioGroupDemo = ({ options, name }: OptionsGroupProps) => {
  return (
    <RadioGroup name={name} className="py-4">
      {options.map((item, index) => {
        const value = `${name}-${index + 1}`;

        return (
          <div
            key={item}
            className="px-1 flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-150"
          >
            <RadioGroupItem value={value} id={value} />
            <Label
              htmlFor={value}
              className="flex items-center leading-normal p-1 w-full"
            >
              <span className="inline-block min-w-4 mr-1 text-center">
                {index}.
              </span>{" "}
              <span>{item}</span>
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

interface PathParamsProps {  
  id: string;
}

export const VBMAppForm = () => {
  const [state, formAction] = useActionState(saveVbmappQuestions, null);
  const paramsPath = useParams()

  return (
    <>
      <form action={formAction}>
        <Input name="patient_id" defaultValue={paramsPath?.id} hidden={true} type="hidden"/>
        {vbmappQuestions.map((item) => (
          <div className="py-4" key={item.name}>
            <h3>
              <span className="w-6 h-6 rounded-full bg-gray-200 inline-flex items-center justify-center">
                {item.category?.id}
              </span>{" "}
              <span className="ml-2">{item.category?.label}</span>
            </h3>

            <RadioGroupDemo name={item.name} options={item.options} />
          </div>
        ))}

        <div className="flex space-x-4 pt-4">
          <Button type="button" size="sm" className="w-full" variant="outline">
            Cancelar
          </Button>

          <Button type="submit" size="sm" className="w-full" variant="default">
            Salvar
          </Button>

          <Button
            type="button"
            size="sm"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Finalizar
          </Button>
        </div>
      </form>

      {state && "data" in state ? (
        <div className="py-4">
          <h3>Resultado</h3>
          <pre className="bg-gray-100 text-gray-700 p-4 rounded-lg">
            {state && JSON.stringify(state?.data, null, 2)}
          </pre>
        </div>
      ) : null}

      {state && "error" in state ? (
        <div className="mt-6 p-4 bg-red-200 text-red-800 rounded-lg">
          <h3>{state.message}</h3>
        </div>
      ) : null}
    </>
  );
};
