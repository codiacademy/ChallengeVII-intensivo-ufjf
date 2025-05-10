"use client";

import { useState } from "react";
import Dashboard from "@/components/telas/Dashboard";
import Vendas from "@/components/telas/Vendas";
import Despesas from "@/components/telas/Despesas";
import SideBar from "@/components/sideBar/SideBar";

export default function Painel() {
  const [selected, setSelected] = useState("dashboard");

  const renderContent = () => {
    switch (selected) {
      case "dashboard":
        return <Dashboard />;
      case "vendas":
        return <Vendas />;
      case "despesas":
        return <Despesas />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <SideBar onSelect={setSelected} />
      <main className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
