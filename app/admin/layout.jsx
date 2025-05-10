export default function RootLayout({ children }) {
  return (
    <div>
      <header className="bg-[#222] text-[#FFF] py-4">
        <h2 className="text-center">Codi Cash</h2>
      </header>
      {children}
      <footer className="absolute bottom-0 w-full bg-[#222] text-[#FFF] py-4">
        <h2 className="text-center">Rodapé</h2>
      </footer>
    </div>
  );
}
