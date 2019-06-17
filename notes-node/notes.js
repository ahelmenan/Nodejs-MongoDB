console.log('starting note,js');

const fs = require('fs');

let fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(noteString);
    } catch (err) {
        return [];
    }
}
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
let addNote = (title , body) => {
   let notes = fetchNotes();
   let note = {
       title,
       body
   }
    
    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
    } 
};
 
var getAll = () => {
    return fetchNotes();
}
var getNote = (title) => {
    var notes = fetchNotes();
    var filterednotes = notes.filter((note) => note.title === title);
    return filterednotes[0];
}
var removeNote = (title) => {
    var notes = fetchNotes();
    var filterednotes = notes.filter((note) => note.title !== title);  
    saveNotes(filterednotes);
    return filterednotes.length !== notes.length;
}
var readNote = (title) => {
    var notes = fetchNotes();
    var filterednotes = notes.filter((note) => note.title === title);
    return filterednotes.length !== 0;
}

var logNote = (note) => {
    // debugger ;
    console.log('--');
    console.log(`Title : ${note.title}`);
    console.log(`body : ${note.body}`);
}
module.exports = {
    addNote,
    removeNote,
    readNote,
    getNote,
    logNote,
    getAll
}