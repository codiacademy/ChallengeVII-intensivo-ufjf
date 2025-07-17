"use client";
import { botoes } from "../constants/constBotoes";

export default function ButtonsDashboard({ periodo, setPeriodo }) {
    return (
        <div className="flex mb-4">
            {botoes.map((btn) => (
                <button
                    key={btn.value}
                    onClick={() => setPeriodo(btn.value)}
                    style={{
                        marginRight: "0.5rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: periodo === btn.value ? "var(--colors-background)" : "#e5e7eb",
                        color: periodo === btn.value ? "white" : "black",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                    className="shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]"
                >
                    {btn.label}
                </button>
            ))}
        </div>
    )
}