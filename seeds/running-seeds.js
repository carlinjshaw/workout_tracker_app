const { Running } = require("../models");

const runningdata = [
  {
    distance: "1.5",
    date: "01/01/2021",
    user_id: 1
  },
  {
    distance: "1.7",
    date: "01/05/2021",
    user_id: 1
  },
  {
    distance: "2.2",
    date: "01/10/2021",
    user_id: 1
  },
  {
    distance: "2.0",
    date: "01/15/2021",
    user_id: 2
  },
  {
    distance: "2.5",
    date: "01/20/2021",
    user_id: 2
  },
  {
    distance: "4.5",
    date: "02/25/2021",
    user_id: 2
  },
  {
    distance: "5.5",
    date: "01/20/2021",
    user_id: 3
  },
  {
    distance: "4.7",
    date: "01/25/2021",
    user_id: 3
  },
  {
    distance: "3.4",
    date: "01/30/2021",
    user_id: 3
  },
];

const seedRunning = () => Running.bulkCreate(runningdata);

module.exports = seedRunning;
