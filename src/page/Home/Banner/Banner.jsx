import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div className='mt-12 h-full'>
            <Carousel className='text-center '>
                <div>
                    <img src="https://i.ibb.co/Sx4ZbCX/Slider-01.png" />
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/SBLq9KZ/Slider-02.png" />
                  
                </div>
                <div>
                    <img src="https://i.ibb.co/SrGhTVV/Slider-03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/LQh4NTJ/Slider-04.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/WzPRnYj/Slider-5.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/kh9M0kh/Slider-6.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;