const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

// tell nodemon to watch saves on hbs files as well
// nodemon src/app.js -e js,hbs

// __filename  - prints full path of file
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'ryan'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'ryan'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'here is help',
    title: 'Help',
    name: 'ryan'
  })
})

app.get('/weather', (req, res) => {
  res.send({ forecast: 'hot', location: 'bmore' })
})

app.get('/help/*', (req, res) => {
  res.render('404_help', {
    title: '404_Help',
    name: 'Ryan',
    errorMessage: 'Help Article not found'
  })
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Ryan',
    errorMessage: 'page not found'
  })
});

app.listen(3000, () => {
  console.log('server: 3000')
})
