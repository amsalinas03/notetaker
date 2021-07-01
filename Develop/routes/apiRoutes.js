//dependencies
const express = require('express')
const router = express.Router()
const fs = require('fs')
const db = require('../db/db.json')


//shows notes from db
router.get('/notes', function (req, res) {
    notesData = fs.readFileSync('../Develop/db/db.json', 'utf-8'),
    res.send(notesData);
    console.log("baarg")
    console.log(typeof notesData)
    }
  );

//middleware route to add notes from db
router.post('/notes', (req, res) => {
  notesData = fs.readFileSync("../Develop/db/db.json", "utf8");
  console.log(notesData);

  // parse the data to get an array of objects
  newNotesData = JSON.parse(notesData);
  // Set new notes id
  req.body.id = newNotesData.length;
  // add the new note to the array of note objects
  newNotesData.push(req.body); // req.body - user input
  // make it string(stringify)so you can write it to the file
  newNotesData = JSON.stringify(newNotesData);
  // writes the new note to file
  fs.writeFile("../Develop/db/db.json", newNotesData, "utf8", function(err) {
    // error handling
    if (err) throw err;
    res.json(notesData);
  });
  });

module.exports = router;