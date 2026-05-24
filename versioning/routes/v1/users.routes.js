const express = require('express')
const router = express.Router();

const { getUsersV1} = require ("../../controllers/v1/users.controllers");
router.get("/", getUsersV1)
module.exports = router;