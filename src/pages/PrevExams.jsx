import React from 'react';

function PrevExams() {
  const exams = [
    {
      title: 'CS 101: Introduction to Programming',
      date: '2023-12-10',
      description: 'Final exam covering basic programming concepts, syntax, and data structures.',
      link: '/exam/cs101'
    },
    {
      title: 'CS 201: Data Structures and Algorithms',
      date: '2023-12-15',
      description: 'Midterm exam focused on sorting algorithms, trees, and graph traversal techniques.',
      link: '/exam/cs201'
    },
    {
      title: 'CS 301: Operating Systems',
      date: '2023-12-20',
      description: 'Final exam covering OS concepts, memory management, and file systems.',
      link: '/exam/cs301'
    },
    {
      title: 'CS 401: Database Management Systems',
      date: '2023-12-25',
      description: 'Comprehensive exam on relational databases, SQL queries, and normalization.',
      link: '/exam/cs401'
    }
  ];

  return (
    <div className="prev-exams-page">
      <h1 className="text-center text-2xl font-bold mb-4">Previous Exams</h1>
      <p className="text-center text-lg mb-6">Browse through previous exam topics and their details.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exams.map((exam, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
              <p className="text-gray-700 text-sm mb-2">Date: {exam.date}</p>
              <p className="text-gray-700 text-sm mb-4">{exam.description}</p>
              <a href={exam.link} className="text-blue-600 hover:underline text-sm">View Exam Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrevExams;