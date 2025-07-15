"use client"
// components/Table.js
import React from 'react';

const DinamicTable = ({ columns, data }) => {
  return (
    <table className="table-auto w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className="px-4 py-2 border-b">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center py-4">
              Nenhum dado encontrado.
            </td>
          </tr>
        ) : (
          data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-2 border-b">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default DinamicTable;
