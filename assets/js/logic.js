//var declaration

var startBtn = document.getElementById('start');

var questionContainer = document.getElementById('questions');

var questionTitle = document.getElementById('question-title');

var choices = document.getElementById('choices');

var startScreen = document.getElementById('start-screen');

//functions

function startQuiz (){
    displayQuestion();
    timer();
}

function displayQuestion (){
    questionContainer.setAttribute("class", "start");
    startScreen.setAttribute("class", "hide");
    questionTitle.textContent = questions[0].title;
}

function timer (){

}


//eventListener
startBtn.addEventListener("click", startQuiz);




































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