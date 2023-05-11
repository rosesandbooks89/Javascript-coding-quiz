var buttonClick = document.getElementById("start-button");
var count = document.querySelector("#count");
var timer;
var seconds = 10;
var startScreen = document.querySelector("#start-screen")

const questionsArray = [
    {
        title: "What is 1 + 1?",
        options: ["1", "2", "3", "4"],
        answer: ["2"]
    },
    {
        title: "What is 2 + 2?",
        options: ["1", "2", "3", "4"],
        answer: ["4"]
    },
    {
        title: "What is 3 + 3?",
        options: ["6", "2", "3", "4"],
        answer: ["6"]
    },
    {
        title: "What is 4+ 4?",
        options: ["1", "8", "3", "4"],
        answer: ["8"]
    }
    
];


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
