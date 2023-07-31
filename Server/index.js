const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { mongoURI } = require("./Keys");
require("./models/User");
const PORT = 3000;
const app = express();

const authRoutes = require("./routes/authRouters");

mongoose.connect(mongoURI);
mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeahh");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

app.use(bodyParser.json());

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
