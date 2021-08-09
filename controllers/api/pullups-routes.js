const router = require("express").Router();
const { Pullups, Pushups, Running } = require("../../models");

router.get("/", (req, res) => {
  Pullups.findAll()
    .then((dbPullups) => res.json(dbPullups))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/pullups', (req, res) => {
//   console.log("pullups get routes back end");
//   console.log('========tracker with pullups==========');
//   console.log(req.session.user_id)
//   Pullups.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'amount',
//       'date'
//     ],
//   })
//     .then(pullupsData => {
//       const pullsData = pullupsData.map(pushs => pushs.get({ plain: true }));
//       const pullData = JSON.stringify(pullsData)
//       console.log(pullData)
//       res.render('pullups-graph', {pullData});

//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post("/", (req, res) => {
  Pullups.create({
    amount: req.body.amount,
    date: req.body.date,
    user_id: req.session.user_id,
  })
    .then((dbPullups) => res.json(dbPullups))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Pullups.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPullups) => {
      if (!dbPullups) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbPullups);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/id", (req, res) => {
  Pullups.update(
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
    .then((dbPullups) => {
      if (!dbPullups) {
        res.status(404).json({ message: "No workout found with this id!" });
        return;
      }
      res.json(dbPullups);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
