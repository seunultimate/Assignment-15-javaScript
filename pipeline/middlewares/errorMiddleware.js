const errorHandler = (req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Inernal server error"
    })
}


module.exports = errorHandler 