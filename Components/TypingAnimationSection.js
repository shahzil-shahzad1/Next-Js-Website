"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Typed from 'react-typed';

const skills = [
  { name: 'Web Development', image: '/images/web-development.jpg' },
  { name: 'Content Writing', image: '/images/content-writing.jpg' },
  { name: 'Web Designing', image: '/images/web-designing.jpg' },
  { name: 'Graphic Designing', image: '/images/graphic-designing.jpg' },
  { name: 'Programming', image: '/images/programming.jpg' },
];

export default function TypingAnimationSection() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Match this to the typing animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Typing Animation</title>
      </Head>
      <main className="font-inter min-h-screen flex items-center justify-center bg-gray-100">
        <section className="flex flex-wrap lg:flex-nowrap w-full max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h1>
            <Typed
              strings={skills.map((skill) => skill.name)}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="text-2xl font-medium text-blue-600"
            />
            <p className="mt-4 text-gray-600 text-lg">
              Explore my diverse skillset tailored to meet modern challenges and create impactful solutions.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
            <div className="relative w-full max-w-sm h-64 lg:h-80">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.image}
                  alt={skill.name}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
                    index === currentSkillIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}