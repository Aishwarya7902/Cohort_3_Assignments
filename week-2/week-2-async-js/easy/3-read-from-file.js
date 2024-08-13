const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);
// for(let i=0;i<10000000;i++){
//     console.log(i);
// }