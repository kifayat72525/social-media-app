async function createComment(req, res){
    res.send("this is create comment")
}

async function deleteComment(req, res){
    res.send("this is delete comment")
}

async function getAllCommentsOnSinglePost(req, res){
    res.send("this is get comment")
}


export{
    createComment,
    deleteComment,
    getAllCommentsOnSinglePost
}