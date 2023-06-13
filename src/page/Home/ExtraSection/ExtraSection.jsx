import AOS from 'aos';

AOS.init();

const ExtraSection = () => {
    return (
        <>
            <div className=" grid md:grid-cols-2 gap-4  items-center    bg-slate-200">

                <div className='lg:w-1/2'>
                    <h5 className='mt-4 text-red-500 ms-8 '>Why Join Us</h5>
                    <h2 className='text-5xl ms-5 mt-2'>Life is like soccer, we <br /> need GOALS.</h2>
                    <p className='mt-5 ms-5 '>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                 
                </div>

                <div  className='lg:w-full'>
                    <div className='flex gap-4 mt-5 mb-4 me-4 shadow-2xl'>
                        <div className='bg-slate-50 py-6 px-10 text-center'>
                            <h2 className='text-black text-2xl  '>Professional Coach</h2>
                            <p className='mt-3'>Potenti orci eu sagittis vestibulum <br /> sapien laoreet rutrum sociosqu <br /> lacus vulputate pretium</p>
                        </div>
                        <div className=' gap-4 bg-slate-50 py-6 px-10 text-center'>
                            <h2 className='text-black text-2xl  '>
                                Prestigious Club</h2>
                            <p className='mt-3'>Potenti orci eu sagittis vestibulum <br /> sapien laoreet rutrum sociosqu <br /> lacus vulputate pretium</p>
                        </div>
                    </div>


                    <div className='flex gap-4 mt-4 text-center me-4 mb-4'>
                        <div className=' bg-slate-50 py-6 px-10 text-center'>
                            <h2 className='text-black text-2xl  '>Amenities</h2>
                            <p className='mt-3'>Potenti orci eu sagittis vestibulum <br /> sapien laoreet rutrum sociosqu <br /> lacus vulputate pretium</p>
                        </div>
                        <div className=' bg-slate-50 py-6 px-10 text-center'>
                            <h2 className=' text-black text-2xl '>
                                Support</h2>
                            <p className='mt-3'>Potenti orci eu sagittis vestibulum <br /> sapien laoreet rutrum sociosqu <br /> lacus vulputate pretium</p>
                        </div>
                    </div>


                </div>








            </div>
        </>
    );
};

export default ExtraSection;