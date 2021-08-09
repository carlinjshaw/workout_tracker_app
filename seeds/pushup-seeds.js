const { Pushups } = require("../models");

const pushupsdata = [
  {
    amount: 13,
    date: "01/01/2021",
    user_id: 1,
  },
  {
    amount: 15,
    date: "01/05/2021",
    user_id: 1,
  },
  {
    amount: 25,
    date: "01/10/2021",
    user_id: 1,
  },
  {
    amount: 20,
    date: "01/15/2021",
    user_id: 2,
  },
  {
    amount: 30,
    date: "01/20/2021",
    user_id: 2,
  },
  {
    amount: 32,
    date: "01/25/2021",
    user_id: 2,
  },
  {
    amount: 25,
    date: "01/20/2021",
    user_id: 3,
  },
  {
    amount: 27,
    date: "01/25/2021",
    user_id: 3,
  },
  {
    amount: 20,
    date: "01/30/2021",
    user_id: 3,
  },
];

const seedPushups = () => Pushups.bulkCreate(pushupsdata);

module.exports = seedPushups;
