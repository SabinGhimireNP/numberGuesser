let numberGenerated = parseInt(Math.floor(Math.random() * 100 + 1));
// console.log(numberGenerated);
const lowOrHI_div = document.querySelector(".lowOrHi");
let guesses = 10;
let outputMatched;
let previousValue = document.querySelector(".guesses");
let previousGuesses = [];
let newGameButton = document.querySelector(".Guess");
let guess_holder = document.querySelector(".lastResult");
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let numberGussed = parseInt(document.getElementById("guessField").value);

  let diference_value = numberGenerated - numberGussed;

  if (isNaN(numberGussed) || numberGussed < 1 || numberGussed > 100) {
    alert("Please enter a number between 1 and 100!");
    return;
  } else {
    guesses--;
    previousGuesses.push(numberGussed);
    previousValue.textContent = `${previousGuesses}`;
    guess_holder.textContent = `${guesses}`;
  }

  if (numberGussed === numberGenerated) {
    lowOrHI_div.innerHTML = `<span>🎉 Great job! You guessed the number! 🎉</span>`;
    document.getElementById("guessField").setAttribute("disabled", "");
    createNewGameButton(); // Show "New Game" button
  } else {
    if (diference_value <= 15 && diference_value >= -15) {
      lowOrHI_div.innerHTML =
        diference_value > 0
          ? `<span>Almost there! Just a little higher! ⬆️</span>`
          : `<span>Almost there! Just a little lower! ⬇️</span>`;
    } else {
      lowOrHI_div.innerHTML =
        diference_value > 0
          ? `<span>Too low! Try a bit higher! ⬆️</span>`
          : `<span>Too high! Try a bit lower! ⬇️</span>`;
    }
  }

  if (guesses <= 0) {
    document.getElementById("guessField").setAttribute("disabled", "");
    lowOrHI_div.innerHTML = `<span>Game Over! The number was ${numberGenerated}.</span>`;
    alert("GAME OVER!!!");
    createNewGameButton(); // Show "New Game" button
  }

  form.reset();
});
function createNewGameButton() {
  let newGameBtn = document.createElement("button"); // Create button
  newGameBtn.id = "newGameBtn"; // Assign ID
  newGameBtn.textContent = "New Game"; // Set text
  newGameBtn.style.marginTop = "10px"; // Add some spacing
  newgameDiv = document.querySelector(".newgame");
  newgameDiv.appendChild(newGameBtn); // Append to body

  newGameBtn.addEventListener("click", function () {
    // Reset Game Logic
    numberGenerated = parseInt(Math.floor(Math.random() * 100 + 1)); // Generate new random number
    guesses = 10; // Reset guesses
    guess_holder.textContent = guesses; // Update UI
    previousValue.innerHTML = "";
    previousGuesses = []; // Clear previous guesses
    lowOrHI_div.innerHTML = ""; // Clear feedback message
    document.getElementById("guessField").value = ""; // Clear input field
    document.getElementById("guessField").removeAttribute("disabled"); // Enable input field
    newGameBtn.remove(); // Remove button after reset
  });
}
