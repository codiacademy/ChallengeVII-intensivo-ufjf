import "./globals.css";


export const metadata = {
    title: "Codi Cash",
    description: "Codi Cash - Controle de Finanças",
};

export default function RootLayout({ children }) {
    return (
        <html lang="PT-BR">
            <body>
                {children}
            </body>
        </html>

    );
}