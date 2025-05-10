import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
<main className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-fuchsia-950 p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-amber-50">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}
