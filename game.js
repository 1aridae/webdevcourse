var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

document.addEventListener("keydown", function (event) {
  if (event !== null && gamePattern.length === 0) {
    // console.log(event);

    nextSequence();
  }
});

$(".btn").on("click", function (event) {
  var userChosenColour = this.id;

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  animatePress(userChosenColour);

  playSound(userChosenColour);

  if ((gamePattern.length === userClickedPattern.length) === true) {
    checkAnswer();
  } else if (userClickedPattern.length > gamePattern.length) {
    gameOver();
  }
});

function nextSequence() {
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  var selectorButton = "#" + randomChosenColour;

  console.log(gamePattern);

  $(selectorButton).fadeOut().fadeIn();

  playSound(randomChosenColour);

  level++;

  $("h1").text(level);
}

function playSound(name) {
  var audioSrc = "sounds/" + name + ".mp3";

  var audio = new Audio(audioSrc);

  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer() {
  if ((gamePattern.toString() === userClickedPattern.toString()) === true) {
    console.log("OK");
    setTimeout(nextSequence(), 10000);
  } else {
    console.log("N-OK");
    gameOver();
  }
}

function gameOver() {
  $("h1").text("GAME OVER");

  var audioOver = new Audio("sounds/wrong.mp3");
  audioOver.play();

  $("body").addClass("game-over");

  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  startOver();
}

function startOver() {
  gamePattern = [];

  userClickedPattern = [];

  level = 0;

  $("h1").text("GAME OVER, press any key to play!");
}
