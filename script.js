
//And here is the JavaScript code to add an active class to the current button on click, as mentioned earlier:

//`javascript
// Get the container element
var container = document.querySelector(".container");

// Get all buttons with class="btn" inside the container
var buttons = container.querySelectorAll(".btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

function searchFunction() {
  var input = document.getElementById("search").value;
  window.location.href = "https://www.google.com/" + input;
}