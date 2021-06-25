//import db.json where notes are held
const noteData = require('../db/db.json')
//dependencies
const express = require('express')
const router = express.Router()

//import functions from store
getNotes = require('../db/store')
addNotes = require('../db/store')

//shows notes from db
router.get('/notes', (req, res) => {
    getNotes()
    .then((notes) => {
    return res.json(notes);
    })
  });

//route to add notes from db
router.post('/notes', (req, res) => {
    addNote(req.body)
      .then((note) => res.json(note))
  });

module.exports = router;