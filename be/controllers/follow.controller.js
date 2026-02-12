async function follow(req, res) {
    res.send("this is follow")
}

async function unFollow(req, res) {
    res.send("this is unFollow")
}

export{
    follow,
    unFollow
}