// /// TODO:: NodeJS Server - CommonJS
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello from the server side !")
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/// TODO: setInterval vs While
// let ctr = 0;
// setInterval(() => {
//     console.log(ctr++);
// }, 10);
// setInterval(() => {
//     console.log("Another interval");
// }, 10);
// while (ctr++ < 10) {
//     console.log("Bad Counter!")
// }
// while (ctr++ < 20) {
//     console.log("Good Counter!")
// }

/// TODO: asyncronus approach to FileSystem
// const fileSystem = require("fs");
// let data = null;
// fileSystem.readFile("hello.txt", (err, d) => {
//   if (err) console.error(err);
//   data = d;
// });

// (function f() {
//     if (data) {
//         console.log(data.toString());
//         return;
//     }
//     console.log("loading");
//     setTimeout(f, 0.1);
// })();

/// TODO: syncronus approach to FileSystem
// const fileSystem = require("fs");
// let data = null;
// data = fileSystem.readFileSync("hello.txt");

// (function f() {
//     if (data) {
//         console.log(data.toString());
//         return;
//     }
//     console.log("loading");
//     setTimeout(f, 0.1);
// })();