const router = require("express").Router();
const { Users, Pullups, Pushups, Running } = require("../../models");

router.get("/", (req, res) => {
  Users.findAll()
    .then((dbPullups) => res.json(dbPullups))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  console.log("POST IS RUNNING");
  Users.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for signing in
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// router.delete("/:id", (req, res) => {
//     Users.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbPullups) => {
//       if (!dbPullups) {
//         res.status(404).json({ message: "No workout found with this id!" });
//         return;
//       }
//       res.json(dbPullups);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put("/id", (req, res) => {
//   Pullups.update(
//     {
//       amount: req.body.amount,
//       date: req.body.date,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbPullups) => {
//       if (!dbPullups) {
//         res.status(404).json({ message: "No workout found with this id!" });
//         return;
//       }
//       res.json(dbPullups);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
