const userInitials = localStorage.getItem("userInitials");
const userScore = localStorage.getItem("userScore");

var scoreContainer = document.createElement("h2");
body.appendChild(scoreContainer);
scoreContainer.textContent = "HELLO";