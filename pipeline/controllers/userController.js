const logger = require("../utils/logger");

const createUser = (req, res) => {
logger.info("User created");
res.status(201).json({
    message: "user created successfully"
})
}


module.exports = {createUser}
