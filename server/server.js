const express = require("express");
const server = express();
const port = process.env.PORT || 4444;
const cors = require("cors");
const bodyParser = require("body-parser");

const googleRedirect = require("./google/googleRedirect.js");
const googleRoute = require("./google/googleRoute.js");

const facebookRedirect = require("./facebook/facebookRedirect.js");
const facebookRoute = require("./facebook/facebookRoute.js");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());
server.get("/", (rq, res) => {
  res.send(" api is running ");
});

const charge = require("./charge/charge.js");
server.use("/charge", charge);

server.use("/auth/google/callback", googleRedirect);
server.use("/google", googleRoute);

server.use("/auth/facebook/callback", facebookRedirect);
server.use("/facebook", facebookRoute);

server.listen(port, () => {
  console.log("=== server running on port 4444 ===");
});
