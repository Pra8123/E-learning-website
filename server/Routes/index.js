

const express =  require('express');
const router = express.Router();

const controller= require('../controllers/index');

router.get('/Courses',controller.getAllCourses);
router.get('/Courses/:id',controller.getCoursesById);


module.exports=router;

