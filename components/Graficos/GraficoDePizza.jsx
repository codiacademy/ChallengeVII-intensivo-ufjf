"use client"
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 300 },
  { name: 'D', value: 200 },
];

const COLORS = ['#90cdff', '#90ffb5', '#f8ff90', '#ff9d90'];

export default function MyPieChart() {
  return (
    <div className='bg-transparent'>

    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
        >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
        </div>
  );
}
