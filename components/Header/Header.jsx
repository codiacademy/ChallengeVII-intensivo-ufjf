"use client";
import { useState } from "react";
import ButtonHeader from "./ButtonHeader.jsx";
import UserMenu from "./UserMenu.jsx";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full h-12 flex justify-between items-center bg-[var(--roxo)] text-[#FFF] relative shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]">
      <ButtonHeader onClick={() => setSidebarOpen((open) => !open)} />
      <Link
        href="/dashboard"
        className="ml-5 w-16 h-7 relative rounded-full bg-white overflow-hidden"
      >
        <Image
          src="/CODICashBranco.png"
          alt="Logo CODICash"
          fill
          className="object-contain"
        />
      </Link>
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
            <SideBar onLinkClick={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}