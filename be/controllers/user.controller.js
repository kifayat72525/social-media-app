async function getSingleUser(req, res) {
    res.send("this is get single user")
}
async function updateSingleUser(req, res) {
    res.send("this is get updated user")
}
async function getUserBySearch(req, res) {
    res.send("this is get user by search")
}
async function getUserFromFollowers(req, res) {
    res.send("this is get user from followers")
}
async function getUserFromFollowing(req, res) {
    res.send("this is get user from following")
}

export{
    getSingleUser,
    updateSingleUser,
    getUserBySearch,
    getUserFromFollowers,
    getUserFromFollowing
}