const router = require("express").Router();

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render("signin");
});

router.get("/tracker", (req, res) => {
  res.render("tracker");
});

router.get("/", (req, res) => {
  console.log(req.session);

  // other logic...
});

module.exports = router;
