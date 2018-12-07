const express = require("express");
const server = express();
const port = process.env.PORT || 4444;

server.get("/", (rq, res) => {
  res.send(" api is running ");
});

server.listen(port, () => {
  console.log("=== server running on port 4444 ===");
});
