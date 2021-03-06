const request = require('request')
const chalk = require('chalk')
const { API_KEY } = process.env


function darkSkyForecast(lat, long, cb) {
  const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}?units=us`

  request({ url, json: true }, (err, res) => {
    if (err) {
      cb('unable to connect to weather service')
    } else if (res.body.error) {
      cb('unable to find location')
    } else {
      const {
        timezone,
        currently: { temperature, precipProbability },
        daily: {
          data: [{ summary }]
        }
      } = res.body
  
      cb(undefined,
        chalk.green.inverse(
          `\n${summary} It is currently ${temperature} degrees in ${timezone.split('/')[1].replace('_',' ')}. There is a ${precipProbability}% chance of rain.\n`
        )
      )
    }
  })
}

module.exports = darkSkyForecast


