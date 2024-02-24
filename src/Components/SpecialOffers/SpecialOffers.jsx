import special from '../../assets/special.jpg'
import './Special.css';

const SpecialOffers = () => {
    return (
        <div>
            <h2 className="text-4xl my-4 font-bold text-center text-[#6a3b37]">Check Our Special Offer</h2>
            <p className="text-center mb-4 text-2xl">You may like our special offer.</p>
            <div className="hero min-h-screen special bg-fixed">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={special} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1//2 text-center text-yellow-400 bg-slate-500 bg-opacity-40 p-4 rounded-lg'>
                        <h1 className="text-6xl font-bold">Special Offer</h1>
                        <p className="py-6 text-4xl ">20% discount will be given to couple at every night on the month of February.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;