"use client";
import Link from "next/link";

export default function SideBar({ onSelect }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow-md">
      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link> <br />
        <Link href="/vendas">Vendas</Link>
        
      </nav>
    </aside>
  );
}
