"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar({ onLinkClick }) {
  const pathname = usePathname();


  const getButtonClasses = (path) => {
    const base = "block w-full p-2 rounded-[15px] transition-shadow text-center";
    const shadowDefault = "shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff]";
    const shadowHover = "hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_15px_#ffffff]";
    const shadowActive = "shadow-[inset_5px_5px_10px_#a3b1c6,inset_-5px_-5px_10px_#ffffff]";
    const isActive = pathname === path;

    return `${base} ${isActive ? shadowActive : shadowDefault} ${!isActive ? shadowHover : ""}`;
  };

return (
    <aside className="w-64 bg-[var(--colors-background)] p-4 pt-8">
      <nav className="space-y-4">
        <ul className="gap-5 flex flex-col">
          <li>
            <Link href="/dashboard" className={getButtonClasses("/dashboard")} onClick={onLinkClick}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/vendas" className={getButtonClasses("/vendas")} onClick={onLinkClick}>
              Vendas
            </Link>
          </li>
          <li>
            <Link href="/despesas" className={getButtonClasses("/despesas")} onClick={onLinkClick}>
              Despesas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}