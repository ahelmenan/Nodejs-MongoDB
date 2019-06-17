console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
var bodyOption  = {
  title : {
    describe : 'Title of body',
    demand : true,
    alias : 't'
  },
  body : {
    describe : 'Body of the note',
    demand : false,
    alias : 'b'
  }
}
// var cmd = process.argv[2];

const argv = yargs
  .command('add', 'Add a new note' , {
    title : {
      describe : 'Title of body',
      demand : true,
      alias : 't'
    },
    body : {
      describe : 'Body of the note',
      demand : true,
      alias : 'b'
  })

  .command('read', 'read a  note' , bodyOption)
  .command('remove', 'remove a  note' , bodyOption)
  .help()
  .argv;
  var cmd = argv._[0];
// console.log('cmd : ', cmd);
// console.log('Process', process.argv);
// console.log('Yargs', argv);

fs.appendFile('x.txt', 'Hello world', (err) => {
  if (err) {
  console.log('successfully deleted /tmp/hello');
  }
});



if (cmd === 'add')
{ 
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('adding  note');
    notes.logNote(note);
  
  } else {
    console.log('Note not found'); 
  }
}
else if (cmd === 'list') {
  var allNote = notes.getAll();
  console.log(`printing ${allNote.length} note(s)`);
  allNote.forEach((note) => notes.logNote(note));
}
else if (cmd === 'remove')
{ 
  var  noteRomoved = notes.removeNote(argv.title);
  var message = noteRomoved ? "note was romoved" : "note was not found";
  console.log(message);
}
else if (cmd === 'read') {
  var noteReaded = notes.getNote(argv.title);
  // var message = noteReaded ? "note was found" : "note was not found"; 
  if (noteReaded) {
    console.log('note found');
    notes.logNote(noteReaded);
  } else {
    console.log('Note not found');
  }
}
else
  console.log('cmd not recognized');