require('./db/mongoose')

const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('server is up on port: ', port)
})

const bcrypt = require('bcryptjs')

const myFunc = async () => {
  const password = 'red1234!'

  const hashedPassword = await bcrypt.hash(password, 8)

  console.log(password, hashedPassword)

  const isMatch = await bcrypt.compare('red1234!', hashedPassword)
  console.log(isMatch)
}

myFunc()
