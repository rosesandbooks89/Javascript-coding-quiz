var buttonClick = document.getElementById("start-button");
var count = document.querySelector("#count");
var timer;
var seconds = 10;
var startScreen = document.querySelector("#start-screen")


function startGame() {
  // start timer (local function)
  count.textContent = seconds;
  timer = setInterval(function () {
    seconds--;
    count.textContent = seconds;

    // creatae a condition that will stop the time if it reaches 0
    if (seconds === 0) {
      clearInterval(timer);
    }
  }, 1000);
  // diplay first question, to display the question we first need to hide the the start screen then we need to display the quiz-screen
  startScreen.classList.add('hide')
  
  //
}

// start button

buttonClick.addEventListener("click", startGame);

// starts timer

// present a question

// answer question
