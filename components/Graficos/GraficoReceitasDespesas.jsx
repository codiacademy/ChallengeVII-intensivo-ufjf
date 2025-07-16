"use client";
import vendas from "@/data/vendasUFJF";
import despesas from "@/data/despesasUFJF";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function GraficoReceitasDespesas({ periodo }) {
  const hoje = new Date();

  const diasAtras = (dias) => {
    const data = new Date();
    data.setDate(hoje.getDate() - dias);
    return data;
  };


  const anosAtras = (anos) => {
    const data = new Date();
    data.setFullYear(hoje.getFullYear() - anos);
    return data;
  };

  // Função para converter "dd-mm-aaaa" em Date
  function parseDataBR(dataStr) {
    const [dia, mes, ano] = dataStr.split("-");
    return new Date(`${ano}-${mes}-${dia}`);
  }

  const calcularSomaPeriodo = (inicio, fim) => {
    return vendas
      .filter((item) => {
        const dataPagamento = parseDataBR(item.dataPagamento);
        return dataPagamento >= inicio && dataPagamento < fim;
      })
      .reduce((total, item) => total + item.valor, 0);
  };

  const calcularDespesasPeriodo = (inicio, fim) => {
    return despesas
      .filter((item) => {
        const dataPagamento = parseDataBR(item.dataPagamento);
        return dataPagamento >= inicio && dataPagamento < fim;
      })
      .reduce((total, item) => total + item.valor, 0);
  };

  const data4Semanas = [
    {
      name: "4ª semana",
      vendas: calcularSomaPeriodo(diasAtras(28), diasAtras(21)),
      despesas: calcularDespesasPeriodo(diasAtras(28), diasAtras(21)),
    },
    {
      name: "3ª semana",
      vendas: calcularSomaPeriodo(diasAtras(21), diasAtras(14)),
      despesas: calcularDespesasPeriodo(diasAtras(21), diasAtras(14)),
    },
    {
      name: "2ª semana",
      vendas: calcularSomaPeriodo(diasAtras(14), diasAtras(7)),
      despesas: calcularDespesasPeriodo(diasAtras(14), diasAtras(7)),
    },
    {
      name: "Última semana",
      vendas: calcularSomaPeriodo(diasAtras(7), diasAtras(0)),
      despesas: calcularDespesasPeriodo(diasAtras(7), diasAtras(0)),
    },
  ];

  const data7Dias = Array.from({ length: 7 }, (_, i) => {
    const dia = new Date(new Date().setDate(new Date().getDate() - (6 - i)))
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .replace(/^./, (m) => m.toUpperCase());
    return {
      name: dia,
      vendas: calcularSomaPeriodo(diasAtras(7 - i), diasAtras(6 - i)),
      despesas: calcularDespesasPeriodo(diasAtras(7 - i), diasAtras(6 - i)),
    };
  });


  const data12Meses = Array.from({ length: 12 }, (_, i) => {
    const data = new Date();
    data.setMonth(data.getMonth() - (11 - i), 1); // Primeiro dia do mês
    data.setHours(0, 0, 0, 0);
    const inicio = new Date(data);

    const fim = new Date(inicio);
    fim.setMonth(fim.getMonth() + 1); // Primeiro dia do mês seguinte

    const mes = inicio.toLocaleDateString("pt-BR", { month: "short" });
    return {
      name: mes,
      vendas: calcularSomaPeriodo(inicio, fim),
      despesas: calcularDespesasPeriodo(inicio, fim),
    };
  });

  const data5Anos = Array.from({ length: 5 }, (_, i) => {
    const inicio = anosAtras(5 - i);
    const fim = anosAtras(4 - i);
    return {
      name: inicio.getFullYear().toString(),
      vendas: calcularSomaPeriodo(inicio, fim),
      despesas: calcularDespesasPeriodo(inicio, fim),
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
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="vendas" stroke="#8884d8" />
      <Line type="monotone" dataKey="despesas" stroke="#82ca9d" />
    </LineChart>
  );
}


