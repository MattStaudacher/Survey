$(document).ready(function() {
  var age = parseInt(prompt("how old are you?"));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21) {
    alert("dont get too wild!")
    $('#drinks').show();
  } else {
    $('#under-21').show();
  }
});
