import React from 'react';
import Hero from '../components/Hero';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Adding About Our College section */}
      <section className="about-college py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Our College</h2>
          <p className="text-lg mb-6">
            Welcome to the College of Computer Science and Engineering! Our college is committed to
            providing world-class education in the fields of computer science, artificial intelligence, 
            and software engineering. We offer a wide range of courses that prepare students for successful careers 
            in technology, research, and innovation.
          </p>
          <p className="text-lg mb-6">
            With a faculty of experienced professors and a focus on hands-on learning, our students gain deep insights 
            into the rapidly evolving world of computer science. Whether you're interested in software development, data 
            science, or AI, our college provides the knowledge and resources you need to succeed in your field.
          </p>
          <p className="text-lg">
            Join us and be part of an institution dedicated to shaping the next generation of tech leaders and innovators!
          </p>
        </div>
      </section>

      {/* Adding Achievements section */}
      <section className="college-achievements py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our College Achievements</h2>
          <p className="text-lg mb-6">
            Over the years, our college has reached significant milestones and earned recognition for its commitment to excellence.
            Here are some of our proudest achievements:
          </p>
          
          {/* Achievements List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Top Research Publications</h3>
              <p className="text-sm text-gray-600">Our faculty and students have contributed over 100 research papers in leading global conferences and journals.</p>
            </div>

            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Global AI Awards</h3>
              <p className="text-sm text-gray-600">We have received multiple international awards for our groundbreaking work in artificial intelligence and machine learning.</p>
            </div>

            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Industry Collaborations</h3>
              <p className="text-sm text-gray-600">We have established collaborations with top tech companies like Google, Microsoft, and IBM, providing students with internship and job opportunities.</p>
            </div>

            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Student Innovation Projects</h3>
              <p className="text-sm text-gray-600">Our students regularly participate in innovation challenges, and their projects have led to the launch of multiple tech startups.</p>
            </div>

            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Global Hackathons</h3>
              <p className="text-sm text-gray-600">Our teams consistently place among the top 10 in international hackathons, showcasing our students' skills and creativity.</p>
            </div>

            <div className="achievement-card bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Top Graduate Employment Rate</h3>
              <p className="text-sm text-gray-600">Our graduates are highly sought after by industry leaders, with an employment rate of 95% within 6 months of graduation.</p>
            </div>
          </div>
        </div>
      </section>
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}

export default Home;