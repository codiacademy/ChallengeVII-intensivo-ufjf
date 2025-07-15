"use client";
import { useState } from 'react';

export default function Table({ columns, data }) {
  const [filtro, setFiltro] = useState('');

  const dadosFiltrados = data.filter((item) =>
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
      <table className="table-fixed w-full text-left text-[#4d4d4d] border-separate border-spacing-y-2">
        <thead className="h-[50px] bg-[var(--colors-background)] shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] rounded-[15px] sticky top-0 z-10">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="text-center">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dadosFiltrados.map((item) => (
            <tr key={item.id} className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default">
              {columns.map((col) => (
                <td key={col.accessor} className="text-center">{item[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
