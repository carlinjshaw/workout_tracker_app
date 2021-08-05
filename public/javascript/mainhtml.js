var btn = document.querySelector("#btn");
var sidebar = document.querySelector(".sidebar");
var trackBtn = document.querySelector("#trackBtn");
var dropdown = document.querySelector("#workouts");
var chart = document.querySelector(".chart");
var newChart = document.querySelector("#newChart");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

function GetSelectedText() {
  var e = document.getElementById("workouts");
  var result = e.options[e.selectedIndex].value;

  if (result === "pullup") {
    var html = `<div>
	<canvas id="myChart"></canvas>
    </div>


{{!-- script for running data of a particular user --}}
    <div id="runningData" data-running={{runData}}></div>

    <script>
        const runData = JSON.parse(document.querySelector('#runningData').getAttribute('data-running'))

        console.log(runData)

        //make array of only the distances for the y axis
        const distances = []
        runData.forEach((entry) => distances.push(entry.distance))

        //make array of only the dates for the x axis
        const dates = []
        runData.forEach((entry) => dates.push(entry.date))

        {
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        data: distances,
                        label: "Total",
                        borderColor: "#3e95cd",
                        backgroundColor: "#7bb6dd",
                        fill: false,
                    }

                    ]
                },
            });
          
        }
    </script>`;
    newChart.append(html);
  } else if (result === "pushup") {
    console.log("Pushup Charts!");
  } else if (result === "running") {
    console.log("running Charts");
  }
}
