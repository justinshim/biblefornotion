const fs = require("fs");

const jsonArc = JSON.parse(fs.readFileSync("./jsons/arc.json", "utf-8"));

// for (const book of jsonArc) {
//   fs.mkdirSync(`./arc/${book.id}`);
// }

// for (const bookPath of fs.readdirSync("./arc")) {
//   const book = jsonArc.filter((bok) => bok.id == bookPath)[0];
//   console.log(book.id);
//   for (let index = 0; index < book.capitulos.length; index++) {
//     const chapter = book.capitulos[index];
//     fs.mkdirSync(`./arc/${bookPath}/${index + 1}`);
//     for (let indexx = 0; indexx < chapter.length; indexx++) {
//       const verser = chapter[indexx];
//       fs.writeFileSync(
//         `./arc/${bookPath}/${index + 1}/${indexx + 1}-txt.txt`,
//         JSON.stringify(verser),
//         "utf-8"
//       );
//     }
//   }
// }

// for (const bookPath of fs.readdirSync("./arc")) {
//   const book = jsonArc.filter((bok) => bok.id == bookPath)[0];
//   console.log(book.id);

//   fs.writeFileSync(
//     `./arc/${bookPath}/${bookPath}.json`,
//     JSON.stringify(book),
//     "utf-8"
//   );
// }

const jsonKja = JSON.parse(fs.readFileSync("./jsons/kja.json", "utf-8"));

// for (const book of jsonKja) {
//   fs.mkdirSync(`./kja/${book.id}`);
// }

// for (const bookPath of fs.readdirSync("./kja")) {
//   const book = jsonKja.filter((bok) => bok.id == bookPath)[0];
//   console.log(book.id);
//   for (let index = 0; index < book.capitulos.length; index++) {
//     const chapter = book.capitulos[index];
//     fs.mkdirSync(`./kja/${bookPath}/${index + 1}`);
//     for (let indexx = 0; indexx < chapter.length; indexx++) {
//       const verser = chapter[indexx];

//       fs.writeFileSync(
//         `./kja/${bookPath}/${index + 1}/${indexx + 1}.txt`,
//         JSON.stringify(verser),
//         "utf-8"
//       );
//     }
//   }
// }

for (const bookPath of fs.readdirSync("./kja")) {
  const book = jsonKja.filter((bok) => bok.id == bookPath)[0];
  console.log(book.id);

  fs.writeFileSync(
    `./kja/${bookPath}/${bookPath}.json`,
    JSON.stringify(book),
    "utf-8"
  );
}
