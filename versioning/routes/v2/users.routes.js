const express = require ('express')
const router = express.Router();
const {getUsersV2,} = require('../../controllers/v2/users.controler');
router.get('/', getUsersV2)



module.exports = router