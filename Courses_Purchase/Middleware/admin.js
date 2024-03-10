const {Admin}  =  require(' ../db');

async function adminMiddleware (req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    const response = await Admin.findone({
        username,
        password
    })
    if(response)
    {
        next();
    }
    else
    {
        res.status(400).json({
            msg :"Invalid username or password"
        })
    }
}

module.exports = adminMiddleware;