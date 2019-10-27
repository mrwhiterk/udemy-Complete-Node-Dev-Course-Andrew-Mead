const fs = require('fs')
let chalk = require('chalk')

module.exports = {
  getNotes: function() {
    return 'notes..'
  },

  addNote: function(title, body) {
    const notes = self.loadNotes()

    const duplicateNotes = notes.filter(note => {
      return note.title === title
    })

    if (!duplicateNotes.length) {
      notes.push({
        title,
        body
      })

      self.saveNotes(notes)
      console.log(chalk.green('new note added'));
    } else {
      console.log(chalk.red('note title taken'))
    }
  },

  removeNote: function (title) {
    const notes = self.loadNotes()

    const filteredNotes = notes.filter(note => {
      return note.title !== title
    })

    if (filteredNotes.length < notes.length) {

      self.saveNotes(filteredNotes)
      console.log(chalk.inverse.green('successfully deleted note: ', title))
    } else {
      console.log(chalk.red.inverse('no note was found with title: ', title))
    }

  },

  saveNotes: function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
  },

  loadNotes: function() {
    try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
    } catch (e) {
      return []
    }
  }
}

const { exports: self } = module
