import { useEffect, useState } from "react";


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
            <p className="text-center text-2xl">Choose your favorite room from here and book your available slot.</p>
            <div>

            </div>
        </div>
    );
};

export default Rooms;