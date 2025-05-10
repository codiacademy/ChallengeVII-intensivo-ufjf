import Painel from "@/components/telas/Painel";
export default function RootLayout({ children }) {
  return (
<div>

        <header className="bg-[#222] text-[#FFF] py-4">
          <h2 className="text-center">Codi Cash</h2>
        </header>
        <Painel/>
        <div className="flex h-screen">
        <aside className="w-64 bg-[#111] text-#FFF] py-4 justify-center space-x-4">
          <a href="/admin" className="block text-[#FFF] hover:text-[#F00]">Dashboard</a>
          <a href="/admin/filiais" className="block text-[#FFF] hover:text-[#F00]">Vendas</a>
          <a href="/admin/relatorios" className="block text-[#FFF] hover:text-[#F00]">Despesas</a>
          <a href="/admin/configuracoes" className="block text-[#FFF] hover:text-[#F00]">Gráficos</a>

        </aside>
        </div>
        {children}
        <footer className="absolute bottom-0 w-full bg-[#222] text-[#FFF] py-4">
          <h2 className="text-center">Rodapé</h2>
          </footer>
</div>

  );
}