require('dotenv').config()
const request = require('request')

const { MAP_BOX_API_KEY } = process.env


const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAP_BOX_API_KEY}&limit=1`

  request({ url, json: true }, (err, res) => {
    if (err) {
      return callback('unable to connect to map services', undefined)
    } else if (!res.body || !res.body.features.length) {
      return callback(
        'unable to find location. Try again with different term',
        undefined
      )
    }

    const [
      {
        center: [longitude, latitude],
        place_name: location
      }
    ] = res.body.features

    callback(undefined, {
      latitude,
      longitude,
      location
    })
  })
}

module.exports = geocode
