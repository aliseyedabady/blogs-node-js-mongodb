const { userCreate } = require("../controllers/userController");
const router = require("express").Router();

// router.get("/list", userList);
router.post("/create", userCreate);

module.exports = router;
