import { NavLink, useLoaderData } from "react-router-dom";

const CourseDetails = () => {

    const course = useLoaderData();

  return (
    <div className="container mx-auto">
        <p>Instructor Name:  {course.instructor}</p>
        <p>To purchase this course you need to get the premium access: </p>
        <NavLink to="/checkout" className="bg-red-500 text-white p-1 rounded-lg">{course.order}</NavLink>
        
    </div>
  );
};

export default CourseDetails;
