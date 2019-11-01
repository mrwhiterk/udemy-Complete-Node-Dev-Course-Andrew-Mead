const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit', async e => {
  e.preventDefault()

  let { value } = weatherForm.querySelector('input')

  const response = await fetch(`http://localhost:3000/weather?address=${value}`)
  const data = await response.json()

  if (data.error) {
    return (document.querySelector('p').innerHTML = data.error)
  }

  document.querySelector('p').innerHTML = `${data.location} \n ${data.forecast}`

})
