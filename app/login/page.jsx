'use client';

export default function LoginPage() {
  return (
    <html>
      <body>
        

      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] gap-8 px-4 py-16 mx-auto">

        {/* Lado esquerdo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-[#4b006e]">
              Controle inteligente.<br />Finanças com leveza!
            </h1>
          </div>
        </div>

        {/* Lado direito - formulário */}
        <div className="flex-1 max-w-md bg-[#ce87e4] text-white p-10 rounded-xl shadow-xl w-full">
          <h2 className="text-center text-2xl font-semibold mb-8">Login</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 font-semibold">Usuário</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Digite seu usuário"
                className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-semibold">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#4b006e] hover:bg-[#300046] transition-colors font-bold"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      </body>
    </html>
  );
}
