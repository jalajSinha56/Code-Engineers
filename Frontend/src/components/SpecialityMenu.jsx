import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl 2xl:text-5xl font-semibold'>Find by Speciality</h1>
      <p className='xl:w-1/3 text-center 2xl:text-2xl text-md text-gray-500'>
        Browse through our list of trusted doctors and schedule your appointment hassle-free.
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto px-2'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className='flex flex-col items-center text-xs xl:text-2xl cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-300 p-3 bg-white rounded-lg shadow hover:shadow-lg'
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img className='w-10 xl:w-24 mb-3 2xl:w-40 2xl:mb-4' src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
