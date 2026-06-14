const express = require('express');
const morgan = require('morgan');

const userRoutes = require("../routes/userRoutes")
const errorHandler = require("../middlewares/errorMiddleware")

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use("/api", userRoutes)
app.use(errorHandler)


module.exports = app;