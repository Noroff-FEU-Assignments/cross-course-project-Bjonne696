const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Please enter your name, at least 4 characters.')
  }

  if (phone.value === '' || phone.value == null) {
    messages.push('phone number is required')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})