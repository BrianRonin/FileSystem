const ler = require("./ler");
const escreve = require("./escreve");
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
// const pessoas = [
//   { nome: "João" },
//   { nome: "Mario" },
//   { nome: "Nicolas" },
//   { nome: "Joice" },
// ];
// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoArquivo, json);
ler(caminhoArquivo).then((dados) => {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val));
});
