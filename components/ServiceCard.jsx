import React from 'react';

export const ServiceCard = ({ icon, header, description }) => {
  return (
    <div className="relative flex items-center bg-gradient-to-r from-[#064f47] to-[#075c52] text-white rounded-xl shadow-lg p-10 mx-auto transition duration-300 ease-in-out overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 blur-sm"></div>

      
      <div className="relative z-10 flex-shrink-0 bg-white rounded-full p-4 text-black text-3xl shadow-md transition duration-300 ease-in-out group-hover:bg-[#0a6d61] group-hover:text-white">
        {icon}
      </div>

      
      <div className="relative z-10 ml-6">
        <h2 className="text-2xl font-bold transition duration-300 ease-in-out group-hover:text-teal-300">{header}</h2>
        <p className="mt-2 text-sm opacity-90 transition duration-300 ease-in-out group-hover:text-gray-300">{description}</p>
      </div>

      
      <div className="absolute inset-0 bg-gradient-to-r from-[#075c52] to-[#064f47] opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"></div>
    </div>
  );
};
