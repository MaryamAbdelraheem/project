import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Books from './Books';
import Summarizes from './Summarizes';
import PrevExams from './PrevExams';

const Library = () => {
    return (
            <div className="library-container">
                {/* Header Section */}
                <header className="text-center py-8 bg-gradient-to-r bg-sky-700 text-white shadow-md">
                    <h1 className="text-4xl font-bold tracking-wide">Library</h1>
                    <p className="text-lg mt-3">Discover our curated resources: Books, Summaries, and Exams</p>
                </header>

                {/* Main Layout */}
                <div className="flex flex-col justify-center md:flex-row gap-8 px-6 py-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-5 text-gray-700">Sections</h2>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    to="/books"
                                    className="block py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium"
                                >
                                    📚 Books
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/summarizes"
                                    className="block py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium"
                                >
                                    📝 Summarizes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/prevexams"
                                    className="block py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-lg text-blue-700 font-medium"
                                >
                                    📄 Previous Exams
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        
    );
};

export default Library;