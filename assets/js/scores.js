
var submitButton = document.getElementById('submit');

var userInitials = document.getElementById('initials');




submitButton.addEventListener("click", function() {
    localStorage.getItem("result", userInitials);
    localStorage.setItem("result", counter);
    });




