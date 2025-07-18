"use client";
import { usePeriodo } from "@/components/PeriodoContext";

const botoes = [
    { label: "4 Semanas", value: "4semanas" },
    { label: "7 Dias", value: "7dias" },
    { label: "12 Meses", value: "12meses" },
    { label: "5 Anos", value: "5anos" },
];

export default function ButtonsDashboard() {
    const { periodo, setPeriodo } = usePeriodo();

    const handleClick = (value) => {
        setPeriodo(value);
    };

    return (
        <div className="flex mb-4 gap-2">
            {botoes.map((btn) => (
                <button
                    key={btn.value}
                    onClick={() => handleClick(btn.value)}
                    className={`px-4 py-2 text-sm md:text-xl line-clamp-2 rounded-[15px] cursor-pointer transition-colors duration-200
                        shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]
                        ${periodo === btn.value ? 'bg-[var(--roxo)] text-white z-10' : 'bg-[var(--colors-background)] text-black z-1'}
                    `}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}