import React from 'react';
import Navbar from './components/landing/navbar';
import bled from '../assets/Red&Black img.svg';
import {oasis_backend} from "../../../declarations/oasis_backend";
const LandingPage = () => {
    const getAdminNum = async () => {
        var num = await oasis_backend.getAdmin();
        alert(num);
    }
    return (
        <div>
            <div>
                <Navbar />
                <div className='grid lg:grid-cols-2 lg:h-[80dvh]'>
                    <div className='flex order-2 lg:order-1 flex-col items-center justify-center gap-3 lg:gap-6 m-8'>
                        <div className='text-2xl md:text-2xl lg:text-5xl leading-6 font-bold '>
                            OASIS: Safe haven for empowerment.
                        </div>
                        <div className='flex flex-col gap-5 ml-1 lg:gap-10'>
                            <div className='text-base md:text-md lg:text-xl'>
                                Oasis is an innovative online platform that provides a safe space
                                for victims of abuse to raise their voices and seek justice.
                                Together, we are creating an oasis of support, where every voice matters,
                                every survivor is empowered, and the very cycle of silence is broken.
                            </div>
                            <div className='flex items-center gap-8 lg:gap-5 '>
                                <button className='text-white text-md lg:text-xl font-bold bg-[#0f1629] px-4 py-1 lg:px-6 lg:py-2 rounded-lg'>
                                    File a report
                                </button>
                                <button className='text-md lg:text-xl border-[1.5px] px-4 py-1 lg:px-7 lg:py-2 rounded-lg'>
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7 lg:h-[80dvh] order-1 lg:order-2 flex items-center justify-center'>
                        <img className='w-[90%] h-auto' src={bled} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;