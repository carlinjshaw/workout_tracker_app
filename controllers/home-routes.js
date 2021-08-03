const router = require("express").Router();

router.get("/", (req, res) => {
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

router.get("/", (req, res) => {
  console.log(req.session);

  // other logic...
});

module.exports = router;
