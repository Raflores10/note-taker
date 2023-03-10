const fs = require("fs");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const notesRoutes = require("./controllers/notesController")
app.use("/api", notesRoutes)

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`)
})





