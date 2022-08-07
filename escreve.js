const fs = require("fs").promises;
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, {
    //flag "w" vai reescrever toda vez que for executado
    //flag "a" vai implementar toda vez que for executado
    flag: "w",
  });
};
