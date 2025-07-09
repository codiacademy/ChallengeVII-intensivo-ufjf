'use client';
import { useState } from 'react';

export default function ButtonExpense({ onAdd }) {
    const [adicionando, setAdicionando] = useState(false);
    const [novoGasto, setNovoGasto] = useState({
        descricao:'',
        loja:'',
        tipo:'',
        valor:'',
        dataPagamento:''

    });

    const handleClick = () => {
        if (adicionando) {
            if (!novoGasto.descricao || !novoGasto.loja || !novoGasto.tipo || !novoGasto.valor || !novoGasto.dataPagamento) {
                alert('Preencha todos os campos!');
                return;
            }

            const nova = {
                id: Date.now(), // ou outro gerador de ID
                ...novoGasto,
            };

            onAdd(nova); // envia para componente pai
            setNovoGasto({ descricao: '', loja: '', tipo: '', valor: '', dataPagamento: '' });
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
                {adicionando ? 'Salvar Gasto' : 'Adicionar Gasto'}
            </button>

            {adicionando && (
                <form
                    className="flex gap-2 flex-wrap mt-4 transition-all duration-300 ease-out opacity-0 translate-y-2 animate-fade-in"
                >
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={novoGasto.descricao}
                        onChange={(e) => setNovoGasto({ ...novoGasto, descricao: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type="text"
                        placeholder="Unidade"
                        value={novoGasto.loja}
                        onChange={(e) => setNovoGasto({ ...novoGasto, loja: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type=""
                        placeholder="Tipo"
                        value={novoGasto.tipo}
                        onChange={(e) => setNovoGasto({ ...novoGasto, tipo: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type="date"
                        placeholder="Dia de Pagamento"
                        value={novoGasto.dataPagamento}
                        onChange={(e) => setNovoGasto({ ...novoGasto, dataPagamento: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        value={novoGasto.valor}
                        onChange={(e) => setNovoGasto({ ...novoGasto, valor: e.target.value })}
                        className="text-[#4d4d4d] m-2 p-3 h-[30px]
                shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px]"
                    />
                </form>
            )}
        </div>
    );
}
