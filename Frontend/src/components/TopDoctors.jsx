import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 2xl:mx-30 xl:mx-20'>
      <h1 className='md:text-4xl 2xl:text-6xl font-bold'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 lg:text-2xl text-center text-sm text-gray-600'>
        Browse through our handpicked list of trusted doctors.
      </p>
      <div className='w-full grid md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 px-6'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }}
            className='bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-transform hover:-translate-y-2 cursor-pointer'
            key={index}
          >
            <img className='w-full bg-gray-100 rounded-t-xl' src={item.image} alt="doctor" />
            <div className='p-5'>
              <div className='flex items-center gap-2 text-sm text-green-500 mb-1'>
                <span className='w-2 h-2 rounded-full bg-green-500' /> <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => { navigate('/doctors'); scrollTo(0, 0); }}
        className='bg-blue-100 text-blue-800 text-lg px-10 py-3 rounded-full mt-10 hover:bg-blue-200 transition-all'
      >
        View More
      </button>
    </div>
  );
};

export default TopDoctors;
