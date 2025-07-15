"use client";
import { useState } from 'react';
import vendasOriginais from '@/data/vendasUFJF';
import Table from '@/components/Table/Table';
import ButtonNewSale from '@/components/ButtonNewSale/ButtonNewSale';

export default function Vendas() { 
  const [vendas, setVendas] = useState(vendasOriginais);

  const adicionarVenda = (novaVenda) => {
    setVendas([...vendas, novaVenda]);
  };

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Aluno', accessor: 'aluno' },
    { header: 'Curso', accessor: 'curso' },
    { header: 'Data da Venda', accessor: 'dataVenda' },
    { header: 'Forma de Pagamento', accessor: 'formaPagamento' },
    { header: 'Valor', accessor: 'valor' },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <header className="shrink-0 p-4 bg-[var(--colors-background)]">
        <ButtonNewSale onAdd={adicionarVenda} />
      </header>
      <Table columns={columns} data={vendas} />
    </div>
  );
}
