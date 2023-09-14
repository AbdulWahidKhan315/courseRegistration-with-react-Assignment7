/* eslint-disable react/prop-types */
import './Course.css'
const Course = ({selectedCourse,totalCredit,remaining,totolPrice}) => {
    return (
        <div>
            <h3 className="blue">Credit Hour Remaining {remaining} hr</h3>
            <hr />
            <h2>Course Name</h2>
            <ol className='ol-container'>
                {selectedCourse.map(course=>(
                    <li key={course.id}>{course.name}</li>
                ))}
            </ol>
            <hr />
            <h4>Total Credit Hour: {totalCredit}</h4>
            <hr />
            <h4>Total Price: {totolPrice} USD</h4>
        </div>
    );
};

export default Course;