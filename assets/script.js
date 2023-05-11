var buttonClick = document.getElementById("start-button");
var count = document.querySelector("#count");
var timer;
var seconds = 10;
var startScreen = document.querySelector("#start-screen");

//questions
const question1 = new Question(
  `How are JavaScript single line comments started?`,
  [`/*`, `<!--`, `//`],
  correctAnswer: 2
);
const question2 = new Question(
  `Which term(s) were introduced as a preferred replacement to 'var' in ECMA2015?`,
  [`'let' and 'const'`, `'break' and 'continue'`, `while`, `switch`],
  0
);
const question3 = new Question(
  `Which of the following is a JavaScript Event type?`,
  [`load`, `mouseover`, `keydown`, `all of the above`],
  3
);
const question4 = new Question(
  `What is the structure of an arrow function expression for binding the function 'add'?`,
  [
    `const add = {a,b} => (a + b)`,
    `const add = (a,b) => {a + b}`,
    `function add => (a,b) = {a + b}`,
    `add(a,b) = {a + b}`,
  ],
  1
);

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
  startScreen.classList.add("hide");

  //
}

// start button

buttonClick.addEventListener("click", startGame);

// starts timer

// present a question

// answer question
