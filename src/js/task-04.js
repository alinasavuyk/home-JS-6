const valueBtn = document.querySelector("#value");
let counterValue = 0;


const decrementBtn = document.querySelector('[data-action=decrement]')
const decrementBtnClick = () => {
    counterValue -=1;
    valueBtn.textContent = counterValue;
  };
  decrementBtn.addEventListener("click", decrementBtnClick);



const incrementBtn = document.querySelector('[data-action=increment]')
const incrementBtnClick = () => {
    counterValue +=1;
    valueBtn.textContent = counterValue;
 };
  incrementBtn.addEventListener("click", incrementBtnClick);



console.log(valueBtn)
console.log(decrementBtn)
console.log(incrementBtn)


