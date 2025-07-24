"use client";
import { useState } from 'react';

export default function Table({ columns = [], data = [] }) {
const [pagina, setPagina] = useState(1);
const [filtro, setFiltro] = useState('');
const linhasPorPagina = 50;

const dadosFiltrados = (data || []).filter((item) =>
  columns.some((col) => {
    const valor = item[col.accessor];
    return valor?.toString().toLowerCase().includes(filtro.toLowerCase());
  })
);

const totalPaginas = Math.ceil(dadosFiltrados.length / linhasPorPagina);
const dadosPaginados = dadosFiltrados.slice(
  (pagina - 1) * linhasPorPagina,
  pagina * linhasPorPagina
);


  return (
    <div className="min-w-10 p-5 line-clamp-2 rounded-[15px] bg-[var(--colors-background)]">
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
       
        <thead className="rounded-full h-[50px] bg-[var(--colors-background)] shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] sticky top-0 z-10 border-collapse">
          <tr>
            {columns.map((col, index) => {


              return (
                <th
                  key={col.accessor}
                  className={`truncate text-clip text-center border-collapse  px-2 py-3`}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dadosPaginados.map((item) => (
            <tr
              key={item.id}
              className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default"
            >
              {columns.map((col) => (
                <td key={col.accessor} className="truncate text-clip text-center px-2 py-2">
                  {item[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          {"<"}
        </button>
        <span>
           {pagina} de {totalPaginas}
        </span>
        <button
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
