var btnBurger = document.querySelector("#btn");
var sidebar = document.querySelector(".sidebar");
var trackBtn = document.querySelector("#trackBtn");
var dropdown = document.querySelector("#workouts");

btnBurger.onclick = function () {
  sidebar.classList.toggle("active");
};

function GetSelectedText() {
  var e = document.getElementById("workouts");
  var result = e.options[e.selectedIndex].value;
}
