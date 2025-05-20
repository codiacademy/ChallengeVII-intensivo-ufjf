"use client";

import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import  alunos  from "@/data/alunos.json"

const vendasMock = alunos


export default function Vendas() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  const columns = useMemo(
    () => [
      {
        accessorKey: "aluno",
        header: () => "Aluno",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "curso",
        header: () => "Curso",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "valor",
        header: () => "Valor",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "formaPagamento",
        header: () => "Forma de Pagamento",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data: vendasMock,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId).toLowerCase().includes(filterValue.toLowerCase());
    },
  });

  return (
    <div className="overflow-x-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vendas</h1>
        <button className="btn btn-primary">Nova Venda</button>
      </div>

      <div className="mb-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Pesquisar vendas</span>
          </div>
          <input
            type="text"
            className="input input-bordered"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Buscar por aluno, curso..."
          />
        </label>
      </div>

      <table className="table w-full border-separate border-spacing-y-2">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} clas>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <React.Fragment key={row.id}>
              <tr
                className="hover cursor-pointer bg-purple-100 transition-[background-color]  hover:-translate-y-0.5 duration-400 ease-in-out hover:bg-purple-300 "
                onClick={() =>
                  setExpandedRow(expandedRow === row.id ? null : row.id)
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {expandedRow === row.id && (
                <tr className="bg-base-200">
                  <td colSpan={4}>
                    <div className="p-4 space-y-2">
                      <p><strong>CPF:</strong> {row.original.cpf}</p>
                      <p><strong>Endereço:</strong> {row.original.endereco}</p>
                      <p><strong>Parcelas:</strong> {row.original.parcelas}</p>
                      <p><strong>Data da Venda:</strong> {row.original.dataVenda}</p>
                      <p><strong>Data de Pagamento:</strong> {row.original.dataPagamento}</p>
                      <div className="flex gap-2 mt-2">
                        <button className="btn btn-warning btn-sm">Editar</button>
                        <button className="btn btn-error btn-sm">Excluir</button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
