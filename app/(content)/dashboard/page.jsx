import Grafico3Barras from "../../../components/Graficos/Grafico3Barras";
import GraficoDePizza from "../../../components/Graficos/GraficoDePizza";

export default function Dashboard() {
  return (
    <div className="p-4 flex flex-wrap">

      <Grafico3Barras />
      <GraficoDePizza />
     
    </div>
  );
}
