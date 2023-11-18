const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
let port = process.env.PORT || 3456; // 默认端口为 3000

const server = http.createServer(app);

// 设置静态文件目录
app.use(express.static(path.join(__dirname, "dist")));

// 根路径的处理程序
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

server
  .listen(port, () => {
    console.log(`port=${port}`);
  })
  .on("error", (err) => {
    console.error(err);
  });

// function checkPortAvailability(port) {
//   return new Promise((resolve, reject) => {
//     const netServer = net.createServer();
//     netServer.once("error", (err) => {
//       if (err.code === "EADDRINUSE") {
//         reject(`Port ${port} is in use`);
//       } else {
//         reject(err.message);
//       }
//     });

//     netServer.once("listening", () => {
//       resolve(port);
//       netServer.close();
//     });

//     netServer.listen(port);
//   });
// }
// async function getPort() {
//   let port = 3000;

//   while (true) {
//     try {
//       await checkPortAvailability(port);
//       break;
//     } catch (error) {
//       port++;
//     }
//   }
//   return port;
// }

// // 检查端口是否被占用
// async function startServer() {
//   const port = await getPort();
//   server
//     .listen(port, () => {
//       console.log(`port=${port}`);
//     })
//     .on("error", (err) => {
//       console.error(err);
//     });
// }
// startServer();
