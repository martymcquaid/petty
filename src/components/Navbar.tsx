import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => { 
  return ( 
    <nav className="backdrop-blur-md bg-white/80 shadow-lg py-4 sticky top-0 z-50"> 
      <div className="container mx-auto flex justify-between items-center"> 
        <Link to="/" className="text-teal-500 text-2xl font-bold">Pet Stuff</Link> 
        <div className="space-x-4"> 
          <Link to="/" className="text-gray-700 hover:text-teal-500">Home</Link> 
          <Link to="/products" className="text-gray-700 hover:text-teal-500">Products</Link> 
          <Link to="/about" className="text-gray-700 hover:text-teal-500">About</Link> 
          <Link to="/contact" className="text-gray-700 hover:text-teal-500">Contact</Link> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;