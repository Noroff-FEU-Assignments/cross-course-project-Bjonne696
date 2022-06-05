const name = document.getElementById('name')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const creditCard = document.getElementById('credit card')
const bio = document.getElementById('bio')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Please enter your name, at least 4 characters.')
  }

  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Please a valid address, at least 4 characters.')
  }
  

  if (phone.value === '' || phone.value == null) {
    messages.push('phone number is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Credit Card is required')
  }

  if (bio.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})