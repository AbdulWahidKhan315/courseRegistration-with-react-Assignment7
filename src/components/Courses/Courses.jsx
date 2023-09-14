import { useEffect } from 'react';
import './Courses.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Course from '../Course/Course';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse]=useState([]);

    useEffect(() => {
        fetch('../../../public/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const handleSelectBtn=(course)=>{
        setSelectedCourse([...selectedCourse,course])
    }
    // console.log(courses)
    return (
        <div>
            <div className='container'>
                <div className="card-container">
                    {
                        courses.map(course => (
                            <div key={course.price} className="card">
                                <img className='imgg' src={course.image} alt="" />
                                <h3>{course.name}</h3>
                                <p>{course.description}</p>
                                <div className='price-container'>
                                    <p><FontAwesomeIcon icon={faDollarSign} /> Price: {course.price}</p>
                                    <p><FontAwesomeIcon icon={faBookOpen} /> Credit: {course.Credit}</p>
                                </div>
                                <div className='btn-div'>
                                <button onClick={()=>handleSelectBtn(course)} className='select-btn'>SELECT</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='cart'>
                    <Course selectedCourse={selectedCourse}></Course>
                </div>
            </div>
        </div>
    );
};

export default Courses;