const express = require('express');
const app = express();
app.use(express.json());

// Version 1
app.use("/api/v1/users", require("./routes/v1/users.routes"));

// Version 2
app.use("/api/v2/users", require("./routes/v2/users.routes"));
module.exports = app