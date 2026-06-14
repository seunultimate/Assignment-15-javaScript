const express = require ('express');
const router = express.Router();

const authenticate = require("../middlewares/authMiddleware")
const authorization = require("../middlewares/authorizeMiddleware")
const validateUser = require("../middlewares/validateMiddleware")
const createUser = require("../controllers/userController")

router.post("/users", authenticate, authorization("admin"), validateUser, createUser);

module.exports = router