const express = require("express");
const cors = require("cors");
const app = express();

var corOptions = {
  origin: "https://localhost:8081",
};
const router = require("./routes/product.routes");

//Middlewares
app.use(cors(corOptions));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//router
app.use("/api/products", router);

//Test ApI
app.get("/", (req, res) => {
  res.json({ message: "Hello From API" });
});

//port
const PORT = process.env.PORT || 8080;

//Server
app.listen(PORT, () => {
  console.log("Server is running port " + PORT);
});
