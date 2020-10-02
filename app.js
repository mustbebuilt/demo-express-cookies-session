const express = require("express");
// add path
const path = require("path");

const app = express();

// for post on form
app.use(express.urlencoded({ extended: false }));

// cookie-session
var cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "justCookieSession",
    secret: "someTopSecret"
  })
);

const routes = require("./routes/routes");

// set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use("/", routes());

// remove for sample files
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
