"use client";
import { usePeriodo } from "@/components/PeriodoContext";

const botoes = [
    { label: "Últimas 4 semanas", value: "4semanas" },
    { label: "Últimos 7 dias", value: "7dias" },
    { label: "Últimos 12 meses", value: "12meses" },
    { label: "Últimos 5 anos", value: "5anos" },
];

export default function ButtonsDashboard() {
    const { periodo, setPeriodo } = usePeriodo();

    const handleClick = (value) => {
        setPeriodo(value);
    };

    return (
        <div className="flex mb-4">
            {botoes.map((btn) => (
                <button
                    key={btn.value}
                    onClick={() => handleClick(btn.value)}
                    style={{
                        marginRight: "0.5rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: periodo === btn.value ? "var(--roxo)" : "var(--colors-background)",
                        color: periodo === btn.value ? "white" : "black",
                        border: "none",
                        borderRadius: "15px",
                        cursor: "pointer",
                        zIndex: periodo === btn.value ? 10 : 1,
                    }}
                    className="shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]"
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}