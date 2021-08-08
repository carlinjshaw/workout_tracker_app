const router = require("express").Router();
const sequelize = require("../config/connection");
const { Running, Pushups, Pullups } = require("../models");
// const withAuth = require('../utils/auth');

//get all running data for tracker page
//add withAuth as parameter when authentication is done
router.get("/running", (req, res) => {
  // console.log(req.session);
  console.log("======================");
  console.log(req.session.user_id);
  Running.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["distance", "date"],
  })
    .then((runningData) => {
      const runsData = runningData.map((running) =>
        running.get({ plain: true })
      );
      const runData = JSON.stringify(runsData);
      console.log({ runData });
      res.render("tracker", { runData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//gets all pushup data and sends to tracker handlebar
router.get("/running", (req, res) => {
  // console.log(req.session);
  console.log("========tracker with pushups==========");
  console.log(req.session.user_id);
  Pushups.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["amount", "date"],
  })
    .then((pushupsData) => {
      const pushsData = pushupsData.map((pushs) => pushs.get({ plain: true }));
      const pushData = JSON.stringify(pushsData);
      console.log(pushData);
      res.render("tracker", { pushData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//gets all pullups data and sends to tracker handlebar
router.get("/running", (req, res) => {
  // console.log(req.session);
  console.log("========tracker with pullups==========");
  console.log(req.session.user_id);
  Pullups.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["amount", "date"],
  })
    .then((pullupsData) => {
      const pullsData = pullupsData.map((pushs) => pushs.get({ plain: true }));
      const pullData = JSON.stringify(pullsData);
      console.log(pullData);
      res.render("tracker", { pullData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
