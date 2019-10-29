require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

let [, , address] = process.argv

if (!address) {
  console.log('A address must be entered')
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) throw error

    forecast(latitude, longitude, (error, data) => {
      if (error) throw error

      console.log(location)
      console.log(data)
    })
  })
}
