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
    amount: req.body.amount,
    date: req.body.date,
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
      amount: req.body.amount,
      date: req.body.date,
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
