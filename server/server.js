const express = require("express");
const server = express();
const port = process.env.PORT || 4444;
const cors = require("cors");
const bodyParser = require("body-parser");
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());
server.get("/", (rq, res) => {
  res.send(" api is running ");
});

const charge = require("./charge/charge.js");
server.use("/charge", charge);
server.listen(port, () => {
  console.log("=== server running on port 4444 ===");
});
