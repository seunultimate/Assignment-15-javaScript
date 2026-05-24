const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
let users = [
    {id: "1", name: "Gaius Joy"},
    {id: "2", name: "David Doe"}
];

exports.getUser = catchAsync(async(req, res, next) =>{
    const user = users.find(u => u.id === req.params.id);
    if(!user) {
        return next(new AppError("User not found", 404))
    }
    res.status(200).json({
        success: true,
        data: user,
    });
})
exports.createUser = catchAsync(async (req, res, next) =>{
    if(!req.body.name){
        return next(new AppError("Name is required", 400))
    }
    const newUser = {
        id: Date.now().toString(),
        ...req.body,
    };
    users.push(newUser);
    res.status(201).json({
        success: true, data: newUser,
    })
})



exports.getUsers = (req, res) =>{
    res.json({message: "Get all Users"})
}
exports.getUser =(req, res)=>{
    res.json({message: `Get a single User ${req.params.id}`})
}
exports.createUser =(req, res) =>{
    res.json({message: 'User created succesffully', data: req.body})
}
exports.updateUser =(req, res) =>{
    res.json({message: `User ${req.params.id} updated`})
}
exports.deleteUser =(req, res) =>{
    res.json({message: `This ${req.params.id} is deleted`})
}