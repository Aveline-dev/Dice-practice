var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png"; //uses concatenation to select the random dice image
var randomImgSource = "images/" + randomDiceImg; //use concatenation to also select a random dice image from the images folder

var image1 = document.querySelectorAll("img")[0]; //in order to select the particular image to change
image1.setAttribute("src", randomImgSource); //sets the value of the first img tag to a random dice image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}