"use client";
import { useState } from "react";
import ButtonHeader from "./ButtonHeader.jsx";
import UserMenu from "./UserMenu.jsx";
import SideBar from "../SideBar/SideBar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full h-12 flex md:justify-end justify-between items-center bg-[var(--roxo)] text-[#FFF] relative">
      <ButtonHeader onClick={() => setSidebarOpen((open) => !open)} />
      <UserMenu onUserMenuClick={() => setSidebarOpen(false)} />
      {/* Overlay do SideBar só no mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 top-12 bottom-12 z-50 bg-transparent md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-[var(--colors-background)] shadow-lg"
            onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar dentro do menu
          >
            <SideBar />
          </div>
        </div>
      )}
    </header>
  );
}