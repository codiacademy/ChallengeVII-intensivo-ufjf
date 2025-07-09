"use client";
import { useState } from 'react';
import despesasCodi from '@/data/despesas';
import Table from '@/components/Table/expenseTable';
import ButtonExpense from '@/components/ButtonExpense/ButtonExpense';

export default function Depesas() { 
  const [despesas, setDespesas] = useState(despesasCodi);
  
  const adicionarDespesas = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };
  return (
    <div className="flex flex-col h-full w-100% h-100%">
      <header className="shrink-0 p-4 bg-[var(--colors-background)]">
        <ButtonExpense onAdd={adicionarDespesas} />
      </header>
      <Table/>
    </div>
  );
}