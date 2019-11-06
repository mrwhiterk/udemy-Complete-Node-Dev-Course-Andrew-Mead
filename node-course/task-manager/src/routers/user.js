const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const User = require('../models/user')

router.get('/users/me', auth, async (req, res) => {
  res.send(req.user)
})

// router.get('/users/:id', auth, async (req, res) => {
//   const { id } = req.params
//   try {
//     let user = await User.findById(id)
//     if (!user) {
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch (e) {
//     res.status(500).send(e)
//   }
// })

//signup
router.post('/users', async (req, res) => {
  const user = new User(req.body)
  // a new user comes and gets an jwt generated
  const token = await user.generateAuthToken()
  try {
    await user.save()
    res.status(201).send({ user, token })
  } catch (e) {
    res.status(400).send(e)
  }
})

//signin
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    // generate a new token for the user who successfully logged in
    const token = await user.generateAuthToken()

    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
})

//logout
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    })

    await req.user.save()

    res.send()
  } catch (error) {
    res.status(500).send()
  }
})

//logout all sessions (remove all tokens)
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = []

    await req.user.save()
    res.send()
  } catch (error) {
    res.status(500).send()
  }
})

//update
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every(item => allowedUpdates.includes(item))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    updates.forEach(update => (req.user[update] = req.body[update]))

    await req.user.save()

    res.send(req.user)
  } catch (error) {
    res.status(400).send(error)
  }
})

//delete
router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
