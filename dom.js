var a = Math.floor(Math.random() * 6) + 1;
var image1 = "images/dice" + a + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", image1);
var b = Math.floor(Math.random() * 6) + 1;
var img2 = "images/dice" + b + ".png";
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (a > b) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (a === b) {
  document.querySelector("h1").innerHTML = "Tie";
} else {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
