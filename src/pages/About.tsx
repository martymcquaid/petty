import React from 'react'; 

const About = () => { 
  return ( 
<section className="py-20 bg-gradient-to-b from-teal-500 to-soft-yellow-500">
    <div className="container mx-auto text-center">
      <h2 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-yellow-300">About Us</h2>
      <p className="text-lg text-gray-800 mb-8">At Pet Stuff, we are passionate about providing the best products for your furry friends. Our mission is to ensure every pet is happy and healthy.</p>
      <div className="flex justify-center gap-8 mb-10">
        <button className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">Shop Now</button>
        <button className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300">Learn More</button>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700">To provide quality products and services that enhance the lives of pets and their owners.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
          <p className="text-gray-700">We offer a wide range of products and a commitment to customer satisfaction.</p>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
          <p className="text-gray-700">A passionate group of pet lovers dedicated to serving your needs.</p>
        </div>
      </div>
    </div>
  </section>
    </section> 
  ); 
}; 

export default About;