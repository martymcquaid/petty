import React from 'react'; 

const Home = () => { 
  return ( 
    <section className="relative min-h-screen bg-gradient-to-b from-teal-500 to-soft-yellow-500"> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div> 
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10 text-center py-24"> 
        <h1 className="text-6xl text-white font-bold leading-tight">Everything Your Pet Needs—All in One Place!</h1> 
        <p className="mt-4 text-lg text-white">Shop our wide range of pet products for dogs, cats, and birds.</p> 
        <div className="mt-8 space-x-4"> 
          <button className="bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl">Shop Now</button> 
          <button className="border-2 border-white text-white px-8 py-4 rounded-full">Learn More</button> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Home;