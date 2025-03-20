// import React from 'react'
// import { useParams } from 'react-router-dom';
// import json from './db.json';
// import './Coursedetails.css';
// function Coursedetails() {

//     const { id } = useParams();
//     const course = json.find(course => course.id === parseInt(id));

//     const courseContent = {
//         1: { video: "https://www.youtube.com/embed/WeceQqNoTEE?si=9FoHkisdbrElfpte", pdf: "pdfs", des: "Web Development Bootcamp - Overview Join this Web Development Bootcamp for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about web development." },
//         2: { video: "https://www.youtube.com/embed/another-video-id", pdf: "https://example.com/course2.pdf", des:"React JS Course - Overview Join this ReactJS Course for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ ReactJS quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about ReactJS. " },
//         3: { video: "https://www.youtube.com/embed/kUJPZbUPqro?si=sPxmrl7c9voHdl6z", pdf: "https://example.com/course2.pdf", des:"React JS Course - Overview Join this ReactJS Course for over 25 hours of recorded lessons, allowing you to learn at your own pace. Boost your confidence with 10+ ReactJS quizzes. Dive into 30+ hours of expert-led content covering everything you need to know about ReactJS. " }
//     };

//     return (
//         <div>
//             <div className='course-contn-main'>
//                 <div className='course-left-contain'>
//                     <h1>{course.description}</h1>
//                     <img src={course.image} alt={course.category} />
//                     <h3>Category: {course.category}</h3>
//                     <h2>Price: Rs.{course.price}</h2>
//                 </div>

//                 <div className='course-right-contain'>

//                     {courseContent[course.id] ? (
//                         <>
//                             <h3>Course video</h3>
//                             <iframe
//                                 width="60%"
//                                 height="400px"
//                                 src={courseContent[course.id].video}
//                                 title="Course Video"
//                                 allowFullScreen
//                             ></iframe>

//                             <h4>{courseContent[course.id].des}</h4>
//                             <h2>Course Materials</h2>

//                             <button className='btn-down'> <a href={courseContent[course.id].pdf} target="_blank" rel="noopener noreferrer">
//                                 Download PDF
//                             </a></button>
//                         </>

//                     ) : (
//                         <p> Coming soon...</p>
//                     )}


//                     <br />
//                     <button className='btn-back'><a href="/Courses" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}>← Back to Main page</a></button>
//                 </div>
//             </div >
//         </div>
//     )
// }

// export default Coursedetails


// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Coursedetails.css';

// function Coursedetails() {
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [course, setCourse] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

//     useEffect(() => {
//         axios
//             .get(`http://localhost:5407/Courses/${id}`)
//             .then((response) => {
//                 setCourse(response.data.course); // API should return a single course object
//                 setLoading(false);
//             })
//             .catch(() => {
//                 setError("Failed to fetch course details.");
//                 setLoading(false);
//             });
//     }, [id]);

//     const handleReviewSubmit = (e) => {
//         e.preventDefault();
//         if (newReview.username && newReview.comment) {
//             const updatedReviews = [...(course.reviews || []), newReview];
//             setCourse({ ...course, reviews: updatedReviews });
//             setNewReview({ username: "", rating: 5, comment: "" });
//         }
//     };

//     if (loading) return <p className="loading">Loading...</p>;
//     if (error) return <p className="error">{error}</p>;
//     // if (!course) return <p className="error">Course not found.</p>;

//     const averageRating = course.reviews?.length
//         ? (course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1)
//         : "No Ratings Yet";


//     return (
//         <div className='course-contn-main'>
//             <div className='course-left-contain'>
//                 <h1>{course.description}</h1>
//                 <img src={course.image || "/default-course.jpg"} alt={course.category} />
//                 <h3>Category: {course.category}</h3>
//                 <h2>Price: Rs.{course.price}</h2>

//             </div>

//             <div className='course-right-contain'>

//                 <h3>Course Video</h3>
//                 <iframe
//                     width="60%"
//                     height="400px"
//                     src={course.video}
//                     title="Course Video"
//                     allowFullScreen
//                 ></iframe>

//                 <h4>{course.des}</h4>
//                 <p className="average-rating">⭐ {averageRating} / 5</p>
//                 {/* <h4>{courseContent[course.id].des}</h4> */}
//                 <h2>Course Materials</h2>

