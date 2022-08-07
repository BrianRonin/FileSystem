const fs = require("fs").promises;
//não ta indo por padão essa porra o utf-8!
module.exports = (caminho) => fs.readFile(caminho, "utf-8");
