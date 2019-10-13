// Original animation of a menu, click on the top right

// Author Joël Lesenne <https://joellesenne.dev>

$(document).ready(function() {
  const navMenu = $('.js-hamburger')
  const navItem = $('.is-navItem')
  const navItemLength = $('.is-navItem').length
  const elementBody = $('body')

  navMenu.on('click', function(e) {
    e.preventDefault()
    if ($(this).hasClass('active')) {
      navItem.removeClass('slideInLeft').addClass('slideOutRight')
      setTimeout(function() {
        elementBody.toggleClass('nav-open')
      }, navItemLength * 150)
    } else {
      navItem.removeClass('slideOutRight').addClass('slideInLeft')
      elementBody.toggleClass('nav-open')
    }

    $(this).toggleClass('active')
    return false
  })
})
