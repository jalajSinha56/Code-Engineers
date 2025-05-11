import React from 'react';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
// import DoctorsList from './pages/Admin/DoctorList';
// import AllAppointments from './pages/Admin/AllAppointments';

const App = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <>
      <ToastContainer />
      {aToken ? (
        <div className='bg-[#F8F9FD]'>
          <Navbar />
          <div className='flex items-start'>
            <Sidebar />
            <div className='flex-grow p-4'>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/admin-dashboard" element={<Dashboard />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                {/* <Route path="/all-appointments" element={<AllAppointments />} />
                <Route path="/doctor-list" element={<DoctorsList />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default App;
