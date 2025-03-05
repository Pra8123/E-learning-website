
const courseList = require("../Models/db.json");


exports.getAllCourses = (req, res) => {
    // res.status(200).json(courseList);
    res.status(200).json({ list:courseList });
}

exports.getCoursesById = (req, res) => {
    const courseId = req.params.id;
    const course = courseList.find(value => value.id == courseId);

    if (course) {
        res.status(200).json({ course });
    } else {
        res.status(404).json({
            message: "Please provide valid restaurant ID"
        });
    }
}
