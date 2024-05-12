import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-2 mt-10">
      <div>
        {courses.map((course) => <div key={course.id}> <NavLink to={`/course/${course.id}`} className="text-orange-400">{course.name}</NavLink></div>)

        }

      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          {courses.map((course) => (
            <div
              className="border border-green-400 m-3 grid justify-center"
              key={course.id}
            >
              <p>{course.name}</p>

              <NavLink
                to={`/course/${course.id}`}
                className="bg-orange-500 text-white p-1 rounded-lg mb-2"
              >
                {course.details}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
