$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#numberInput").val());
    var result = userInput(number);

    $("form#input").trigger('reset');
    $("#output").text(result);

  });
});





function userInput(number){
  var numberResult= [];
  for (var i = 0; i <= number; i++) {
    numberAnswer= [];

    if ((i % 3 === 0)&(i > 0)) {
      numberAnswer.push("I'm sorry, Dave. I'm afraid i cant do that!");
    } else if (i === 1) {
      numberAnswer.push("BOOP");
    } else if (i === 0) {
      numberAnswer.push("BEEP");
    }  else {
      numberAnswer.push(i);
    }
  }
  return numberAnswer;
};
