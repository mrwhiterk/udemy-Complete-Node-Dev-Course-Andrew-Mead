let chalk = require('chalk')
const { getNotes } = require('./notes')

const command = process.argv[2]

if (command === 'add') {
  console.log(chalk.green.inverse.bold('Adding note'));
} else if (command === 'remove') {
  console.log(chalk.red.inverse.bold('remove note'));
}

