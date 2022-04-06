const express = require("express");

const app = express();

const PORT = 3000;

//STATIC FILES
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/images", express.static(__dirname + "public/images"));
app.use("/js", express.static(__dirname + "public/js"));

//Templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//Routes
const newsRouter = require("./src/route/news");
app.use("/",newsRouter);

app.get("/", (req, res) => {
  res.send("This is the front page");
});

//LISTENING ON PORT
app.listen(PORT, (req, res) => {
  console.log(`"Server is running on port ${PORT} successfully"`);
});
