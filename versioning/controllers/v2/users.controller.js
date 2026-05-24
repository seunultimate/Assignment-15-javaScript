exports.getUsersV2 = (req, res) =>{
    res.status(200).json({
        version: 2,
        success = true,
        totalUsers: 1,
        users:[{ id: 1, fullName: 'Joy Donatus', password: 12356, email: 'sanyaolu@gmail.com'}]
    })
}