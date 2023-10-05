// En los modulos nativos que no tienen promesas usar lo siguiente
// const {promisify} = requiro('node:util')
// const readFilePromise = promisify(fs.readFile) // Al modulo fs uso la propiedad readFile(Leer un archivo)

import { readFile } from "node:fs/promises";

(async () => {
  console.log("Leyendo el primer archivo ...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto", text);

  console.log("Hacer mientras lee el archivo ...");

  console.log("Leyendo el segundo archivo ...");
  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto", text2);
})();
