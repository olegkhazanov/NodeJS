console.log("Running notes.js");

const fs = require('fs');
const linq = require('linq');

var fetchNotes = () =>{
    try
    {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }
    catch{
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note ={
        title,
        body
    };

    var duplicateNotes = notes.filter((note) =>note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
    console.log("Get all notes");
};

var removeNote = (title) => {
    // console.log("Removing a note", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var getNote = (title) => {
    console.log("Reading a note", title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    //console.log(JSON.stringify(filteredNotes));
     console.log(JSON.stringify(filteredNotes[0]));
    return filteredNotes[0];
};

var logNote = (note) =>{
    debugger;
    console.log('---')
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
 addNote,
 getAll,
 removeNote,
 getNote,
 logNote
};