import React from 'react'; 

const Contact = () => { 
  return ( 
<section className="relative py-20 bg-gradient-to-b from-teal-500 to-soft-yellow-500">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598501482694-5d5b5f4e1c73?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-50"></div>
  <div className="container mx-auto relative z-10 text-center">
    <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-yellow-300 font-bold leading-tight mb-8">Contact Us</h2>
    <p className="text-lg text-gray-700 mb-8">For inquiries, reach us at <a href="mailto:contact@petstuff.com" className="text-teal-600 underline">contact@petstuff.com</a>.</p>
    
    <form className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-4">
        <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" required />
      </div>
      <div className="mb-4">
        <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" rows="4" required></textarea>
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-yellow-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">Send Message</button>
    </form>
  </div>
</section>
}; 

export default Contact;