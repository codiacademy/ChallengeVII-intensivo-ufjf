"use client";
import { createContext, useContext, useState } from "react";

const PeriodoContext = createContext();

export function PeriodoProvider({ children }) {
    const [periodo, setPeriodo] = useState("12meses"); // valor deve bater com o objeto periodos
    return (
        <PeriodoContext.Provider value={{ periodo, setPeriodo }}>
            {children}
        </PeriodoContext.Provider>
    );
}

export function usePeriodo() {
    return useContext(PeriodoContext);
}