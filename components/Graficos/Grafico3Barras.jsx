function parseDataBR(dataBR) {
    // dataBR: "17-03-2025"
    const [dia, mes, ano] = dataBR.split("-");
    return `${ano}-${mes}-${dia}`;
}

const calcularSomaPeriodo = (inicio, fim) => {
    return despesas
        .filter((item) => {
            const dataPagamento = new Date(parseDataBR(item.dataPagamento));
            return dataPagamento >= inicio && dataPagamento < fim;
        })
        .reduce((total, item) => total + Number(item.valor), 0);
};