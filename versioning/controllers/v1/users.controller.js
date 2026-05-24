exports.getUsersv1 = (req, res) =>{
    res.status(200).json({
        version: "v1",
        success = true,
        data: [{id: 1, name: "David"}]
    });
};