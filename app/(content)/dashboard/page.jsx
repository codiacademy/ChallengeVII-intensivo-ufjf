import { PeriodoProvider } from "@/components/PeriodoContext";
import GraficoDePizza from "../../../components/Graficos/GraficoPizza";
import ButtonsDashboard from "@/components/ButtonsDashboard/ButtonsDashboard";
import KPIs from "../../../components/KPIs/kpis";
import GraficoReceitasDespesas from "@/components/Graficos/GraficoReceitasDespesas";

export default function Dashboard() {
  return (
    <PeriodoProvider>
      <div className="p-4 flex flex-col gap-6">
        <ButtonsDashboard />
        <div className="flex flex-wrap gap-6 w-full">
          <div className="w-full min-h-100 max-w-120 border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
            <GraficoReceitasDespesas />
          </div>
          <div className="w-full min-h-100 max-w-120 border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
            <GraficoDePizza />
          </div>
          <div className="w-full min-h-48 max-w-120 border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
            <KPIs />
          </div>
        </div>
      </div>
    </PeriodoProvider>
  );
}
