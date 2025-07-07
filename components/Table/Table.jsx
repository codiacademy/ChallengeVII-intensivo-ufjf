"use client"
import vendas from '@/data/vendasUFJF';
import { useState } from 'react';
export default function Table() {
    // Estado para armazenar o filtro
    const [filtro, setFiltro] = useState('');
    const dadosFiltrados = vendas.filter((venda) =>
        venda.aluno.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="min-w-full p-5 rounded-[15px] bg-[var(--colors-background)]">
            <input
                type="text"
                placeholder="Filtrar por aluno..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="p-2 pl-5 w-full max-w-md mb-5
                text-[#4d4d4d]
                shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff] rounded-[15px]"
            />
            <table className="table-fixed w-full text-left text-[#4d4d4d] border-separate border-spacing-y-2 ">
                <colgroup>
                    <col className="w-10" />
                    <col className="w-40" />
                    <col className="w-40" />
                    <col className="w-20" />
                    <col className="w-20" />
                    <col className="w-20" />
                </colgroup>
                <thead className=" h-[50px] bg-[var(--colors-background)] shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff] rounded-[15px] sticky top-0 z-10">
                    <tr>
                        <th className="text-center rounded-l-2xl">ID</th>
                        <th>Aluno</th>
                        <th>Curso</th>
                        <th>Data</th>
                        <th>Forma de Pagamento</th>
                        <th className="rounded-r-2xl">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosFiltrados.map((venda) => (
                        <tr key={venda.id} className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default">
                            <td className="text-center">{venda.id}</td>
                            <td>{venda.aluno}</td>
                            <td>{venda.curso}</td>
                            <td>{venda.dataVenda}</td>
                            <td>{venda.formaPagamento}</td>
                            <td>{venda.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}