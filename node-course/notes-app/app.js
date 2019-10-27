let chalk = require('chalk')
let yargs = require('yargs')

const { getNotes } = require('./notes')

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
  handler: function (argv) {
    console.log(chalk.green('Title: ' + argv.title + '\nBody: ' + argv.body))
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove note',
  handler: function () {
    console.log('removing note');
  }
})

// list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler: function () {
    console.log('listing notes');
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'read notes',
  handler: function () {
    console.log('reading note');
  }
})

yargs.parse()
// console.log(yargs.argv);

