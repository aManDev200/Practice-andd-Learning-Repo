const mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://admin:Yourname%402@cluster0.dopwgkx.mongodb.net/')

const AdminSchema = new mongoose.Schema ({
    FirstName :String,
    LastName : String,
    Username : String,
    Password : String,
})

const CoursesSchema = new mongoose.Schema({
    CourseName : String,
    Description : String,
    Price : String,
    ImageLink : String,
})

const UserSchema = new mongoose.Schema({
    FirstName : String ,
    LastName : String,
    Username : String,
    Password : String
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CoursesSchema);

module.export = {
    Admin,
    User,
    Course
}