import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImageUrl = "https://i.pinimg.com/736x/b1/6f/68/b16f68d504794eb2dd223dcc0bbe4c29.jpg"; 

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full md:w-3/4 flex flex-col justify-center items-center px-8">
        <img
          src="https://img.freepik.com/premium-photo/bright-cheerful-hospice-hospital-healthcare-worker_888204-320.jpg"
          className="h-48 w-48 rounded-full mb-8"
          alt="Doctor"
        />
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          The Best & Experienced Doctor for Youth is here to help you
        </h1>
        <h2 className="text-4xl font-bold text-red-500 mb-8">Dr. MANISH SINGH</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-gray-700">20+ Years</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">1K+ Machines & Tools</h3>
            <p className="text-gray-700">State-of-the-art equipment</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Govt Certified Doctor</h3>
            <p className="text-gray-700">Recognized by government authorities</p>
          </div>
        </div>
      
      </div>
      <div className="max-w-screen-md mx-auto mt-2">

  <div className="bg-white rounded-lg shadow-md p-2">
    <ul>
      <li className="text-lg font-semibold mb-2"> <span className='font-bold text-red '> SPECIALITY: </span>Emergency Medicine Casualty , RTA Trauma, Epilepsy, Seizure, Haematoma,Renal,Apsis,OT</li>
    </ul>
  </div>
</div>
  <div className="mt-3">
          <Link to="/about" className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Know more about me
          </Link>
        </div>



    </div>
  );
};

export default Home;
