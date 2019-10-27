const fs = require('fs')

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
      console.log('new note added');
    } else {
      console.log('note title taken')
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
