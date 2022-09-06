const fs = require('fs');
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;


const { notes } = require("./db/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Generate Unique ID
const generateUniqueId = require('generate-unique-id');


function createNewNote(body, notesArray) {
    const note = req.body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  };  

