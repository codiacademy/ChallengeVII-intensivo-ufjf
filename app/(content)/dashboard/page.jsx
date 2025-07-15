"use client";
import { usePeriodo } from "@/components/hooks/usePeriodo";
import GraficoVendas from "../../../components/Graficos/Grafico3Barras";
import GraficoDePizza from "../../../components/Graficos/GraficoDePizza";
import ButtonsDashboard from "@/components/ButtonsDashboard/ButtonsDashboard";
import KPIs from "../../../components/KPIs/kpis";
import Teste from "@/components/Teste/teste";
import { useState } from "react";

export default function Dashboard() {
  // Estado compartilhado
  const { periodo, setPeriodo } = usePeriodo();
  const [contador, setContador] = useState(0);
  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Passando o estado e o setter para os botões */}
      <ButtonsDashboard periodo={periodo} setPeriodo={setPeriodo} />

      <div className="border-none flex flex-wrap gap-4 w-fit">
        <div className="border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
          {/* Gráfico recebe o período como prop */}
          <GraficoVendas periodo={periodo} />
        </div>
        <div className="border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
          <GraficoDePizza />
        </div>
      </div>
      <div>

        <KPIs />
        <Teste contador={contador} setContador={setContador}/>
      </div>
    </div>
  );
}
