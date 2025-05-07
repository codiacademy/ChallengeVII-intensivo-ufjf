import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <body className="bg-[#111] text-[#FFF] font-sans mx-auto">
        <header className="bg-[#222] text-[#FFF] py-4">
          <h2 className="text-center">Codi Cash</h2>
        </header>
        {children}
        <footer className="absolute bottom-0 w-full bg-[#222] text-[#FFF] py-4">
          <h2 className="text-center">Rodapé</h2>
          </footer>
      </body>
    </html>
  );
}