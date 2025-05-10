"use client";

export default function SideBar({ onSelect }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow-md h-screen">
      <nav className="space-y-4">
        <button
          onClick={() => onSelect('dashboard')}
          className="block w-full text-left hover:bg-gray-200 p-2 rounded"
        >
          Dashboard
        </button>
        <button
          onClick={() => onSelect('vendas')}
          className="block w-full text-left hover:bg-gray-200 p-2 rounded"
        >
          Vendas
        </button>
        <button
          onClick={() => onSelect('despesas')}
          className="block w-full text-left hover:bg-gray-200 p-2 rounded"
        >
          Despesas
        </button>
      </nav>
    </aside>
  );
}
