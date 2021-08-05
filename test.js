// let btn = document.querySelector("#formSubmit");
// let sidebar = document.querySelector(".sidebar");
// let trackBtn = document.querySelector(".trackBtn");
// let dropdown = document.querySelector("#workouts");

// btn.onclick = function () {
//   sidebar.classList.toggle("active");
// };

// trackBtn.addEventListener("click", function () {
//   console.log(dropdown.text);
// });
// console.log(dropdown.text);



function GetSelectedValue(){
    var e = document.getElementById("country");
    var result = e.options[e.selectedIndex].value;
    
    document.getElementById("result").innerHTML = result;
}

function GetSelectedText(){
    var e = document.getElementById("country");
    var result = e.options[e.selectedIndex].text;
    
    document.getElementById("result").innerHTML = result;
}

</script>