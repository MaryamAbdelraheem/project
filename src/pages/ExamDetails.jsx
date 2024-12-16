import React from 'react';
import { useParams } from 'react-router-dom';

function ExamDetails({ exam }) {
  // إذا كنت تريد استخدام exam من الرواتر
  // const { examId } = useParams(); 

  const examDetails = {
    CS101: {
      title: 'CS 101: Introduction to Programming',
      date: '2023-12-10',
      description: 'Final exam covering basic programming concepts, syntax, and data structures.',
      topics: ['Variables', 'Control Flow', 'Data Structures', 'Algorithms'],
    },
    CS201: {
      title: 'CS 201: Data Structures and Algorithms',
      date: '2023-12-15',
      description: 'Midterm exam focused on sorting algorithms, trees, and graph traversal techniques.',
      topics: ['Sorting Algorithms', 'Trees', 'Graphs'],
    },
    CS301: {
      title: 'CS 301: Operating Systems',
      date: '2023-12-20',
      description: 'Final exam covering OS concepts, memory management, and file systems.',
      topics: ['Memory Management', 'Process Scheduling', 'File Systems'],
    },
    CS401: {
      title: 'CS 401: Database Management Systems',
      date: '2023-12-25',
      description: 'Comprehensive exam on relational databases, SQL queries, and normalization.',
      topics: ['SQL Queries', 'Normalization', 'Relational Databases'],
    },
  };

  const examInfo = examDetails[exam];

  return (
    <div className="exam-details-page">
      <h1 className="text-2xl font-bold">{examInfo.title}</h1>
      <p><strong>Date:</strong> {examInfo.date}</p>
      <p>{examInfo.description}</p>
      <h3 className="mt-4 font-semibold">Topics Covered:</h3>
      <ul>
        {examInfo.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExamDetails;