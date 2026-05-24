exports.getComments = (req, res) =>{
    res.json({message: `Comments for the post  ${req.params.postId}`})
}
exports.postComments = (req, res) =>{
    res.json({message: `Comment added to the post ${req.params.postId}`, data: req.body})
}
exports.deleteComments =(req, res) =>{
    res.json({message: `This comment ${req.params.id} deleted`});
}