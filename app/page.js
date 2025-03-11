"use client"
import Head from 'next/head';
import { useEffect, useState } from 'react';
import anime from 'animejs';
// import TypingAnimationSection from '@/Components/TypingAnimationSection';
// import Typed from 'react-typed';
import Image from "next/image";
import { ReactTyped } from "react-typed";
  
const skills = [
  { name: 'Web Development', image: 'https://www.intelliscence.com/wp-content/uploads/2023/11/Web-Development-Why-A-Well-Developed-Website-Matters-To-Every-Business-scaled.jpg' },
  { name: 'Content Writing', image: 'https://contentwriters.com/blog/wp-content/uploads/content-writer-750x500.jpg' },
  { name: 'Web Designing', image: 'https://media.licdn.com/dms/image/D5612AQFp86gholx6fw/article-cover_image-shrink_720_1280/0/1708422990591?e=2147483647&v=beta&t=6rUer-Xo3IAqK2KIOVR9Z7pAH7TWxAQCp56FghCqKWM' },
  { name: 'Graphic Designing', image: 'https://www.georgeanimatrix.com/blog/wp-content/uploads/2023/09/Untitled-design-2023-09-04T191457.256.jpg' },
  { name: 'Programming', image: 'https://miro.medium.com/v2/resize:fit:2000/0*mfUNFSHyrXnH7ZKf' },
];
export default function Home(){
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }, 3000); // Match this to the typing animation duration
      return () => clearInterval(interval);
    }, []);


  useEffect(() => {
    // Animation for server data
    anime({
      targets: '.server-animation',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.data-packet',
      translateX: [0, 200],
      opacity: [1, 0],
      loop: true,
      delay: anime.stagger(200),
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className="font-inter bg-gray-100">
        {/* <TypingAnimationSection/> */}
        {/* 1st Section */}
        <section className='flex flex-wrap lg:flex-nowrap w-full max-w-6xl mx-auto h-[85vh]'>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h1>

    <ReactTyped
      strings={[
        "Web Development",
        "Content Writing",
        "Web Designing",
        "Graphic Designing",
        "Programming",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
      className="text-2xl font-medium text-purple-700"
    >
    </ReactTyped>

            <p className="mt-4 text-gray-600 text-lg">
              Explore my diverse skillset tailored to meet modern challenges and create impactful solutions.
            </p>
          </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
            <div className="relative w-full max-w-sm h-64 lg:h-80">
              {skills.map((skill, index) => (
                <Image
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

        {/* 2nd Section: Testimonials */}
        <section className="py-10 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800">Testimonials</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Graphic Designer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </section>

        {/* 3rd Section: Projects */}
        <section className="py-10 bg-white">
          <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {[
              { name: "Racing Game Site", img: "https://img.freepik.com/free-vector/game-competition-continue-player-used-high-speed-car-win-racing-game_1150-47240.jpg" },
              { name: "Movies Site", img: "https://i.insider.com/6408af81125739001879671e?width=800&format=jpeg&auto=webp" },
              { name: "Music Site", img: "https://lh7-us.googleusercontent.com/_tG-CQVcL-mmmP4zTjaMqwuMDxAHjDtPSMk9X4t5mKzTj4jvLUdV3_zd0LtAwKV5l1zY_KKO9HmiOAzvCBYfJ2C06pfH-L7Q8JAoJOP15tvWTGYVWUF9v84Toyqrmy-az_EDizCTsedp4wwjDdXWEnM" },
              { name: "Gaming Site", img: "https://www.lifewire.com/thmb/euCVaf02ia3F8n2ywzX_Y28r4e4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freegamespogo-fd5546cde8f84dc0b03e4612b255d006.jpg" },
              { name: "AI Voiceover Site", img: "https://framerusercontent.com/images/D36SomQ46h1qreOtIDj2DEuZoXY.png" },
              { name: "Shopping Store", img: "https://static.vecteezy.com/system/resources/previews/001/925/571/non_2x/online-shopping-store-on-website-and-mobile-phone-design-smart-business-marketing-concept-horizontal-view-illustration-vector.jpg" },
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <Image src={project.img} alt={project.name} className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{project.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 4th Section: Animation */}
        <section className="py-10 bg-gray-100 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-gray-800">Data Animation</h2>
          <div className="mt-6 flex justify-center space-x-4 relative w-[50vw]">
            <div className="server-animation w-32 h-32 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
              Server
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="data-packet w-6 h-6 bg-green-500 rounded-full absolute top-1/2 left-10 transform -translate-y-1/2"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-white text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
