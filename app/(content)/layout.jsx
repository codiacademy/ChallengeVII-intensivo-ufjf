import "../globals.css";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Codi Cash",
  description: "Codi Cash - Controle de Finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <SideBar />
          <main className="min-w-4 flex-1 overflow-auto">{children}</main>
        </div>
        <Footer />
      </body>

    </html>
  );
}