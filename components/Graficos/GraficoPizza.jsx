"use client";
import { usePeriodo } from "@/components/PeriodoContext";
import despesas from "@/data/despesasUFJF";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

// Cores para o gráfico
const COLORS = ['#90cdff', '#90ffb5', '#f8ff90', '#ff9d90', '#b490ff', '#ff90e0', '#ffd390', '#90fff6', '#ff9090', '#baff90'];

function parseDataBR(dataStr) {
  const [dia, mes, ano] = dataStr.split("-");
  return new Date(`${ano}-${mes}-${dia}`);
}

function getPeriodoRange(periodo) {
  const hoje = new Date();
  let inicio, fim;
  if (periodo === "4semanas") {
    inicio = new Date();
    inicio.setDate(hoje.getDate() - 28);
    fim = hoje;
  } else if (periodo === "7dias") {
    inicio = new Date();
    inicio.setDate(hoje.getDate() - 7);
    fim = hoje;
  } else if (periodo === "12meses") {
    inicio = new Date();
    inicio.setMonth(hoje.getMonth() - 11, 1);
    inicio.setHours(0, 0, 0, 0);
    fim = new Date();
    fim.setMonth(hoje.getMonth() + 1, 1);
    fim.setHours(0, 0, 0, 0);
  } else if (periodo === "5anos") {
    inicio = new Date();
    inicio.setFullYear(hoje.getFullYear() - 5);
    fim = hoje;
  } else {
    inicio = new Date(0);
    fim = hoje;
  }
  return { inicio, fim };
}

export default function GraficoPizza() {
  const { periodo } = usePeriodo();
  const { inicio, fim } = getPeriodoRange(periodo);

  // Filtra despesas do período
  const despesasPeriodo = despesas.filter(item => {
    const data = parseDataBR(item.dataPagamento);
    return data >= inicio && data < fim;
  });

  // Agrupa por nome e soma valores
  const agrupadas = despesasPeriodo.reduce((acc, item) => {
    if (!acc[item.nome]) acc[item.nome] = 0;
    acc[item.nome] += Number(item.valor);
    return acc;
  }, {});

  // Transforma em array para o gráfico
  let data = Object.entries(agrupadas).map(([name, value]) => ({
    name,
    value
  }));

  // Soma total para porcentagem
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Separa os que têm menos de 5% e agrupa em "Outros"
  let outros = 0;
  data = data.filter(item => {
    const perc = (item.value / total) * 100;
    if (perc < 4) {
      outros += item.value;
      return false;
    }
    return true;
  });
  if (outros > 0) {
    data.push({ name: "outros", value: outros });
  }

  // Custom label para mostrar porcentagem
  const renderLabel = ({ name, value }) => {
    const percent = ((value / total) * 100).toFixed(1);
    return `${name}: ${percent}%`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${((value / total) * 100).toFixed(1)}% (${value})`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
