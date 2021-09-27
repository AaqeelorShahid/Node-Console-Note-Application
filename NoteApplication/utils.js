const fs = require("fs");
const chalk = require('Chalk');

const getNote = (title) => {
  const notes = loadNotes()
  const n = notes.filter((note) => {
    return note.title === title
  })

  const a = 0 < n.length 
  ? console.log(chalk.red.inverse('Removed'))
  : console.log(chalk.blue.inverse("Not found"))
  return n
}

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.filter((note) => {
    console.log(note.title === title)
      return note.title === title 
  })

  if(!duplicateNote){
    console.log("Duplicate note")
  } else {
    notes.push({
        title: title,
        body: body,
      });
    
      saveNote(notes);
  }
};

const removeNote = (title) => {
    const note = getNote(title)
}

const saveNote =  (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("note.json", dataJson);
};

const loadNotes = () => {
  // First time we run the program it return the array so file .json will be created
  // Second time it doesn't return array instead it return string so it get appended in the existing fileclea
  try {
    var existingNoteBuffer = fs.readFileSync("note.json");
    var dataJson = existingNoteBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const listAll = () => {
  const notes = loadNotes()
  notes.forEach(element => {
     console.log(chalk.blueBright.inverse( `${element.title} ${element.body}`))
  });
}

const readNote = (title) => {
  const notes = loadNotes ()
  const a = notes.find((note) => {
    return note.title === title 
  })

  if(a){
    console.log(chalk.blue.inverse(`${a.title} ${a.body}`))
  } else {
    console.log(chalk.red.inverse('Not found'))
  }
}

module.exports = {
  getNotes: getNote,
  addNotes: addNotes,
  removeNote: removeNote,
  listAll: listAll,
  readNote: readNote
};
