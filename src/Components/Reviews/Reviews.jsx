import { useEffect, useState } from "react";


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="my-5">
            <h2 className="text-2xl font-bold text-center text-[#6a3b37]">What our clients say</h2>
        </div>
    );
};

export default Reviews;