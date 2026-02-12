async function signup(req, res) {
    res.send("this is signup")
}

async function login(req, res) {
    res.send("this is login")
}

async function forgotPassword(req, res) {
    res.send("this is forgotPassword")
}


async function resetPassword(req, res) {
    res.send("this is resetPassword")
}

// this is for /profile page
async function me(req, res) {
    res.send("this is me")
}

export {
    signup,
    login,
    forgotPassword,
    resetPassword,
    me
}