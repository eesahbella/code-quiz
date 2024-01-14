//var declaration

var startBtn = document.getElementById('start');

var questionContainer = document.getElementById('questions');

var questionTitle = document.getElementById('question-title');

var choices = document.getElementById('choices');

var startScreen = document.getElementById('start-screen');

var timeEl = document.getElementById("time");

var endScreen = document.getElementById("end-screen");


var correctAnsw = questions.map(function (item) {
	return item.answer;
});
// console.log(correctAnsw);

var currentQuestionIndex = 0

//functions

function startQuiz (){
    // startScreen.setAttribute("class", "hide");
    startScreen.classList.add("hide");
    displayQuestion();
    displayChoices();
    timer();
}

function displayQuestion (){
    // questionContainer.setAttribute("class", "start");
    questionContainer.classList.remove("hide");
    questionTitle.textContent = questions[currentQuestionIndex].title;
    displayChoices(currentQuestionIndex);
}

function nextQuestion (){
//loop to iterate through the questions:
    // for (let j = 0; j < questions.length; j++){
    //     currentQuestionIndex = questions.title[j];
    //     if (choiceButton === correctAnsw) {
    //     currentQuestionIndex++

// }
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    }
    else {
        questionContainer.classList.add("hide");
        endScreen.classList.remove("hide");
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
            console.log("Selected choice:", choices[i]);

            nextQuestion();
        });

//         if (choiceButton === correctAnsw) {
//             choiceButton.addEventListener("click", nextQuestion)
//         } else {
//             choiceButton.addEventListener
//         }
}
}

function countdown (){
    var secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        }
    }
, 1000)};


//eventListener
startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", countdown);




































// function startTimer(){
    
// }

// function displayQuestion (){
//     const questionContainer = document.getElementById("question-title");
//     questionContainer.textContent = quizQuestions.question1;
// }


// function startQuiz() {
//  // Start the timer

//     startTimer();

// // Display the first question

//     displayQuestion();
//   }

// // Add event listener to the button
//   const startButton = document.getElementById('start');
//   startButton.addEventListener('click', startQuiz);