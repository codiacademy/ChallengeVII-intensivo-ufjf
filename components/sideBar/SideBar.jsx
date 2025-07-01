"use client";
import Link from "next/link";

export default function SideBar({ onSelect }) {
  return (
    <aside className="w-64 bg-[#e0e5ec] p-4 shadow-md">
      <nav className="space-y-4">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/vendas">Vendas</Link>
          </li>
          <li>
            <Link href="/despesas">Despesas</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}