const express = require('express');
const router = express.Router();

const {getComments, postComments, deleteComments}
= require('../controllers/comments.controller')


//Get comments from a post
router.get('/post/:postId', getComments)

//Create a comment under post
router.post('/post/:postId', postComments)

//Delete a comment under post
router.delete('/:id', deleteComments)

module.exports = router