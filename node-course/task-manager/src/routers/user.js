const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.get('/users', async (req, res) => {
  try {
    let users = await User.find()
    if (!users) return res.status(404).send()
    res.send(users)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

router.get('/users/:id', async (req, res) => {
  const { id } = req.params
  try {
    let user = await User.findById(id)
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})

router.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every(item => allowedUpdates.includes(item))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
    const user = await User.findById(req.params.id)

    updates.forEach(update => (user[update] = req.body[update]))

    await user.save()

    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(400).send()
    }

    res.send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router
