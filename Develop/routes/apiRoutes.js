//dependencies
const express = require('express')
const router = express.Router()
const fs = require('fs')
const db = require('../db/db.json')


//shows notes from db
router.get('/notes', function (req, res) {
    return res.json(db)
    }
  );

//middleware route to add notes from db
router.post('/notes', (req, res) => {
    addNote(req.body).then((note) => res.json(note))
  });

module.exports = router;