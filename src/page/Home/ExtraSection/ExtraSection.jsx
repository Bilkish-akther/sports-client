import AOS from 'aos';

// ..
AOS.init();

const ExtraSection = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-4 w-full items-center justify-center ">

               <div>
                <h2>Life is like soccer, we need GOALS.</h2>
               </div>
                <div  data-aos="fade-left" className=" text-center">
                   <p className='bold'><span className='text-purple-600'>Cricket:</span>  Cricket is a very importent for exarsise and  </p>
                   <p className='bold'><span className='text-purple-600'>Cricket:</span>  Cricket is a very importent for exarsise and  </p>
                   <p className='bold'><span className='text-purple-600'>Cricket:</span>  Cricket is a very importent for exarsise and  </p>
                   <p className='bold'><span className='text-purple-600'>Cricket:</span>  Cricket is a very importent for exarsise and  </p>

                </div>

            </div>
        </>
    );
};

export default ExtraSection;