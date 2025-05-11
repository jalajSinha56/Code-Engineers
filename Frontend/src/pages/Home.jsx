// rafce
// import React from 'react'
// import Header from '../components/Header'
// import SpecialityMenu from '../components/SpecialityMenu'
// import TopDoctors from '../components/TopDoctors'
// import Banner from '../components/Banner'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <SpecialityMenu />
//       <TopDoctors />
//       <Banner />
//     </div>
//   )
// }

// export default Home

// Home.jsx
import React from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-gray-100 shadow-md rounded-b-3xl">
        <Header />
      </section>

      {/* Speciality Section */}
      <section className="bg-white py-20 rounded-xl shadow-sm my-10 mx-4 sm:mx-10 lg:mx-20">
        <SpecialityMenu />
      </section>

      {/* Top Doctors Section */}
      <section className="bg-blue-50 py-20 rounded-xl shadow-sm my-10 mx-4 sm:mx-10 lg:mx-20">
        <TopDoctors />
      </section>

      {/* Banner Section */}
      <section className="bg-white py-20 rounded-xl shadow-sm my-10 mx-4 sm:mx-10 lg:mx-20">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
