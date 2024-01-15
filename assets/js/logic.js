//var declaration

var startBtn = document.getElementById('start');

var questionContainer = document.getElementById('questions');

var questionTitle = document.getElementById('question-title');

var choices = document.getElementById('choices');

var startScreen = document.getElementById('start-screen');

var timeEl = document.getElementById("time");

var endScreen = document.getElementById("end-screen");

var finalScore = document.getElementById('final-score');

var timerContainer = document.getElementById('timer-container');

let timerInterval;

var counter = 0;

// var correctAnsw = questions.map(function (item) {
// 	return item.answer;
// });
// console.log(correctAnsw);

var currentQuestionIndex = 0;

var secondsLeft = 60;

//functions

function startQuiz (){
    // startScreen.setAttribute("class", "hide");
    startScreen.classList.add("hide");
    timerContainer.classList.remove("hide");
    displayQuestion();
}

function displayQuestion (){
    // questionContainer.setAttribute("class", "start");
    questionContainer.classList.remove("hide");
    questionTitle.textContent = questions[currentQuestionIndex].title;
    displayChoices(currentQuestionIndex);
}

function nextQuestion (){

    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
    else {
        questionContainer.classList.add("hide");
        endScreen.classList.remove("hide");
        finalResult();
        clearInterval(timerInterval);
    }
}


function displayChoices(currentQuestionIndex){
    const questionChoice = questions[currentQuestionIndex].choices;
    choices.innerHTML = "";
    //loop to get the asnwers:
    for (let i = 0; i < questionChoice.length; i++) { 
        var choiceButton = document.createElement("button"); // creating a button for each choice
        choices.appendChild(choiceButton);
        choiceButton.textContent = questionChoice[i];
        choiceButton.addEventListener("click", function() {
            // console.log("Selected choice:", questionChoice[i]);
            if (questionChoice[i] === questions[currentQuestionIndex].answer){
                console.log(questionChoice[i] + " is the correct answer yippee : )");
                counter += 1;
                nextQuestion();
            } else {
                console.log(questionChoice[i] + " is the incorrect answer booo : (");
                secondsLeft -= 10;
                nextQuestion();
            }
        })
    }}
        


function countdown (){
    // var secondsLeft = 60;
        timerInterval = setInterval(function() {
        secondsLeft--;
        if (secondsLeft >= 0){
        timeEl.textContent = secondsLeft;
        } else {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        endScreen.classList.remove("hide"); 
        questionContainer.classList.add("hide");
        finalResult();
        // endScreen.textContent = "loser go play genshin";
        }
    }
, 1000)
}


function finalResult (){
    finalScore.textContent = "Your final score is " + counter + "/5";
}

//eventListener
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", countdown);


