const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();
const PORT = 3000;

// Configure Nunjucks
nunjucks.configure(path.join(__dirname, "./views"), {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

// Serve static files (esbuild output)
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello",
    message: "ESBuild + Express + Nunjucks!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
