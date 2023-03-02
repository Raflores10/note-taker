const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();
const { uuid } = require('uuidv4');

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            const notesData = JSON.parse(data);
            res.status(200).json(notesData);
        }
    })
});

router.post("/notes", (req,res)=>{
    let newObj = {id:uuid(), title:req.body.title, text:req.body.text};
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error,Something went wrong!")
            throw err
        } else {
            const notesData = JSON.parse(data);
            notesData.push(newObj);
            fs.writeFile("./db/db.json", JSON.stringify(notesData, null, 4), (err) => {
                if (err) {
                    res.status(500).send("Error,Something went wrong!")
                    throw err;
                } else {
                    res.send("Added data")
                    console.log(notesData)
                }
            })
        }
    })
});



module.exports = router;