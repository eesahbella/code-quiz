const userInitials = localStorage.getItem("initials");
const userScore = localStorage.getItem("score");

var scoreContainer = document.createElement("h2");
highscores.appendChild(scoreContainer);
scoreContainer.innerHTML = "User Initials: " + userInitials + " ; " + "User Score: " + userScore + ".";

// console.log(userInitials);
// console.log(userScore);git 