//                 <button className='btn-down'>
//                     <a href={course.pdf} target="_blank" rel="noopener noreferrer">
//                         Download PDF
//                     </a>
//                 </button>
//                 <br />
//                 <div className="reviews-sections">
//                     <h2>Customer Reviews</h2>
//                     {course.reviews?.length > 0 ? (
//                         course.reviews.map((review, index) => (
//                             <div key={index} className="review-cards">
//                                 <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
//                                 <p className="review-comment">"{review.comment}"</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No reviews yet.</p>
//                     )}
//                 </div>

//                 <div className="add-review-section">
//                     <h2>Add a Review</h2>
//                     <form onSubmit={handleReviewSubmit} className="review-form">
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             value={newReview.username}
//                             onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
//                             required
//                         />
//                         <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
//                             {[5, 4, 3, 2, 1].map((rating) => (
//                                 <option key={rating} value={rating}>{rating} Stars</option>
//                             ))}
//                         </select>
//                         <textarea
//                             placeholder="Write a review..."
//                             value={newReview.comment}
//                             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                             required
//                         />
//                         <button type="submit" className="submit-button">Submit Review</button>
//                     </form>
//                 </div>





//                 <button onClick={() => navigate(-1)} className='btn-back'>← Back to Main page</button>
//             </div>
//         </div>
//     );
// }

// export default Coursedetails;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Coursedetails.css';

function Coursedetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    const [error, setError] = useState(null);
    const [newReview, setNewReview] = useState({ username: "", rating: 5, comment: "" });

    useEffect(() => {
        axios
            .get(`https://e-learning-website-backend-u8ba.onrender.com/Courses/${id}`)
            .then((response) => {
                setCourse(response.data.course); 
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch course details.");
                setLoading(false);
            });
    }, [id]);

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (newReview.username && newReview.comment) {
            const updatedReviews = [...(course.reviews || []), newReview];
            setCourse({ ...course, reviews: updatedReviews });
            setNewReview({ username: "", rating: 5, comment: "" });
        }
    };

    const toggleReviews = () => {
        setShowAll(!showAll);
    };
    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;
    // if (!course) return <p className="error">Course not found.</p>;

    const averageRating = course.reviews?.length
        ? (course.reviews.reduce((sum, review) => sum + review.rating, 0) / course.reviews.length).toFixed(1)
        : "No Ratings Yet";


    return (
        <div className='course-contn-main'>
            <div className='course-left-contain'>
                <h1>{course.description}</h1>
                <img src={course.image || "/default-course.jpg"} alt={course.category} />
                <h3>Category: {course.category}</h3>
                <h2>Price: Rs.{course.price}</h2>

            </div>

            <div className='course-right-contain'>

                <h3>Course Video</h3>
                <iframe
                    width="60%"
                    height="400px"
                    src={course.video}
                    title="Course Video"
                    allowFullScreen
                ></iframe>

                <h4>{course.des}</h4>
                <p className="average-rating">⭐ {averageRating} / 5</p>
                {/* <h4>{courseContent[course.id].des}</h4> */}
                <h2>Course Materials</h2>

                <button className='btn-down'>
                    <a href={course.pdf} target="_blank" rel="noopener noreferrer">
                        Download PDF
                    </a>
                </button>
                <br />

                <div className="reviews-sections">
                    <h2>Customer Reviews</h2>
                    {course.reviews?.length > 0 ? (
                        course.reviews.slice(0, showAll ? course.reviews.length : 2).map((review, index) => (
                            <div key={index} className="review-cards">
                                <p className="review-user"><strong>{review.username}</strong> ⭐ {review.rating}/5</p>
                                <p className="review-comment">"{review.comment}"</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>


                <button onClick={toggleReviews} className='revi-btn'>
                    {showAll ? "Show Less" : "Show More"}
                </button>

                <div className="add-review-section">
                    <h2>Add a Review</h2>
                    <form onSubmit={handleReviewSubmit} className="review-form">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={newReview.username}
                            onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                            required
                        />
                        <select value={newReview.rating} onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}>
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <option key={rating} value={rating}>{rating} Stars</option>
                            ))}
                        </select>
                        <textarea
                            placeholder="Write a review..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            required
                        />
                        <button type="submit" className="submit-button">Submit Review</button>
                    </form>
                </div>
                <button onClick={() => navigate(-1)} className='btn-back'>← Back to Main page</button>
            </div>
        </div>
    );
}

export default Coursedetails;