const  {Routes} = require('express');
const routes = Routes();
const { User, Course} = require(' ../db');
const userMiddleware = require('../Middleware/user');
const zod = require('zod');

const UsernameSchema = zod.string().email();
const PasswordSchema = zod.string().min(10);

routes.post('/signup',(req,res)=>{
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Username = req.body.Username;
    const Password = req.body.Password;
    if(!UsernameSchema.safeParse(Username).success) {
        res.json({
            msg : "Your username is Invalid"
        })
    };
    if(!PasswordSchema.safeParse(Password).success) {
        res.json({
            msg : " Your Password is Small kindly give A strong Password"
        });
    };
    User.create({
        FirstName: FirstName,
        LastName: LastName,
        Username,
        Password
    })
    res.status(200).json({
        msg: 'User created successfully'
    })
});

routes.get('/courses',userMiddleware,async(req,res)=>{
    const response = await Course.find({});
    res.json({
        msg : response,
    })
})

module.exports = routes;