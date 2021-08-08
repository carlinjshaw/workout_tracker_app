function startFunction(event) {
  event.preventDefault();

  var e = document.getElementById("workouts");
  var result = e.options[e.selectedIndex].value;

  if (result === "pullup") {
    console.log("pullup was selected");
    pullUpChart();
  } else if (result === "pushup") {
    console.log("pushup was selected");
    // pushUpChart();
  } else if (result === "running") {
    console.log("running was selected");
    // runningChart();
  }
}

pullUpChart = () => {
  console.log("fetch is called");
  fetch("/tracker/pullups", {
    method: "get",
    // body: JSON.stringify({
    //   user_id
    // }),
    //    where: {
    //         user_id: req.session.user_id},

    // headers: { 'Content-Type': 'application/json' }
  }).then((response) => {
    document.location.replace("/tracker/pullups");
    //   res.JSON(response)
    console.log(response);
  });
};

document
  .querySelector("#tracker-form")
  .addEventListener("submit", startFunction);
