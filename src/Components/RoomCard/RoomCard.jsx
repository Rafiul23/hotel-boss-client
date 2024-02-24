

const RoomCard = ({ room }) => {

    const {image, room_title, description} = room;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="w-full h-[200px]" alt="room" /></figure>
            <div className="card-body">
                <h2 className="card-title">{room_title}</h2>
                <p>{description.slice(0,100)}...</p>
            </div>
        </div>
    );
};

export default RoomCard;