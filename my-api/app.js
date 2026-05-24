const express = require ('express');
const app = express();
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/users.routes"))
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

//404 handler (route not found)
app.all("*",(req, res, next) =>{
    const AppError = require("./utilsAppError");
    next(new AppError(`cant find ${req.originalUrl} on this server`, 404))
});
//global error middleware
const errorHandler = require("./middlewares/error.middleware");
app.use(errorHandler);

module.exports = app;