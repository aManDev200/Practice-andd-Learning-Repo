const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({ 
        username: username, 
        password: password
    });
    return res.status(200).json({
        msg : "User created Successfully",
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        course : response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const coursId = req.params.courseId;
    const username = req.body.username;
    User.findOne({
        username,
    },"$push" :
    {
        purchasedCourses :coursId,
    })
    res.json({
    msg :  `You have successfully bought the course!`
    })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router