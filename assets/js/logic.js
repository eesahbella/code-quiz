//var declaration

var startBtn = document.getElementById('start');

var questionContainer = document.getElementById('questions');

var questionTitle = document.getElementById('question-title');

var choices = document.getElementById('choices');

var startScreen = document.getElementById('start-screen');

var correctAnsw = "";

//functions

function startQuiz (){
    startScreen.setAttribute("class", "hide");
    displayQuestion();
    displayChoices();
    timer();
}

function displayQuestion (){
    questionContainer.setAttribute("class", "start");
    questionTitle.textContent = questions[0].title;
    
//loop to iterate through the questions:
    // for (let j = 0; j < questions.length; j++){
    //     questionIndex = questions[i];

    // }
}

function displayChoices(){
    // const answer1 = document.createElement("button");
    // choices.append(answer1);
    // answer1.textContent = "hello";
    

    //loop to get the asnwers:
    for (let i = 0; i < Object.keys(questions[i].choices).length; i++) { 
        choiceButton = document.createElement("button"); // creating a button for each choice
        choices.append(choiceButton);
        choiceButton.textContent = questions[0].choices[i];

    }
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