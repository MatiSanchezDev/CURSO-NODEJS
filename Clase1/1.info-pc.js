const os = require("node:os");

console.log("Información del Sistema Operativo:");
console.log("--------------------------------------");

console.log("Nombre del Sistema Operativo", os.platform());
console.log("Versión del Sistema Operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria Libre", os.freemem() / 1024 / 1024);
console.log("Memoria Total", os.totalmem() / 1024 / 1024);
console.log("Cant. de horas de encendido de la PC", os.uptime() / 60 / 60);
