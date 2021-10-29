function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButton = document.querySelector('.change-color')
const spamNameColor = document.querySelector('.color')
const bodyColor = document.querySelector('body')
///console.log(changeButton)
//console.log(spamNameColor)
//console.log(bodyColor)

changeButton.addEventListener("click", () => {
  const rndCol = getRandomHexColor()
  bodyColor.style.backgroundColor = rndCol;
  spamNameColor.textContent =rndCol;
});


