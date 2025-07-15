'use client';
import dados from "@/data/vendasUFJF.json"
import { useEffect, useState } from 'react';

const despesas = dados

 



export default function KPIs() {
     const [somaTotal, setSomaTotal] = useState(0);

  useEffect(() => {
    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1; // Janeiro é 0
    const anoAtual = hoje.getFullYear();

    const total = despesas.reduce((acc, venda) => {
      const [ano, mes] = venda.dataPagamento.split('-').map(Number);
      if (mes === mesAtual && ano === anoAtual) {
        // Converte valor para número, removendo "R$" e "."
        const valorNumerico = parseFloat(
          venda.valor.replace('R$', '').replace('.', '').replace(',', '.').trim()
          
        );
        return acc + valorNumerico;
      }
      return acc;
    }, 0);

    setSomaTotal(total);
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
                    <th>{somaTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</th>
                </tr>
                <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
                    <th>Despesas Totais</th>
                    <th>R$10.000,00</th>
                </tr>
                <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
                    <th>Balanço</th>
                    <th>R$5.000,00</th>
                </tr>
            </tbody>
        </table>
   </div>
  );
}
