async function like(req, res) {
    res.send("this is like")
}

async function unLike(req, res) {
    res.send("this is unLike")
}

export{
    like, unLike
}