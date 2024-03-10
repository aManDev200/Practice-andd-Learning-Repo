const { User } = require (" ../db");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const response = await User.findOne({
        username,
        password
    })
    if(response) {
        next();
    }
    else{
        res.staus(400).json({
            msg : "Invalid username or password"
        })
    }
}

module.exports = UserMiddleware;