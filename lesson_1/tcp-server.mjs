import net from "node:net";


const server = net.createServer((socket) => {
  //
});

server.listen(2000, (e) => {
  console.log("Server started", e)
});
