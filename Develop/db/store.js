const fs = require('fs');
//npm package makes unique ids
const generateUniqueId = require('generate-unique-id');
//reads the notes saved in db
export function read() {
    return fsPromises.readFile('./db.json', 'utf-8')
}
//writes notes
export function write(note) {
    return fsPromises.writeFile('./db.json', JSON.stringify(note))
}
//shows notes included any added
export function getNotes() {
    return this.read().then((note) => {
        let createdNotes = [].concat(JSON.parse(notes))
        return createdNotes;
    })
}
//add notes
export function addNote(note) {
    //destructures note with components
    const { title, text } = note
    const newNote = { title, text, id: generateUniqueId()}
    //starts by grabbing notes array
    return this.getNotes()
    //adds note to end or array
    .then((notes) => [...notes, newNote])
}