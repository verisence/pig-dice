function Gamer(name){
  this.name = name;
  this.score = 0;
  this.finalScore = 0;
}

function rollDice(){
  var diceNumber = Math.floor(Math.random()*6)+1;
  return diceNumber;
}
$(document).ready(function(){
  $("#start").click(function(event){
    event.preventDefault();
    var playerOne = $("playerOne").val();
    var playerTwo = $("playerTwo").val();
    var gamerOne = new Gamer(playerOne);
    var gamerTwo = new Gamer(playerTwo);
    $("#welcome").hide();
    $("#game").show();

    $("#player1Roll").click(function(){
      
    });
  });


});
