console.log('Starting app.js');

const fs = require('fs');  //The Node.js file system module allow you to work with the file system on your computer.
// The require() is used for include external files in our current js file

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


var command = process.argv[2];
//var argv = yargs.argv;

const titleOptions = {
	describe : 'Title of Note',
	demand: true,
	alias: 't'
}

const bodyOptions = {
	describe : 'Body of note',
	demand:true,
	alias:  'b'
}
const argv = yargs
		.command('add', 'Add a new note', {
			title :titleOptions,
			body:  bodyOptions
		})
		.command('list', 'List all notes')
		.command('read', 'Read a note', {
			title: titleOptions,
		})
		.command('remove', 'Remove Note', {
			title : titleOptions,
		})
		.help()
		.argv;
console.log('Command:', command); 
console.log('yargs', yargs.argv);

if(command === 'add') {
	//console.log('Adding new note');
	//notes.addNote(argv.title, argv.body);
	var note = notes.addNote(argv.title, argv.body);
	if(note) {
		console.log('Note Created');
		console.log('--');
		console.log(`title: ${note.title}`);
		console.log(`body: ${note.body}`);
	}else {
		console.log('Note title taken');
	}
}else if(command === 'list') {
	console.log('Listing all notes');
	var note = notes.getAll();
	if(note) {
		note.forEach((note) => notes.logNote(note));		
	}else {
		console.log('Title not found');
	}
}else if(command === 'read') {
	console.log('Reading note');
	var note = notes.getNote(argv.title);  
	if(note) {
		notes.logNote(note);
	}else {
		console.log('Title not found');
	}
}else if(command === 'remove') {
	console.log('Removing note');
	notes.removeNote(argv.title);
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Notes was removed' : 'Note note found';
	console.log(message);
}else {
	console.log('command not recognized');
}