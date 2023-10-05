const path = require("node:path");

// Barra separadadora segun sistema operativo
console.log(path.sep);

// Unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Filtrar archivo
const base = path.basename("tmp/midu-secret-files/password.txt");
console.log(base);

// Filtrar nombre del archivo (Sin extensión)
const filename = path.basename("tmp/midu-secret-file/password.txt", ".txt");
console.log(filename);

// Filtrar solo la extensión
const extension = path.extname("image.jpg");
console.log(extension);
