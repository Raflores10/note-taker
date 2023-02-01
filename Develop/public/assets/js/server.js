const fs = require("fs");
const express = require("express");
const path = require("path");
const { application } = require("express");
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.listen(port, function () {
    console.log(`Listening on port ${port}.`)
})

app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})



