console.log('Starting note.js');

const fs = require('fs');


/* Fetch Notes Function*/
	var fetchNotes = () => { 
		try {
				var notesString = fs.readFileSync('notes-data.json'); 
				return JSON.parse(notesString); 
		} catch (e) {
			return [];
		}  
	}
/* End fetch Notes */

/* Save Notes Function*/
var saveNotes = (notes)=> {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
/* End Save Notes */



/* Add Note Function */
var addNote = (title, body) => { 
	var notes = [];
	var note = {
		title,
		body
	} 
	
    var duplicateNotes = notes.filter((note) => {
	      return note.title === title;
	});  
	
	if(duplicateNotes.length === 0 ) {  
				notes.push(note);
				saveNotes(notes);
				return note; 
	}
	  
} 
/* End Add Note */


/* Remove Note Function */
var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note)=> note.title !== title);
	saveNotes(filteredNotes);
	
	
	return notes.length !== filteredNotes.length;
}
/* End Remove Note */

var getAll  = ()=> {
	console.log('Get all Notes');
	 
	return fetchNotes();;
}

/* Get Note */
var getNote = (title) => { 
		var notes = fetchNotes(); 
		var filteredNotes = notes.filter((note) =>  note.title === title);
		return filteredNotes[0];
}
/* End Get Note */
 
 /*Log Note */
 var logNote = (note) => { 
		
		
		debugger;
		
		console.log('--');
		console.log(`title: ${note.title}`);
		console.log(`body: ${note.body}`);
 }
/* End Log Note */
//Exports the all functions
module.exports = {
	addNote,
	getAll,
	getNote,
	logNote,
	removeNote
}