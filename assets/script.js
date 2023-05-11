var introCard = document.getElementById("intro");
// var start = document.getElementById("start");
var quizCard = document.getElementById("card");
var question = document.getElementById("question");
// var final-card = document.getElementById("final-card");
var initials = document.getElementById("initials");
var wrongMessage = document.getElementById("wrong");
var correctMessage = document.getElementById("correct");



const startTime = 100;
var timeLeft = startTime;
var i = 0;
var finalScore = 0;
var lastCard = false;



var time = document.getElementById("timer");
// var seconds = 10;
// var startScreen = document.querySelector("#start-screen");
// var quizQuestion = document.getElementById("question");
// var quizScreen = document.getElementById("quiz-screen");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var score = document.getElementById("final-score");
var startButton = document.getElementById("start");
var viewScores = document.getElementById("view-highscores");
var scores = document.getElementById("highscores");
var backButton = document.getElementById("back");
var clearButton = document.getElementById("clear");

var btnOne = document.getElementById("buttonOne");
var btnTwo = document.getElementById("buttonTwo");
var btnThree = document.getElementById("buttonThree");
var btnFour = document.getElementById("buttonFour");

var userList = document.querySelector("#user-list");
// questions and options
var arrayQuestion = [
    "What is the basic markup langauge?",
    "I need to make a button. What is the correct HTML syntax?",
    "Which of these is a Javascript library?",
  ];
  var arrayOptionOne = ["Javascript", "<btn></btn>", "MySQL"];
  var arrayOptionTwo = ["CSS","<button = button></button?","Node"];
  var arrayOptionThree = ["C++","<button></button>","jQuery"];
  var arrayOptionFour = ["HTML","<btn = button></btn>","Python"];
// correct answers
var arrayAnswers = ["HTML", "<button></button>", "jQuery"];
var userAnswer = "";
//////////////////////////

// screen for highscores
function highScore(){
  endScreen.setAttribute("style", "display:none;");
  highScoreCard.removeAttribute("style");
}

//screen for end of quiz to enter initials
function quizOver(){
  finalScore = timeLeft;
  quizCard/setAttribute("style", "display:none;");
  endScreen.removeAttribute("style");
  score.textContent = "Your final score is " + finalScore;
  return;
}
//timer start
function startTimer() {
    var timerInterval = setInterval(function(){
      timeLeft--;
      time.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0 || lastCard == true);{
        clearInterval(timerInterval);
        quizOver();
    }
  }, 1000)
  return;
}

//switch question function & display next question
function switchQuestion(cardNum){
    if (i < arrayQuestion.length){
      question.textContent = arrayQuestion[cardNum];
      btnOne.textContent = arrayOptionOne[cardNum];
      btnTwo.textContent = arrayOptionTwo[cardNum];
      btnThree.textContent = arrayOptionThree[cardNum];
      btnFour.textContent = arrayOptionFour[cardNum];
      i++;
    }
    else {
      lastCard = true;
    }
    return;
}
// when correct answer is chosen
function checkAnswer(answerNum){
  if (userAnswer == arrayAnswers[answerNum]){
    correctMessage.removeAttribute("style");
    var displayMessage = setTimeout(function(){
      correctMessage.setAttribute("style", "display:none;");
    },1000);
  }
  else{
    if (timeLeft > 10){
        timeLeft -= 10;
    }
    else{
      timeLeft = 0;
    }
    wrongMessage.removeAttribute("style");
    var displayMessage = setTimeout(function(){
      wrongMessage.setAttribute("style", "display:none;");
    },1000);
  }
  return;
}

//hides cards
function startClicked () {
    introCard.setAttribute("style", "display:none;");
    quizCard.removeAttribute("style");
    switchQuestion(i);

}

// // event listeners
startButton.addEventListener("click", startClicked);

//question answer listenrs
btnOne.addEventListener("click",function(){
  userAnswer = arrayOptionOne[i-1];
  checkAnswer(i-1);
  switchQuestion(i);
});

btnTwo.addEventListener("click",function(){
  userAnswer = arrayOptionTwo[i-1];
  checkAnswer(i-1);
  switchQuestion(i);
});

btnThree.addEventListener("click",function(){
  userAnswer = arrayOptionThree[i-1];
  checkAnswer(i-1);
  switchQuestion(i);
});

btnFour.addEventListener("click",function(){
  userAnswer = arrayOptionFour[i-1];
  checkAnswer(i-1);
  switchQuestion(i);
});

//highscore button
submitButton.addEventListener("click", function(event){
  event.preventDefault();
//userName checks to see if there is already names saved in storage
//if none in storage then data is pulled and stored
// use JSON.parse to pull down stored names
  var userName = JSON.parse(localStorage.getItem("user")) || [];

  var name = initialsInput.value;

  var userInfo = {
    user: name,
    score: finalScore
  }
//updates storage with username value
// use json.strigify to store the array values
  userName.push (userInfo); 

  localStorage.setItem("user", JSON.stringify(userName));
//checks for duplicates of the li tags and will remove all li tags
  while(userList.firstChild){
    userList.firstChild.remove(); 
  }

  //creast li tags and assigns in storage
  userName.forEach(function(item){
    var tag = document.createElement("li");
    tag.innerHTML = item.user + " - " + item.score;
    userList.appendChild(tag);
  });
  highscores();
});

//back button on score board
backButton.addEventListener("click", function(){
  i = 0;
  timeLeft = startTime;
  lastCard = false;
  time.textContent = "Time; " + timeLeft;
  highScoreCard.setAttribute("style", "display:none;");
  introCard.removeAttribute("style");
});

//view highscores
viewScores.addEventListener("click", function(){ 
  introCard.setAttribute("style", "display:none;");
  quizCard.setAttribute("style", "display:none;");
  endScreen.setAttribute("style", "display:none;");
  highScoreCard.removeAttribute("style");

});get

// sets inital time on timer on start screen
time.textContent = "Time: " + timeLeft;
