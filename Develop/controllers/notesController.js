const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/notes", (req, res) => {
    fs.readFile("../db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("ERROR");
            throw err;
        } else {
            const notesData = JSON.parse(data);
            res.json(notesData);
        }
    })
});
