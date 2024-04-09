import React from 'react';
import './Creator.css'

const Creator = () => {
  return (
    <section className="bg-transparent py-12">
      <div className="container mx-auto">
        <div className="max-w-screen-sm mx-auto bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-center py-6">
            <img src="https://avatars.githubusercontent.com/u/122320151?v=4" alt="Creator" className="w-50 h-50 rounded-full" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl text-white mb-2 font-serif">Yashi Chauhan</div>
            <p className="font-bold text-3xl text-white mb-2 font-serif">MERN developer</p>
          </div>
          <div className="px-6 py-4">
            <a href="mailto:yamisinghsmart99@gmail.com" className="inline-block bg-gray-200 bg-opacity-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Email: yamisinghsmart99@gmail.com</a>
            <a href="https://github.com/yamisingh99" className="inline-block bg-gray-200 bg-opacity-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
