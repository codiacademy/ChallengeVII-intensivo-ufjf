"use client";
import vendas from "@/data/vendasUFJF";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export default function GraficoVendas({periodo}) {
  const hoje = new Date();

  const parseValor = (valor) =>
    parseFloat(valor.replace("R$ ", "").replace(/\./g, "").replace(",", "."));

  const diasAtras = (dias) => {
    const data = new Date();
    data.setDate(hoje.getDate() - dias);
    return data;
  };

  const mesesAtras = (meses) => {
    const data = new Date();
    data.setMonth(hoje.getMonth() - meses);
    return data;
  };

  const anosAtras = (anos) => {
    const data = new Date();
    data.setFullYear(hoje.getFullYear() - anos);
    return data;
  };

  const calcularSomaPeriodo = (inicio, fim) => {
    return vendas
      .filter((item) => {
        const dataPagamento = new Date(item.dataPagamento);
        return dataPagamento >= inicio && dataPagamento < fim;
      })
      .reduce((total, item) => total + parseValor(item.valor), 0);
  };

  const data4Semanas = [
    { name: "4ª semana", vendas: calcularSomaPeriodo(diasAtras(28), diasAtras(21)) },
    { name: "3ª semana", vendas: calcularSomaPeriodo(diasAtras(21), diasAtras(14)) },
    { name: "2ª semana", vendas: calcularSomaPeriodo(diasAtras(14), diasAtras(7)) },
    { name: "Última semana", vendas: calcularSomaPeriodo(diasAtras(7), diasAtras(0)) },
  ];

  const data7Dias = Array.from({ length: 7 }, (_, i) => {
    const dia = new Date(new Date().setDate(new Date().getDate() - (6 - i)))
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .replace(/^./, (m) => m.toUpperCase());
    return {
      name: dia,
      vendas: calcularSomaPeriodo(diasAtras(7 - i), diasAtras(6 - i)),
    };
  });

  const data12Meses = Array.from({ length: 12 }, (_, i) => {
    const inicio = mesesAtras(12 - i);
    const fim = mesesAtras(11 - i);
    const mes = inicio.toLocaleDateString("pt-BR", { month: "short" });
    return {
      name: mes,
      vendas: calcularSomaPeriodo(inicio, fim),
    };
  });

  const data5Anos = Array.from({ length: 5 }, (_, i) => {
    const inicio = anosAtras(5 - i);
    const fim = anosAtras(4 - i);
    return {
      name: inicio.getFullYear().toString(),
      vendas: calcularSomaPeriodo(inicio, fim),
    };
  });

  const periodos = {
    "4semanas": data4Semanas,
    "7dias": data7Dias,
    "12meses": data12Meses,
    "5anos": data5Anos,
  };

  return (
    <LineChart width={580} height={400} data={periodos[periodo]}>
      <Line type="monotone" dataKey="vendas" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
}
