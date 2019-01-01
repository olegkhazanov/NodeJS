// var obj = {
//     name : 'Oleg'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Oleg","age":24}';
// var person = JSON.parse(personString);
// console.log(typeof personString);
// console.log(personString);

const fs = require('fs');
var originalNote = {title:'Some title', body:'Some body'};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json",originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof noteString);
console.log(note.body);
