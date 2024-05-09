import { useEffect, useState } from "react";


const CourseDetails = () => {

    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/coursedetails')
        .then(res => res.json())
        .then(data =>setDetails(data))
    },[])
    return (
        <div>
            <h1>Course Details</h1>

            <div>
                {
                    details.map(detail => <div key={detail.id}>
                        <p>Instructor Name: {detail.instructor}</p>
                        <p>Course Fees: {detail.fees}</p>
                    </div>)
                }
            </div>


            <p>To purchase this course you need to get the premium access.</p>
            <button className="text-red-500 border">Get premium access</button>
        </div>
    );
};

export default CourseDetails;