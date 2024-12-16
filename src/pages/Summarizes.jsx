import React from 'react';

function Summarizes() {
  const csSummaries = [
    {
      title: 'Data Structures',
      description: 'Data structures are a way of organizing and storing data to perform operations efficiently.',
      image: 'src/assets/engineering.png'
    },
    {
      title: 'Algorithms',
      description: 'An algorithm is a step-by-step procedure used for solving a problem or performing a task.',
      image: 'src/assets/microchip.png'
    },
    {
      title: 'Operating Systems',
      description: 'Operating systems manage computer hardware and software, providing services to programs.',
      image: 'src/assets/software.png'
    },
    {
      title: 'Databases',
      description: 'A database is a structured collection of data, typically organized to make accessing and managing it efficient.',
      image: 'src/assets/db.png'
    }
  ];

  return (
    <div className="summarizes-page">
      <h1 className="text-center text-2xl font-bold mb-4">Summarizes - Computer Science Topics</h1>
      <p className="text-center text-lg mb-6">Explore various topics in Computer Science and their summaries.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {csSummaries.map((item, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summarizes;