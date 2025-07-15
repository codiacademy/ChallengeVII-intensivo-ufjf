import "./../globals.css";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin" ] })

export const metadata = {
  title: "Codi Cash",
  description: "Codi Cash - Controle de Finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR" className={inter.className}>
      <body className="h-screen flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden bg-[var(--colors-background)]">
          <SideBar />
          <main className="flex-1 flex-grow overflow-auto rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_0px_10px_#ffffff] bg-[var(--colors-background)]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}