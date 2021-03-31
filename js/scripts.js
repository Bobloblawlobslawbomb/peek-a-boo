$(document).ready(function () {
  $('.clickable').click(function () {
    $('#walrus-showing').toggle()
    $('#walrus-hidden').toggle()
  })

  $('.clickable-two').click(function () {
    $('#hide-image').slideToggle()
    $('#show-image').slideToggle()
  })

})


// try:

//fadeIn()
//fadeOut()
//fadeToggle()
//slideDown()
//slideUp()
//slideToggle(