const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
    
      if (!validator.isEmail(value)) {
        throw new Error('email is invalid')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const grocery = new Task({
//   description: 'get groceries',
//   completed: false
// })

// grocery
//   .save()
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => console.log(err))

const me = new User({
  name: 'mike',
  email: 'mikeEMAIL@mead.io'
})

me.save()
  .then(() => {
    console.log(me)
  })
  .catch(err => {
    console.log('err', err)
  })
