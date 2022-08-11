const numInput = document.querySelector(".input");
const tryBtn = document.querySelector(".btn");
const randomNum = Math.floor(Math.random() * 21 + 1);

console.log(randomNum); // for cheating :)

const guessNum = () => {
  const answer = numInput.value;
  if (isNaN(answer) === true) {
    alert("Input musst be a NumbR! It is not a Number!");
  } else if (answer == randomNum) {
    alert("Hoooraay!! You won!! You guessed the right NumbR");
    let newGame = confirm("do you want to play a new game?");
    if (newGame == true) {
      location.reload();
    }
  } else if (answer != randomNum) {
    alert("False! Try it again!");
  }
};
tryBtn.onclick = guessNum;
