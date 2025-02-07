const numberGenerated = parseInt(Math.floor(Math.random() * 100 + 1));
console.log(numberGenerated);
const lowOrHI_div = document.querySelector(".lowOrHi");
let guesses = 10;
let outputMatched;
let previousValue = document.querySelector(".guesses");
let guess_holder = document.querySelector(".lastResult");
const form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  do {
    let numberGussed = parseInt(document.getElementById("guessField").value);
    let diference_value = difference(numberGenerated, numberGussed);
    function difference(a, b) {
      return a - b;
      // console.log(Math.abs(a - b));
    }
    let diference_value_abs = Math.abs(diference_value);
    if (isNaN(numberGussed)) {
      alert("Please, Enter a Number");
      return;
    } else if (numberGussed === 0 || numberGussed > 100) {
      alert("Number Range is 1-100");
      return;
    } else {
      if (numberGussed === numberGenerated) {
        outputMatched = true;
        lowOrHI_div.innerHTML = `<span>🎉Great job on guessing the number!🎉</span>`;
        lowOrHI_div.append;
        break;
      } else if (numberGussed !== numberGenerated) {
        guesses--;
        previousValue.textContent = `${numberGussed}`;
        guess_holder.textContent = `${guesses}`;
        if (diference_value_abs <= 15) 
          {
          if (diference_value < 0) 
          {
            lowOrHI_div.innerHTML = `<span>Almost there! 🤏 So close! Just a little lower! ⬇️</span>`;
          }
        else if (diference_value > 0){
          lowOrHI_div.innerHTML = `<span>Almost there! 🤩 So close! Just a little higher! ⬆️</span>`;
        }
        }
        if (diference_value_abs >= 15) 
          {
          if (diference_value > 0) 
          {
            lowOrHI_div.innerHTML = `<span>Oops! Too low! 🤔 Try a bit higher! ⬆️</span>`;
          }
        else if (diference_value < 0){
          lowOrHI_div.innerHTML = `<span>Oops! Too high! 😅 Try a bit lower! ⬇️</span>`;
        }
        }
        form.reset();
        if (!(guesses > 0)) {
          alert("GAME OVER!!!");
        }
      }
    }
  } while (outputMatched === false);
});
