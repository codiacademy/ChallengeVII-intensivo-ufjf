import { writeFileSync } from "fs";

function formatarVenda(obj) {
    return `  {
    id: ${obj.id},
    aluno: "${obj.aluno}",
    curso: "${obj.curso}",
    valor: ${obj.valor},
    formaPagamento: "${obj.formaPagamento}",
    parcelas: ${obj.parcelas},
    cpf: "${obj.cpf}",
    endereco: "${obj.endereco}",
    dataVenda: "${obj.dataVenda}",
    dataPagamento: "${obj.dataPagamento}"
  }`;
}

const cursos = [
    "Front-end",
    "Back-end",
    "Data Science",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "DevOps",
    "UX/UI",
    "Mobile"
];

const formasPagamento = ["Cartão", "PIX", "Boleto", "Débito", "Crédito"];
const nomes = [
    "Rafael da Silva", "Maria Souza", "João Lima", "Ana Clara", "Lucas Martins",
    "Fernanda Costa", "Carlos Pereira", "Juliana Rocha", "Eduardo Almeida", "Patrícia Gomes"
];
const enderecos = [
    "Rua a, 123", "Rua b, 456", "Rua c, 789", "Rua d, 101", "Rua e, 202",
    "Rua f, 303", "Rua g, 404", "Rua h, 505", "Rua i, 606", "Rua j, 707"
];
const cpfs = [
    "123.456.789-00", "987.654.321-00", "987.585.385-00", "987.124.558-00", "123.321.123-00",
    "321.654.987-00", "654.321.987-00", "456.789.123-00", "789.123.456-00", "321.987.654-00"
];

function formatarData(d) {
    const [ano, mes, dia] = d.split("-");
    return `${dia}-${mes}-${ano}`;
}

let vendas = [];
let id = 1;
const anoAtual = 2025;
const vendasPorCursoPorMes = 3; // ajuste para a quantidade desejada
const hoje = new Date();
console.log(hoje)
const anoHoje = hoje.getFullYear();
const mesHoje = hoje.getMonth() + 1; // Janeiro = 0
const diaHoje = hoje.getDate();

for (let ano = anoAtual - 5 + 1; ano <= anoAtual; ano++) {
    for (let mesNum = 1; mesNum <= 12; mesNum++) {
        for (let i = 0; i < cursos.length; i++) {
            for (let v = 0; v < vendasPorCursoPorMes; v++) {
                const mes = String(mesNum).padStart(2, "0");
                const diaNum = ((i * vendasPorCursoPorMes + v) % 28) + 1;
                const dia = String(diaNum).padStart(2, "0");
                // Não gera vendas futuras
                if (
                    ano > anoHoje ||
                    (ano === anoHoje && mesNum > mesHoje) ||
                    (ano === anoHoje && mesNum === mesHoje && diaNum > diaHoje)
                ) {
                    continue;
                }
                const dataVendaISO = `${ano}-${mes}-${dia}`;
                const dataPagamentoISO = `${ano}-${mes}-${String(Number(dia) + 1).padStart(2, "0")}`;
                vendas.push({
                    id: id++,
                    aluno: nomes[(i + v) % nomes.length],
                    curso: cursos[i],
                    valor: 500 + Math.floor(Math.random() * 500),
                    formaPagamento: formasPagamento[(i + v) % formasPagamento.length],
                    parcelas: 1 + Math.floor(Math.random() * 6),
                    cpf: cpfs[(i + v) % cpfs.length],
                    endereco: enderecos[(i + v) % enderecos.length],
                    dataVenda: formatarData(dataVendaISO),
                    dataPagamento: formatarData(dataPagamentoISO)
                });
            }
        }
    }
}

const vendasFormatadas = vendas.map(formatarVenda).join(",\n");

const conteudo = `const vendas = [\n${vendasFormatadas}\n];\n\nexport default vendas;\n`;

writeFileSync("vendasUFJF.js", conteudo);