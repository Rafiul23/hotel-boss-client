import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner_1 from '../../assets/banner1.jpg'
import banner_2 from '../../assets/banner2.jpg'
import banner_3 from '../../assets/banner3.jpg'


const Banner = () => {
    return (
    
             <Carousel 
             autoPlay={true} 
             infiniteLoop={true}
             autoFocus={true} 
             centerMode={true}
             showArrows={true}
             showIndicators={true}
             stopOnHover={false}
             interval={2000}
             >
                <div>
                    <img src={banner_1} />
                    <p className="legend">Hotel View 1</p>
                </div>
                <div>
                    <img src={banner_2} />
                    <p className="legend">Hotel View 2</p>
                </div>
                <div>
                    <img src={banner_3} />
                    <p className="legend">Hotel View 3</p>
                </div>
            </Carousel>
        
    );
};

export default Banner;