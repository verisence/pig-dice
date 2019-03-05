function Gamer(name){
  this.name = name;
  // this.score = 0;
  // this.finalScore = 0;
}
function reset1(){

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

    $("#roll2").click(function(){
      var rollTwo = rollDice();
      score2 += rollTwo;
      $("#player2Roll").text(rollTwo);
      $("#player2Score").text(score2);
    });
  });
  $("#hold1").click(function(){
    finalScore1 += score1;
    $("#player1Final").text(finalScore1);
  })
  $("#hold2").click(function(){
    finalScore2 += score2;
    $("#player2Final").text(finalScore2);
  })
});
