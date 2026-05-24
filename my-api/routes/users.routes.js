const express = require('express');
const router = express.Router();
const{getUsers, getUser, createUser, updateUser, deleteUser} 
= require("../controllers/users.controller");

// Get all users
router.get("/", getUsers);

//Get a single user
router.get("/", getUser);

//create a user
router.post("/", createUser)

//Update User
router.put("/:id", updateUser)

//Delete User
router.delete("/:id", deleteUser)

module.exports = router