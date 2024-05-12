import { NavLink, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div className="grid justify-center">
      <div className="container mx-auto mt-10 grid justify-center">
        <p>Instructor Name: {course.instructor}</p>
        <p>To purchase this course you need to get the premium access: </p>
        
      </div>
      <NavLink to="/checkout" className="bg-red-500 text-white rounded-lg w-14">
          <small>{course.order}</small>
        </NavLink>
    </div>
  );
};

export default CourseDetails;
