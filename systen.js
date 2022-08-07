saberMais = " https://www.w3schools.com/nodejs/nodejs_filesystem.asp ";
/**
 * Todas funções do fs tem ela sincrona = Sync, e uma função assincrona
 */
//eu posso colocar .promisses no final pra todo fs retornar uma promessa
// podendo executar .then no final do fs quando for executado
const fs = require("fs").promises;
const { stat } = require("fs");
const path = require("path");

// fs.readdir(path.resolve(__dirname, "..", ".."))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

//sistema do capeta
async function ler(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}
async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    if (/node_modules/g.test(fileFullPath)) continue;
    if (/\.git/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      ler(fileFullPath);
    }
    if (!/\.js$/g.test(fileFullPath)) continue;

    console.log(file, stats.isDirectory());
  }
}

ler(path.resolve(__dirname, "..", "..", "Js basico"));
