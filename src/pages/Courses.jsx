import { useEffect, useState } from "react";


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
                        <p>{course.duration}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Courses;