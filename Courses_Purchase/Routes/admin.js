const epxress = require('express');
const routes = express.routes();
const { Admin,Course } = require(' ../db');
const adminMiddleware = require('../middleware/admin');

routes.post('/signup',(req, res)=>{
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Username = req.body.Username;
    const Password = req.body.Password;

    Admin.Create({
        FirstName,
        LastName,
        Username: Username,
        Password: Password
    })
    res.status(200).json({
        msg : "Admin Successfully created"
    });
})

routes.post('courses',adminMiddleware,(req, res)=>{
    const CourseName = req.body.CourseName;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const ImageLink = req.body.ImageLink;

    Course.Create({
        CourseName,
        Description,
        Price,
        ImageLink
    })
    res.status(200).json({
        msg : "Course Successfully created"
    });
});

routes.get('courses',adminMiddleware,async(req, res)=>{
    const response = await Course.FindOne({});
    res.json({
        course : response
    })
});

module.exports = routes;