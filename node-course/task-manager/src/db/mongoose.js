const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const grocery = new Task({
  description: 'get groceries',
  completed: false
})

grocery
  .save()
  .then(result => {
    console.log(result)
  })
  .catch(err => console.log(err))

// const me = new User({
//   name: 'Ryan',
//   age: 22
// })

// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch(err => {
//     console.log('err', err)
//   })
