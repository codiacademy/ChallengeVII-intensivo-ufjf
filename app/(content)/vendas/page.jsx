"use client";
import { useState } from 'react';
import vendasOriginais from '@/data/vendas';
import Table from '@/components/Table/Table';
import ButtonNewSale from '@/components/ButtonNewSale/ButtonNewSale';

export default function Vendas() { 
  const [vendas, setVendas] = useState(vendasOriginais);
  const adicionarVenda = (novaVenda) => {
    setVendas([...vendas, novaVenda]);
  };
  return (
    <div className="flex flex-col h-full w-100% h-100%">
      <header className="shrink-0 p-4 bg-[var(--colors-background)]">
        <ButtonNewSale onAdd={adicionarVenda} />
      </header>
      <Table/>
    </div>
  );
}