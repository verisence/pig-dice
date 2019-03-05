function Gamer(name){
  this.name = name;
}
function reset1(){
  $("#hold1").hide();
  $("#roll1").hide();
  $("#hold2").show();
  $("#roll2").show();
  score2=0;
  roll2=0;
}
function reset2(){
  $("#hold1").show();
  $("#roll1").show();
  $("#hold2").hide();
  $("#roll2").hide();
  score1=0;
  roll1=0;
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
      if(rollOne===1 ){
        //pass turn
        $("#playerTurn").text("Player Two's turn");
        reset1();
      }else{
        score1 += rollOne;
        $("#player1Roll").text(rollOne);
        $("#player1Score").text(score1);
      }
    });

    $("#roll2").click(function(){
      var rollTwo = rollDice();
      if(rollTwo===1){
      $("#playerTurn").text("Player One's turn");
        //pass turn
        reset2();
      }else{
        score2 += rollTwo;
        $("#player2Roll").text(rollTwo);
        $("#player2Score").text(score2);
      }
    });
  });
  $("#hold1").click(function(){
    $("#playerTurn").text("Player Two's turn");
    reset1();
    finalScore1 += score1;
    $("#player1Final").text(finalScore1);
    if(finalScore1>=100){
      alert("Player One won. Click Okay to reload page.");
      location.reload();
    }
  })
  $("#hold2").click(function(){
    $("#playerTurn").text("Player One's turn");
    reset2();
    finalScore2 += score2;
    $("#player2Final").text(finalScore2);
    if(finalScore2>=100){
      alert("Player two won. Click Okay to reload page.");
      location.reload();
    }
  })
});
