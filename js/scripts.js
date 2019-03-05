function Gamer(name){
  this.name = name;
  // this.score = 0;
  // this.finalScore = 0;
}

var score1 = 0;
var score2 = 0;
var finalScore1 = 0;
var finalScore2 = 0;

function rollDice(){
  var diceNumber = Math.floor(Math.random()*6)+1;
  return diceNumber;
}
$(document).ready(function(){
  $("#start").click(function(event){
    event.preventDefault();
    var playerOne = $("#player1").val();
    var playerTwo = $("#player2").val();
    var gamerOne = new Gamer(playerOne);
    var gamerTwo = new Gamer(playerTwo);
    $("#player1Name").text(gamerOne.name);
    $("#player2Name").text(gamerTwo.name);
    $("#welcome").hide();
    $("#game").show();

    $("#roll1").click(function(){
      var rollOne = rollDice();
      score1 += rollOne;
      $("#player1Roll").text(rollOne);
      $("#player1Score").text(score1);
    });
  });
  $("hold1").click(function(){
    finalScore1 += score1;
  })
});
