const fs = require('fs')
let chalk = require('chalk')

module.exports = {
  addNote(title, body) {
    const notes = self.loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
      notes.push({
        title,
        body
      })

      self.saveNotes(notes)
      console.log(chalk.green('new note added'))
    } else {
      console.log(chalk.red('note title taken'))
    }
  },

  removeNote(title) {
    const notes = self.loadNotes()
    const filteredNotes = notes.filter(note => note.title !== title)

    if (filteredNotes.length < notes.length) {
      self.saveNotes(filteredNotes)
      console.log(chalk.inverse.green('successfully deleted note: ', title))
    } else {
      console.log(chalk.red.inverse('no note was found with title: ', title))
    }
  },

  readNote(title) {
    const notes = self.loadNotes()
    const foundNote = notes.find(note => note.title === title)

    if (foundNote) {
      console.log(chalk.green.inverse.bold('\nfound note:\n'))
      console.log(
        chalk.blue.inverse.bold(
          `title: ${foundNote.title} \nbody: ${foundNote.body}`
        )
      )
    } else {
      console.log(chalk.red.inverse.bold('no note found with title: ', title))
    }
  },

  saveNotes(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
  },

  loadNotes() {
    try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
    } catch (e) {
      return []
    }
  },

  listNotes() {
    console.log(chalk.bold.inverse('\nYour notes\n'))
    const notes = self.loadNotes()
    notes.forEach(note =>
      console.log(
        chalk.yellow.inverse(`title: ${note.title} \nbody: ${note.body}\n`)
      )
    )
  }
}

const { exports: self } = module
