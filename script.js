const nobutton = document.getElementById("noButton");
const yesbutton = document.getElementById("yesButton");
const loveu = document.getElementById("loveu");
const clickImg = document.getElementById("clickImg");
const valentine = document.getElementById("valentine");
let currentIndex = 0;
let buttonFontSize = 20;
const buttonNames = [
  "Button Clicked",
  "Clicked Again",
  "One More Click",
];

nobutton.addEventListener("click", function () {
  buttonFontSize += 10;
  yesbutton.style.fontSize = `${buttonFontSize}px`;
  if (currentIndex < buttonNames.length) {
    nobutton.textContent = buttonNames[currentIndex];
    currentIndex++;
  } else {
    nobutton.textContent = "No more changes";
  }
});
yesbutton.addEventListener("click", function () {
  loveu.style.display = "block";
  clickImg.style.display = "none";
  yesbutton.style.display = "none";
  nobutton.style.display = "none";
  valentine.style.display = "none";
});
