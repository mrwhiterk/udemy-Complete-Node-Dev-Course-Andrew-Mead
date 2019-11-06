require('./db/mongoose')

const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

const morgan = require('morgan')

app.use(morgan('dev'))

// app.use((req, res, next) => {
//   console.log(req.method, req.path)
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('server is up on port: ', port)
})

const jwt = require('jsonwebtoken')

const jsonWebFunc = async () => {
  const token = jwt.sign(
    {
      _id: 'abc123'
    },
    'thisismynewcourse',
    { expiresIn: '7 days' }
  )

  console.log(token)

  const data = jwt.verify(token, 'thisismynewcourse')
  console.log(data)
}

jsonWebFunc()

// const bcrypt = require('bcryptjs')

// const myFunc = async () => {
//   const password = 'red1234!'

//   const hashedPassword = await bcrypt.hash(password, 8)

//   console.log(password, hashedPassword)

//   const isMatch = await bcrypt.compare('red1234!', hashedPassword)
//   console.log(isMatch)
// }

// myFunc()
