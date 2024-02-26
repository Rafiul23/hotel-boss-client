import { useEffect, useState } from "react";
import RoomCard from "../RoomCard/RoomCard";
import { Link } from "react-router-dom";

const Welcome = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data))
    }, [])

    return (
        <div className="my-5">
            <h2 className="text-4xl my-4 font-bold text-center text-[#6a3b37]">Welcome to Hotel Nikunja</h2>
            <p className="text-center">We are here to provide you a decent service at reasonable price</p>
            <p className="text-center">Check our rooms and book at available time</p>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-4 bg-gray-200 rounded-xl p-4">
            {
                rooms.slice(0,4).map((room)=><RoomCard 
                 key={room._id}
                 room={room}
                 ></RoomCard>)
            }
            </div>
            <div className="text-center my-5">
                <Link to='/rooms'>
                <button className="btn bg-[#6A3E37] text-white">See All Rooms</button>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;