export default function FilialPage() {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold">dados.nome</h1>
    <p>Vendas: R$dados.vendas</p>
    <p>Receita: R$dados.receita</p>
    <p>Despesas: R$dados.despesas</p>

    {/* Aqui você pode adicionar um gráfico com Recharts, por exemplo */}
  </div>
  );
}