const express = require('express');
const router = express.Router();

const {getPosts, getPost, createPost, updatePost, deletePost}
= require('../controllers/posts.controller');
const { createUser } = require('../controllers/posts.controller');
router.post('/',  getPosts)
router.post('/:id', getPost)
router.post('/', createPost)
router.post('/:id',updatePost)
router.post('/:id', deletePost)


module.exports = router