"use server";

import { VBMAppForm } from "./components/form";

interface OptionsGroupProps {
  options: Array<string>;
  name: string;
}

export default async function VBMAppPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center px-8 py-4">
        <h1 className="text-lg font-semibold md:text-2xl">
          VB Mapp - Avaliação de barreiras
        </h1>
      </div>

      <div className="px-8 pb-4 border border-gray-200 rounded-lg">
        <div className="text-gray-600 space-y-3 py-8">
          <div className="flex flex-wrap space-x-4">
            <h3>0 = Nenhum problema</h3>
            <h3>1 = Problema ocasional</h3>
            <h3>2 = Problema moderado</h3>
          </div>
          <div className="flex flex-wrap space-x-4">
            <h3>3 = Problema persistente</h3>
            <h3>4 = Problema severo</h3>
          </div>
        </div>

        <VBMAppForm />
      </div>
    </main>
  );
}
