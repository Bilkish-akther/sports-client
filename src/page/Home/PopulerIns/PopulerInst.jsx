
import { Rating } from '@smastrom/react-rating'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


import '@smastrom/react-rating/style.css'

const PopulerInst = ({ item }) => {
    const { email, name, rating, sport, image, student } = item
    return (
        <div  className=" bg-slate-300 mt-4 px-5 mb-8 text-center">
            <div className=" mb-3 p-5 text-center">
                <img className="h-56  w-56  rounded-full" src={image} alt="" />
            </div>

            <div className=' sm:mx-auto text-center'>
                <p > <span className="font-semibold">Name:</span> {name}</p>
                <p> <span className="font-semibold">Email:</span> {email}</p>
                <p> <span className="font-semibold">Sport:</span> {sport}</p>
                <p><span className="font-semibold">Student:</span> {student}</p>
                <Rating
                className='text-center mb-4'
                    style={{ maxWidth: 150 }}
                    value={rating}
                    readOnly
                />
            </div>

        </div>
    );
};

export default PopulerInst;