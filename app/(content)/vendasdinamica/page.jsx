// pages/venda.js
import React from 'react';
import DinamicTable from '@/components/Table/DinamicTable';

const VendaPage = () => {
  const columns = [
    { header: 'Produto', accessor: 'produto' },
    { header: 'Quantidade', accessor: 'quantidade' },
    { header: 'Valor Total', accessor: 'valor' },
  ];

  const data = [
    { produto: 'Notebook', quantidade: 2, valor: 'R$ 5000,00' },
    { produto: 'Mouse', quantidade: 5, valor: 'R$ 250,00' },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Vendas</h1>
      <DinamicTable columns={columns} data={data} />
    </div>
  );
};

export default VendaPage;