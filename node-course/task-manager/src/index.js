require('./db/mongoose')


const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT

const morgan = require('morgan')

app.use(morgan('dev'))

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('server is up on port: ', port)
})
// const multer = require('multer')

// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a Word document'))
//     }

//     cb(undefined, true)

//     // cb(new Error('File must be a PDF')) 
//     // cb(undefined, true)
//     // cb(undefined, false)
//   }
// })

// const errorMiddleware = (req, res, next) => {
//   throw new Error('err from errorMiddleware')
// }


// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// }
// )



// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
// const task = await Task.findById('5dc2ec88f83bbaa7d498f41b')
// await task.populate('owner').execPopulate()
// console.log(task)

// const user = await User.findById('5dc2ebb673c34fa77593f987')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)
// }

// main()

/** This is how toJSON works */
// const pet = {
//   name: 'Hal'
// }

// pet.toJSON = function (params) {
//  console.log(this)
//   return {}
// }

// console.log(JSON.stringify(pet))

/** jwt basics */

// const jwt = require('jsonwebtoken')

// const jsonWebFunc = async () => {
//   const token = jwt.sign(
//     {
//       _id: 'abc123'
//     },
//     'thisismynewcourse',
//     { expiresIn: '7 days' }
//   )

//   console.log(token)

//   const data = jwt.verify(token, 'thisismynewcourse')
//   console.log(data)
// }

// jsonWebFunc()

/** Bcrypt basics */

// const bcrypt = require('bcryptjs')

// const myFunc = async () => {
//   const password = 'red1234!'

//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password, hashedPassword)

//   const isMatch = await bcrypt.compare('red1234!', hashedPassword)
//   console.log(isMatch)
// }

// myFunc()
