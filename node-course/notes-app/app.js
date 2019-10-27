let chalk = require('chalk')
let yargs = require('yargs')

const { listNotes, addNote, removeNote } = require('./notes')

// const command = process.argv[2]

// console.log(process.argv);

// customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    removeNote(argv.title)
  }
})

// list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler() {
    listNotes()
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'read notes',
  handler() {
    console.log('reading note');
  }
})

yargs.parse()
// console.log(yargs.argv);

