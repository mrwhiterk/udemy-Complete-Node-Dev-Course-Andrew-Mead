const weatherForm = document.querySelector('form')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', async e => {
  e.preventDefault()

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  let { value } = weatherForm.querySelector('input')

  const response = await fetch(`http://localhost:3000/weather?address=${value}`)
  const data = await response.json()

  if (data.error) {
    return (messageOne.textContent = data.error)
  }

  messageOne.textContent = data.location
  messageTwo.textContent = data.forecast

})
