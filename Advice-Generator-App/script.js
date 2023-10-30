const apiBtn = document.getElementsByClassName("advice-button")[0];
const adviceHead = document.getElementsByClassName("advice-header")[0];
const advice = document.getElementsByClassName("advice-text")[0];
console.log(advice);

function randomNumber(min, max) {
  let diff = max - min;
  let randNum = Math.floor(Math.random() * diff);
  return randNum + min;
}

async function fetchAdvice() {
  let id = randomNumber(0, 224);
  let res = await fetch(`https://api.adviceslip.com/advice/${id}`);
  let data = await res.json();
  console.log(data);
  advice.innerHTML = `"${data.slip.advice}"`;
  adviceHead.innerHTML = `ADVICE #${id}`;
}

document.addEventListener("DOMContentLoaded", fetchAdvice);

apiBtn.addEventListener("click", fetchAdvice);
