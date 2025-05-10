"use client";

import { singIn } from "next-auth/react";

export default function LoginForm() {
  async function login(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }


    // Aqui você pode adicionar a lógica de autenticação, como chamar uma API
    console.log(data.email);
    console.log(data.password);

  }


return (
  <form
    onSubmit={login}
    className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-100">Email</label>
      <input
        name="email"
        type="email"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="seuemail@email.com"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-100">Senha</label>
      <input
        name="password"
        type="password"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Entrar
    </button>
  </form>
);}