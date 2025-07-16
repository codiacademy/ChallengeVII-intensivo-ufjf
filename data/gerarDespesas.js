import { writeFileSync } from "fs";

function formatarDespesa(obj) {
    return `  {
    id: ${obj.id},
    nome: "${obj.nome}",
    valor: ${obj.valor},
    dataVencimento: "${obj.dataVencimento}",
    dataPagamento: "${obj.dataPagamento}",
    tipoDespesa: "${obj.tipoDespesa}"
  }`;
}

function formatarData(dia, mes, ano) {
    return `${String(dia).padStart(2, "0")}-${String(mes).padStart(2, "0")}-${ano}`;
}

const despesasFixas = [
    { nome: "luz", base: 1200 },
    { nome: "água", base: 320 },
    { nome: "internet", base: 280 },
    { nome: "telefone", base: 140 },
    { nome: "aluguel", base: 3400 },
    { nome: "condomínio", base: 800 },
    { nome: "serviço de limpeza", base: 650 },
    { nome: "seguro patrimonial", base: 300 },
    { nome: "licença de antivírus", base: 110 }
];

const despesasVariaveis = [
    { nome: "compra de materiais escolares", base: 1000, tipo: "variável" },
    { nome: "manutenção predial", base: 1500, tipo: "variável" },
    { nome: "compra de equipamentos", base: 3500, tipo: "variável" }
];

const meses = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
];

let despesas = [];
let id = 1;
const anoAtual = 2025;

for (let ano = anoAtual - 5 + 1; ano <= anoAtual; ano++) {
    for (let m = 0; m < 12; m++) {
        if (ano === anoAtual && m > 6) break; // até julho de 2025
        const mes = m + 1;

        // Despesas fixas
        despesasFixas.forEach((fixa, idx) => {
            const dia = 5 + idx * 3;
            despesas.push({
                id: id++,
                nome: fixa.nome,
                valor: Math.round(fixa.base * (0.85 + Math.random() * 0.3)),
                dataVencimento: formatarData(dia, mes, ano),
                dataPagamento: formatarData(dia, mes, ano),
                tipoDespesa: "fixa"
            });
        });

        // Variáveis: materiais escolares a cada 3 meses
        if ((ano * 12 + m) % 3 === 0) {
            despesas.push({
                id: id++,
                nome: "compra de materiais escolares",
                valor: Math.round(800 + Math.random() * 400),
                dataVencimento: formatarData(15, mes, ano),
                dataPagamento: formatarData(15, mes, ano),
                tipoDespesa: "variável"
            });
        }
        // Variáveis: manutenção predial a cada 6 meses
        if ((ano * 12 + m) % 6 === 0) {
            despesas.push({
                id: id++,
                nome: "manutenção predial",
                valor: Math.round(1200 + Math.random() * 800),
                dataVencimento: formatarData(20, mes, ano),
                dataPagamento: formatarData(20, mes, ano),
                tipoDespesa: "variável"
            });
        }
        // Variáveis: compra de equipamentos a cada 12 meses
        if ((ano * 12 + m) % 12 === 0) {
            despesas.push({
                id: id++,
                nome: "compra de equipamentos",
                valor: Math.round(2500 + Math.random() * 1500),
                dataVencimento: formatarData(25, mes, ano),
                dataPagamento: formatarData(25, mes, ano),
                tipoDespesa: "variável"
            });
        }
    }
}

const despesasFormatadas = despesas.map(formatarDespesa).join(",\n");
const conteudo = `const despesas = [\n${despesasFormatadas}\n];\n\nexport default despesas;\n`;

writeFileSync("despesasUFJF.js", conteudo);