exports.getPosts = (req, res) =>{
    res.json({message: "Get all posts"})
}
exports.getPost = (req, res) =>{
    res.json({message: `get post ${req.params.id} post`})
}
exports.createPost = (req, res) =>{
    res.json({message: 'Post created successfully', data: req.body})
}
exports.updatePost =( req, res) =>{
    res.json({message: `this post ${req.params.id} updated`})
}
exports.deletePost = (req, res) =>{
    res.json({message: `post ${req.params.id} deleted successfully`})
}