import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='flex bg-blue-100 rounded-xl px-6 m-2 sm:px-10 md:px-14 lg:px-12 xl:px-20 2xl:px-30 py-10 shadow-md'>
      {/* Left side */}
      <div className='flex-1 py-8 sm:py-12 lg:py-16 lg:pl-5 2xl:py-20 2xl:pl-7'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-blue-900'>
          <p>Book Appointment</p>
          <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() => { navigate('/login'); scrollTo(0, 0); }}
          className='bg-white border-2 border-blue-200 text-blue-700 font-medium xl:text-2xl 2xl:text-3xl text-sm sm:text-base px-8 py-3 rounded-full mt-6 hover:bg-blue-50 transition-all'
        >
          Create Account
        </button>
      </div>

      {/* Right side */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] 2xl:w-[500px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=""/>
      </div>
    </div>
  );
};

export default Banner;
