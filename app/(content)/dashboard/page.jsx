"use client";
import { useState } from "react";
import GraficoVendas from "../../../components/Graficos/Grafico3Barras";
import Grafico3Barras from "../../../components/Graficos/Grafico3Barras";
import GraficoDePizza from "../../../components/Graficos/GraficoDePizza";
import KPIs from "../../../components/KPIs/kpis";

export default function Dashboard() {
  const [periodo, setPeriodo] = useState("4semanas");

  const botoes = [
    { label: "Últimos 7 Dias", value: "7dias" },
    { label: "Últimas 4 Semanas", value: "4semanas" },
    { label: "Últimos 12 Meses", value: "12meses" },
    { label: "Últimos 5 Anos", value: "5anos" },
  ];

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex mb-4">
        {botoes.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setPeriodo(btn.value)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: periodo === btn.value ? "var(--colors-background)" : "#e5e7eb",
              color: periodo === btn.value ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            className="shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]"
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="border-none flex flex-wrap gap-4 w-fit">
        <div className="border-none rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)] p-5">
          <GraficoVendas periodo={periodo} />
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
