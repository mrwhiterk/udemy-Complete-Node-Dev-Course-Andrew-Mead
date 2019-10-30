const express = require('express')
const path = require('path')
const app = express()

// __filename  - prints full path of file
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name:'ryan'
  })
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'ryan'
  })
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'ryan'
  })
});

app.get('/weather', (req, res) => {
  res.send({ forecast: 'hot', location: 'bmore'})
});

app.listen(3000, () => {
  console.log('server: 3000')
})
