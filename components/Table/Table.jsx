"use client";
import { useState } from 'react';

export default function Table({ columns = [], data = [] }) {
  const [filtro, setFiltro] = useState('');

const dadosFiltrados = (data || []).filter((item) =>
  columns.some((col) => {
    const valor = item[col.accessor];
    return valor?.toString().toLowerCase().includes(filtro.toLowerCase());
  })
);


  return (
    <div className="min-w-10 p-5 rounded-[15px] bg-[var(--colors-background)]">
      <input
        type="text"
        placeholder="Filtrar por qualquer campo..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="p-2 pl-5 w-full max-w-md mb-5
        text-[#4d4d4d]
        shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] rounded-[15px]"
      />
      <table className="table-fixed w-full text-left text-[#4d4d4d] border-collapse border-spacing-y-2">
        <thead className="h-[50px] bg-[var(--colors-background)] shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] sticky top-0 z-10 border-collapse">
          <tr>
            {columns.map((col, index) => {
              const isFirst = index === 0;
              const isLast = index === columns.length - 1;
              const roundedClass = isFirst
                ? "rounded-tl-full"
                : isLast
                ? "rounded-tr-full"
                : "";

              return (
                <th
                  key={col.accessor}
                  className={`text-center border-collapse ${roundedClass} px-2 py-3`}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.map((item) => (
            <tr
              key={item.id}
              className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default"
            >
              {columns.map((col) => (
                <td key={col.accessor} className="text-center px-2 py-2">
                  {item[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
