import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {

    const {_id, image, room_title, description, room_code } = room;

    return (
        <div className="card bg-base-100 hover:bg-[#2c2c2c] hover:text-white shadow-xl">
            <figure><img src={image} className="w-full h-[200px]" alt="room" /></figure>
            <div className="card-body">
                <h2 className="card-title">{room_title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <p>Room No: {room_code}</p>
                <div className="card-actions justify-end">
                    <Link to={`/room/${_id}`}>
                    <button className="btn bg-[#6A3E37] text-white">See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;