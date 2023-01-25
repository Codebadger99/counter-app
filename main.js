const display = document.querySelector(".number");
const IncreaseBtn = document.getElementById("increase");
const DecreaseBtn = document.getElementById("decrease");
const ResetBtn = document.getElementById("reset");


let value = 0;

IncreaseBtn.addEventListener('click',() => {
   value += 1;
   display.textContent = value;
})

DecreaseBtn.addEventListener('click',() => {
    value -= 1;
    display.textContent = value;
})

ResetBtn.addEventListener('click',() => {
    value = 0;
    display.textContent = value;
})

