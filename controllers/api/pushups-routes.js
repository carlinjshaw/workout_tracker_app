const router = require("express").Router();
const { Pullups, Pushups, Running } = require("../../models");

router.get("/", (req, res) => {
  Pushups.findAll()
    .then((dbPushups) => res.json(dbPushups))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Pushups.create({
    pushups_id: req.body.pushups_id,
    pushups_reps: req.body.pushups_reps,
    pushups_date: req.body.pushups_date,
  })
    .then((dbPushups) => res.json(dbPushups))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Pushups.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPushups) => {
      if (!dbPushups) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbPushups);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/id", (req, res) => {
  Pushups.update(
    {
      pushUps_reps: req.body.pushUps_reps,
      pushUps_date: req.body.pushUps_date,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPushups) => {
      if (!dbPushups) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbPushups);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
