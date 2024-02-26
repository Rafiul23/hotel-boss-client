import { Link, useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const room = useLoaderData();

    const { image, room_title, description, room_code } = room;

    return (
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
            <div className="col-span-3 card bg-[#2c2c2c] text-white my-4 ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{room_title}</h2>
                <p className="font-bold text-orange-600">Room No: {room_code}</p>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    <button className="btn bg-[#6A3E37] text-white">Check Slot</button>
                    <Link to='/rooms'>
                    <button className="btn bg-[#6A3E37] text-white">Back to Previous Page</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-span-1">

        </div>
        </div>
    );
};

export default RoomDetails;