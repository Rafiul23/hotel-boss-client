import { useEffect, useState } from "react";
import RoomCard from './../RoomCard/RoomCard';


const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])

    return (
        <div>
            <h2 className="text-4xl my-4 font-bold text-center text-[#6a3b37]">All Rooms Are Here</h2>
            <p className="text-center mb-4 text-2xl">Choose your favorite room from here and book your available slot.</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    rooms.map(room => <RoomCard
                        key={room._id}
                        room={room}
                    ></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;