import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container mx-auto">
            <h1>All Courses are: {courses.length}</h1>
            <div className="grid grid-cols-3">
                {
                    courses.map(course => <div className="border border-green-400 m-3 grid justify-center" key={course.id}>
                        <p>{course.name}</p>
                        {/* <p>{course.duration}</p> */}
                        <NavLink to={`/coursedetails/${course.id}`} className="bg-orange-500 text-white p-1 rounded-lg">{course.details}</NavLink>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Courses;