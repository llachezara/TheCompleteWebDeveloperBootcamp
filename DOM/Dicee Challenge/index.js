//Change img1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1Source = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1Source);

//Change img2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2Source = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2Source);

//
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player1 is the winner! 🚩";
}
else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player2 is the winner! 🚩";
}
else if (randomNumber1 == randomNumber2) {
    heading.innerHTML = "It's a draw! 🚩";
}

