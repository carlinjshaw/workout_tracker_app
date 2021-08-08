function addWorkoutHandler (event) {
    event.preventDefault();
    console.log("the form button was pressed")
  

    var dropdown = document.getElementById('workout-dropdown')
    var result = dropdown.options[dropdown.selectedIndex].value;


    if ((result === "Running")) {
      console.log("running was selected");
      addRunningData()
    } else if ((result === "Pushups")) {
      console.log("pushups was selected");
      addPushupsData()
    } else if ((result === "Pullups")) {
        console.log("pullups was selected");
        addPullupsData()
      }
}



function addRunningData () {
    // console.log("ADD SCRIPT IS CONNECTED")

    const date = document.querySelector('#date-selector').value.trim();
    const distance = document.querySelector('#amount').value.trim();


      if (date && distance) {
        console.log("CONNECTED TO FETCH LOGIC FOR ADDWORKOUT")
        fetch('/workout/running', {
          method: 'post',
          body: JSON.stringify({
              distance,
              date,
          }),
          headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
      }
    }
  
function addPullupsData () {

  const date = document.querySelector('#date-selector').value.trim();
  const amount = document.querySelector('#amount').value.trim();


    if (date && amount) {
      console.log("CONNECTED TO FETCH LOGIC FOR ADDWORKOUT")
      fetch('/workout/pullups', {
        method: 'post',
        body: JSON.stringify({
          amount,
          date,
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }

}

function addPushupsData ( ) {

  
  const date = document.querySelector('#date-selector').value.trim();
  const amount = document.querySelector('#amount').value.trim();


    if (date && amount) {
      console.log("CONNECTED TO FETCH LOGIC FOR ADDWORKOUT")
      fetch('/workout/pushups', {
        method: 'post',
        body: JSON.stringify({
          amount,
          date,
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }
}

      document.querySelector('#add-workout-form').addEventListener('submit', addWorkoutHandler);