/* var obj = {
	name : 'Naresh Kurukuti'
}
	
var stringObj = JSON.stringify(obj);

console.log(typeof obj);
console.log(typeof stringObj);
console.log(stringObj);
 */
 
 
/*  var personString = '{"name": "naresh kurukuti", "age":24}';
 var person = JSON.parse(personString);
 console.log(typeof person);
 console.log(person);
 console.log(person.name, person.age); */
 
 const fs = require('fs');
 
 var originalNote = {
		title : "some title",
		body: "some body"
 };
 
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);



