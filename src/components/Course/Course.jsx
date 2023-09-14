/* eslint-disable react/prop-types */
const Course = ({selectedCourse}) => {
    
    return (
        <div>
            <h3>Credit Hour Remaining 7 hr</h3>
            <hr />
            <h2>Course Name</h2>
            <ol>
                {selectedCourse.map(course=>(
                    <li key={course.price}>{course.name}</li>
                ))}
            </ol>
            <hr />
            <h4>Total Credit Hour: </h4>
            <hr />
            <h4>Total Price:  USD</h4>
        </div>
    );
};

export default Course;