'use client';

import vendas from "@/data/vendasUFJF";
import despesas from "@/data/despesasUFJF";
import { useEffect, useState } from 'react';
import { usePeriodo } from "@/components/PeriodoContext";

function parseDataBR(dataStr) {
  const [dia, mes, ano] = dataStr.split("-");
  return new Date(`${ano}-${mes}-${dia}`);
}

function getPeriodoRange(periodo) {
  const hoje = new Date();
  let inicio, fim;
  if (periodo === "4semanas") {
    inicio = new Date();
    inicio.setDate(hoje.getDate() - 28);
    fim = hoje;
  } else if (periodo === "7dias") {
    inicio = new Date();
    inicio.setDate(hoje.getDate() - 7);
    fim = hoje;
  } else if (periodo === "12meses") {
    inicio = new Date();
    inicio.setMonth(hoje.getMonth() - 11, 1);
    inicio.setHours(0, 0, 0, 0);
    fim = new Date();
    fim.setMonth(hoje.getMonth() + 1, 1);
    fim.setHours(0, 0, 0, 0);
  } else if (periodo === "5anos") {
    inicio = new Date();
    inicio.setFullYear(hoje.getFullYear() - 5);
    fim = hoje;
  } else {
    inicio = new Date(0);
    fim = hoje;
  }
  return { inicio, fim };
}

export default function KPIs() {
  const { periodo } = usePeriodo();

  const { inicio, fim } = getPeriodoRange(periodo);

  const receitaTotal = vendas.reduce((acc, venda) => {
    const data = parseDataBR(venda.dataPagamento);
    if (data >= inicio && data < fim) {
      return acc + Number(venda.valor);
    }
    return acc;
  }, 0);

  const despesasTotais = despesas.reduce((acc, despesa) => {
    const data = parseDataBR(despesa.dataPagamento);
    if (data >= inicio && data < fim) {
      return acc + Number(despesa.valor);
    }
    return acc;
  }, 0);

  const balanco = receitaTotal - despesasTotais;

  return (
    <div className="w-full text-[#4d4d4d]">
      <h2>Indicadores</h2>
      <table className="table-fixed w-full text-left text-[#4d4d4d] border-separate border-spacing-y-2">
        <tbody>
          <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
            <th>Receitas Totais</th>
            <th>{receitaTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th>
          </tr>
          <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
            <th>Despesas Totais</th>
            <th>{despesasTotais.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th>
          </tr>
          <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
            <th>Balanço</th>
            <th>{balanco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}