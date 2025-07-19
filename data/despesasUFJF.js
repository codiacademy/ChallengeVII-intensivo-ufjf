const despesas = [
  {
    id: 1,
    nome: "luz",
    valor: 3323,
    dataVencimento: "05-01-2021",
    dataPagamento: "05-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 2,
    nome: "água",
    valor: 596,
    dataVencimento: "08-01-2021",
    dataPagamento: "08-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 3,
    nome: "internet",
    valor: 920,
    dataVencimento: "11-01-2021",
    dataPagamento: "11-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 4,
    nome: "telefone",
    valor: 260,
    dataVencimento: "14-01-2021",
    dataPagamento: "14-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 5,
    nome: "aluguel",
    valor: 6305,
    dataVencimento: "17-01-2021",
    dataPagamento: "17-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 6,
    nome: "condomínio",
    valor: 1490,
    dataVencimento: "20-01-2021",
    dataPagamento: "20-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 7,
    nome: "serviço de limpeza",
    valor: 1205,
    dataVencimento: "23-01-2021",
    dataPagamento: "23-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 8,
    nome: "seguro patrimonial",
    valor: 547,
    dataVencimento: "26-01-2021",
    dataPagamento: "26-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 9,
    nome: "licença de antivírus",
    valor: 2073,
    dataVencimento: "29-01-2021",
    dataPagamento: "29-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 10,
    nome: "compra de materiais escolares",
    valor: 1087,
    dataVencimento: "15-01-2021",
    dataPagamento: "15-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 11,
    nome: "manutenção predial",
    valor: 1564,
    dataVencimento: "20-01-2021",
    dataPagamento: "20-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 12,
    nome: "compra de equipamentos",
    valor: 3223,
    dataVencimento: "25-01-2021",
    dataPagamento: "25-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 13,
    nome: "luz",
    valor: 3281,
    dataVencimento: "05-02-2021",
    dataPagamento: "05-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 14,
    nome: "água",
    valor: 586,
    dataVencimento: "08-02-2021",
    dataPagamento: "08-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 15,
    nome: "internet",
    valor: 939,
    dataVencimento: "11-02-2021",
    dataPagamento: "11-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 16,
    nome: "telefone",
    valor: 258,
    dataVencimento: "14-02-2021",
    dataPagamento: "14-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 17,
    nome: "aluguel",
    valor: 6128,
    dataVencimento: "17-02-2021",
    dataPagamento: "17-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 18,
    nome: "condomínio",
    valor: 1458,
    dataVencimento: "20-02-2021",
    dataPagamento: "20-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 19,
    nome: "serviço de limpeza",
    valor: 1201,
    dataVencimento: "23-02-2021",
    dataPagamento: "23-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 20,
    nome: "seguro patrimonial",
    valor: 563,
    dataVencimento: "26-02-2021",
    dataPagamento: "26-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 21,
    nome: "licença de antivírus",
    valor: 2090,
    dataVencimento: "29-02-2021",
    dataPagamento: "29-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 22,
    nome: "luz",
    valor: 3389,
    dataVencimento: "05-03-2021",
    dataPagamento: "05-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 23,
    nome: "água",
    valor: 602,
    dataVencimento: "08-03-2021",
    dataPagamento: "08-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 24,
    nome: "internet",
    valor: 938,
    dataVencimento: "11-03-2021",
    dataPagamento: "11-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 25,
    nome: "telefone",
    valor: 261,
    dataVencimento: "14-03-2021",
    dataPagamento: "14-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 26,
    nome: "aluguel",
    valor: 6148,
    dataVencimento: "17-03-2021",
    dataPagamento: "17-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 27,
    nome: "condomínio",
    valor: 1488,
    dataVencimento: "20-03-2021",
    dataPagamento: "20-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 28,
    nome: "serviço de limpeza",
    valor: 1216,
    dataVencimento: "23-03-2021",
    dataPagamento: "23-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 29,
    nome: "seguro patrimonial",
    valor: 543,
    dataVencimento: "26-03-2021",
    dataPagamento: "26-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 30,
    nome: "licença de antivírus",
    valor: 2087,
    dataVencimento: "29-03-2021",
    dataPagamento: "29-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 31,
    nome: "luz",
    valor: 3393,
    dataVencimento: "05-04-2021",
    dataPagamento: "05-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 32,
    nome: "água",
    valor: 581,
    dataVencimento: "08-04-2021",
    dataPagamento: "08-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 33,
    nome: "internet",
    valor: 905,
    dataVencimento: "11-04-2021",
    dataPagamento: "11-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 34,
    nome: "telefone",
    valor: 263,
    dataVencimento: "14-04-2021",
    dataPagamento: "14-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 35,
    nome: "aluguel",
    valor: 6168,
    dataVencimento: "17-04-2021",
    dataPagamento: "17-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 36,
    nome: "condomínio",
    valor: 1473,
    dataVencimento: "20-04-2021",
    dataPagamento: "20-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 37,
    nome: "serviço de limpeza",
    valor: 1177,
    dataVencimento: "23-04-2021",
    dataPagamento: "23-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 38,
    nome: "seguro patrimonial",
    valor: 551,
    dataVencimento: "26-04-2021",
    dataPagamento: "26-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 39,
    nome: "licença de antivírus",
    valor: 2106,
    dataVencimento: "29-04-2021",
    dataPagamento: "29-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 40,
    nome: "compra de materiais escolares",
    valor: 935,
    dataVencimento: "15-04-2021",
    dataPagamento: "15-04-2021",
    tipoDespesa: "variável"
  },
  {
    id: 41,
    nome: "luz",
    valor: 3279,
    dataVencimento: "05-05-2021",
    dataPagamento: "05-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 42,
    nome: "água",
    valor: 592,
    dataVencimento: "08-05-2021",
    dataPagamento: "08-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 43,
    nome: "internet",
    valor: 927,
    dataVencimento: "11-05-2021",
    dataPagamento: "11-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 44,
    nome: "telefone",
    valor: 264,
    dataVencimento: "14-05-2021",
    dataPagamento: "14-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 45,
    nome: "aluguel",
    valor: 6234,
    dataVencimento: "17-05-2021",
    dataPagamento: "17-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 46,
    nome: "condomínio",
    valor: 1462,
    dataVencimento: "20-05-2021",
    dataPagamento: "20-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 47,
    nome: "serviço de limpeza",
    valor: 1179,
    dataVencimento: "23-05-2021",
    dataPagamento: "23-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 48,
    nome: "seguro patrimonial",
    valor: 562,
    dataVencimento: "26-05-2021",
    dataPagamento: "26-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 49,
    nome: "licença de antivírus",
    valor: 2054,
    dataVencimento: "29-05-2021",
    dataPagamento: "29-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 50,
    nome: "luz",
    valor: 3335,
    dataVencimento: "05-06-2021",
    dataPagamento: "05-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 51,
    nome: "água",
    valor: 592,
    dataVencimento: "08-06-2021",
    dataPagamento: "08-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 52,
    nome: "internet",
    valor: 905,
    dataVencimento: "11-06-2021",
    dataPagamento: "11-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 53,
    nome: "telefone",
    valor: 259,
    dataVencimento: "14-06-2021",
    dataPagamento: "14-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 54,
    nome: "aluguel",
    valor: 6125,
    dataVencimento: "17-06-2021",
    dataPagamento: "17-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 55,
    nome: "condomínio",
    valor: 1488,
    dataVencimento: "20-06-2021",
    dataPagamento: "20-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 56,
    nome: "serviço de limpeza",
    valor: 1205,
    dataVencimento: "23-06-2021",
    dataPagamento: "23-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 57,
    nome: "seguro patrimonial",
    valor: 545,
    dataVencimento: "26-06-2021",
    dataPagamento: "26-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 58,
    nome: "licença de antivírus",
    valor: 2042,
    dataVencimento: "29-06-2021",
    dataPagamento: "29-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 59,
    nome: "luz",
    valor: 3344,
    dataVencimento: "05-07-2021",
    dataPagamento: "05-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 60,
    nome: "água",
    valor: 579,
    dataVencimento: "08-07-2021",
    dataPagamento: "08-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 61,
    nome: "internet",
    valor: 933,
    dataVencimento: "11-07-2021",
    dataPagamento: "11-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 62,
    nome: "telefone",
    valor: 265,
    dataVencimento: "14-07-2021",
    dataPagamento: "14-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 63,
    nome: "aluguel",
    valor: 6306,
    dataVencimento: "17-07-2021",
    dataPagamento: "17-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 64,
    nome: "condomínio",
    valor: 1459,
    dataVencimento: "20-07-2021",
    dataPagamento: "20-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 65,
    nome: "serviço de limpeza",
    valor: 1177,
    dataVencimento: "23-07-2021",
    dataPagamento: "23-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 66,
    nome: "seguro patrimonial",
    valor: 562,
    dataVencimento: "26-07-2021",
    dataPagamento: "26-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 67,
    nome: "licença de antivírus",
    valor: 2079,
    dataVencimento: "29-07-2021",
    dataPagamento: "29-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 68,
    nome: "compra de materiais escolares",
    valor: 1115,
    dataVencimento: "15-07-2021",
    dataPagamento: "15-07-2021",
    tipoDespesa: "variável"
  },
  {
    id: 69,
    nome: "manutenção predial",
    valor: 1303,
    dataVencimento: "20-07-2021",
    dataPagamento: "20-07-2021",
    tipoDespesa: "variável"
  },
  {
    id: 70,
    nome: "luz",
    valor: 3247,
    dataVencimento: "05-08-2021",
    dataPagamento: "05-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 71,
    nome: "água",
    valor: 587,
    dataVencimento: "08-08-2021",
    dataPagamento: "08-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 72,
    nome: "internet",
    valor: 913,
    dataVencimento: "11-08-2021",
    dataPagamento: "11-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 73,
    nome: "telefone",
    valor: 259,
    dataVencimento: "14-08-2021",
    dataPagamento: "14-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 74,
    nome: "aluguel",
    valor: 6206,
    dataVencimento: "17-08-2021",
    dataPagamento: "17-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 75,
    nome: "condomínio",
    valor: 1483,
    dataVencimento: "20-08-2021",
    dataPagamento: "20-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 76,
    nome: "serviço de limpeza",
    valor: 1190,
    dataVencimento: "23-08-2021",
    dataPagamento: "23-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 77,
    nome: "seguro patrimonial",
    valor: 545,
    dataVencimento: "26-08-2021",
    dataPagamento: "26-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 78,
    nome: "licença de antivírus",
    valor: 2039,
    dataVencimento: "29-08-2021",
    dataPagamento: "29-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 79,
    nome: "luz",
    valor: 3405,
    dataVencimento: "05-09-2021",
    dataPagamento: "05-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 80,
    nome: "água",
    valor: 597,
    dataVencimento: "08-09-2021",
    dataPagamento: "08-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 81,
    nome: "internet",
    valor: 923,
    dataVencimento: "11-09-2021",
    dataPagamento: "11-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 82,
    nome: "telefone",
    valor: 256,
    dataVencimento: "14-09-2021",
    dataPagamento: "14-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 83,
    nome: "aluguel",
    valor: 6422,
    dataVencimento: "17-09-2021",
    dataPagamento: "17-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 84,
    nome: "condomínio",
    valor: 1505,
    dataVencimento: "20-09-2021",
    dataPagamento: "20-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 85,
    nome: "serviço de limpeza",
    valor: 1204,
    dataVencimento: "23-09-2021",
    dataPagamento: "23-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 86,
    nome: "seguro patrimonial",
    valor: 556,
    dataVencimento: "26-09-2021",
    dataPagamento: "26-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 87,
    nome: "licença de antivírus",
    valor: 1999,
    dataVencimento: "29-09-2021",
    dataPagamento: "29-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 88,
    nome: "luz",
    valor: 3365,
    dataVencimento: "05-10-2021",
    dataPagamento: "05-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 89,
    nome: "água",
    valor: 600,
    dataVencimento: "08-10-2021",
    dataPagamento: "08-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 90,
    nome: "internet",
    valor: 920,
    dataVencimento: "11-10-2021",
    dataPagamento: "11-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 91,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-10-2021",
    dataPagamento: "14-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 92,
    nome: "aluguel",
    valor: 6414,
    dataVencimento: "17-10-2021",
    dataPagamento: "17-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 93,
    nome: "condomínio",
    valor: 1506,
    dataVencimento: "20-10-2021",
    dataPagamento: "20-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 94,
    nome: "serviço de limpeza",
    valor: 1212,
    dataVencimento: "23-10-2021",
    dataPagamento: "23-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 95,
    nome: "seguro patrimonial",
    valor: 567,
    dataVencimento: "26-10-2021",
    dataPagamento: "26-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 96,
    nome: "licença de antivírus",
    valor: 2038,
    dataVencimento: "29-10-2021",
    dataPagamento: "29-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 97,
    nome: "compra de materiais escolares",
    valor: 1074,
    dataVencimento: "15-10-2021",
    dataPagamento: "15-10-2021",
    tipoDespesa: "variável"
  },
  {
    id: 98,
    nome: "luz",
    valor: 3286,
    dataVencimento: "05-11-2021",
    dataPagamento: "05-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 99,
    nome: "água",
    valor: 586,
    dataVencimento: "08-11-2021",
    dataPagamento: "08-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 100,
    nome: "internet",
    valor: 902,
    dataVencimento: "11-11-2021",
    dataPagamento: "11-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 101,
    nome: "telefone",
    valor: 253,
    dataVencimento: "14-11-2021",
    dataPagamento: "14-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 102,
    nome: "aluguel",
    valor: 6151,
    dataVencimento: "17-11-2021",
    dataPagamento: "17-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 103,
    nome: "condomínio",
    valor: 1483,
    dataVencimento: "20-11-2021",
    dataPagamento: "20-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 104,
    nome: "serviço de limpeza",
    valor: 1192,
    dataVencimento: "23-11-2021",
    dataPagamento: "23-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 105,
    nome: "seguro patrimonial",
    valor: 555,
    dataVencimento: "26-11-2021",
    dataPagamento: "26-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 106,
    nome: "licença de antivírus",
    valor: 2060,
    dataVencimento: "29-11-2021",
    dataPagamento: "29-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 107,
    nome: "luz",
    valor: 3409,
    dataVencimento: "05-12-2021",
    dataPagamento: "05-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 108,
    nome: "água",
    valor: 583,
    dataVencimento: "08-12-2021",
    dataPagamento: "08-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 109,
    nome: "internet",
    valor: 949,
    dataVencimento: "11-12-2021",
    dataPagamento: "11-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 110,
    nome: "telefone",
    valor: 255,
    dataVencimento: "14-12-2021",
    dataPagamento: "14-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 111,
    nome: "aluguel",
    valor: 6424,
    dataVencimento: "17-12-2021",
    dataPagamento: "17-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 112,
    nome: "condomínio",
    valor: 1510,
    dataVencimento: "20-12-2021",
    dataPagamento: "20-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 113,
    nome: "serviço de limpeza",
    valor: 1186,
    dataVencimento: "23-12-2021",
    dataPagamento: "23-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 114,
    nome: "seguro patrimonial",
    valor: 541,
    dataVencimento: "26-12-2021",
    dataPagamento: "26-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 115,
    nome: "licença de antivírus",
    valor: 2057,
    dataVencimento: "29-12-2021",
    dataPagamento: "29-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 116,
    nome: "luz",
    valor: 3281,
    dataVencimento: "05-01-2022",
    dataPagamento: "05-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 117,
    nome: "água",
    valor: 586,
    dataVencimento: "08-01-2022",
    dataPagamento: "08-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 118,
    nome: "internet",
    valor: 906,
    dataVencimento: "11-01-2022",
    dataPagamento: "11-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 119,
    nome: "telefone",
    valor: 265,
    dataVencimento: "14-01-2022",
    dataPagamento: "14-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 120,
    nome: "aluguel",
    valor: 6263,
    dataVencimento: "17-01-2022",
    dataPagamento: "17-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 121,
    nome: "condomínio",
    valor: 1498,
    dataVencimento: "20-01-2022",
    dataPagamento: "20-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 122,
    nome: "serviço de limpeza",
    valor: 1172,
    dataVencimento: "23-01-2022",
    dataPagamento: "23-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 123,
    nome: "seguro patrimonial",
    valor: 557,
    dataVencimento: "26-01-2022",
    dataPagamento: "26-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 124,
    nome: "licença de antivírus",
    valor: 2002,
    dataVencimento: "29-01-2022",
    dataPagamento: "29-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 125,
    nome: "compra de materiais escolares",
    valor: 916,
    dataVencimento: "15-01-2022",
    dataPagamento: "15-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 126,
    nome: "manutenção predial",
    valor: 1315,
    dataVencimento: "20-01-2022",
    dataPagamento: "20-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 127,
    nome: "compra de equipamentos",
    valor: 3531,
    dataVencimento: "25-01-2022",
    dataPagamento: "25-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 128,
    nome: "luz",
    valor: 3284,
    dataVencimento: "05-02-2022",
    dataPagamento: "05-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 129,
    nome: "água",
    valor: 591,
    dataVencimento: "08-02-2022",
    dataPagamento: "08-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 130,
    nome: "internet",
    valor: 914,
    dataVencimento: "11-02-2022",
    dataPagamento: "11-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 131,
    nome: "telefone",
    valor: 262,
    dataVencimento: "14-02-2022",
    dataPagamento: "14-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 132,
    nome: "aluguel",
    valor: 6216,
    dataVencimento: "17-02-2022",
    dataPagamento: "17-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 133,
    nome: "condomínio",
    valor: 1476,
    dataVencimento: "20-02-2022",
    dataPagamento: "20-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 134,
    nome: "serviço de limpeza",
    valor: 1224,
    dataVencimento: "23-02-2022",
    dataPagamento: "23-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 135,
    nome: "seguro patrimonial",
    valor: 544,
    dataVencimento: "26-02-2022",
    dataPagamento: "26-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 136,
    nome: "licença de antivírus",
    valor: 2105,
    dataVencimento: "29-02-2022",
    dataPagamento: "29-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 137,
    nome: "luz",
    valor: 3266,
    dataVencimento: "05-03-2022",
    dataPagamento: "05-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 138,
    nome: "água",
    valor: 607,
    dataVencimento: "08-03-2022",
    dataPagamento: "08-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 139,
    nome: "internet",
    valor: 927,
    dataVencimento: "11-03-2022",
    dataPagamento: "11-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 140,
    nome: "telefone",
    valor: 259,
    dataVencimento: "14-03-2022",
    dataPagamento: "14-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 141,
    nome: "aluguel",
    valor: 6343,
    dataVencimento: "17-03-2022",
    dataPagamento: "17-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 142,
    nome: "condomínio",
    valor: 1458,
    dataVencimento: "20-03-2022",
    dataPagamento: "20-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 143,
    nome: "serviço de limpeza",
    valor: 1176,
    dataVencimento: "23-03-2022",
    dataPagamento: "23-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 144,
    nome: "seguro patrimonial",
    valor: 541,
    dataVencimento: "26-03-2022",
    dataPagamento: "26-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 145,
    nome: "licença de antivírus",
    valor: 2047,
    dataVencimento: "29-03-2022",
    dataPagamento: "29-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 146,
    nome: "luz",
    valor: 3410,
    dataVencimento: "05-04-2022",
    dataPagamento: "05-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 147,
    nome: "água",
    valor: 599,
    dataVencimento: "08-04-2022",
    dataPagamento: "08-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 148,
    nome: "internet",
    valor: 950,
    dataVencimento: "11-04-2022",
    dataPagamento: "11-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 149,
    nome: "telefone",
    valor: 261,
    dataVencimento: "14-04-2022",
    dataPagamento: "14-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 150,
    nome: "aluguel",
    valor: 6129,
    dataVencimento: "17-04-2022",
    dataPagamento: "17-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 151,
    nome: "condomínio",
    valor: 1504,
    dataVencimento: "20-04-2022",
    dataPagamento: "20-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 152,
    nome: "serviço de limpeza",
    valor: 1207,
    dataVencimento: "23-04-2022",
    dataPagamento: "23-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 153,
    nome: "seguro patrimonial",
    valor: 540,
    dataVencimento: "26-04-2022",
    dataPagamento: "26-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 154,
    nome: "licença de antivírus",
    valor: 2021,
    dataVencimento: "29-04-2022",
    dataPagamento: "29-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 155,
    nome: "compra de materiais escolares",
    valor: 1128,
    dataVencimento: "15-04-2022",
    dataPagamento: "15-04-2022",
    tipoDespesa: "variável"
  },
  {
    id: 156,
    nome: "luz",
    valor: 3417,
    dataVencimento: "05-05-2022",
    dataPagamento: "05-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 157,
    nome: "água",
    valor: 606,
    dataVencimento: "08-05-2022",
    dataPagamento: "08-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 158,
    nome: "internet",
    valor: 931,
    dataVencimento: "11-05-2022",
    dataPagamento: "11-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 159,
    nome: "telefone",
    valor: 254,
    dataVencimento: "14-05-2022",
    dataPagamento: "14-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 160,
    nome: "aluguel",
    valor: 6404,
    dataVencimento: "17-05-2022",
    dataPagamento: "17-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 161,
    nome: "condomínio",
    valor: 1471,
    dataVencimento: "20-05-2022",
    dataPagamento: "20-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 162,
    nome: "serviço de limpeza",
    valor: 1177,
    dataVencimento: "23-05-2022",
    dataPagamento: "23-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 163,
    nome: "seguro patrimonial",
    valor: 562,
    dataVencimento: "26-05-2022",
    dataPagamento: "26-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 164,
    nome: "licença de antivírus",
    valor: 2002,
    dataVencimento: "29-05-2022",
    dataPagamento: "29-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 165,
    nome: "luz",
    valor: 3373,
    dataVencimento: "05-06-2022",
    dataPagamento: "05-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 166,
    nome: "água",
    valor: 601,
    dataVencimento: "08-06-2022",
    dataPagamento: "08-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 167,
    nome: "internet",
    valor: 916,
    dataVencimento: "11-06-2022",
    dataPagamento: "11-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 168,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-06-2022",
    dataPagamento: "14-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 169,
    nome: "aluguel",
    valor: 6342,
    dataVencimento: "17-06-2022",
    dataPagamento: "17-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 170,
    nome: "condomínio",
    valor: 1445,
    dataVencimento: "20-06-2022",
    dataPagamento: "20-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 171,
    nome: "serviço de limpeza",
    valor: 1170,
    dataVencimento: "23-06-2022",
    dataPagamento: "23-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 172,
    nome: "seguro patrimonial",
    valor: 549,
    dataVencimento: "26-06-2022",
    dataPagamento: "26-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 173,
    nome: "licença de antivírus",
    valor: 2106,
    dataVencimento: "29-06-2022",
    dataPagamento: "29-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 174,
    nome: "luz",
    valor: 3309,
    dataVencimento: "05-07-2022",
    dataPagamento: "05-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 175,
    nome: "água",
    valor: 602,
    dataVencimento: "08-07-2022",
    dataPagamento: "08-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 176,
    nome: "internet",
    valor: 903,
    dataVencimento: "11-07-2022",
    dataPagamento: "11-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 177,
    nome: "telefone",
    valor: 263,
    dataVencimento: "14-07-2022",
    dataPagamento: "14-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 178,
    nome: "aluguel",
    valor: 6428,
    dataVencimento: "17-07-2022",
    dataPagamento: "17-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 179,
    nome: "condomínio",
    valor: 1461,
    dataVencimento: "20-07-2022",
    dataPagamento: "20-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 180,
    nome: "serviço de limpeza",
    valor: 1213,
    dataVencimento: "23-07-2022",
    dataPagamento: "23-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 181,
    nome: "seguro patrimonial",
    valor: 552,
    dataVencimento: "26-07-2022",
    dataPagamento: "26-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 182,
    nome: "licença de antivírus",
    valor: 2000,
    dataVencimento: "29-07-2022",
    dataPagamento: "29-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 183,
    nome: "compra de materiais escolares",
    valor: 1144,
    dataVencimento: "15-07-2022",
    dataPagamento: "15-07-2022",
    tipoDespesa: "variável"
  },
  {
    id: 184,
    nome: "manutenção predial",
    valor: 1292,
    dataVencimento: "20-07-2022",
    dataPagamento: "20-07-2022",
    tipoDespesa: "variável"
  },
  {
    id: 185,
    nome: "luz",
    valor: 3408,
    dataVencimento: "05-08-2022",
    dataPagamento: "05-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 186,
    nome: "água",
    valor: 581,
    dataVencimento: "08-08-2022",
    dataPagamento: "08-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 187,
    nome: "internet",
    valor: 949,
    dataVencimento: "11-08-2022",
    dataPagamento: "11-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 188,
    nome: "telefone",
    valor: 265,
    dataVencimento: "14-08-2022",
    dataPagamento: "14-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 189,
    nome: "aluguel",
    valor: 6169,
    dataVencimento: "17-08-2022",
    dataPagamento: "17-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 190,
    nome: "condomínio",
    valor: 1445,
    dataVencimento: "20-08-2022",
    dataPagamento: "20-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 191,
    nome: "serviço de limpeza",
    valor: 1224,
    dataVencimento: "23-08-2022",
    dataPagamento: "23-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 192,
    nome: "seguro patrimonial",
    valor: 562,
    dataVencimento: "26-08-2022",
    dataPagamento: "26-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 193,
    nome: "licença de antivírus",
    valor: 2004,
    dataVencimento: "29-08-2022",
    dataPagamento: "29-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 194,
    nome: "luz",
    valor: 3360,
    dataVencimento: "05-09-2022",
    dataPagamento: "05-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 195,
    nome: "água",
    valor: 606,
    dataVencimento: "08-09-2022",
    dataPagamento: "08-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 196,
    nome: "internet",
    valor: 906,
    dataVencimento: "11-09-2022",
    dataPagamento: "11-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 197,
    nome: "telefone",
    valor: 255,
    dataVencimento: "14-09-2022",
    dataPagamento: "14-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 198,
    nome: "aluguel",
    valor: 6225,
    dataVencimento: "17-09-2022",
    dataPagamento: "17-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 199,
    nome: "condomínio",
    valor: 1444,
    dataVencimento: "20-09-2022",
    dataPagamento: "20-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 200,
    nome: "serviço de limpeza",
    valor: 1189,
    dataVencimento: "23-09-2022",
    dataPagamento: "23-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 201,
    nome: "seguro patrimonial",
    valor: 548,
    dataVencimento: "26-09-2022",
    dataPagamento: "26-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 202,
    nome: "licença de antivírus",
    valor: 2072,
    dataVencimento: "29-09-2022",
    dataPagamento: "29-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 203,
    nome: "luz",
    valor: 3412,
    dataVencimento: "05-10-2022",
    dataPagamento: "05-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 204,
    nome: "água",
    valor: 582,
    dataVencimento: "08-10-2022",
    dataPagamento: "08-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 205,
    nome: "internet",
    valor: 903,
    dataVencimento: "11-10-2022",
    dataPagamento: "11-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 206,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-10-2022",
    dataPagamento: "14-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 207,
    nome: "aluguel",
    valor: 6186,
    dataVencimento: "17-10-2022",
    dataPagamento: "17-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 208,
    nome: "condomínio",
    valor: 1493,
    dataVencimento: "20-10-2022",
    dataPagamento: "20-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 209,
    nome: "serviço de limpeza",
    valor: 1182,
    dataVencimento: "23-10-2022",
    dataPagamento: "23-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 210,
    nome: "seguro patrimonial",
    valor: 560,
    dataVencimento: "26-10-2022",
    dataPagamento: "26-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 211,
    nome: "licença de antivírus",
    valor: 2039,
    dataVencimento: "29-10-2022",
    dataPagamento: "29-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 212,
    nome: "compra de materiais escolares",
    valor: 994,
    dataVencimento: "15-10-2022",
    dataPagamento: "15-10-2022",
    tipoDespesa: "variável"
  },
  {
    id: 213,
    nome: "luz",
    valor: 3281,
    dataVencimento: "05-11-2022",
    dataPagamento: "05-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 214,
    nome: "água",
    valor: 594,
    dataVencimento: "08-11-2022",
    dataPagamento: "08-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 215,
    nome: "internet",
    valor: 901,
    dataVencimento: "11-11-2022",
    dataPagamento: "11-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 216,
    nome: "telefone",
    valor: 255,
    dataVencimento: "14-11-2022",
    dataPagamento: "14-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 217,
    nome: "aluguel",
    valor: 6335,
    dataVencimento: "17-11-2022",
    dataPagamento: "17-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 218,
    nome: "condomínio",
    valor: 1496,
    dataVencimento: "20-11-2022",
    dataPagamento: "20-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 219,
    nome: "serviço de limpeza",
    valor: 1195,
    dataVencimento: "23-11-2022",
    dataPagamento: "23-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 220,
    nome: "seguro patrimonial",
    valor: 565,
    dataVencimento: "26-11-2022",
    dataPagamento: "26-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 221,
    nome: "licença de antivírus",
    valor: 2069,
    dataVencimento: "29-11-2022",
    dataPagamento: "29-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 222,
    nome: "luz",
    valor: 3377,
    dataVencimento: "05-12-2022",
    dataPagamento: "05-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 223,
    nome: "água",
    valor: 600,
    dataVencimento: "08-12-2022",
    dataPagamento: "08-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 224,
    nome: "internet",
    valor: 925,
    dataVencimento: "11-12-2022",
    dataPagamento: "11-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 225,
    nome: "telefone",
    valor: 261,
    dataVencimento: "14-12-2022",
    dataPagamento: "14-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 226,
    nome: "aluguel",
    valor: 6347,
    dataVencimento: "17-12-2022",
    dataPagamento: "17-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 227,
    nome: "condomínio",
    valor: 1492,
    dataVencimento: "20-12-2022",
    dataPagamento: "20-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 228,
    nome: "serviço de limpeza",
    valor: 1207,
    dataVencimento: "23-12-2022",
    dataPagamento: "23-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 229,
    nome: "seguro patrimonial",
    valor: 553,
    dataVencimento: "26-12-2022",
    dataPagamento: "26-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 230,
    nome: "licença de antivírus",
    valor: 2085,
    dataVencimento: "29-12-2022",
    dataPagamento: "29-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 231,
    nome: "luz",
    valor: 3259,
    dataVencimento: "05-01-2023",
    dataPagamento: "05-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 232,
    nome: "água",
    valor: 595,
    dataVencimento: "08-01-2023",
    dataPagamento: "08-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 233,
    nome: "internet",
    valor: 933,
    dataVencimento: "11-01-2023",
    dataPagamento: "11-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 234,
    nome: "telefone",
    valor: 260,
    dataVencimento: "14-01-2023",
    dataPagamento: "14-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 235,
    nome: "aluguel",
    valor: 6297,
    dataVencimento: "17-01-2023",
    dataPagamento: "17-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 236,
    nome: "condomínio",
    valor: 1491,
    dataVencimento: "20-01-2023",
    dataPagamento: "20-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 237,
    nome: "serviço de limpeza",
    valor: 1208,
    dataVencimento: "23-01-2023",
    dataPagamento: "23-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 238,
    nome: "seguro patrimonial",
    valor: 558,
    dataVencimento: "26-01-2023",
    dataPagamento: "26-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 239,
    nome: "licença de antivírus",
    valor: 2049,
    dataVencimento: "29-01-2023",
    dataPagamento: "29-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 240,
    nome: "compra de materiais escolares",
    valor: 920,
    dataVencimento: "15-01-2023",
    dataPagamento: "15-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 241,
    nome: "manutenção predial",
    valor: 1470,
    dataVencimento: "20-01-2023",
    dataPagamento: "20-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 242,
    nome: "compra de equipamentos",
    valor: 3207,
    dataVencimento: "25-01-2023",
    dataPagamento: "25-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 243,
    nome: "luz",
    valor: 3310,
    dataVencimento: "05-02-2023",
    dataPagamento: "05-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 244,
    nome: "água",
    valor: 592,
    dataVencimento: "08-02-2023",
    dataPagamento: "08-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 245,
    nome: "internet",
    valor: 947,
    dataVencimento: "11-02-2023",
    dataPagamento: "11-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 246,
    nome: "telefone",
    valor: 253,
    dataVencimento: "14-02-2023",
    dataPagamento: "14-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 247,
    nome: "aluguel",
    valor: 6296,
    dataVencimento: "17-02-2023",
    dataPagamento: "17-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 248,
    nome: "condomínio",
    valor: 1481,
    dataVencimento: "20-02-2023",
    dataPagamento: "20-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 249,
    nome: "serviço de limpeza",
    valor: 1234,
    dataVencimento: "23-02-2023",
    dataPagamento: "23-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 250,
    nome: "seguro patrimonial",
    valor: 552,
    dataVencimento: "26-02-2023",
    dataPagamento: "26-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 251,
    nome: "licença de antivírus",
    valor: 2019,
    dataVencimento: "29-02-2023",
    dataPagamento: "29-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 252,
    nome: "luz",
    valor: 3342,
    dataVencimento: "05-03-2023",
    dataPagamento: "05-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 253,
    nome: "água",
    valor: 581,
    dataVencimento: "08-03-2023",
    dataPagamento: "08-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 254,
    nome: "internet",
    valor: 927,
    dataVencimento: "11-03-2023",
    dataPagamento: "11-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 255,
    nome: "telefone",
    valor: 262,
    dataVencimento: "14-03-2023",
    dataPagamento: "14-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 256,
    nome: "aluguel",
    valor: 6432,
    dataVencimento: "17-03-2023",
    dataPagamento: "17-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 257,
    nome: "condomínio",
    valor: 1451,
    dataVencimento: "20-03-2023",
    dataPagamento: "20-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 258,
    nome: "serviço de limpeza",
    valor: 1226,
    dataVencimento: "23-03-2023",
    dataPagamento: "23-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 259,
    nome: "seguro patrimonial",
    valor: 563,
    dataVencimento: "26-03-2023",
    dataPagamento: "26-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 260,
    nome: "licença de antivírus",
    valor: 2041,
    dataVencimento: "29-03-2023",
    dataPagamento: "29-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 261,
    nome: "luz",
    valor: 3322,
    dataVencimento: "05-04-2023",
    dataPagamento: "05-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 262,
    nome: "água",
    valor: 599,
    dataVencimento: "08-04-2023",
    dataPagamento: "08-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 263,
    nome: "internet",
    valor: 900,
    dataVencimento: "11-04-2023",
    dataPagamento: "11-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 264,
    nome: "telefone",
    valor: 262,
    dataVencimento: "14-04-2023",
    dataPagamento: "14-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 265,
    nome: "aluguel",
    valor: 6310,
    dataVencimento: "17-04-2023",
    dataPagamento: "17-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 266,
    nome: "condomínio",
    valor: 1516,
    dataVencimento: "20-04-2023",
    dataPagamento: "20-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 267,
    nome: "serviço de limpeza",
    valor: 1233,
    dataVencimento: "23-04-2023",
    dataPagamento: "23-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 268,
    nome: "seguro patrimonial",
    valor: 560,
    dataVencimento: "26-04-2023",
    dataPagamento: "26-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 269,
    nome: "licença de antivírus",
    valor: 2070,
    dataVencimento: "29-04-2023",
    dataPagamento: "29-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 270,
    nome: "compra de materiais escolares",
    valor: 1129,
    dataVencimento: "15-04-2023",
    dataPagamento: "15-04-2023",
    tipoDespesa: "variável"
  },
  {
    id: 271,
    nome: "luz",
    valor: 3262,
    dataVencimento: "05-05-2023",
    dataPagamento: "05-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 272,
    nome: "água",
    valor: 591,
    dataVencimento: "08-05-2023",
    dataPagamento: "08-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 273,
    nome: "internet",
    valor: 930,
    dataVencimento: "11-05-2023",
    dataPagamento: "11-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 274,
    nome: "telefone",
    valor: 253,
    dataVencimento: "14-05-2023",
    dataPagamento: "14-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 275,
    nome: "aluguel",
    valor: 6211,
    dataVencimento: "17-05-2023",
    dataPagamento: "17-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 276,
    nome: "condomínio",
    valor: 1504,
    dataVencimento: "20-05-2023",
    dataPagamento: "20-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 277,
    nome: "serviço de limpeza",
    valor: 1220,
    dataVencimento: "23-05-2023",
    dataPagamento: "23-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 278,
    nome: "seguro patrimonial",
    valor: 562,
    dataVencimento: "26-05-2023",
    dataPagamento: "26-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 279,
    nome: "licença de antivírus",
    valor: 2018,
    dataVencimento: "29-05-2023",
    dataPagamento: "29-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 280,
    nome: "luz",
    valor: 3389,
    dataVencimento: "05-06-2023",
    dataPagamento: "05-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 281,
    nome: "água",
    valor: 599,
    dataVencimento: "08-06-2023",
    dataPagamento: "08-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 282,
    nome: "internet",
    valor: 935,
    dataVencimento: "11-06-2023",
    dataPagamento: "11-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 283,
    nome: "telefone",
    valor: 255,
    dataVencimento: "14-06-2023",
    dataPagamento: "14-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 284,
    nome: "aluguel",
    valor: 6240,
    dataVencimento: "17-06-2023",
    dataPagamento: "17-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 285,
    nome: "condomínio",
    valor: 1467,
    dataVencimento: "20-06-2023",
    dataPagamento: "20-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 286,
    nome: "serviço de limpeza",
    valor: 1204,
    dataVencimento: "23-06-2023",
    dataPagamento: "23-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 287,
    nome: "seguro patrimonial",
    valor: 546,
    dataVencimento: "26-06-2023",
    dataPagamento: "26-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 288,
    nome: "licença de antivírus",
    valor: 2017,
    dataVencimento: "29-06-2023",
    dataPagamento: "29-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 289,
    nome: "luz",
    valor: 3296,
    dataVencimento: "05-07-2023",
    dataPagamento: "05-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 290,
    nome: "água",
    valor: 579,
    dataVencimento: "08-07-2023",
    dataPagamento: "08-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 291,
    nome: "internet",
    valor: 922,
    dataVencimento: "11-07-2023",
    dataPagamento: "11-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 292,
    nome: "telefone",
    valor: 264,
    dataVencimento: "14-07-2023",
    dataPagamento: "14-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 293,
    nome: "aluguel",
    valor: 6273,
    dataVencimento: "17-07-2023",
    dataPagamento: "17-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 294,
    nome: "condomínio",
    valor: 1445,
    dataVencimento: "20-07-2023",
    dataPagamento: "20-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 295,
    nome: "serviço de limpeza",
    valor: 1221,
    dataVencimento: "23-07-2023",
    dataPagamento: "23-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 296,
    nome: "seguro patrimonial",
    valor: 561,
    dataVencimento: "26-07-2023",
    dataPagamento: "26-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 297,
    nome: "licença de antivírus",
    valor: 2051,
    dataVencimento: "29-07-2023",
    dataPagamento: "29-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 298,
    nome: "compra de materiais escolares",
    valor: 1006,
    dataVencimento: "15-07-2023",
    dataPagamento: "15-07-2023",
    tipoDespesa: "variável"
  },
  {
    id: 299,
    nome: "manutenção predial",
    valor: 1799,
    dataVencimento: "20-07-2023",
    dataPagamento: "20-07-2023",
    tipoDespesa: "variável"
  },
  {
    id: 300,
    nome: "luz",
    valor: 3263,
    dataVencimento: "05-08-2023",
    dataPagamento: "05-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 301,
    nome: "água",
    valor: 605,
    dataVencimento: "08-08-2023",
    dataPagamento: "08-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 302,
    nome: "internet",
    valor: 949,
    dataVencimento: "11-08-2023",
    dataPagamento: "11-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 303,
    nome: "telefone",
    valor: 264,
    dataVencimento: "14-08-2023",
    dataPagamento: "14-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 304,
    nome: "aluguel",
    valor: 6405,
    dataVencimento: "17-08-2023",
    dataPagamento: "17-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 305,
    nome: "condomínio",
    valor: 1488,
    dataVencimento: "20-08-2023",
    dataPagamento: "20-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 306,
    nome: "serviço de limpeza",
    valor: 1194,
    dataVencimento: "23-08-2023",
    dataPagamento: "23-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 307,
    nome: "seguro patrimonial",
    valor: 553,
    dataVencimento: "26-08-2023",
    dataPagamento: "26-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 308,
    nome: "licença de antivírus",
    valor: 2052,
    dataVencimento: "29-08-2023",
    dataPagamento: "29-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 309,
    nome: "luz",
    valor: 3341,
    dataVencimento: "05-09-2023",
    dataPagamento: "05-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 310,
    nome: "água",
    valor: 586,
    dataVencimento: "08-09-2023",
    dataPagamento: "08-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 311,
    nome: "internet",
    valor: 903,
    dataVencimento: "11-09-2023",
    dataPagamento: "11-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 312,
    nome: "telefone",
    valor: 262,
    dataVencimento: "14-09-2023",
    dataPagamento: "14-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 313,
    nome: "aluguel",
    valor: 6163,
    dataVencimento: "17-09-2023",
    dataPagamento: "17-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 314,
    nome: "condomínio",
    valor: 1473,
    dataVencimento: "20-09-2023",
    dataPagamento: "20-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 315,
    nome: "serviço de limpeza",
    valor: 1223,
    dataVencimento: "23-09-2023",
    dataPagamento: "23-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 316,
    nome: "seguro patrimonial",
    valor: 564,
    dataVencimento: "26-09-2023",
    dataPagamento: "26-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 317,
    nome: "licença de antivírus",
    valor: 2043,
    dataVencimento: "29-09-2023",
    dataPagamento: "29-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 318,
    nome: "luz",
    valor: 3401,
    dataVencimento: "05-10-2023",
    dataPagamento: "05-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 319,
    nome: "água",
    valor: 602,
    dataVencimento: "08-10-2023",
    dataPagamento: "08-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 320,
    nome: "internet",
    valor: 921,
    dataVencimento: "11-10-2023",
    dataPagamento: "11-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 321,
    nome: "telefone",
    valor: 253,
    dataVencimento: "14-10-2023",
    dataPagamento: "14-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 322,
    nome: "aluguel",
    valor: 6355,
    dataVencimento: "17-10-2023",
    dataPagamento: "17-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 323,
    nome: "condomínio",
    valor: 1452,
    dataVencimento: "20-10-2023",
    dataPagamento: "20-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 324,
    nome: "serviço de limpeza",
    valor: 1231,
    dataVencimento: "23-10-2023",
    dataPagamento: "23-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 325,
    nome: "seguro patrimonial",
    valor: 568,
    dataVencimento: "26-10-2023",
    dataPagamento: "26-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 326,
    nome: "licença de antivírus",
    valor: 2050,
    dataVencimento: "29-10-2023",
    dataPagamento: "29-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 327,
    nome: "compra de materiais escolares",
    valor: 1039,
    dataVencimento: "15-10-2023",
    dataPagamento: "15-10-2023",
    tipoDespesa: "variável"
  },
  {
    id: 328,
    nome: "luz",
    valor: 3372,
    dataVencimento: "05-11-2023",
    dataPagamento: "05-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 329,
    nome: "água",
    valor: 601,
    dataVencimento: "08-11-2023",
    dataPagamento: "08-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 330,
    nome: "internet",
    valor: 901,
    dataVencimento: "11-11-2023",
    dataPagamento: "11-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 331,
    nome: "telefone",
    valor: 253,
    dataVencimento: "14-11-2023",
    dataPagamento: "14-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 332,
    nome: "aluguel",
    valor: 6188,
    dataVencimento: "17-11-2023",
    dataPagamento: "17-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 333,
    nome: "condomínio",
    valor: 1451,
    dataVencimento: "20-11-2023",
    dataPagamento: "20-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 334,
    nome: "serviço de limpeza",
    valor: 1214,
    dataVencimento: "23-11-2023",
    dataPagamento: "23-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 335,
    nome: "seguro patrimonial",
    valor: 567,
    dataVencimento: "26-11-2023",
    dataPagamento: "26-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 336,
    nome: "licença de antivírus",
    valor: 2078,
    dataVencimento: "29-11-2023",
    dataPagamento: "29-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 337,
    nome: "luz",
    valor: 3252,
    dataVencimento: "05-12-2023",
    dataPagamento: "05-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 338,
    nome: "água",
    valor: 586,
    dataVencimento: "08-12-2023",
    dataPagamento: "08-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 339,
    nome: "internet",
    valor: 940,
    dataVencimento: "11-12-2023",
    dataPagamento: "11-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 340,
    nome: "telefone",
    valor: 259,
    dataVencimento: "14-12-2023",
    dataPagamento: "14-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 341,
    nome: "aluguel",
    valor: 6240,
    dataVencimento: "17-12-2023",
    dataPagamento: "17-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 342,
    nome: "condomínio",
    valor: 1507,
    dataVencimento: "20-12-2023",
    dataPagamento: "20-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 343,
    nome: "serviço de limpeza",
    valor: 1218,
    dataVencimento: "23-12-2023",
    dataPagamento: "23-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 344,
    nome: "seguro patrimonial",
    valor: 548,
    dataVencimento: "26-12-2023",
    dataPagamento: "26-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 345,
    nome: "licença de antivírus",
    valor: 2078,
    dataVencimento: "29-12-2023",
    dataPagamento: "29-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 346,
    nome: "luz",
    valor: 3304,
    dataVencimento: "05-01-2024",
    dataPagamento: "05-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 347,
    nome: "água",
    valor: 576,
    dataVencimento: "08-01-2024",
    dataPagamento: "08-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 348,
    nome: "internet",
    valor: 931,
    dataVencimento: "11-01-2024",
    dataPagamento: "11-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 349,
    nome: "telefone",
    valor: 260,
    dataVencimento: "14-01-2024",
    dataPagamento: "14-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 350,
    nome: "aluguel",
    valor: 6376,
    dataVencimento: "17-01-2024",
    dataPagamento: "17-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 351,
    nome: "condomínio",
    valor: 1487,
    dataVencimento: "20-01-2024",
    dataPagamento: "20-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 352,
    nome: "serviço de limpeza",
    valor: 1213,
    dataVencimento: "23-01-2024",
    dataPagamento: "23-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 353,
    nome: "seguro patrimonial",
    valor: 546,
    dataVencimento: "26-01-2024",
    dataPagamento: "26-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 354,
    nome: "licença de antivírus",
    valor: 2044,
    dataVencimento: "29-01-2024",
    dataPagamento: "29-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 355,
    nome: "compra de materiais escolares",
    valor: 967,
    dataVencimento: "15-01-2024",
    dataPagamento: "15-01-2024",
    tipoDespesa: "variável"
  },
  {
    id: 356,
    nome: "manutenção predial",
    valor: 1365,
    dataVencimento: "20-01-2024",
    dataPagamento: "20-01-2024",
    tipoDespesa: "variável"
  },
  {
    id: 357,
    nome: "compra de equipamentos",
    valor: 3605,
    dataVencimento: "25-01-2024",
    dataPagamento: "25-01-2024",
    tipoDespesa: "variável"
  },
  {
    id: 358,
    nome: "luz",
    valor: 3321,
    dataVencimento: "05-02-2024",
    dataPagamento: "05-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 359,
    nome: "água",
    valor: 596,
    dataVencimento: "08-02-2024",
    dataPagamento: "08-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 360,
    nome: "internet",
    valor: 922,
    dataVencimento: "11-02-2024",
    dataPagamento: "11-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 361,
    nome: "telefone",
    valor: 265,
    dataVencimento: "14-02-2024",
    dataPagamento: "14-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 362,
    nome: "aluguel",
    valor: 6263,
    dataVencimento: "17-02-2024",
    dataPagamento: "17-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 363,
    nome: "condomínio",
    valor: 1442,
    dataVencimento: "20-02-2024",
    dataPagamento: "20-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 364,
    nome: "serviço de limpeza",
    valor: 1216,
    dataVencimento: "23-02-2024",
    dataPagamento: "23-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 365,
    nome: "seguro patrimonial",
    valor: 552,
    dataVencimento: "26-02-2024",
    dataPagamento: "26-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 366,
    nome: "licença de antivírus",
    valor: 2046,
    dataVencimento: "29-02-2024",
    dataPagamento: "29-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 367,
    nome: "luz",
    valor: 3280,
    dataVencimento: "05-03-2024",
    dataPagamento: "05-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 368,
    nome: "água",
    valor: 607,
    dataVencimento: "08-03-2024",
    dataPagamento: "08-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 369,
    nome: "internet",
    valor: 921,
    dataVencimento: "11-03-2024",
    dataPagamento: "11-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 370,
    nome: "telefone",
    valor: 261,
    dataVencimento: "14-03-2024",
    dataPagamento: "14-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 371,
    nome: "aluguel",
    valor: 6153,
    dataVencimento: "17-03-2024",
    dataPagamento: "17-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 372,
    nome: "condomínio",
    valor: 1484,
    dataVencimento: "20-03-2024",
    dataPagamento: "20-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 373,
    nome: "serviço de limpeza",
    valor: 1222,
    dataVencimento: "23-03-2024",
    dataPagamento: "23-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 374,
    nome: "seguro patrimonial",
    valor: 549,
    dataVencimento: "26-03-2024",
    dataPagamento: "26-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 375,
    nome: "licença de antivírus",
    valor: 2074,
    dataVencimento: "29-03-2024",
    dataPagamento: "29-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 376,
    nome: "luz",
    valor: 3407,
    dataVencimento: "05-04-2024",
    dataPagamento: "05-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 377,
    nome: "água",
    valor: 599,
    dataVencimento: "08-04-2024",
    dataPagamento: "08-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 378,
    nome: "internet",
    valor: 928,
    dataVencimento: "11-04-2024",
    dataPagamento: "11-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 379,
    nome: "telefone",
    valor: 258,
    dataVencimento: "14-04-2024",
    dataPagamento: "14-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 380,
    nome: "aluguel",
    valor: 6405,
    dataVencimento: "17-04-2024",
    dataPagamento: "17-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 381,
    nome: "condomínio",
    valor: 1470,
    dataVencimento: "20-04-2024",
    dataPagamento: "20-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 382,
    nome: "serviço de limpeza",
    valor: 1229,
    dataVencimento: "23-04-2024",
    dataPagamento: "23-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 383,
    nome: "seguro patrimonial",
    valor: 570,
    dataVencimento: "26-04-2024",
    dataPagamento: "26-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 384,
    nome: "licença de antivírus",
    valor: 2007,
    dataVencimento: "29-04-2024",
    dataPagamento: "29-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 385,
    nome: "compra de materiais escolares",
    valor: 954,
    dataVencimento: "15-04-2024",
    dataPagamento: "15-04-2024",
    tipoDespesa: "variável"
  },
  {
    id: 386,
    nome: "luz",
    valor: 3286,
    dataVencimento: "05-05-2024",
    dataPagamento: "05-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 387,
    nome: "água",
    valor: 594,
    dataVencimento: "08-05-2024",
    dataPagamento: "08-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 388,
    nome: "internet",
    valor: 921,
    dataVencimento: "11-05-2024",
    dataPagamento: "11-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 389,
    nome: "telefone",
    valor: 265,
    dataVencimento: "14-05-2024",
    dataPagamento: "14-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 390,
    nome: "aluguel",
    valor: 6371,
    dataVencimento: "17-05-2024",
    dataPagamento: "17-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 391,
    nome: "condomínio",
    valor: 1484,
    dataVencimento: "20-05-2024",
    dataPagamento: "20-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 392,
    nome: "serviço de limpeza",
    valor: 1228,
    dataVencimento: "23-05-2024",
    dataPagamento: "23-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 393,
    nome: "seguro patrimonial",
    valor: 564,
    dataVencimento: "26-05-2024",
    dataPagamento: "26-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 394,
    nome: "licença de antivírus",
    valor: 2017,
    dataVencimento: "29-05-2024",
    dataPagamento: "29-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 395,
    nome: "luz",
    valor: 3359,
    dataVencimento: "05-06-2024",
    dataPagamento: "05-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 396,
    nome: "água",
    valor: 602,
    dataVencimento: "08-06-2024",
    dataPagamento: "08-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 397,
    nome: "internet",
    valor: 924,
    dataVencimento: "11-06-2024",
    dataPagamento: "11-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 398,
    nome: "telefone",
    valor: 255,
    dataVencimento: "14-06-2024",
    dataPagamento: "14-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 399,
    nome: "aluguel",
    valor: 6204,
    dataVencimento: "17-06-2024",
    dataPagamento: "17-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 400,
    nome: "condomínio",
    valor: 1487,
    dataVencimento: "20-06-2024",
    dataPagamento: "20-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 401,
    nome: "serviço de limpeza",
    valor: 1229,
    dataVencimento: "23-06-2024",
    dataPagamento: "23-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 402,
    nome: "seguro patrimonial",
    valor: 552,
    dataVencimento: "26-06-2024",
    dataPagamento: "26-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 403,
    nome: "licença de antivírus",
    valor: 2004,
    dataVencimento: "29-06-2024",
    dataPagamento: "29-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 404,
    nome: "luz",
    valor: 3395,
    dataVencimento: "05-07-2024",
    dataPagamento: "05-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 405,
    nome: "água",
    valor: 580,
    dataVencimento: "08-07-2024",
    dataPagamento: "08-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 406,
    nome: "internet",
    valor: 912,
    dataVencimento: "11-07-2024",
    dataPagamento: "11-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 407,
    nome: "telefone",
    valor: 258,
    dataVencimento: "14-07-2024",
    dataPagamento: "14-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 408,
    nome: "aluguel",
    valor: 6285,
    dataVencimento: "17-07-2024",
    dataPagamento: "17-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 409,
    nome: "condomínio",
    valor: 1508,
    dataVencimento: "20-07-2024",
    dataPagamento: "20-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 410,
    nome: "serviço de limpeza",
    valor: 1180,
    dataVencimento: "23-07-2024",
    dataPagamento: "23-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 411,
    nome: "seguro patrimonial",
    valor: 540,
    dataVencimento: "26-07-2024",
    dataPagamento: "26-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 412,
    nome: "licença de antivírus",
    valor: 2097,
    dataVencimento: "29-07-2024",
    dataPagamento: "29-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 413,
    nome: "compra de materiais escolares",
    valor: 924,
    dataVencimento: "15-07-2024",
    dataPagamento: "15-07-2024",
    tipoDespesa: "variável"
  },
  {
    id: 414,
    nome: "manutenção predial",
    valor: 1846,
    dataVencimento: "20-07-2024",
    dataPagamento: "20-07-2024",
    tipoDespesa: "variável"
  },
  {
    id: 415,
    nome: "luz",
    valor: 3304,
    dataVencimento: "05-08-2024",
    dataPagamento: "05-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 416,
    nome: "água",
    valor: 589,
    dataVencimento: "08-08-2024",
    dataPagamento: "08-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 417,
    nome: "internet",
    valor: 907,
    dataVencimento: "11-08-2024",
    dataPagamento: "11-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 418,
    nome: "telefone",
    valor: 260,
    dataVencimento: "14-08-2024",
    dataPagamento: "14-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 419,
    nome: "aluguel",
    valor: 6133,
    dataVencimento: "17-08-2024",
    dataPagamento: "17-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 420,
    nome: "condomínio",
    valor: 1497,
    dataVencimento: "20-08-2024",
    dataPagamento: "20-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 421,
    nome: "serviço de limpeza",
    valor: 1190,
    dataVencimento: "23-08-2024",
    dataPagamento: "23-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 422,
    nome: "seguro patrimonial",
    valor: 569,
    dataVencimento: "26-08-2024",
    dataPagamento: "26-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 423,
    nome: "licença de antivírus",
    valor: 2101,
    dataVencimento: "29-08-2024",
    dataPagamento: "29-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 424,
    nome: "luz",
    valor: 3358,
    dataVencimento: "05-09-2024",
    dataPagamento: "05-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 425,
    nome: "água",
    valor: 600,
    dataVencimento: "08-09-2024",
    dataPagamento: "08-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 426,
    nome: "internet",
    valor: 926,
    dataVencimento: "11-09-2024",
    dataPagamento: "11-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 427,
    nome: "telefone",
    valor: 252,
    dataVencimento: "14-09-2024",
    dataPagamento: "14-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 428,
    nome: "aluguel",
    valor: 6420,
    dataVencimento: "17-09-2024",
    dataPagamento: "17-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 429,
    nome: "condomínio",
    valor: 1466,
    dataVencimento: "20-09-2024",
    dataPagamento: "20-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 430,
    nome: "serviço de limpeza",
    valor: 1207,
    dataVencimento: "23-09-2024",
    dataPagamento: "23-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 431,
    nome: "seguro patrimonial",
    valor: 546,
    dataVencimento: "26-09-2024",
    dataPagamento: "26-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 432,
    nome: "licença de antivírus",
    valor: 2084,
    dataVencimento: "29-09-2024",
    dataPagamento: "29-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 433,
    nome: "luz",
    valor: 3358,
    dataVencimento: "05-10-2024",
    dataPagamento: "05-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 434,
    nome: "água",
    valor: 600,
    dataVencimento: "08-10-2024",
    dataPagamento: "08-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 435,
    nome: "internet",
    valor: 928,
    dataVencimento: "11-10-2024",
    dataPagamento: "11-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 436,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-10-2024",
    dataPagamento: "14-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 437,
    nome: "aluguel",
    valor: 6443,
    dataVencimento: "17-10-2024",
    dataPagamento: "17-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 438,
    nome: "condomínio",
    valor: 1472,
    dataVencimento: "20-10-2024",
    dataPagamento: "20-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 439,
    nome: "serviço de limpeza",
    valor: 1229,
    dataVencimento: "23-10-2024",
    dataPagamento: "23-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 440,
    nome: "seguro patrimonial",
    valor: 549,
    dataVencimento: "26-10-2024",
    dataPagamento: "26-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 441,
    nome: "licença de antivírus",
    valor: 2029,
    dataVencimento: "29-10-2024",
    dataPagamento: "29-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 442,
    nome: "compra de materiais escolares",
    valor: 805,
    dataVencimento: "15-10-2024",
    dataPagamento: "15-10-2024",
    tipoDespesa: "variável"
  },
  {
    id: 443,
    nome: "luz",
    valor: 3322,
    dataVencimento: "05-11-2024",
    dataPagamento: "05-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 444,
    nome: "água",
    valor: 599,
    dataVencimento: "08-11-2024",
    dataPagamento: "08-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 445,
    nome: "internet",
    valor: 944,
    dataVencimento: "11-11-2024",
    dataPagamento: "11-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 446,
    nome: "telefone",
    valor: 256,
    dataVencimento: "14-11-2024",
    dataPagamento: "14-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 447,
    nome: "aluguel",
    valor: 6346,
    dataVencimento: "17-11-2024",
    dataPagamento: "17-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 448,
    nome: "condomínio",
    valor: 1458,
    dataVencimento: "20-11-2024",
    dataPagamento: "20-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 449,
    nome: "serviço de limpeza",
    valor: 1203,
    dataVencimento: "23-11-2024",
    dataPagamento: "23-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 450,
    nome: "seguro patrimonial",
    valor: 549,
    dataVencimento: "26-11-2024",
    dataPagamento: "26-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 451,
    nome: "licença de antivírus",
    valor: 2004,
    dataVencimento: "29-11-2024",
    dataPagamento: "29-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 452,
    nome: "luz",
    valor: 3387,
    dataVencimento: "05-12-2024",
    dataPagamento: "05-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 453,
    nome: "água",
    valor: 593,
    dataVencimento: "08-12-2024",
    dataPagamento: "08-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 454,
    nome: "internet",
    valor: 930,
    dataVencimento: "11-12-2024",
    dataPagamento: "11-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 455,
    nome: "telefone",
    valor: 254,
    dataVencimento: "14-12-2024",
    dataPagamento: "14-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 456,
    nome: "aluguel",
    valor: 6166,
    dataVencimento: "17-12-2024",
    dataPagamento: "17-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 457,
    nome: "condomínio",
    valor: 1443,
    dataVencimento: "20-12-2024",
    dataPagamento: "20-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 458,
    nome: "serviço de limpeza",
    valor: 1220,
    dataVencimento: "23-12-2024",
    dataPagamento: "23-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 459,
    nome: "seguro patrimonial",
    valor: 559,
    dataVencimento: "26-12-2024",
    dataPagamento: "26-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 460,
    nome: "licença de antivírus",
    valor: 2099,
    dataVencimento: "29-12-2024",
    dataPagamento: "29-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 461,
    nome: "luz",
    valor: 3419,
    dataVencimento: "05-01-2025",
    dataPagamento: "05-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 462,
    nome: "água",
    valor: 581,
    dataVencimento: "08-01-2025",
    dataPagamento: "08-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 463,
    nome: "internet",
    valor: 916,
    dataVencimento: "11-01-2025",
    dataPagamento: "11-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 464,
    nome: "telefone",
    valor: 252,
    dataVencimento: "14-01-2025",
    dataPagamento: "14-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 465,
    nome: "aluguel",
    valor: 6338,
    dataVencimento: "17-01-2025",
    dataPagamento: "17-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 466,
    nome: "condomínio",
    valor: 1476,
    dataVencimento: "20-01-2025",
    dataPagamento: "20-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 467,
    nome: "serviço de limpeza",
    valor: 1225,
    dataVencimento: "23-01-2025",
    dataPagamento: "23-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 468,
    nome: "seguro patrimonial",
    valor: 554,
    dataVencimento: "26-01-2025",
    dataPagamento: "26-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 469,
    nome: "licença de antivírus",
    valor: 2002,
    dataVencimento: "29-01-2025",
    dataPagamento: "29-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 470,
    nome: "compra de materiais escolares",
    valor: 1140,
    dataVencimento: "15-01-2025",
    dataPagamento: "15-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 471,
    nome: "manutenção predial",
    valor: 1587,
    dataVencimento: "20-01-2025",
    dataPagamento: "20-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 472,
    nome: "compra de equipamentos",
    valor: 2501,
    dataVencimento: "25-01-2025",
    dataPagamento: "25-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 473,
    nome: "luz",
    valor: 3247,
    dataVencimento: "05-02-2025",
    dataPagamento: "05-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 474,
    nome: "água",
    valor: 597,
    dataVencimento: "08-02-2025",
    dataPagamento: "08-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 475,
    nome: "internet",
    valor: 920,
    dataVencimento: "11-02-2025",
    dataPagamento: "11-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 476,
    nome: "telefone",
    valor: 254,
    dataVencimento: "14-02-2025",
    dataPagamento: "14-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 477,
    nome: "aluguel",
    valor: 6433,
    dataVencimento: "17-02-2025",
    dataPagamento: "17-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 478,
    nome: "condomínio",
    valor: 1499,
    dataVencimento: "20-02-2025",
    dataPagamento: "20-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 479,
    nome: "serviço de limpeza",
    valor: 1179,
    dataVencimento: "23-02-2025",
    dataPagamento: "23-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 480,
    nome: "seguro patrimonial",
    valor: 567,
    dataVencimento: "26-02-2025",
    dataPagamento: "26-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 481,
    nome: "licença de antivírus",
    valor: 2039,
    dataVencimento: "29-02-2025",
    dataPagamento: "29-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 482,
    nome: "luz",
    valor: 3343,
    dataVencimento: "05-03-2025",
    dataPagamento: "05-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 483,
    nome: "água",
    valor: 604,
    dataVencimento: "08-03-2025",
    dataPagamento: "08-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 484,
    nome: "internet",
    valor: 929,
    dataVencimento: "11-03-2025",
    dataPagamento: "11-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 485,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-03-2025",
    dataPagamento: "14-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 486,
    nome: "aluguel",
    valor: 6356,
    dataVencimento: "17-03-2025",
    dataPagamento: "17-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 487,
    nome: "condomínio",
    valor: 1489,
    dataVencimento: "20-03-2025",
    dataPagamento: "20-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 488,
    nome: "serviço de limpeza",
    valor: 1190,
    dataVencimento: "23-03-2025",
    dataPagamento: "23-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 489,
    nome: "seguro patrimonial",
    valor: 555,
    dataVencimento: "26-03-2025",
    dataPagamento: "26-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 490,
    nome: "licença de antivírus",
    valor: 2100,
    dataVencimento: "29-03-2025",
    dataPagamento: "29-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 491,
    nome: "luz",
    valor: 3351,
    dataVencimento: "05-04-2025",
    dataPagamento: "05-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 492,
    nome: "água",
    valor: 604,
    dataVencimento: "08-04-2025",
    dataPagamento: "08-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 493,
    nome: "internet",
    valor: 904,
    dataVencimento: "11-04-2025",
    dataPagamento: "11-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 494,
    nome: "telefone",
    valor: 264,
    dataVencimento: "14-04-2025",
    dataPagamento: "14-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 495,
    nome: "aluguel",
    valor: 6380,
    dataVencimento: "17-04-2025",
    dataPagamento: "17-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 496,
    nome: "condomínio",
    valor: 1479,
    dataVencimento: "20-04-2025",
    dataPagamento: "20-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 497,
    nome: "serviço de limpeza",
    valor: 1204,
    dataVencimento: "23-04-2025",
    dataPagamento: "23-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 498,
    nome: "seguro patrimonial",
    valor: 560,
    dataVencimento: "26-04-2025",
    dataPagamento: "26-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 499,
    nome: "licença de antivírus",
    valor: 2013,
    dataVencimento: "29-04-2025",
    dataPagamento: "29-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 500,
    nome: "compra de materiais escolares",
    valor: 1022,
    dataVencimento: "15-04-2025",
    dataPagamento: "15-04-2025",
    tipoDespesa: "variável"
  },
  {
    id: 501,
    nome: "luz",
    valor: 3349,
    dataVencimento: "05-05-2025",
    dataPagamento: "05-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 502,
    nome: "água",
    valor: 605,
    dataVencimento: "08-05-2025",
    dataPagamento: "08-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 503,
    nome: "internet",
    valor: 926,
    dataVencimento: "11-05-2025",
    dataPagamento: "11-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 504,
    nome: "telefone",
    valor: 262,
    dataVencimento: "14-05-2025",
    dataPagamento: "14-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 505,
    nome: "aluguel",
    valor: 6131,
    dataVencimento: "17-05-2025",
    dataPagamento: "17-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 506,
    nome: "condomínio",
    valor: 1512,
    dataVencimento: "20-05-2025",
    dataPagamento: "20-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 507,
    nome: "serviço de limpeza",
    valor: 1233,
    dataVencimento: "23-05-2025",
    dataPagamento: "23-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 508,
    nome: "seguro patrimonial",
    valor: 563,
    dataVencimento: "26-05-2025",
    dataPagamento: "26-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 509,
    nome: "licença de antivírus",
    valor: 2108,
    dataVencimento: "29-05-2025",
    dataPagamento: "29-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 510,
    nome: "luz",
    valor: 3241,
    dataVencimento: "05-06-2025",
    dataPagamento: "05-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 511,
    nome: "água",
    valor: 578,
    dataVencimento: "08-06-2025",
    dataPagamento: "08-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 512,
    nome: "internet",
    valor: 940,
    dataVencimento: "11-06-2025",
    dataPagamento: "11-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 513,
    nome: "telefone",
    valor: 257,
    dataVencimento: "14-06-2025",
    dataPagamento: "14-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 514,
    nome: "aluguel",
    valor: 6299,
    dataVencimento: "17-06-2025",
    dataPagamento: "17-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 515,
    nome: "condomínio",
    valor: 1462,
    dataVencimento: "20-06-2025",
    dataPagamento: "20-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 516,
    nome: "serviço de limpeza",
    valor: 1232,
    dataVencimento: "23-06-2025",
    dataPagamento: "23-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 517,
    nome: "seguro patrimonial",
    valor: 555,
    dataVencimento: "26-06-2025",
    dataPagamento: "26-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 518,
    nome: "licença de antivírus",
    valor: 2047,
    dataVencimento: "29-06-2025",
    dataPagamento: "29-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 519,
    nome: "luz",
    valor: 3367,
    dataVencimento: "05-07-2025",
    dataPagamento: "05-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 520,
    nome: "água",
    valor: 586,
    dataVencimento: "08-07-2025",
    dataPagamento: "08-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 521,
    nome: "internet",
    valor: 916,
    dataVencimento: "11-07-2025",
    dataPagamento: "11-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 522,
    nome: "telefone",
    valor: 261,
    dataVencimento: "14-07-2025",
    dataPagamento: "14-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 523,
    nome: "aluguel",
    valor: 6296,
    dataVencimento: "17-07-2025",
    dataPagamento: "17-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 524,
    nome: "condomínio",
    valor: 1442,
    dataVencimento: "20-07-2025",
    dataPagamento: "20-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 525,
    nome: "serviço de limpeza",
    valor: 1185,
    dataVencimento: "23-07-2025",
    dataPagamento: "23-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 526,
    nome: "seguro patrimonial",
    valor: 544,
    dataVencimento: "26-07-2025",
    dataPagamento: "26-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 527,
    nome: "licença de antivírus",
    valor: 2033,
    dataVencimento: "29-07-2025",
    dataPagamento: "29-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 528,
    nome: "compra de materiais escolares",
    valor: 1092,
    dataVencimento: "15-07-2025",
    dataPagamento: "15-07-2025",
    tipoDespesa: "variável"
  },
  {
    id: 529,
    nome: "manutenção predial",
    valor: 1988,
    dataVencimento: "20-07-2025",
    dataPagamento: "20-07-2025",
    tipoDespesa: "variável"
  }
];

export default despesas;
