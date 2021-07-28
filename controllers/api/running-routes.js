const router = require("express").Router();
const { Pullups, Pushups, Running } = require("../../models");

router.get("/", (req, res) => {
  Running.findAll()
    .then((dbRunning) => res.json(dbRunning))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Running.create({
    running_id: req.body.running_id,
    running_distance: req.body.running_distance,
    running_date: req.body.running_date,
  })
    .then((dbRunning) => res.json(dbRunning))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Running.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRunning) => {
      if (!dbRunning) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbRunning);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/id", (req, res) => {
  Running.update(
    {
      running_date: req.body.running_date,
      running_distance: req.body.running_distance,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRunning) => {
      if (!dbRunning) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbRunning);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
