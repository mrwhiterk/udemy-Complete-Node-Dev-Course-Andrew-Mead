const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('email is invalid')
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error("password cannot include the string 'password'")
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('Age must be a positive number')
//       }
//     }
//   }
// })

// const grocery = new Task({
//   description: 'get groceries'
// })

// grocery
//   .save()
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => console.log(err))

// const me = new User({
//   name: 'mike',
//   email: 'mikeEMAIL@mead.io',
//   password: 'abord'
// })

// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch(err => {
//     console.log('err', err)
//   })
