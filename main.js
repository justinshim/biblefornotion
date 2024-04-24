const fs = require("fs");
const jsonArc = JSON.parse(fs.readFileSync("arc.json", "utf-8"));

function filtrarPorId(array, id) {
    return array.filter(item => item.id === id);
}

console.log(filtrarPorId(jsonArc, "genesis"));