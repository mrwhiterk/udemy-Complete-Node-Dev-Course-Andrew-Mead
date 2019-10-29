const express = require('express')
const path = require('path')
const app = express()

// __filename  - prints full path of file

app.use(express.static(path.join(__dirname, '../public')))

app.get('/weather', (req, res) => {
  res.send({ forecast: 'hot', location: 'bmore'})
});

app.listen(3000, () => {
  console.log('server: 3000')
})
