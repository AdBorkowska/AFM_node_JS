const express = require("express");
const path = require("path");
const functions = require("./functions");
const app = express();
const port = process.env.PORT || 3000;  //pierwszy wolny port lub 3000

app.set("view engine", "hbs")
app.use("/assets", express.static(path.join(__dirname,"./assets")));
app.use("/js", express.static(path.join(__dirname,"./js")));
app.get("/", function (req, res) {
    res.render("index", {
        mainName: "Zajęcia 27.02",
        subTitle: functions.someText,
    })
})
app.get("/about", function (req, res) {
    res.render("about", {
        mainName: "Zajęcia 27.02"
    })
})


app.listen(port, (err) => {
    if (err) { return console.log(`Wystąpił błąd: ${err}`)}
    console.log(`Serwer działa na porcie ${port}`);
    })