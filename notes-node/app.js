
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  };
  const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };
  const argv = yargs
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions,
    })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

// console.log('Command ' + command);
// console.log('Process ',process.argv);
// console.log('Yargs ',argv);

if (command ==='add'){
    // console.log ('Command: ' + command);
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        
        console.log('Note created');
        notes.logNote(note);
    }
    else{
        console.log('duplicate note.')
    }
    //console.log('Note ', JSON.stringify(note));
}
else if(command === 'read'){
    // console.log ('Command: ' + command);
    var note = notes.getNote(argv.title);
    if (note){
        
        console.log('Note was found');
        notes.logNote(note);
    }
    else{
        console.log('note was not found.')
    }

}
else if(command === 'list'){
        // console.log ('Command: ' + command);
        var allNotes = notes.getAll();
        console.log(`notes length ${allNotes.length}`)
        allNotes.forEach((note) => notes.logNote(note));
        // allNotes.forEach(note => {
        //     notes.logNote(note);
        // });
}
else if(command === 'remove'){
    // console.log ('Command: ' + command);
    var hasRemoved = notes.removeNote(argv.title);
    console.log('Note was removed =' + hasRemoved);
}
else{
    console.log ('Command: not recognized');
}