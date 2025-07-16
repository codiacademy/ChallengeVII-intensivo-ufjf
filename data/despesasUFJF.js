const despesas = [
  {
    id: 1,
    nome: "luz",
    valor: 1170,
    dataVencimento: "05-01-2021",
    dataPagamento: "05-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 2,
    nome: "água",
    valor: 352,
    dataVencimento: "08-01-2021",
    dataPagamento: "08-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 3,
    nome: "internet",
    valor: 259,
    dataVencimento: "11-01-2021",
    dataPagamento: "11-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 4,
    nome: "telefone",
    valor: 158,
    dataVencimento: "14-01-2021",
    dataPagamento: "14-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 5,
    nome: "aluguel",
    valor: 3840,
    dataVencimento: "17-01-2021",
    dataPagamento: "17-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 6,
    nome: "condomínio",
    valor: 762,
    dataVencimento: "20-01-2021",
    dataPagamento: "20-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 7,
    nome: "serviço de limpeza",
    valor: 710,
    dataVencimento: "23-01-2021",
    dataPagamento: "23-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 8,
    nome: "seguro patrimonial",
    valor: 258,
    dataVencimento: "26-01-2021",
    dataPagamento: "26-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 9,
    nome: "licença de antivírus",
    valor: 98,
    dataVencimento: "29-01-2021",
    dataPagamento: "29-01-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 10,
    nome: "compra de materiais escolares",
    valor: 1156,
    dataVencimento: "15-01-2021",
    dataPagamento: "15-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 11,
    nome: "manutenção predial",
    valor: 1490,
    dataVencimento: "20-01-2021",
    dataPagamento: "20-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 12,
    nome: "compra de equipamentos",
    valor: 2560,
    dataVencimento: "25-01-2021",
    dataPagamento: "25-01-2021",
    tipoDespesa: "variável"
  },
  {
    id: 13,
    nome: "luz",
    valor: 1340,
    dataVencimento: "05-02-2021",
    dataPagamento: "05-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 14,
    nome: "água",
    valor: 355,
    dataVencimento: "08-02-2021",
    dataPagamento: "08-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 15,
    nome: "internet",
    valor: 278,
    dataVencimento: "11-02-2021",
    dataPagamento: "11-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 16,
    nome: "telefone",
    valor: 142,
    dataVencimento: "14-02-2021",
    dataPagamento: "14-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 17,
    nome: "aluguel",
    valor: 3495,
    dataVencimento: "17-02-2021",
    dataPagamento: "17-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 18,
    nome: "condomínio",
    valor: 877,
    dataVencimento: "20-02-2021",
    dataPagamento: "20-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 19,
    nome: "serviço de limpeza",
    valor: 708,
    dataVencimento: "23-02-2021",
    dataPagamento: "23-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 20,
    nome: "seguro patrimonial",
    valor: 329,
    dataVencimento: "26-02-2021",
    dataPagamento: "26-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 21,
    nome: "licença de antivírus",
    valor: 110,
    dataVencimento: "29-02-2021",
    dataPagamento: "29-02-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 22,
    nome: "luz",
    valor: 1033,
    dataVencimento: "05-03-2021",
    dataPagamento: "05-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 23,
    nome: "água",
    valor: 308,
    dataVencimento: "08-03-2021",
    dataPagamento: "08-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 24,
    nome: "internet",
    valor: 300,
    dataVencimento: "11-03-2021",
    dataPagamento: "11-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 25,
    nome: "telefone",
    valor: 138,
    dataVencimento: "14-03-2021",
    dataPagamento: "14-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 26,
    nome: "aluguel",
    valor: 2952,
    dataVencimento: "17-03-2021",
    dataPagamento: "17-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 27,
    nome: "condomínio",
    valor: 769,
    dataVencimento: "20-03-2021",
    dataPagamento: "20-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 28,
    nome: "serviço de limpeza",
    valor: 713,
    dataVencimento: "23-03-2021",
    dataPagamento: "23-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 29,
    nome: "seguro patrimonial",
    valor: 278,
    dataVencimento: "26-03-2021",
    dataPagamento: "26-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 30,
    nome: "licença de antivírus",
    valor: 112,
    dataVencimento: "29-03-2021",
    dataPagamento: "29-03-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 31,
    nome: "luz",
    valor: 1102,
    dataVencimento: "05-04-2021",
    dataPagamento: "05-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 32,
    nome: "água",
    valor: 325,
    dataVencimento: "08-04-2021",
    dataPagamento: "08-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 33,
    nome: "internet",
    valor: 252,
    dataVencimento: "11-04-2021",
    dataPagamento: "11-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 34,
    nome: "telefone",
    valor: 144,
    dataVencimento: "14-04-2021",
    dataPagamento: "14-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 35,
    nome: "aluguel",
    valor: 3227,
    dataVencimento: "17-04-2021",
    dataPagamento: "17-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 36,
    nome: "condomínio",
    valor: 787,
    dataVencimento: "20-04-2021",
    dataPagamento: "20-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 37,
    nome: "serviço de limpeza",
    valor: 568,
    dataVencimento: "23-04-2021",
    dataPagamento: "23-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 38,
    nome: "seguro patrimonial",
    valor: 291,
    dataVencimento: "26-04-2021",
    dataPagamento: "26-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 39,
    nome: "licença de antivírus",
    valor: 102,
    dataVencimento: "29-04-2021",
    dataPagamento: "29-04-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 40,
    nome: "compra de materiais escolares",
    valor: 1067,
    dataVencimento: "15-04-2021",
    dataPagamento: "15-04-2021",
    tipoDespesa: "variável"
  },
  {
    id: 41,
    nome: "luz",
    valor: 1078,
    dataVencimento: "05-05-2021",
    dataPagamento: "05-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 42,
    nome: "água",
    valor: 324,
    dataVencimento: "08-05-2021",
    dataPagamento: "08-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 43,
    nome: "internet",
    valor: 272,
    dataVencimento: "11-05-2021",
    dataPagamento: "11-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 44,
    nome: "telefone",
    valor: 150,
    dataVencimento: "14-05-2021",
    dataPagamento: "14-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 45,
    nome: "aluguel",
    valor: 3634,
    dataVencimento: "17-05-2021",
    dataPagamento: "17-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 46,
    nome: "condomínio",
    valor: 910,
    dataVencimento: "20-05-2021",
    dataPagamento: "20-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 47,
    nome: "serviço de limpeza",
    valor: 697,
    dataVencimento: "23-05-2021",
    dataPagamento: "23-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 48,
    nome: "seguro patrimonial",
    valor: 343,
    dataVencimento: "26-05-2021",
    dataPagamento: "26-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 49,
    nome: "licença de antivírus",
    valor: 125,
    dataVencimento: "29-05-2021",
    dataPagamento: "29-05-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 50,
    nome: "luz",
    valor: 1282,
    dataVencimento: "05-06-2021",
    dataPagamento: "05-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 51,
    nome: "água",
    valor: 310,
    dataVencimento: "08-06-2021",
    dataPagamento: "08-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 52,
    nome: "internet",
    valor: 295,
    dataVencimento: "11-06-2021",
    dataPagamento: "11-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 53,
    nome: "telefone",
    valor: 136,
    dataVencimento: "14-06-2021",
    dataPagamento: "14-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 54,
    nome: "aluguel",
    valor: 3587,
    dataVencimento: "17-06-2021",
    dataPagamento: "17-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 55,
    nome: "condomínio",
    valor: 750,
    dataVencimento: "20-06-2021",
    dataPagamento: "20-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 56,
    nome: "serviço de limpeza",
    valor: 745,
    dataVencimento: "23-06-2021",
    dataPagamento: "23-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 57,
    nome: "seguro patrimonial",
    valor: 305,
    dataVencimento: "26-06-2021",
    dataPagamento: "26-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 58,
    nome: "licença de antivírus",
    valor: 102,
    dataVencimento: "29-06-2021",
    dataPagamento: "29-06-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 59,
    nome: "luz",
    valor: 1352,
    dataVencimento: "05-07-2021",
    dataPagamento: "05-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 60,
    nome: "água",
    valor: 340,
    dataVencimento: "08-07-2021",
    dataPagamento: "08-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 61,
    nome: "internet",
    valor: 282,
    dataVencimento: "11-07-2021",
    dataPagamento: "11-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 62,
    nome: "telefone",
    valor: 157,
    dataVencimento: "14-07-2021",
    dataPagamento: "14-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 63,
    nome: "aluguel",
    valor: 3576,
    dataVencimento: "17-07-2021",
    dataPagamento: "17-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 64,
    nome: "condomínio",
    valor: 817,
    dataVencimento: "20-07-2021",
    dataPagamento: "20-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 65,
    nome: "serviço de limpeza",
    valor: 591,
    dataVencimento: "23-07-2021",
    dataPagamento: "23-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 66,
    nome: "seguro patrimonial",
    valor: 330,
    dataVencimento: "26-07-2021",
    dataPagamento: "26-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 67,
    nome: "licença de antivírus",
    valor: 124,
    dataVencimento: "29-07-2021",
    dataPagamento: "29-07-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 68,
    nome: "compra de materiais escolares",
    valor: 897,
    dataVencimento: "15-07-2021",
    dataPagamento: "15-07-2021",
    tipoDespesa: "variável"
  },
  {
    id: 69,
    nome: "manutenção predial",
    valor: 1485,
    dataVencimento: "20-07-2021",
    dataPagamento: "20-07-2021",
    tipoDespesa: "variável"
  },
  {
    id: 70,
    nome: "luz",
    valor: 1357,
    dataVencimento: "05-08-2021",
    dataPagamento: "05-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 71,
    nome: "água",
    valor: 312,
    dataVencimento: "08-08-2021",
    dataPagamento: "08-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 72,
    nome: "internet",
    valor: 267,
    dataVencimento: "11-08-2021",
    dataPagamento: "11-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 73,
    nome: "telefone",
    valor: 146,
    dataVencimento: "14-08-2021",
    dataPagamento: "14-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 74,
    nome: "aluguel",
    valor: 3845,
    dataVencimento: "17-08-2021",
    dataPagamento: "17-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 75,
    nome: "condomínio",
    valor: 863,
    dataVencimento: "20-08-2021",
    dataPagamento: "20-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 76,
    nome: "serviço de limpeza",
    valor: 667,
    dataVencimento: "23-08-2021",
    dataPagamento: "23-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 77,
    nome: "seguro patrimonial",
    valor: 331,
    dataVencimento: "26-08-2021",
    dataPagamento: "26-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 78,
    nome: "licença de antivírus",
    valor: 104,
    dataVencimento: "29-08-2021",
    dataPagamento: "29-08-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 79,
    nome: "luz",
    valor: 1187,
    dataVencimento: "05-09-2021",
    dataPagamento: "05-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 80,
    nome: "água",
    valor: 292,
    dataVencimento: "08-09-2021",
    dataPagamento: "08-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 81,
    nome: "internet",
    valor: 253,
    dataVencimento: "11-09-2021",
    dataPagamento: "11-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 82,
    nome: "telefone",
    valor: 159,
    dataVencimento: "14-09-2021",
    dataPagamento: "14-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 83,
    nome: "aluguel",
    valor: 3439,
    dataVencimento: "17-09-2021",
    dataPagamento: "17-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 84,
    nome: "condomínio",
    valor: 775,
    dataVencimento: "20-09-2021",
    dataPagamento: "20-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 85,
    nome: "serviço de limpeza",
    valor: 729,
    dataVencimento: "23-09-2021",
    dataPagamento: "23-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 86,
    nome: "seguro patrimonial",
    valor: 266,
    dataVencimento: "26-09-2021",
    dataPagamento: "26-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 87,
    nome: "licença de antivírus",
    valor: 113,
    dataVencimento: "29-09-2021",
    dataPagamento: "29-09-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 88,
    nome: "luz",
    valor: 1166,
    dataVencimento: "05-10-2021",
    dataPagamento: "05-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 89,
    nome: "água",
    valor: 344,
    dataVencimento: "08-10-2021",
    dataPagamento: "08-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 90,
    nome: "internet",
    valor: 281,
    dataVencimento: "11-10-2021",
    dataPagamento: "11-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 91,
    nome: "telefone",
    valor: 159,
    dataVencimento: "14-10-2021",
    dataPagamento: "14-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 92,
    nome: "aluguel",
    valor: 3003,
    dataVencimento: "17-10-2021",
    dataPagamento: "17-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 93,
    nome: "condomínio",
    valor: 698,
    dataVencimento: "20-10-2021",
    dataPagamento: "20-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 94,
    nome: "serviço de limpeza",
    valor: 656,
    dataVencimento: "23-10-2021",
    dataPagamento: "23-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 95,
    nome: "seguro patrimonial",
    valor: 343,
    dataVencimento: "26-10-2021",
    dataPagamento: "26-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 96,
    nome: "licença de antivírus",
    valor: 123,
    dataVencimento: "29-10-2021",
    dataPagamento: "29-10-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 97,
    nome: "compra de materiais escolares",
    valor: 1112,
    dataVencimento: "15-10-2021",
    dataPagamento: "15-10-2021",
    tipoDespesa: "variável"
  },
  {
    id: 98,
    nome: "luz",
    valor: 1341,
    dataVencimento: "05-11-2021",
    dataPagamento: "05-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 99,
    nome: "água",
    valor: 284,
    dataVencimento: "08-11-2021",
    dataPagamento: "08-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 100,
    nome: "internet",
    valor: 318,
    dataVencimento: "11-11-2021",
    dataPagamento: "11-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 101,
    nome: "telefone",
    valor: 132,
    dataVencimento: "14-11-2021",
    dataPagamento: "14-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 102,
    nome: "aluguel",
    valor: 3216,
    dataVencimento: "17-11-2021",
    dataPagamento: "17-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 103,
    nome: "condomínio",
    valor: 683,
    dataVencimento: "20-11-2021",
    dataPagamento: "20-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 104,
    nome: "serviço de limpeza",
    valor: 739,
    dataVencimento: "23-11-2021",
    dataPagamento: "23-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 105,
    nome: "seguro patrimonial",
    valor: 286,
    dataVencimento: "26-11-2021",
    dataPagamento: "26-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 106,
    nome: "licença de antivírus",
    valor: 97,
    dataVencimento: "29-11-2021",
    dataPagamento: "29-11-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 107,
    nome: "luz",
    valor: 1185,
    dataVencimento: "05-12-2021",
    dataPagamento: "05-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 108,
    nome: "água",
    valor: 276,
    dataVencimento: "08-12-2021",
    dataPagamento: "08-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 109,
    nome: "internet",
    valor: 313,
    dataVencimento: "11-12-2021",
    dataPagamento: "11-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 110,
    nome: "telefone",
    valor: 132,
    dataVencimento: "14-12-2021",
    dataPagamento: "14-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 111,
    nome: "aluguel",
    valor: 3845,
    dataVencimento: "17-12-2021",
    dataPagamento: "17-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 112,
    nome: "condomínio",
    valor: 890,
    dataVencimento: "20-12-2021",
    dataPagamento: "20-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 113,
    nome: "serviço de limpeza",
    valor: 652,
    dataVencimento: "23-12-2021",
    dataPagamento: "23-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 114,
    nome: "seguro patrimonial",
    valor: 304,
    dataVencimento: "26-12-2021",
    dataPagamento: "26-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 115,
    nome: "licença de antivírus",
    valor: 102,
    dataVencimento: "29-12-2021",
    dataPagamento: "29-12-2021",
    tipoDespesa: "fixa"
  },
  {
    id: 116,
    nome: "luz",
    valor: 1066,
    dataVencimento: "05-01-2022",
    dataPagamento: "05-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 117,
    nome: "água",
    valor: 326,
    dataVencimento: "08-01-2022",
    dataPagamento: "08-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 118,
    nome: "internet",
    valor: 275,
    dataVencimento: "11-01-2022",
    dataPagamento: "11-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 119,
    nome: "telefone",
    valor: 130,
    dataVencimento: "14-01-2022",
    dataPagamento: "14-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 120,
    nome: "aluguel",
    valor: 3819,
    dataVencimento: "17-01-2022",
    dataPagamento: "17-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 121,
    nome: "condomínio",
    valor: 917,
    dataVencimento: "20-01-2022",
    dataPagamento: "20-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 122,
    nome: "serviço de limpeza",
    valor: 729,
    dataVencimento: "23-01-2022",
    dataPagamento: "23-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 123,
    nome: "seguro patrimonial",
    valor: 304,
    dataVencimento: "26-01-2022",
    dataPagamento: "26-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 124,
    nome: "licença de antivírus",
    valor: 96,
    dataVencimento: "29-01-2022",
    dataPagamento: "29-01-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 125,
    nome: "compra de materiais escolares",
    valor: 1080,
    dataVencimento: "15-01-2022",
    dataPagamento: "15-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 126,
    nome: "manutenção predial",
    valor: 1220,
    dataVencimento: "20-01-2022",
    dataPagamento: "20-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 127,
    nome: "compra de equipamentos",
    valor: 3872,
    dataVencimento: "25-01-2022",
    dataPagamento: "25-01-2022",
    tipoDespesa: "variável"
  },
  {
    id: 128,
    nome: "luz",
    valor: 1299,
    dataVencimento: "05-02-2022",
    dataPagamento: "05-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 129,
    nome: "água",
    valor: 306,
    dataVencimento: "08-02-2022",
    dataPagamento: "08-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 130,
    nome: "internet",
    valor: 317,
    dataVencimento: "11-02-2022",
    dataPagamento: "11-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 131,
    nome: "telefone",
    valor: 147,
    dataVencimento: "14-02-2022",
    dataPagamento: "14-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 132,
    nome: "aluguel",
    valor: 3083,
    dataVencimento: "17-02-2022",
    dataPagamento: "17-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 133,
    nome: "condomínio",
    valor: 813,
    dataVencimento: "20-02-2022",
    dataPagamento: "20-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 134,
    nome: "serviço de limpeza",
    valor: 700,
    dataVencimento: "23-02-2022",
    dataPagamento: "23-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 135,
    nome: "seguro patrimonial",
    valor: 302,
    dataVencimento: "26-02-2022",
    dataPagamento: "26-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 136,
    nome: "licença de antivírus",
    valor: 118,
    dataVencimento: "29-02-2022",
    dataPagamento: "29-02-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 137,
    nome: "luz",
    valor: 1287,
    dataVencimento: "05-03-2022",
    dataPagamento: "05-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 138,
    nome: "água",
    valor: 337,
    dataVencimento: "08-03-2022",
    dataPagamento: "08-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 139,
    nome: "internet",
    valor: 243,
    dataVencimento: "11-03-2022",
    dataPagamento: "11-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 140,
    nome: "telefone",
    valor: 153,
    dataVencimento: "14-03-2022",
    dataPagamento: "14-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 141,
    nome: "aluguel",
    valor: 3319,
    dataVencimento: "17-03-2022",
    dataPagamento: "17-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 142,
    nome: "condomínio",
    valor: 808,
    dataVencimento: "20-03-2022",
    dataPagamento: "20-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 143,
    nome: "serviço de limpeza",
    valor: 630,
    dataVencimento: "23-03-2022",
    dataPagamento: "23-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 144,
    nome: "seguro patrimonial",
    valor: 310,
    dataVencimento: "26-03-2022",
    dataPagamento: "26-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 145,
    nome: "licença de antivírus",
    valor: 121,
    dataVencimento: "29-03-2022",
    dataPagamento: "29-03-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 146,
    nome: "luz",
    valor: 1224,
    dataVencimento: "05-04-2022",
    dataPagamento: "05-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 147,
    nome: "água",
    valor: 323,
    dataVencimento: "08-04-2022",
    dataPagamento: "08-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 148,
    nome: "internet",
    valor: 315,
    dataVencimento: "11-04-2022",
    dataPagamento: "11-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 149,
    nome: "telefone",
    valor: 144,
    dataVencimento: "14-04-2022",
    dataPagamento: "14-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 150,
    nome: "aluguel",
    valor: 3710,
    dataVencimento: "17-04-2022",
    dataPagamento: "17-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 151,
    nome: "condomínio",
    valor: 897,
    dataVencimento: "20-04-2022",
    dataPagamento: "20-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 152,
    nome: "serviço de limpeza",
    valor: 617,
    dataVencimento: "23-04-2022",
    dataPagamento: "23-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 153,
    nome: "seguro patrimonial",
    valor: 258,
    dataVencimento: "26-04-2022",
    dataPagamento: "26-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 154,
    nome: "licença de antivírus",
    valor: 113,
    dataVencimento: "29-04-2022",
    dataPagamento: "29-04-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 155,
    nome: "compra de materiais escolares",
    valor: 999,
    dataVencimento: "15-04-2022",
    dataPagamento: "15-04-2022",
    tipoDespesa: "variável"
  },
  {
    id: 156,
    nome: "luz",
    valor: 1291,
    dataVencimento: "05-05-2022",
    dataPagamento: "05-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 157,
    nome: "água",
    valor: 352,
    dataVencimento: "08-05-2022",
    dataPagamento: "08-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 158,
    nome: "internet",
    valor: 258,
    dataVencimento: "11-05-2022",
    dataPagamento: "11-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 159,
    nome: "telefone",
    valor: 159,
    dataVencimento: "14-05-2022",
    dataPagamento: "14-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 160,
    nome: "aluguel",
    valor: 3829,
    dataVencimento: "17-05-2022",
    dataPagamento: "17-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 161,
    nome: "condomínio",
    valor: 699,
    dataVencimento: "20-05-2022",
    dataPagamento: "20-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 162,
    nome: "serviço de limpeza",
    valor: 717,
    dataVencimento: "23-05-2022",
    dataPagamento: "23-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 163,
    nome: "seguro patrimonial",
    valor: 258,
    dataVencimento: "26-05-2022",
    dataPagamento: "26-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 164,
    nome: "licença de antivírus",
    valor: 126,
    dataVencimento: "29-05-2022",
    dataPagamento: "29-05-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 165,
    nome: "luz",
    valor: 1204,
    dataVencimento: "05-06-2022",
    dataPagamento: "05-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 166,
    nome: "água",
    valor: 343,
    dataVencimento: "08-06-2022",
    dataPagamento: "08-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 167,
    nome: "internet",
    valor: 261,
    dataVencimento: "11-06-2022",
    dataPagamento: "11-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 168,
    nome: "telefone",
    valor: 132,
    dataVencimento: "14-06-2022",
    dataPagamento: "14-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 169,
    nome: "aluguel",
    valor: 3020,
    dataVencimento: "17-06-2022",
    dataPagamento: "17-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 170,
    nome: "condomínio",
    valor: 694,
    dataVencimento: "20-06-2022",
    dataPagamento: "20-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 171,
    nome: "serviço de limpeza",
    valor: 682,
    dataVencimento: "23-06-2022",
    dataPagamento: "23-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 172,
    nome: "seguro patrimonial",
    valor: 333,
    dataVencimento: "26-06-2022",
    dataPagamento: "26-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 173,
    nome: "licença de antivírus",
    valor: 105,
    dataVencimento: "29-06-2022",
    dataPagamento: "29-06-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 174,
    nome: "luz",
    valor: 1036,
    dataVencimento: "05-07-2022",
    dataPagamento: "05-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 175,
    nome: "água",
    valor: 335,
    dataVencimento: "08-07-2022",
    dataPagamento: "08-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 176,
    nome: "internet",
    valor: 273,
    dataVencimento: "11-07-2022",
    dataPagamento: "11-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 177,
    nome: "telefone",
    valor: 133,
    dataVencimento: "14-07-2022",
    dataPagamento: "14-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 178,
    nome: "aluguel",
    valor: 3868,
    dataVencimento: "17-07-2022",
    dataPagamento: "17-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 179,
    nome: "condomínio",
    valor: 825,
    dataVencimento: "20-07-2022",
    dataPagamento: "20-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 180,
    nome: "serviço de limpeza",
    valor: 681,
    dataVencimento: "23-07-2022",
    dataPagamento: "23-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 181,
    nome: "seguro patrimonial",
    valor: 306,
    dataVencimento: "26-07-2022",
    dataPagamento: "26-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 182,
    nome: "licença de antivírus",
    valor: 120,
    dataVencimento: "29-07-2022",
    dataPagamento: "29-07-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 183,
    nome: "compra de materiais escolares",
    valor: 822,
    dataVencimento: "15-07-2022",
    dataPagamento: "15-07-2022",
    tipoDespesa: "variável"
  },
  {
    id: 184,
    nome: "manutenção predial",
    valor: 1538,
    dataVencimento: "20-07-2022",
    dataPagamento: "20-07-2022",
    tipoDespesa: "variável"
  },
  {
    id: 185,
    nome: "luz",
    valor: 1133,
    dataVencimento: "05-08-2022",
    dataPagamento: "05-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 186,
    nome: "água",
    valor: 327,
    dataVencimento: "08-08-2022",
    dataPagamento: "08-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 187,
    nome: "internet",
    valor: 301,
    dataVencimento: "11-08-2022",
    dataPagamento: "11-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 188,
    nome: "telefone",
    valor: 120,
    dataVencimento: "14-08-2022",
    dataPagamento: "14-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 189,
    nome: "aluguel",
    valor: 3040,
    dataVencimento: "17-08-2022",
    dataPagamento: "17-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 190,
    nome: "condomínio",
    valor: 817,
    dataVencimento: "20-08-2022",
    dataPagamento: "20-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 191,
    nome: "serviço de limpeza",
    valor: 701,
    dataVencimento: "23-08-2022",
    dataPagamento: "23-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 192,
    nome: "seguro patrimonial",
    valor: 299,
    dataVencimento: "26-08-2022",
    dataPagamento: "26-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 193,
    nome: "licença de antivírus",
    valor: 125,
    dataVencimento: "29-08-2022",
    dataPagamento: "29-08-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 194,
    nome: "luz",
    valor: 1106,
    dataVencimento: "05-09-2022",
    dataPagamento: "05-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 195,
    nome: "água",
    valor: 313,
    dataVencimento: "08-09-2022",
    dataPagamento: "08-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 196,
    nome: "internet",
    valor: 249,
    dataVencimento: "11-09-2022",
    dataPagamento: "11-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 197,
    nome: "telefone",
    valor: 155,
    dataVencimento: "14-09-2022",
    dataPagamento: "14-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 198,
    nome: "aluguel",
    valor: 3619,
    dataVencimento: "17-09-2022",
    dataPagamento: "17-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 199,
    nome: "condomínio",
    valor: 780,
    dataVencimento: "20-09-2022",
    dataPagamento: "20-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 200,
    nome: "serviço de limpeza",
    valor: 624,
    dataVencimento: "23-09-2022",
    dataPagamento: "23-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 201,
    nome: "seguro patrimonial",
    valor: 299,
    dataVencimento: "26-09-2022",
    dataPagamento: "26-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 202,
    nome: "licença de antivírus",
    valor: 119,
    dataVencimento: "29-09-2022",
    dataPagamento: "29-09-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 203,
    nome: "luz",
    valor: 1077,
    dataVencimento: "05-10-2022",
    dataPagamento: "05-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 204,
    nome: "água",
    valor: 353,
    dataVencimento: "08-10-2022",
    dataPagamento: "08-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 205,
    nome: "internet",
    valor: 240,
    dataVencimento: "11-10-2022",
    dataPagamento: "11-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 206,
    nome: "telefone",
    valor: 131,
    dataVencimento: "14-10-2022",
    dataPagamento: "14-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 207,
    nome: "aluguel",
    valor: 3424,
    dataVencimento: "17-10-2022",
    dataPagamento: "17-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 208,
    nome: "condomínio",
    valor: 770,
    dataVencimento: "20-10-2022",
    dataPagamento: "20-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 209,
    nome: "serviço de limpeza",
    valor: 737,
    dataVencimento: "23-10-2022",
    dataPagamento: "23-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 210,
    nome: "seguro patrimonial",
    valor: 292,
    dataVencimento: "26-10-2022",
    dataPagamento: "26-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 211,
    nome: "licença de antivírus",
    valor: 95,
    dataVencimento: "29-10-2022",
    dataPagamento: "29-10-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 212,
    nome: "compra de materiais escolares",
    valor: 1079,
    dataVencimento: "15-10-2022",
    dataPagamento: "15-10-2022",
    tipoDespesa: "variável"
  },
  {
    id: 213,
    nome: "luz",
    valor: 1281,
    dataVencimento: "05-11-2022",
    dataPagamento: "05-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 214,
    nome: "água",
    valor: 348,
    dataVencimento: "08-11-2022",
    dataPagamento: "08-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 215,
    nome: "internet",
    valor: 282,
    dataVencimento: "11-11-2022",
    dataPagamento: "11-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 216,
    nome: "telefone",
    valor: 133,
    dataVencimento: "14-11-2022",
    dataPagamento: "14-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 217,
    nome: "aluguel",
    valor: 3833,
    dataVencimento: "17-11-2022",
    dataPagamento: "17-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 218,
    nome: "condomínio",
    valor: 727,
    dataVencimento: "20-11-2022",
    dataPagamento: "20-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 219,
    nome: "serviço de limpeza",
    valor: 727,
    dataVencimento: "23-11-2022",
    dataPagamento: "23-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 220,
    nome: "seguro patrimonial",
    valor: 306,
    dataVencimento: "26-11-2022",
    dataPagamento: "26-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 221,
    nome: "licença de antivírus",
    valor: 110,
    dataVencimento: "29-11-2022",
    dataPagamento: "29-11-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 222,
    nome: "luz",
    valor: 1265,
    dataVencimento: "05-12-2022",
    dataPagamento: "05-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 223,
    nome: "água",
    valor: 302,
    dataVencimento: "08-12-2022",
    dataPagamento: "08-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 224,
    nome: "internet",
    valor: 278,
    dataVencimento: "11-12-2022",
    dataPagamento: "11-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 225,
    nome: "telefone",
    valor: 129,
    dataVencimento: "14-12-2022",
    dataPagamento: "14-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 226,
    nome: "aluguel",
    valor: 3790,
    dataVencimento: "17-12-2022",
    dataPagamento: "17-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 227,
    nome: "condomínio",
    valor: 887,
    dataVencimento: "20-12-2022",
    dataPagamento: "20-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 228,
    nome: "serviço de limpeza",
    valor: 721,
    dataVencimento: "23-12-2022",
    dataPagamento: "23-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 229,
    nome: "seguro patrimonial",
    valor: 295,
    dataVencimento: "26-12-2022",
    dataPagamento: "26-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 230,
    nome: "licença de antivírus",
    valor: 100,
    dataVencimento: "29-12-2022",
    dataPagamento: "29-12-2022",
    tipoDespesa: "fixa"
  },
  {
    id: 231,
    nome: "luz",
    valor: 1260,
    dataVencimento: "05-01-2023",
    dataPagamento: "05-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 232,
    nome: "água",
    valor: 300,
    dataVencimento: "08-01-2023",
    dataPagamento: "08-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 233,
    nome: "internet",
    valor: 259,
    dataVencimento: "11-01-2023",
    dataPagamento: "11-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 234,
    nome: "telefone",
    valor: 131,
    dataVencimento: "14-01-2023",
    dataPagamento: "14-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 235,
    nome: "aluguel",
    valor: 3415,
    dataVencimento: "17-01-2023",
    dataPagamento: "17-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 236,
    nome: "condomínio",
    valor: 866,
    dataVencimento: "20-01-2023",
    dataPagamento: "20-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 237,
    nome: "serviço de limpeza",
    valor: 644,
    dataVencimento: "23-01-2023",
    dataPagamento: "23-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 238,
    nome: "seguro patrimonial",
    valor: 256,
    dataVencimento: "26-01-2023",
    dataPagamento: "26-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 239,
    nome: "licença de antivírus",
    valor: 112,
    dataVencimento: "29-01-2023",
    dataPagamento: "29-01-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 240,
    nome: "compra de materiais escolares",
    valor: 1035,
    dataVencimento: "15-01-2023",
    dataPagamento: "15-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 241,
    nome: "manutenção predial",
    valor: 1263,
    dataVencimento: "20-01-2023",
    dataPagamento: "20-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 242,
    nome: "compra de equipamentos",
    valor: 2569,
    dataVencimento: "25-01-2023",
    dataPagamento: "25-01-2023",
    tipoDespesa: "variável"
  },
  {
    id: 243,
    nome: "luz",
    valor: 1256,
    dataVencimento: "05-02-2023",
    dataPagamento: "05-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 244,
    nome: "água",
    valor: 356,
    dataVencimento: "08-02-2023",
    dataPagamento: "08-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 245,
    nome: "internet",
    valor: 260,
    dataVencimento: "11-02-2023",
    dataPagamento: "11-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 246,
    nome: "telefone",
    valor: 152,
    dataVencimento: "14-02-2023",
    dataPagamento: "14-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 247,
    nome: "aluguel",
    valor: 3421,
    dataVencimento: "17-02-2023",
    dataPagamento: "17-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 248,
    nome: "condomínio",
    valor: 850,
    dataVencimento: "20-02-2023",
    dataPagamento: "20-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 249,
    nome: "serviço de limpeza",
    valor: 603,
    dataVencimento: "23-02-2023",
    dataPagamento: "23-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 250,
    nome: "seguro patrimonial",
    valor: 284,
    dataVencimento: "26-02-2023",
    dataPagamento: "26-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 251,
    nome: "licença de antivírus",
    valor: 109,
    dataVencimento: "29-02-2023",
    dataPagamento: "29-02-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 252,
    nome: "luz",
    valor: 1312,
    dataVencimento: "05-03-2023",
    dataPagamento: "05-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 253,
    nome: "água",
    valor: 333,
    dataVencimento: "08-03-2023",
    dataPagamento: "08-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 254,
    nome: "internet",
    valor: 259,
    dataVencimento: "11-03-2023",
    dataPagamento: "11-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 255,
    nome: "telefone",
    valor: 152,
    dataVencimento: "14-03-2023",
    dataPagamento: "14-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 256,
    nome: "aluguel",
    valor: 3254,
    dataVencimento: "17-03-2023",
    dataPagamento: "17-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 257,
    nome: "condomínio",
    valor: 704,
    dataVencimento: "20-03-2023",
    dataPagamento: "20-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 258,
    nome: "serviço de limpeza",
    valor: 558,
    dataVencimento: "23-03-2023",
    dataPagamento: "23-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 259,
    nome: "seguro patrimonial",
    valor: 327,
    dataVencimento: "26-03-2023",
    dataPagamento: "26-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 260,
    nome: "licença de antivírus",
    valor: 122,
    dataVencimento: "29-03-2023",
    dataPagamento: "29-03-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 261,
    nome: "luz",
    valor: 1285,
    dataVencimento: "05-04-2023",
    dataPagamento: "05-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 262,
    nome: "água",
    valor: 272,
    dataVencimento: "08-04-2023",
    dataPagamento: "08-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 263,
    nome: "internet",
    valor: 301,
    dataVencimento: "11-04-2023",
    dataPagamento: "11-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 264,
    nome: "telefone",
    valor: 156,
    dataVencimento: "14-04-2023",
    dataPagamento: "14-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 265,
    nome: "aluguel",
    valor: 3157,
    dataVencimento: "17-04-2023",
    dataPagamento: "17-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 266,
    nome: "condomínio",
    valor: 736,
    dataVencimento: "20-04-2023",
    dataPagamento: "20-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 267,
    nome: "serviço de limpeza",
    valor: 581,
    dataVencimento: "23-04-2023",
    dataPagamento: "23-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 268,
    nome: "seguro patrimonial",
    valor: 278,
    dataVencimento: "26-04-2023",
    dataPagamento: "26-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 269,
    nome: "licença de antivírus",
    valor: 94,
    dataVencimento: "29-04-2023",
    dataPagamento: "29-04-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 270,
    nome: "compra de materiais escolares",
    valor: 1025,
    dataVencimento: "15-04-2023",
    dataPagamento: "15-04-2023",
    tipoDespesa: "variável"
  },
  {
    id: 271,
    nome: "luz",
    valor: 1215,
    dataVencimento: "05-05-2023",
    dataPagamento: "05-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 272,
    nome: "água",
    valor: 308,
    dataVencimento: "08-05-2023",
    dataPagamento: "08-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 273,
    nome: "internet",
    valor: 264,
    dataVencimento: "11-05-2023",
    dataPagamento: "11-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 274,
    nome: "telefone",
    valor: 159,
    dataVencimento: "14-05-2023",
    dataPagamento: "14-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 275,
    nome: "aluguel",
    valor: 3203,
    dataVencimento: "17-05-2023",
    dataPagamento: "17-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 276,
    nome: "condomínio",
    valor: 837,
    dataVencimento: "20-05-2023",
    dataPagamento: "20-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 277,
    nome: "serviço de limpeza",
    valor: 580,
    dataVencimento: "23-05-2023",
    dataPagamento: "23-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 278,
    nome: "seguro patrimonial",
    valor: 308,
    dataVencimento: "26-05-2023",
    dataPagamento: "26-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 279,
    nome: "licença de antivírus",
    valor: 109,
    dataVencimento: "29-05-2023",
    dataPagamento: "29-05-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 280,
    nome: "luz",
    valor: 1208,
    dataVencimento: "05-06-2023",
    dataPagamento: "05-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 281,
    nome: "água",
    valor: 297,
    dataVencimento: "08-06-2023",
    dataPagamento: "08-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 282,
    nome: "internet",
    valor: 278,
    dataVencimento: "11-06-2023",
    dataPagamento: "11-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 283,
    nome: "telefone",
    valor: 132,
    dataVencimento: "14-06-2023",
    dataPagamento: "14-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 284,
    nome: "aluguel",
    valor: 3878,
    dataVencimento: "17-06-2023",
    dataPagamento: "17-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 285,
    nome: "condomínio",
    valor: 900,
    dataVencimento: "20-06-2023",
    dataPagamento: "20-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 286,
    nome: "serviço de limpeza",
    valor: 702,
    dataVencimento: "23-06-2023",
    dataPagamento: "23-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 287,
    nome: "seguro patrimonial",
    valor: 261,
    dataVencimento: "26-06-2023",
    dataPagamento: "26-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 288,
    nome: "licença de antivírus",
    valor: 121,
    dataVencimento: "29-06-2023",
    dataPagamento: "29-06-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 289,
    nome: "luz",
    valor: 1135,
    dataVencimento: "05-07-2023",
    dataPagamento: "05-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 290,
    nome: "água",
    valor: 326,
    dataVencimento: "08-07-2023",
    dataPagamento: "08-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 291,
    nome: "internet",
    valor: 303,
    dataVencimento: "11-07-2023",
    dataPagamento: "11-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 292,
    nome: "telefone",
    valor: 146,
    dataVencimento: "14-07-2023",
    dataPagamento: "14-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 293,
    nome: "aluguel",
    valor: 3906,
    dataVencimento: "17-07-2023",
    dataPagamento: "17-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 294,
    nome: "condomínio",
    valor: 729,
    dataVencimento: "20-07-2023",
    dataPagamento: "20-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 295,
    nome: "serviço de limpeza",
    valor: 590,
    dataVencimento: "23-07-2023",
    dataPagamento: "23-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 296,
    nome: "seguro patrimonial",
    valor: 281,
    dataVencimento: "26-07-2023",
    dataPagamento: "26-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 297,
    nome: "licença de antivírus",
    valor: 94,
    dataVencimento: "29-07-2023",
    dataPagamento: "29-07-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 298,
    nome: "compra de materiais escolares",
    valor: 835,
    dataVencimento: "15-07-2023",
    dataPagamento: "15-07-2023",
    tipoDespesa: "variável"
  },
  {
    id: 299,
    nome: "manutenção predial",
    valor: 1756,
    dataVencimento: "20-07-2023",
    dataPagamento: "20-07-2023",
    tipoDespesa: "variável"
  },
  {
    id: 300,
    nome: "luz",
    valor: 1286,
    dataVencimento: "05-08-2023",
    dataPagamento: "05-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 301,
    nome: "água",
    valor: 328,
    dataVencimento: "08-08-2023",
    dataPagamento: "08-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 302,
    nome: "internet",
    valor: 274,
    dataVencimento: "11-08-2023",
    dataPagamento: "11-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 303,
    nome: "telefone",
    valor: 121,
    dataVencimento: "14-08-2023",
    dataPagamento: "14-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 304,
    nome: "aluguel",
    valor: 3886,
    dataVencimento: "17-08-2023",
    dataPagamento: "17-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 305,
    nome: "condomínio",
    valor: 765,
    dataVencimento: "20-08-2023",
    dataPagamento: "20-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 306,
    nome: "serviço de limpeza",
    valor: 600,
    dataVencimento: "23-08-2023",
    dataPagamento: "23-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 307,
    nome: "seguro patrimonial",
    valor: 318,
    dataVencimento: "26-08-2023",
    dataPagamento: "26-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 308,
    nome: "licença de antivírus",
    valor: 107,
    dataVencimento: "29-08-2023",
    dataPagamento: "29-08-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 309,
    nome: "luz",
    valor: 1083,
    dataVencimento: "05-09-2023",
    dataPagamento: "05-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 310,
    nome: "água",
    valor: 360,
    dataVencimento: "08-09-2023",
    dataPagamento: "08-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 311,
    nome: "internet",
    valor: 320,
    dataVencimento: "11-09-2023",
    dataPagamento: "11-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 312,
    nome: "telefone",
    valor: 157,
    dataVencimento: "14-09-2023",
    dataPagamento: "14-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 313,
    nome: "aluguel",
    valor: 3904,
    dataVencimento: "17-09-2023",
    dataPagamento: "17-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 314,
    nome: "condomínio",
    valor: 827,
    dataVencimento: "20-09-2023",
    dataPagamento: "20-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 315,
    nome: "serviço de limpeza",
    valor: 662,
    dataVencimento: "23-09-2023",
    dataPagamento: "23-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 316,
    nome: "seguro patrimonial",
    valor: 275,
    dataVencimento: "26-09-2023",
    dataPagamento: "26-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 317,
    nome: "licença de antivírus",
    valor: 110,
    dataVencimento: "29-09-2023",
    dataPagamento: "29-09-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 318,
    nome: "luz",
    valor: 1376,
    dataVencimento: "05-10-2023",
    dataPagamento: "05-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 319,
    nome: "água",
    valor: 299,
    dataVencimento: "08-10-2023",
    dataPagamento: "08-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 320,
    nome: "internet",
    valor: 299,
    dataVencimento: "11-10-2023",
    dataPagamento: "11-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 321,
    nome: "telefone",
    valor: 140,
    dataVencimento: "14-10-2023",
    dataPagamento: "14-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 322,
    nome: "aluguel",
    valor: 3092,
    dataVencimento: "17-10-2023",
    dataPagamento: "17-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 323,
    nome: "condomínio",
    valor: 838,
    dataVencimento: "20-10-2023",
    dataPagamento: "20-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 324,
    nome: "serviço de limpeza",
    valor: 666,
    dataVencimento: "23-10-2023",
    dataPagamento: "23-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 325,
    nome: "seguro patrimonial",
    valor: 277,
    dataVencimento: "26-10-2023",
    dataPagamento: "26-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 326,
    nome: "licença de antivírus",
    valor: 121,
    dataVencimento: "29-10-2023",
    dataPagamento: "29-10-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 327,
    nome: "compra de materiais escolares",
    valor: 1016,
    dataVencimento: "15-10-2023",
    dataPagamento: "15-10-2023",
    tipoDespesa: "variável"
  },
  {
    id: 328,
    nome: "luz",
    valor: 1365,
    dataVencimento: "05-11-2023",
    dataPagamento: "05-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 329,
    nome: "água",
    valor: 336,
    dataVencimento: "08-11-2023",
    dataPagamento: "08-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 330,
    nome: "internet",
    valor: 250,
    dataVencimento: "11-11-2023",
    dataPagamento: "11-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 331,
    nome: "telefone",
    valor: 128,
    dataVencimento: "14-11-2023",
    dataPagamento: "14-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 332,
    nome: "aluguel",
    valor: 3131,
    dataVencimento: "17-11-2023",
    dataPagamento: "17-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 333,
    nome: "condomínio",
    valor: 730,
    dataVencimento: "20-11-2023",
    dataPagamento: "20-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 334,
    nome: "serviço de limpeza",
    valor: 643,
    dataVencimento: "23-11-2023",
    dataPagamento: "23-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 335,
    nome: "seguro patrimonial",
    valor: 259,
    dataVencimento: "26-11-2023",
    dataPagamento: "26-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 336,
    nome: "licença de antivírus",
    valor: 123,
    dataVencimento: "29-11-2023",
    dataPagamento: "29-11-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 337,
    nome: "luz",
    valor: 1068,
    dataVencimento: "05-12-2023",
    dataPagamento: "05-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 338,
    nome: "água",
    valor: 276,
    dataVencimento: "08-12-2023",
    dataPagamento: "08-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 339,
    nome: "internet",
    valor: 307,
    dataVencimento: "11-12-2023",
    dataPagamento: "11-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 340,
    nome: "telefone",
    valor: 153,
    dataVencimento: "14-12-2023",
    dataPagamento: "14-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 341,
    nome: "aluguel",
    valor: 3082,
    dataVencimento: "17-12-2023",
    dataPagamento: "17-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 342,
    nome: "condomínio",
    valor: 690,
    dataVencimento: "20-12-2023",
    dataPagamento: "20-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 343,
    nome: "serviço de limpeza",
    valor: 631,
    dataVencimento: "23-12-2023",
    dataPagamento: "23-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 344,
    nome: "seguro patrimonial",
    valor: 341,
    dataVencimento: "26-12-2023",
    dataPagamento: "26-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 345,
    nome: "licença de antivírus",
    valor: 112,
    dataVencimento: "29-12-2023",
    dataPagamento: "29-12-2023",
    tipoDespesa: "fixa"
  },
  {
    id: 346,
    nome: "luz",
    valor: 1261,
    dataVencimento: "05-01-2024",
    dataPagamento: "05-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 347,
    nome: "água",
    valor: 281,
    dataVencimento: "08-01-2024",
    dataPagamento: "08-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 348,
    nome: "internet",
    valor: 312,
    dataVencimento: "11-01-2024",
    dataPagamento: "11-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 349,
    nome: "telefone",
    valor: 136,
    dataVencimento: "14-01-2024",
    dataPagamento: "14-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 350,
    nome: "aluguel",
    valor: 2955,
    dataVencimento: "17-01-2024",
    dataPagamento: "17-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 351,
    nome: "condomínio",
    valor: 895,
    dataVencimento: "20-01-2024",
    dataPagamento: "20-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 352,
    nome: "serviço de limpeza",
    valor: 565,
    dataVencimento: "23-01-2024",
    dataPagamento: "23-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 353,
    nome: "seguro patrimonial",
    valor: 310,
    dataVencimento: "26-01-2024",
    dataPagamento: "26-01-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 354,
    nome: "licença de antivírus",
    valor: 102,
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
    valor: 1333,
    dataVencimento: "20-01-2024",
    dataPagamento: "20-01-2024",
    tipoDespesa: "variável"
  },
  {
    id: 357,
    nome: "compra de equipamentos",
    valor: 3063,
    dataVencimento: "25-01-2024",
    dataPagamento: "25-01-2024",
    tipoDespesa: "variável"
  },
  {
    id: 358,
    nome: "luz",
    valor: 1243,
    dataVencimento: "05-02-2024",
    dataPagamento: "05-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 359,
    nome: "água",
    valor: 342,
    dataVencimento: "08-02-2024",
    dataPagamento: "08-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 360,
    nome: "internet",
    valor: 317,
    dataVencimento: "11-02-2024",
    dataPagamento: "11-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 361,
    nome: "telefone",
    valor: 121,
    dataVencimento: "14-02-2024",
    dataPagamento: "14-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 362,
    nome: "aluguel",
    valor: 3333,
    dataVencimento: "17-02-2024",
    dataPagamento: "17-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 363,
    nome: "condomínio",
    valor: 761,
    dataVencimento: "20-02-2024",
    dataPagamento: "20-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 364,
    nome: "serviço de limpeza",
    valor: 671,
    dataVencimento: "23-02-2024",
    dataPagamento: "23-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 365,
    nome: "seguro patrimonial",
    valor: 332,
    dataVencimento: "26-02-2024",
    dataPagamento: "26-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 366,
    nome: "licença de antivírus",
    valor: 110,
    dataVencimento: "29-02-2024",
    dataPagamento: "29-02-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 367,
    nome: "luz",
    valor: 1121,
    dataVencimento: "05-03-2024",
    dataPagamento: "05-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 368,
    nome: "água",
    valor: 334,
    dataVencimento: "08-03-2024",
    dataPagamento: "08-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 369,
    nome: "internet",
    valor: 277,
    dataVencimento: "11-03-2024",
    dataPagamento: "11-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 370,
    nome: "telefone",
    valor: 129,
    dataVencimento: "14-03-2024",
    dataPagamento: "14-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 371,
    nome: "aluguel",
    valor: 3776,
    dataVencimento: "17-03-2024",
    dataPagamento: "17-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 372,
    nome: "condomínio",
    valor: 764,
    dataVencimento: "20-03-2024",
    dataPagamento: "20-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 373,
    nome: "serviço de limpeza",
    valor: 688,
    dataVencimento: "23-03-2024",
    dataPagamento: "23-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 374,
    nome: "seguro patrimonial",
    valor: 304,
    dataVencimento: "26-03-2024",
    dataPagamento: "26-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 375,
    nome: "licença de antivírus",
    valor: 104,
    dataVencimento: "29-03-2024",
    dataPagamento: "29-03-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 376,
    nome: "luz",
    valor: 1049,
    dataVencimento: "05-04-2024",
    dataPagamento: "05-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 377,
    nome: "água",
    valor: 285,
    dataVencimento: "08-04-2024",
    dataPagamento: "08-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 378,
    nome: "internet",
    valor: 281,
    dataVencimento: "11-04-2024",
    dataPagamento: "11-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 379,
    nome: "telefone",
    valor: 135,
    dataVencimento: "14-04-2024",
    dataPagamento: "14-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 380,
    nome: "aluguel",
    valor: 3882,
    dataVencimento: "17-04-2024",
    dataPagamento: "17-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 381,
    nome: "condomínio",
    valor: 746,
    dataVencimento: "20-04-2024",
    dataPagamento: "20-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 382,
    nome: "serviço de limpeza",
    valor: 647,
    dataVencimento: "23-04-2024",
    dataPagamento: "23-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 383,
    nome: "seguro patrimonial",
    valor: 295,
    dataVencimento: "26-04-2024",
    dataPagamento: "26-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 384,
    nome: "licença de antivírus",
    valor: 110,
    dataVencimento: "29-04-2024",
    dataPagamento: "29-04-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 385,
    nome: "compra de materiais escolares",
    valor: 878,
    dataVencimento: "15-04-2024",
    dataPagamento: "15-04-2024",
    tipoDespesa: "variável"
  },
  {
    id: 386,
    nome: "luz",
    valor: 1074,
    dataVencimento: "05-05-2024",
    dataPagamento: "05-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 387,
    nome: "água",
    valor: 290,
    dataVencimento: "08-05-2024",
    dataPagamento: "08-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 388,
    nome: "internet",
    valor: 309,
    dataVencimento: "11-05-2024",
    dataPagamento: "11-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 389,
    nome: "telefone",
    valor: 143,
    dataVencimento: "14-05-2024",
    dataPagamento: "14-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 390,
    nome: "aluguel",
    valor: 3622,
    dataVencimento: "17-05-2024",
    dataPagamento: "17-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 391,
    nome: "condomínio",
    valor: 716,
    dataVencimento: "20-05-2024",
    dataPagamento: "20-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 392,
    nome: "serviço de limpeza",
    valor: 684,
    dataVencimento: "23-05-2024",
    dataPagamento: "23-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 393,
    nome: "seguro patrimonial",
    valor: 336,
    dataVencimento: "26-05-2024",
    dataPagamento: "26-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 394,
    nome: "licença de antivírus",
    valor: 101,
    dataVencimento: "29-05-2024",
    dataPagamento: "29-05-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 395,
    nome: "luz",
    valor: 1024,
    dataVencimento: "05-06-2024",
    dataPagamento: "05-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 396,
    nome: "água",
    valor: 337,
    dataVencimento: "08-06-2024",
    dataPagamento: "08-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 397,
    nome: "internet",
    valor: 313,
    dataVencimento: "11-06-2024",
    dataPagamento: "11-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 398,
    nome: "telefone",
    valor: 131,
    dataVencimento: "14-06-2024",
    dataPagamento: "14-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 399,
    nome: "aluguel",
    valor: 3523,
    dataVencimento: "17-06-2024",
    dataPagamento: "17-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 400,
    nome: "condomínio",
    valor: 837,
    dataVencimento: "20-06-2024",
    dataPagamento: "20-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 401,
    nome: "serviço de limpeza",
    valor: 736,
    dataVencimento: "23-06-2024",
    dataPagamento: "23-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 402,
    nome: "seguro patrimonial",
    valor: 280,
    dataVencimento: "26-06-2024",
    dataPagamento: "26-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 403,
    nome: "licença de antivírus",
    valor: 109,
    dataVencimento: "29-06-2024",
    dataPagamento: "29-06-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 404,
    nome: "luz",
    valor: 1148,
    dataVencimento: "05-07-2024",
    dataPagamento: "05-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 405,
    nome: "água",
    valor: 305,
    dataVencimento: "08-07-2024",
    dataPagamento: "08-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 406,
    nome: "internet",
    valor: 267,
    dataVencimento: "11-07-2024",
    dataPagamento: "11-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 407,
    nome: "telefone",
    valor: 158,
    dataVencimento: "14-07-2024",
    dataPagamento: "14-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 408,
    nome: "aluguel",
    valor: 3113,
    dataVencimento: "17-07-2024",
    dataPagamento: "17-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 409,
    nome: "condomínio",
    valor: 688,
    dataVencimento: "20-07-2024",
    dataPagamento: "20-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 410,
    nome: "serviço de limpeza",
    valor: 636,
    dataVencimento: "23-07-2024",
    dataPagamento: "23-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 411,
    nome: "seguro patrimonial",
    valor: 308,
    dataVencimento: "26-07-2024",
    dataPagamento: "26-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 412,
    nome: "licença de antivírus",
    valor: 101,
    dataVencimento: "29-07-2024",
    dataPagamento: "29-07-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 413,
    nome: "compra de materiais escolares",
    valor: 910,
    dataVencimento: "15-07-2024",
    dataPagamento: "15-07-2024",
    tipoDespesa: "variável"
  },
  {
    id: 414,
    nome: "manutenção predial",
    valor: 1269,
    dataVencimento: "20-07-2024",
    dataPagamento: "20-07-2024",
    tipoDespesa: "variável"
  },
  {
    id: 415,
    nome: "luz",
    valor: 1101,
    dataVencimento: "05-08-2024",
    dataPagamento: "05-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 416,
    nome: "água",
    valor: 337,
    dataVencimento: "08-08-2024",
    dataPagamento: "08-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 417,
    nome: "internet",
    valor: 276,
    dataVencimento: "11-08-2024",
    dataPagamento: "11-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 418,
    nome: "telefone",
    valor: 122,
    dataVencimento: "14-08-2024",
    dataPagamento: "14-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 419,
    nome: "aluguel",
    valor: 3355,
    dataVencimento: "17-08-2024",
    dataPagamento: "17-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 420,
    nome: "condomínio",
    valor: 734,
    dataVencimento: "20-08-2024",
    dataPagamento: "20-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 421,
    nome: "serviço de limpeza",
    valor: 554,
    dataVencimento: "23-08-2024",
    dataPagamento: "23-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 422,
    nome: "seguro patrimonial",
    valor: 330,
    dataVencimento: "26-08-2024",
    dataPagamento: "26-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 423,
    nome: "licença de antivírus",
    valor: 96,
    dataVencimento: "29-08-2024",
    dataPagamento: "29-08-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 424,
    nome: "luz",
    valor: 1207,
    dataVencimento: "05-09-2024",
    dataPagamento: "05-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 425,
    nome: "água",
    valor: 309,
    dataVencimento: "08-09-2024",
    dataPagamento: "08-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 426,
    nome: "internet",
    valor: 244,
    dataVencimento: "11-09-2024",
    dataPagamento: "11-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 427,
    nome: "telefone",
    valor: 138,
    dataVencimento: "14-09-2024",
    dataPagamento: "14-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 428,
    nome: "aluguel",
    valor: 3874,
    dataVencimento: "17-09-2024",
    dataPagamento: "17-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 429,
    nome: "condomínio",
    valor: 714,
    dataVencimento: "20-09-2024",
    dataPagamento: "20-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 430,
    nome: "serviço de limpeza",
    valor: 696,
    dataVencimento: "23-09-2024",
    dataPagamento: "23-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 431,
    nome: "seguro patrimonial",
    valor: 289,
    dataVencimento: "26-09-2024",
    dataPagamento: "26-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 432,
    nome: "licença de antivírus",
    valor: 112,
    dataVencimento: "29-09-2024",
    dataPagamento: "29-09-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 433,
    nome: "luz",
    valor: 1092,
    dataVencimento: "05-10-2024",
    dataPagamento: "05-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 434,
    nome: "água",
    valor: 304,
    dataVencimento: "08-10-2024",
    dataPagamento: "08-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 435,
    nome: "internet",
    valor: 252,
    dataVencimento: "11-10-2024",
    dataPagamento: "11-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 436,
    nome: "telefone",
    valor: 153,
    dataVencimento: "14-10-2024",
    dataPagamento: "14-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 437,
    nome: "aluguel",
    valor: 3669,
    dataVencimento: "17-10-2024",
    dataPagamento: "17-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 438,
    nome: "condomínio",
    valor: 739,
    dataVencimento: "20-10-2024",
    dataPagamento: "20-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 439,
    nome: "serviço de limpeza",
    valor: 672,
    dataVencimento: "23-10-2024",
    dataPagamento: "23-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 440,
    nome: "seguro patrimonial",
    valor: 307,
    dataVencimento: "26-10-2024",
    dataPagamento: "26-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 441,
    nome: "licença de antivírus",
    valor: 107,
    dataVencimento: "29-10-2024",
    dataPagamento: "29-10-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 442,
    nome: "compra de materiais escolares",
    valor: 1106,
    dataVencimento: "15-10-2024",
    dataPagamento: "15-10-2024",
    tipoDespesa: "variável"
  },
  {
    id: 443,
    nome: "luz",
    valor: 1054,
    dataVencimento: "05-11-2024",
    dataPagamento: "05-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 444,
    nome: "água",
    valor: 285,
    dataVencimento: "08-11-2024",
    dataPagamento: "08-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 445,
    nome: "internet",
    valor: 253,
    dataVencimento: "11-11-2024",
    dataPagamento: "11-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 446,
    nome: "telefone",
    valor: 149,
    dataVencimento: "14-11-2024",
    dataPagamento: "14-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 447,
    nome: "aluguel",
    valor: 3798,
    dataVencimento: "17-11-2024",
    dataPagamento: "17-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 448,
    nome: "condomínio",
    valor: 747,
    dataVencimento: "20-11-2024",
    dataPagamento: "20-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 449,
    nome: "serviço de limpeza",
    valor: 602,
    dataVencimento: "23-11-2024",
    dataPagamento: "23-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 450,
    nome: "seguro patrimonial",
    valor: 343,
    dataVencimento: "26-11-2024",
    dataPagamento: "26-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 451,
    nome: "licença de antivírus",
    valor: 96,
    dataVencimento: "29-11-2024",
    dataPagamento: "29-11-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 452,
    nome: "luz",
    valor: 1227,
    dataVencimento: "05-12-2024",
    dataPagamento: "05-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 453,
    nome: "água",
    valor: 311,
    dataVencimento: "08-12-2024",
    dataPagamento: "08-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 454,
    nome: "internet",
    valor: 319,
    dataVencimento: "11-12-2024",
    dataPagamento: "11-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 455,
    nome: "telefone",
    valor: 122,
    dataVencimento: "14-12-2024",
    dataPagamento: "14-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 456,
    nome: "aluguel",
    valor: 3898,
    dataVencimento: "17-12-2024",
    dataPagamento: "17-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 457,
    nome: "condomínio",
    valor: 795,
    dataVencimento: "20-12-2024",
    dataPagamento: "20-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 458,
    nome: "serviço de limpeza",
    valor: 591,
    dataVencimento: "23-12-2024",
    dataPagamento: "23-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 459,
    nome: "seguro patrimonial",
    valor: 307,
    dataVencimento: "26-12-2024",
    dataPagamento: "26-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 460,
    nome: "licença de antivírus",
    valor: 99,
    dataVencimento: "29-12-2024",
    dataPagamento: "29-12-2024",
    tipoDespesa: "fixa"
  },
  {
    id: 461,
    nome: "luz",
    valor: 1026,
    dataVencimento: "05-01-2025",
    dataPagamento: "05-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 462,
    nome: "água",
    valor: 303,
    dataVencimento: "08-01-2025",
    dataPagamento: "08-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 463,
    nome: "internet",
    valor: 308,
    dataVencimento: "11-01-2025",
    dataPagamento: "11-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 464,
    nome: "telefone",
    valor: 144,
    dataVencimento: "14-01-2025",
    dataPagamento: "14-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 465,
    nome: "aluguel",
    valor: 3861,
    dataVencimento: "17-01-2025",
    dataPagamento: "17-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 466,
    nome: "condomínio",
    valor: 699,
    dataVencimento: "20-01-2025",
    dataPagamento: "20-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 467,
    nome: "serviço de limpeza",
    valor: 746,
    dataVencimento: "23-01-2025",
    dataPagamento: "23-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 468,
    nome: "seguro patrimonial",
    valor: 333,
    dataVencimento: "26-01-2025",
    dataPagamento: "26-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 469,
    nome: "licença de antivírus",
    valor: 120,
    dataVencimento: "29-01-2025",
    dataPagamento: "29-01-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 470,
    nome: "compra de materiais escolares",
    valor: 1068,
    dataVencimento: "15-01-2025",
    dataPagamento: "15-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 471,
    nome: "manutenção predial",
    valor: 1635,
    dataVencimento: "20-01-2025",
    dataPagamento: "20-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 472,
    nome: "compra de equipamentos",
    valor: 2550,
    dataVencimento: "25-01-2025",
    dataPagamento: "25-01-2025",
    tipoDespesa: "variável"
  },
  {
    id: 473,
    nome: "luz",
    valor: 1188,
    dataVencimento: "05-02-2025",
    dataPagamento: "05-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 474,
    nome: "água",
    valor: 347,
    dataVencimento: "08-02-2025",
    dataPagamento: "08-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 475,
    nome: "internet",
    valor: 239,
    dataVencimento: "11-02-2025",
    dataPagamento: "11-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 476,
    nome: "telefone",
    valor: 139,
    dataVencimento: "14-02-2025",
    dataPagamento: "14-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 477,
    nome: "aluguel",
    valor: 3823,
    dataVencimento: "17-02-2025",
    dataPagamento: "17-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 478,
    nome: "condomínio",
    valor: 817,
    dataVencimento: "20-02-2025",
    dataPagamento: "20-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 479,
    nome: "serviço de limpeza",
    valor: 732,
    dataVencimento: "23-02-2025",
    dataPagamento: "23-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 480,
    nome: "seguro patrimonial",
    valor: 277,
    dataVencimento: "26-02-2025",
    dataPagamento: "26-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 481,
    nome: "licença de antivírus",
    valor: 126,
    dataVencimento: "29-02-2025",
    dataPagamento: "29-02-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 482,
    nome: "luz",
    valor: 1043,
    dataVencimento: "05-03-2025",
    dataPagamento: "05-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 483,
    nome: "água",
    valor: 336,
    dataVencimento: "08-03-2025",
    dataPagamento: "08-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 484,
    nome: "internet",
    valor: 274,
    dataVencimento: "11-03-2025",
    dataPagamento: "11-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 485,
    nome: "telefone",
    valor: 155,
    dataVencimento: "14-03-2025",
    dataPagamento: "14-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 486,
    nome: "aluguel",
    valor: 3814,
    dataVencimento: "17-03-2025",
    dataPagamento: "17-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 487,
    nome: "condomínio",
    valor: 842,
    dataVencimento: "20-03-2025",
    dataPagamento: "20-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 488,
    nome: "serviço de limpeza",
    valor: 675,
    dataVencimento: "23-03-2025",
    dataPagamento: "23-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 489,
    nome: "seguro patrimonial",
    valor: 342,
    dataVencimento: "26-03-2025",
    dataPagamento: "26-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 490,
    nome: "licença de antivírus",
    valor: 111,
    dataVencimento: "29-03-2025",
    dataPagamento: "29-03-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 491,
    nome: "luz",
    valor: 1144,
    dataVencimento: "05-04-2025",
    dataPagamento: "05-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 492,
    nome: "água",
    valor: 293,
    dataVencimento: "08-04-2025",
    dataPagamento: "08-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 493,
    nome: "internet",
    valor: 247,
    dataVencimento: "11-04-2025",
    dataPagamento: "11-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 494,
    nome: "telefone",
    valor: 127,
    dataVencimento: "14-04-2025",
    dataPagamento: "14-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 495,
    nome: "aluguel",
    valor: 3842,
    dataVencimento: "17-04-2025",
    dataPagamento: "17-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 496,
    nome: "condomínio",
    valor: 799,
    dataVencimento: "20-04-2025",
    dataPagamento: "20-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 497,
    nome: "serviço de limpeza",
    valor: 724,
    dataVencimento: "23-04-2025",
    dataPagamento: "23-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 498,
    nome: "seguro patrimonial",
    valor: 293,
    dataVencimento: "26-04-2025",
    dataPagamento: "26-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 499,
    nome: "licença de antivírus",
    valor: 101,
    dataVencimento: "29-04-2025",
    dataPagamento: "29-04-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 500,
    nome: "compra de materiais escolares",
    valor: 1034,
    dataVencimento: "15-04-2025",
    dataPagamento: "15-04-2025",
    tipoDespesa: "variável"
  },
  {
    id: 501,
    nome: "luz",
    valor: 1293,
    dataVencimento: "05-05-2025",
    dataPagamento: "05-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 502,
    nome: "água",
    valor: 340,
    dataVencimento: "08-05-2025",
    dataPagamento: "08-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 503,
    nome: "internet",
    valor: 306,
    dataVencimento: "11-05-2025",
    dataPagamento: "11-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 504,
    nome: "telefone",
    valor: 122,
    dataVencimento: "14-05-2025",
    dataPagamento: "14-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 505,
    nome: "aluguel",
    valor: 3287,
    dataVencimento: "17-05-2025",
    dataPagamento: "17-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 506,
    nome: "condomínio",
    valor: 823,
    dataVencimento: "20-05-2025",
    dataPagamento: "20-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 507,
    nome: "serviço de limpeza",
    valor: 568,
    dataVencimento: "23-05-2025",
    dataPagamento: "23-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 508,
    nome: "seguro patrimonial",
    valor: 315,
    dataVencimento: "26-05-2025",
    dataPagamento: "26-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 509,
    nome: "licença de antivírus",
    valor: 117,
    dataVencimento: "29-05-2025",
    dataPagamento: "29-05-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 510,
    nome: "luz",
    valor: 1134,
    dataVencimento: "05-06-2025",
    dataPagamento: "05-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 511,
    nome: "água",
    valor: 282,
    dataVencimento: "08-06-2025",
    dataPagamento: "08-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 512,
    nome: "internet",
    valor: 314,
    dataVencimento: "11-06-2025",
    dataPagamento: "11-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 513,
    nome: "telefone",
    valor: 136,
    dataVencimento: "14-06-2025",
    dataPagamento: "14-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 514,
    nome: "aluguel",
    valor: 3707,
    dataVencimento: "17-06-2025",
    dataPagamento: "17-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 515,
    nome: "condomínio",
    valor: 846,
    dataVencimento: "20-06-2025",
    dataPagamento: "20-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 516,
    nome: "serviço de limpeza",
    valor: 699,
    dataVencimento: "23-06-2025",
    dataPagamento: "23-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 517,
    nome: "seguro patrimonial",
    valor: 315,
    dataVencimento: "26-06-2025",
    dataPagamento: "26-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 518,
    nome: "licença de antivírus",
    valor: 101,
    dataVencimento: "29-06-2025",
    dataPagamento: "29-06-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 519,
    nome: "luz",
    valor: 1077,
    dataVencimento: "05-07-2025",
    dataPagamento: "05-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 520,
    nome: "água",
    valor: 294,
    dataVencimento: "08-07-2025",
    dataPagamento: "08-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 521,
    nome: "internet",
    valor: 290,
    dataVencimento: "11-07-2025",
    dataPagamento: "11-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 522,
    nome: "telefone",
    valor: 130,
    dataVencimento: "14-07-2025",
    dataPagamento: "14-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 523,
    nome: "aluguel",
    valor: 3198,
    dataVencimento: "17-07-2025",
    dataPagamento: "17-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 524,
    nome: "condomínio",
    valor: 736,
    dataVencimento: "20-07-2025",
    dataPagamento: "20-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 525,
    nome: "serviço de limpeza",
    valor: 675,
    dataVencimento: "23-07-2025",
    dataPagamento: "23-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 526,
    nome: "seguro patrimonial",
    valor: 255,
    dataVencimento: "26-07-2025",
    dataPagamento: "26-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 527,
    nome: "licença de antivírus",
    valor: 104,
    dataVencimento: "29-07-2025",
    dataPagamento: "29-07-2025",
    tipoDespesa: "fixa"
  },
  {
    id: 528,
    nome: "compra de materiais escolares",
    valor: 987,
    dataVencimento: "15-07-2025",
    dataPagamento: "15-07-2025",
    tipoDespesa: "variável"
  },
  {
    id: 529,
    nome: "manutenção predial",
    valor: 1458,
    dataVencimento: "20-07-2025",
    dataPagamento: "20-07-2025",
    tipoDespesa: "variável"
  }
];

export default despesas;
