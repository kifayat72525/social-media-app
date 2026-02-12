async function createPost(req, res){
    res.send("this is create post")
}
async function feed(req, res){
    res.send("this is feed")
}
async function getSinglePost(req, res){
    res.send("this is get single post")
}
async function deletePost(req, res){
    res.send("this is delete  post")
}

async function getUserPost(req, res){
    res.send("this is get User post")
}

export{
    createPost,
    feed,
    getSinglePost,
    deletePost,
    getUserPost
}