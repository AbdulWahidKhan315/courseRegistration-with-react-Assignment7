import { useEffect } from 'react';
import './Courses.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Course from '../Course/Course';
import toast,{Toaster} from 'react-hot-toast';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totolPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('../../../public/Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const handleSelectBtn = (course) => {
        const isAvailable = selectedCourse.find(item => item.id == course.id);
        let count = parseInt(course.Credit);
        let totalPrice = course.price;
        if (isAvailable) {
            toast.error("You have already selected this course.")
        }
        else {
            selectedCourse.forEach(item => {
                count = count + parseInt(item.Credit);
            });
            const remaining = 20 - count;
            if (count > 20) {
                return toast.error("Insufficient Credit. You can not go beyond the limit of credit hr.")
            } else {
                selectedCourse.forEach(price => {
                    totalPrice = totalPrice + price.price;
                })
                setTotalPrice(totalPrice);
                setTotalCredit(count);
                setRemaining(remaining);
                setSelectedCourse([...selectedCourse, course])
            }

        }
    }
    // console.log(courses)
    return (
        <div>
            <div className='container'>
                <div className="card-container">
                    {
                        courses.map(course => (
                            <div key={course.id} className="card">
                                <img className='imgg' src={course.image} alt="" />
                                <h3>{course.name}</h3>
                                <p>{course.description}</p>
                                <div className='price-container'>
                                    <p><FontAwesomeIcon icon={faDollarSign} /> Price: {course.price}</p>
                                    <p><FontAwesomeIcon icon={faBookOpen} /> Credit: {course.Credit}</p>
                                </div>
                                <div className='btn-div'>
                                    <button onClick={() => handleSelectBtn(course)} className='select-btn'>SELECT</button>
                                    <Toaster></Toaster>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='cart'>
                    <Course selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit} totolPrice={totolPrice}></Course>
                </div>
            </div>
        </div>

    );
};

export default Courses;