// const courseList = require("../Models/db.json");
const courseList = require("../Models/Course");

// exports.getAllCourses = (req, res) => {
//     // res.status(200).json(courseList);
//     res.status(200).json({ list:courseList });
// }

exports.getAllCourses = (req, res) => {
    courseList.find()
        .then((courseList) => {
            if (courseList && courseList.length > 0) {
                res.status(200).json(courseList);
            } else {
                res.status(404).json({ message: 'No course founds' });
            }
        })
        .catch((error) => {
            console.error('Error fetching courses:', error);
            res.status(500).json({ message: 'Error fetching courses', error: error.message });
        });
}

// exports.getCoursesById = (req, res) => {
//     const courseId = req.params.id;
//     const course = courseList.find(value => value.id == courseId);

//     if (course) {
//         res.status(200).json({ course });
//     } else {
//         res.status(404).json({
//             message: "Please provide valid restaurant ID"
//         });
//     }
// }


exports.getCoursesById = async (req, res) => {
    const courseId = req.params.id;

    try {
        const course = await courseList.findOne({ id: parseInt(courseId)});

        if (course) {
            res.status(200).json({ course: course });
        } else {
            res.status(404).json({
                message: "course not found"
            });
        }
    } catch (error) {
        console.error('Error fetching course by ID:', error);
        res.status(500).json({
            message: 'Error fetching course by ID',
            error: error.message
        });
    }
};