import React from 'react'
import { useParams } from 'react-router-dom';
import json from './db.json';
import './Coursedetails.css';
function Coursedetails() {

    const { id } = useParams();
    const course = json.find(course => course.id === parseInt(id));

    const courseContent = {
        1: { video: "https://www.youtube.com/embed/WeceQqNoTEE?si=9FoHkisdbrElfpte", pdf: "pdfs", des: "Web Development Bootcamp - Overview Join this Web Development Bootcamp for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about web development." },
        2: { video: "https://www.youtube.com/embed/another-video-id", pdf: "https://example.com/course2.pdf", des:"React JS Course - Overview Join this ReactJS Course for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ ReactJS quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about ReactJS. " },
        3: { video: "https://www.youtube.com/embed/kUJPZbUPqro?si=sPxmrl7c9voHdl6z", pdf: "https://example.com/course2.pdf", des:"React JS Course - Overview Join this ReactJS Course for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ ReactJS quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about ReactJS. " }
    };

    return (
        <div>
            <div className='course-contn-main'>
                <div className='course-left-contain'>
                    <h1>{course.description}</h1>
                    <img src={course.image} alt={course.category} />
                    <h3>Category: {course.category}</h3>
                    <h2>Price: Rs.{course.price}</h2>
                </div>

                <div className='course-right-contain'>

                    {courseContent[course.id] ? (
                        <>
                            <h3>Course video</h3>
                            <iframe
                                width="60%"
                                height="400px"
                                src={courseContent[course.id].video}
                                title="Course Video"
                                allowFullScreen
                            ></iframe>

                            <h4>{courseContent[course.id].des}</h4>
                            <h2>Course Materials</h2>

                            <button className='btn-down'> <a href={courseContent[course.id].pdf} target="_blank" rel="noopener noreferrer">
                                Download PDF
                            </a></button>
                        </>

                    ) : (
                        <p> Coming soon...</p>
                    )}


                    <br />
                    <button className='btn-back'><a href="/Courses" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>← Back to Main page</a></button>
                </div>
            </div >
        </div>
    )
}

export default Coursedetails