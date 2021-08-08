// tracker script

function startFunction(event) {
  event.preventDefault();

  var e = document.getElementById("workouts");
  var result = e.options[e.selectedIndex].value;

  if (result === "pullup") {
    console.log("pullup was selected");
    document.getElementById("myChart").innerHTML = "";
    pullUpChart();
  } else if (result === "pushup") {
    console.log("pushup was selected");
    document.getElementById("myChart").innerHTML = "";
    pushUpChart();
  } else if (result === "running") {
    console.log("running was selected");
    document.getElementById("myChart").innerHTML = "";
    runningChart();
  }
}

runningChart = () => {
  const runData = JSON.parse(
    document.querySelector("#runningData").getAttribute("data-running")
  );
  console.log(runData);
  //make array of only the distances for the y axis
  const distances = [];
  runData.forEach((entry) => distances.push(entry.distance));
  //make array of only the dates for the x axis
  const dates = [];
  runData.forEach((entry) => dates.push(entry.date));
  {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: distances,
            label: "Total",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
        ],
      },
    });
  }
};

pushUpChart = () => {
  const pushData = JSON.parse(
    document.querySelector("#pushupsData").getAttribute("data-pushups")
  );
  console.log(pushData);
  //make array of only the distances for the y axis
  const amounts = [];
  pushData.forEach((entry) => amounts.push(entry.amount));
  //make array of only the dates for the x axis
  const dates = [];
  pushData.forEach((entry) => dates.push(entry.date));
  {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: amounts,
            label: "Total",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
        ],
      },
    });
  }
};

pullUpChart = () => {
  const pullData = JSON.parse(
    document.querySelector("#pullupsData").getAttribute("data-pullups")
  );
  console.log(pullData);
  //make array of only the distances for the y axis
  const amounts = [];
  pullData.forEach((entry) => amounts.push(entry.amount));
  //make array of only the dates for the x axis
  const dates = [];
  pullData.forEach((entry) => dates.push(entry.date));
  {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            data: amounts,
            label: "Total",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          },
        ],
      },
    });
  }
};

document.querySelector("#trackBtn").addEventListener("click", startFunction);
runningChart();
pullUpChart();
pushUpChart();
