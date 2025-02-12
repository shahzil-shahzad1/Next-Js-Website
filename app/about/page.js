import React from 'react'
import Head from 'next/head';
const page = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
      </Head>
      <main className="bg-gray-100 min-h-screen py-10 px-6 text-center">
        {/* Header Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="text-lg text-gray-600 mt-2">Discover my journey, skills, and current role.</p>
        </section>

        {/* Current Role Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Current Role</h2>
          <p className="text-gray-700 mt-4">
            I am currently working as a <span className="font-medium text-indigo-600">Senior Web Developer</span> at <span className="font-medium text-indigo-600">Google</span>. I specialize in creating scalable and efficient web solutions to meet modern-day challenges.
          </p>
        </section>

        {/* Work Time Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Work Time</h2>
          <p className="text-gray-700 mt-4">
            I am available for collaboration and freelance opportunities between <span className="font-medium">9 AM to 5 PM PST</span>. Reach out to discuss potential projects or ideas.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Experience & Expertise</h2>

          {/* Frontend Technologies */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            {[
              { name: 'HTML', img: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-html-icon-logo-vector-symbol-198641993.jpg' },
              { name: 'CSS', img: 'https://i.pinimg.com/736x/a9/dc/c7/a9dcc740cad3149598307b5de8bc10c3.jpg' },
              { name: 'JavaScript', img: 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png' },
              { name: 'React', img: 'https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon.png' },
              { name: 'Vue.js', img: 'https://cdn.iconscout.com/icon/free/png-256/free-vuejs-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175052.png?f=webp&w=256' },
              { name: 'Anime.js', img: 'https://codingtorque.com/wp-content/uploads/2024/03/image-30-1024x482.png' },
            ].map((tech, index) => (
              <div key={index} className="relative group bg-gray-50 p-4 border border-gray-200 rounded-lg shadow transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <img src={tech.img} alt={tech.name} className="w-20 h-20 mx-auto rounded-lg" />
                <h4 className="text-lg font-medium text-gray-800 mt-2">{tech.name}</h4>
                <p className="text-gray-600 text-sm">Brief description of {tech.name}.</p>
              </div>
            ))}
          </div>

          {/* Backend Technologies */}
          <h3 className="text-xl font-semibold text-gray-700 mt-10">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
            {[
              { name: 'Node.js', img: 'https://ih1.redbubble.net/image.404029208.2135/st,small,507x507-pad,600x600,f8f8f8.u1.jpg' },
              { name: 'PHP', img: 'https://www.cdnlogo.com/logos/p/79/php.svg' },
              { name: 'MongoDB', img: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg' },
              { name: 'NoSQL', img: 'https://blazeclan.com/wp-content/uploads/2013/09/A-detailed-Outlook-to-No-SQL-Know-Hows-1.png' },
              { name: 'SQL', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvGqVWQ9o3TNTdAYCHfOXsLOEzIpWSfcBFNw&s' },
              { name: 'Next.js', img: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png' },
            ].map((tech, index) => (
              <div key={index} className="relative group bg-gray-50 p-4 border border-gray-200 rounded-lg shadow transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <img src={tech.img} alt={tech.name} className="w-20 h-20 mx-auto rounded-lg" />
                <h4 className="text-lg font-medium text-gray-800 mt-2">{tech.name}</h4>
                <p className="text-gray-600 text-sm">Brief description of {tech.name}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Address Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
          <p className="text-gray-700 mt-4">
            Based in <span className="font-medium">Mountain View, California</span>. Feel free to connect for both online and in-person discussions.
          </p>
        </section>

        {/* Social Links Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Connect with Me</h2>
          <div className="flex justify-center gap-6 mt-6">
            {[
              { name: 'Facebook', img: 'https://img.freepik.com/premium-vector/art-illustration_929495-41.jpg', link: '#' },
              { name: 'Instagram', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png', link: '#' },
              { name: 'LinkedIn', img: 'https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png', link: '#' },
              { name: 'GitHub', img: 'https://banner2.cleanpng.com/20240213/gpl/transparent-group-of-people-group-of-people-wearing-hats-and-scarves-holding-1710879275232.webp', link: '#' },
              { name: 'Docker', img: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/docker_alt_macos_bigsur_icon_190232.png', link: '#' },
              { name: 'Pinterest', img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png', link: '#' },
            ].map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-center transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <img src={social.img} alt={social.name} className="w-12 h-12 mx-auto" />
                <p className="text-gray-600 text-sm mt-2">{social.name}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
