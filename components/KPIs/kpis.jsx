'use client';
import vendas from "@/data/vendasUFJF"
import despesas from "@/data/despesasUFJF";
import { useEffect, useState } from 'react';


function extrairAnoMes(dataBR) {
  // dataBR: "02-01-2025"
  const [dia, mes, ano] = dataBR.split('-').map(Number);
  return { ano, mes, dia };
}

export default function KPIs() {
  const [receitaTotal, setReceitaTotal] = useState(0);
  const [despesasTotais, setDespesasTotais] = useState(0);

  const balanco = receitaTotal - despesasTotais;


  useEffect(() => {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1; // Janeiro é 0
    const anoAtual = hoje.getFullYear();


    const totalReceita = vendas.reduce((acc, venda) => {
      const { ano, mes } = extrairAnoMes(venda.dataPagamento);
      if (mes === mesAtual && ano === anoAtual) {
        return acc + Number(venda.valor);
      }
      return acc;
    }, 0);


    setReceitaTotal(totalReceita);

  }, []);
  useEffect(() => {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1; // Janeiro é 0
    const anoAtual = hoje.getFullYear();


    const totalDespesas = despesas.reduce((acc, despesa) => {
      const { ano, mes } = extrairAnoMes(despesa.dataPagamento);
      if (mes === mesAtual && ano === anoAtual) {
        return acc + Number(despesa.valor);
      }
      return acc;
    }, 0);
    setDespesasTotais(totalDespesas);
  }, []);

  return (
    <div className="p-2 pl-5 w-155 mb-5
                text-[#4d4d4d]
                shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff] rounded-[15px]">
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