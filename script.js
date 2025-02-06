const numberGenerated = Math.floor(Math.random() * 100 + 1);
console.log(numberGenerated);
const lowOrHI_div = document.querySelector(".lowOrHi");
let guesses = 10;
let outputMatched;
const form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  do {
    let numberGussed = parseInt(document.getElementById("guessField").value);
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
      }
    }
  } while (outputMatched === false);
});
