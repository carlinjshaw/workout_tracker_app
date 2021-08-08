function addWorkoutHandler (event) {
    event.preventDefault();
    console.log("the form button was pressed")
  

    var dropdown = document.getElementById('workout-dropdown')
    var result = dropdown.options[dropdown.selectedIndex].value;


    if ((result === "Running")) {
      console.log("running was selected");
    } else if ((result === "Pushups")) {
      console.log("pushups was selected");
    } else if ((result === "Pullups")) {
        console.log("pullups was selected");
      }

}



// function addWorkoutHandler(event) {
//     event.preventDefault();
//     const date = document.querySelector('#date-selector').value.trim();
//     const workoutType = document.querySelector('#workout-dropdown').value.trim();
//     const amount = document.querySelector('#amount').value.trim();
//     console.log("SCRIPT IS CONNECTED")
    
//       if (date && workoutType && amount) {
//         console.log("CONNECTED TO FETCH LOGIC FOR ADDWORKOUT")
//         fetch('/workout/running', {
//           method: 'post',
//           body: JSON.stringify({
//             date,
//             amount,
//             user_id
//           }),
//           headers: { 'Content-Type': 'application/json' }
//         }).then((response) => {console.log(response)})
//       }
//     }
  
      document.querySelector('#add-workout-form').addEventListener('submit', addWorkoutHandler);