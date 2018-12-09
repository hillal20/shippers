const express = require("express");
const server = express();
const port = process.env.PORT || 4444;

server.get("/", (rq, res) => {
  res.send(" api is running ");
});

const charge = require("./charge/charge.js");
server.use("/charge", charge);
server.listen(port, () => {
  console.log("=== server running on port 4444 ===");
});
