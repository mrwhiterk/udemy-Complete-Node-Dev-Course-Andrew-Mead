const https = require('https')

let lat = 40
let long = -75

require('dotenv').config()

const { API_KEY } = process.env

const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}?units=us`

const request = https.request(url, res => {
  let data = ''

  res.on('data', chunk => {
    data += chunk.toString() 
  })

  res.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('an error', error)
})

request.end()