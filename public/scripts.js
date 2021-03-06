function onOff() {
  const modal = document.querySelector('#modal')
  
  modal.classList.toggle('hide')
  modal.classList.toggle('addScroll')

  document
    .querySelector('body')
    .classList.toggle('hideScroll')
}

function checkFields(event) {
  const valuesToCheck = [
    "title",
    "category",
    "image",
    "description",
    "link"
  ]

  const isEmpty = valuesToCheck.find(value => {
    const checkIfIsString = typeof event.target[value].value === 'string'
    const checkIfIsEmpty  = !event.target[value].value.trim()
    if (checkIfIsString && checkIfIsEmpty) return true
  })

  if (isEmpty) {
    event.preventDefault()
    alert('Por favor, preencha todos os campos!')
  }
}