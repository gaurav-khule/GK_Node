// require() is a function

const HTTP = require("http");
// console.log(HTTP);

// Creating Server
const SERVER = HTTP.createServer(function (req, res) {
  res.end("Hello World!");
});

SERVER.listen(4000, function () {
  console.log("Server Started");
});
