// Author Joël Lesenne <https://joellesenne.dev>

window.addEventListener('scroll', e => {
  e.preventDefault()
  document.body.style.setProperty('--scrollY', window.scrollY)
  // console.log(window.scrollY)
})
