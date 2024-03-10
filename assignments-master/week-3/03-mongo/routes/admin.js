const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password; 
    
    await Admin.create({
        username,
        password
    })
    res.status(200).send("Admin Created Successfully")
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.status(200).json({
        msg : "The Course created successfully"
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find();

    res.json({
        course : response
    })
});

module.exports = router;