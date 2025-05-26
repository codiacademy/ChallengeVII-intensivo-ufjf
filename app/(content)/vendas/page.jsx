"use client"

import data from "@/data/alunos.json"
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table"

export default function Vendas() {

  const columns = [
    { accessorKey: 'aluno', header: 'Nome'},
    { accessorKey: 'curso', header: 'Curso'},
    { accessorKey: 'valor', header: 'Valor'},
    { accessorKey: 'formaPagamento', header: 'Forma de Pagamento'},
    { accessorKey: 'dataVenda', header: 'Data da Venda'},
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
  <div className="p-4">
      <table className="min-w-full border-separate border-spacing-y-2 ">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="p-2">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="bg-amber-100 cursor-pointer hover:bg-amber-200 hover:m-1">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
