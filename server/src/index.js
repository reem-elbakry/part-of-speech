const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();

const gameRoutes = require("./routes/gameRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/game", gameRoutes);

//* Not Found URL
app.all("*", (req, res) => {
  res.json({
    status: 404,
    message: "wrong url, not found!",
  });
});

app.listen(port, () =>
  console.log(`server running on port ${port}`.rainbow.underline)
);
