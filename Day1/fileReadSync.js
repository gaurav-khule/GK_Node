const FS = require("fs");
// console.log(FS);
console.log("File Reading Started");
// utf-8 use for all reginol

let result = FS.readFileSync("example.html", "utf-8");
console.log(result);

console.log("File Reading End");
