
export default function KPIs() {
  return (
   <div className="p-2 pl-5 w-155 mb-5
                text-[#4d4d4d]
                shadow-[10px_10px_10px_#a3b1c6,-10px_-10px_15px_#ffffff] rounded-[15px]">
        <h2>Indicadores</h2>
        <table className="table-fixed w-full text-left text-[#4d4d4d] border-separate border-spacing-y-2">
            <tbody>
                <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
                    <th>Receitas Totais</th>
                    <th>R$15.000,00</th>
                </tr>
                <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
                    <th>Despesas Totais</th>
                    <th>R$10.000,00</th>
                </tr>
                <tr className="h-8 hover:shadow-[10px_10px_20px_#a3b1c6,-10px_-10px_20px_#ffffff] rounded-[15px] cursor-default text-center">
                    <th>Balanço</th>
                    <th>R$5.000,00</th>
                </tr>
            </tbody>
        </table>
   </div>
  );
}
