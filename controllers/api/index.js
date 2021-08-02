const router = require("express").Router();
const pushUpsRoutes = require("./pushups-routes");
const pullUpsRoutes = require("./pullups-routes");
const runningRoutes = require("./running-routes");
const usersRoutes = require("./users-routes");

router.use("/pushups", pushUpsRoutes);
router.use("/pullups", pullUpsRoutes);
router.use("/running", runningRoutes);
router.use("/users", usersRoutes);

module.exports = router;
