'use client';
import { useState } from 'react';

export default function ButtonNewSale({ onAdd }) {
    const [adicionando, setAdicionando] = useState(false);
    const [novaVenda, setNovaVenda] = useState({
        aluno: '',
        curso: '',
        formaPagamento: '',
        valor: '',
        dataVenda: '',
    });

    const handleClick = () => {
        if (adicionando) {
            if (!novaVenda.aluno || !novaVenda.curso || !novaVenda.dataVenda || !novaVenda.formaPagamento || !novaVenda.valor) {
                alert('Preencha todos os campos!');
                return;
            }

            const nova = {
                id: Date.now(), // ou outro gerador de ID
                ...novaVenda,
            };

            onAdd(nova); // envia para componente pai
            setNovaVenda({ aluno: '', curso: '', dataVenda: '', formaPagamento: '', valor: '' });
        }
        setAdicionando(!adicionando);
    };

    return (
        <div className="mb-4 ">
            <button
                onClick={handleClick}
                className=" text-[#4d4d4d] bg-transparent font-medium px-5 py-2.5 
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] hover:shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_10px_#ffffff]"
            >
                {adicionando ? 'Salvar Venda' : 'Adicionar Venda'}
            </button>

            {adicionando && (
                <form
                    className="flex gap-2 flex-wrap mt-4 transition-all duration-300 ease-out opacity-0 translate-y-2 animate-fade-in"
                >
                    <input
                        type="text"
                        placeholder="Aluno"
                        value={novaVenda.aluno}
                        onChange={(e) => setNovaVenda({ ...novaVenda, aluno: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type="text"
                        placeholder="Curso"
                        value={novaVenda.curso}
                        onChange={(e) => setNovaVenda({ ...novaVenda, curso: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />

                    <input
                        type="text"
                        placeholder="Forma de Pagamento"
                        value={novaVenda.formaPagamento}
                        onChange={(e) => setNovaVenda({ ...novaVenda, formaPagamento: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        value={novaVenda.valor}
                        onChange={(e) => setNovaVenda({ ...novaVenda, valor: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                                        <input
                        type="date"
                        value={novaVenda.dataVenda}
                        onChange={(e) => setNovaVenda({ ...novaVenda, dataVenda: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                </form>
            )}
        </div>
    );
}
