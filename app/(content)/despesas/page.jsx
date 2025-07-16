"use client";
import { useState } from 'react';
import despesasCodi from '@/data/despesasUFJF';
import Table from '@/components/Table/Table'; 
import ButtonExpense from '@/components/ButtonExpense/ButtonExpense';

export default function Despesas() { 
  const [despesas, setDespesas] = useState(despesasCodi);

  const adicionarDespesas = (novaDespesa) => {
    setDespesas([...despesas, novaDespesa]);
  };

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nome', accessor: 'nome' },
    { header: 'Valor', accessor: 'valor' },
    { header: 'Data de Vencimento', accessor: 'dataVencimento' },
    { header: 'Data do Pagamento', accessor: 'dataPagamento' },
    { header: 'Categoria', accessor: 'tipoDespesa' },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <header className="shrink-0 p-4 bg-[var(--colors-background)]">
        <ButtonExpense onAdd={adicionarDespesas} />
      </header>
      <Table columns={columns} data={despesas || []} />
    </div>
  );
}
