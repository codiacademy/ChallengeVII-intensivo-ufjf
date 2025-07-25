import "./../globals.css";
import SideBar from "@/components/SideBar/SideBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Codi Cash",
  description: "Codi Cash - Controle de Finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-BR" className={inter.className}>
      <body className="h-screen flex flex-col overflow-hidden ">
        <Header />
        <div className="flex flex-1 overflow-hidden bg-[var(--colors-background)] ">
          <div className="hidden md:flex flex-col w-[250px] bg-[var(--colors-sidebar)]">
            <SideBar />
          </div>
          <div className="w-full overflow-auto ">
            <main className="min-h-11/12 m-0 md:m-7 p-0 md:p-3 flex-1 flex-grow rounded-[15px] shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] bg-[var(--colors-background)]">{children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}