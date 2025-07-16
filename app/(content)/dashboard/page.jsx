"use client";
import { usePeriodo } from "@/components/hooks/usePeriodo";
import GraficoDePizza from "../../../components/Graficos/GraficoPizza";
import ButtonsDashboard from "@/components/ButtonsDashboard/ButtonsDashboard";
import KPIs from "../../../components/KPIs/kpis";
import GraficoReceitasDespesas from "@/components/Graficos/GraficoReceitasDespesas";

export default function Dashboard() {
  // Estado compartilhado
  const { periodo, setPeriodo } = usePeriodo();
  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Passando o estado e o setter para os botões */}
      <ButtonsDashboard periodo={periodo} setPeriodo={setPeriodo} />

      <div className="border-none flex flex-wrap gap-4 w-fit">

        <div className="border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
          <GraficoReceitasDespesas periodo={periodo} />
        </div>
        <div className="border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
          <GraficoDePizza />
        </div>
      </div>
      <div>
        <KPIs />
      </div>
    </div>
  );
}
