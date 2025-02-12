import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50 py-12">
    {/* Services Section */}
    <section className="text-center px-6 py-12">
      <h2 className="text-4xl font-semibold text-gray-800">My Services</h2>
      <p className="text-xl mt-4 text-gray-600">
        I offer top-notch web development services tailored to your business needs. Here are some of the services I provide.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
          <p className="text-gray-600 mt-4">
            Custom web development solutions, focusing on performance and user experience.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
          <p className="text-gray-600 mt-4">
            Design interfaces that provide seamless experiences to users on any device.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">E-commerce Solutions</h3>
          <p className="text-gray-600 mt-4">
            Building fast, secure, and scalable e-commerce websites for your business.
          </p>
        </div>
      </div>
    </section>

    {/* My Projects Section */}
    <section className="bg-white py-12 px-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800">My Projects</h2>
      <p className="text-center text-lg mt-4 text-gray-600">
        Here are a few of my recent web development projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Project 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://t4.ftcdn.net/jpg/06/22/39/91/360_F_622399137_jlEDsEN0pUMZA6jMKShRoq2po69QBQXj.jpg" alt="Project 1" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">E-Commerce Website</h3>
          <p className="text-gray-600 mt-2">
            An online store built with a custom CMS and integrated payment system.
          </p>
        </div>
        {/* Project 2 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://media.wired.com/photos/648ce85eeb3f06fa8140d00a/master/pass/Best-Websites-To-Show-Off-Your-Portfolio-Business-1357904435.jpg" alt="Project 2" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Portfolio Website</h3>
          <p className="text-gray-600 mt-2">
            A personal portfolio site showcasing my skills and experience.
          </p>
        </div>
        {/* Project 3 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://wallpapers.com/images/featured/business-jzw8ax93flqonkce.jpg" alt="Project 3" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Corporate Website</h3>
          <p className="text-gray-600 mt-2">
            A modern and responsive website for a corporate business.
          </p>
        </div>
        {/* Project 4 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://knowledge.hubspot.com/hubfs/best-blogging-platforms-35-20241008-6685755.webp" alt="Project 4" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Blog Platform</h3>
          <p className="text-gray-600 mt-2">
            A dynamic blog platform with a custom backend for content management.
          </p>
        </div>
      </div>
    </section>

    {/* My Clients Section */}
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800">My Clients</h2>
      <p className="text-center text-lg mt-4 text-gray-600">
        I have worked with various clients to deliver high-quality web development solutions.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {/* Client 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://appexchange.salesforce.com/partners/servlet/servlet.FileDownload?file=00P3A00000gzndMUAQ" alt="Client 1" width={200} height={200} className="rounded-lg mx-auto" />
          <p className="text-center text-gray-600 mt-4">Client A</p>
        </div>
        {/* Client 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://media.licdn.com/dms/image/v2/C560BAQG768lEUeMnpQ/company-logo_200_200/company-logo_200_200/0/1652249967052/tech_cloud_ltd_logo?e=2147483647&v=beta&t=PpF3VzpHCDgSRZXo8IpYOHBFihheQBFagVsZnYsPsyo" alt="Client 2" width={200} height={200} className="rounded-lg mx-auto" />
          <p className="text-center text-gray-600 mt-4">Client B</p>
        </div>
        {/* Client 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://i.pinimg.com/originals/76/a5/75/76a5755f11c9390e2524340ef746debd.png" alt="Client 3" width={200} height={200} className="rounded-lg mx-auto" />
          <p className="text-center text-gray-600 mt-4">Client C</p>
        </div>
        {/* Client 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFfZSI9gkcXB6558bLmhlEix_QCjG81eB4kdkjVTkIl3TmHfAix-crXf3mqQOt4_OSCA&usqp=CAU" alt="Client 4" width={200} height={200} className="rounded-lg mx-auto" />
          <p className="text-center text-gray-600 mt-4">Client D</p>
        </div>
      </div>
    </section>

    {/* My Favourite Sites Section */}
    <section className="bg-white py-12 px-6">
      <h2 className="text-4xl font-semibold text-center text-gray-800">My Favourite Sites</h2>
      <p className="text-center text-lg mt-4 text-gray-600">
        Here are a few of my favorite websites that I built and am very proud of.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Site 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd33d49a346d9be0b075ea_65dd12fa299e167d189f00f7-fed9c2116dfcf56370cea3063f4e88fa.jpeg" alt="Favorite Site 1" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Tech Blog</h3>
          <p className="text-gray-600 mt-2">A site dedicated to the latest in tech news and tutorials.</p>
        </div>
        {/* Site 2 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/free-vector/online-shopping-landing-page-template_23-2149014644.jpg?semt=ais_hybrid" alt="Favorite Site 2" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Online Store</h3>
          <p className="text-gray-600 mt-2">An e-commerce platform for buying tech gadgets.</p>
        </div>
        {/* Site 3 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/premium-psd/aesthetic-personal-portfolio-website-template_200778-21.jpg?semt=ais_hybrid" alt="Favorite Site 3" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Portfolio Site</h3>
          <p className="text-gray-600 mt-2">A personal site that showcases my work and skills.</p>
        </div>
        {/* Site 4 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <img src="https://img.freepik.com/premium-photo/website-landing-page-restaurant_1139417-125919.jpg" alt="Favorite Site 4" width={400} height={250} className="rounded-lg" />
          <h3 className="text-xl mt-4 font-semibold text-gray-800">Restaurant Website</h3>
          <p className="text-gray-600 mt-2">A sleek and modern website for a local restaurant.</p>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-gray-800 py-6 text-white text-center">
      <p className="text-lg">© 2024 Your Name. All rights reserved.</p>
      <p className="mt-2 text-sm">Built with love using Next.js and Tailwind CSS</p>
    </footer>
  </div>
  )
}

export default page
