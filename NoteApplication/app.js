const utils = require('./utils.js')
const chalk = require("chalk")
const yargs = require('yargs')

const command = yargs.argv

yargs.command({
    command: "add",
    describe : "Add a new note",
    builder : {
        title : {
            describe : "Title of the add",
            demandOption: true
        },
        body: {
            describe: "Body of add",
            demandOption: true,
            type: "string"
        }
    },
    handler (argv){
        utils.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove the note",
    handler (argv){
        utils.removeNote(argv.title)
    }
})

yargs.command({
    command : "list",
    describe: "List all notes",
    handler(){
        utils.listAll()
    }
})

yargs.command({
    command: "edit",
    describe: "Edit the note",
    handler (argv){
        console.log("Edit the note")
    }
})

yargs.command({
    command: "read",
    describe: "Read the note",
    handler(argv){
        utils.readNote(argv.title)
    }
})

yargs.parse()