import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className="my-5">
            <h2 className="text-4xl my-4 font-bold text-center text-[#6a3b37]">What Our Clients Say</h2>
            <p className="text-center">Check, what our clients say about our hotel which will help you to take a good decission.</p>
            <div>
            <Swiper 
            navigation={true}
            autoplay={true}
            modules={[Navigation, Autoplay]} 
            className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    ><div className="m-24 flex flex-col justify-around items-center">
                            
                            <img src={review.image} className="h-[100px] w-[100px] rounded-full my-2" />
                            <h3 className="text-2xl my-2 text-orange-400">{review.name}</h3>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.review_star}
                                readOnly
                            />
                            <p className="p-4 text-2xl text-center">{review.comment}</p>
                        </div></SwiperSlide>)
                }

            </Swiper>
            </div>
        </div>
    );
};

export default Reviews;