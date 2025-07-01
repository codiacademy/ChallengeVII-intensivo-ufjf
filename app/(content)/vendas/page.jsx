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
    <div className="flex flex-col h-full">
      <header className="shrink-0 p-4 bg-[#e0e5ec]">
        <ButtonNewSale onAdd={adicionarVenda} />
      </header>
      <Table/>
    </div>
  );
}