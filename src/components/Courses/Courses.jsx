import { useEffect } from 'react';
import './Courses.css'
import { useState } from 'react';
const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('../../../public/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // console.log(courses)
    return (
        <div>
            <div className="card-container">
                {
                    courses.map(course => (
                        <div key={course.price} className="card">
                            <img className='imgg' src={course.image} alt="" />
                            <h3>{course.name}</h3>
                            <p>{course.description}</p>
                            <div className='price-container'>
                                <p>Price: {course.price}</p>
                                <p>Credit: {course.Credit}</p>
                            </div>
                            <button className='select-btn'>SELECT</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;