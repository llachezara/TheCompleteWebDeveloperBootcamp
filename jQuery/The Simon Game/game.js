var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}
nextSequence();

$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    console.log(userClickedPattern);
})

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}