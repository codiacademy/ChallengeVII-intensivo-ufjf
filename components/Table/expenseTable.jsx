"use client"
import despesas from '@/data/despesas';
import { useState } from 'react';
export default function Table() {
    // Estado para armazenar o filtro
    const [filtro, setFiltro] = useState('');
    const dadosFiltrados = despesas.filter((despesa) =>
        despesa.descricao?.toLowerCase().includes(filtro.toLowerCase()) ||
        despesa.loja?.toLowerCase().includes(filtro.toLowerCase()) ||
        despesa.tipo?.toLowerCase().includes(filtro.toLowerCase()) ||
        despesa.dataPagamento?.toLowerCase().includes(filtro.toLowerCase())
      );

    return (
        <div className="min-w-10 p-5 rounded-[15px] bg-[var(--colors-background)]">
            <input
                type="text"
                placeholder="Filtrar por ..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                className="p-2 pl-5 w-full max-w-md mb-5
                text-[#4d4d4d]
                shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] rounded-[15px]"
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
                <thead className=" h-[50px] bg-[var(--colors-background) ] shadow-[6px_7px_10px_#a3b1c6,-5px_-7px_10px_#ffffff] rounded-[15px] sticky top-0 z-10 ">
                    <tr className="bg-[var(--cinza)]">
                        <th className="text-center rounded-l-2xl">ID</th>
                        <th>Descrição</th>
                        <th>Unidade</th>
                        <th>Tipo</th>
                        <th>Data Pagamento</th>
                        <th className="rounded-r-2xl">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {dadosFiltrados.map((despesa) => (
                        <tr key={despesa.id} className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default">
                            <td className="text-center">{despesa.id}</td>
                            <td>{despesa.descricao}</td>
                            <td>{despesa.loja}</td>
                            <td>{despesa.tipo}</td>
                            <td>{despesa.dataPagamento}</td>
                            <td>{despesa.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}