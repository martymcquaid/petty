import React from 'react'; 

const Products = () => { 
  return ( 
<section className="py-20 bg-gradient-to-b from-teal-500 to-soft-yellow-500 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574158629687-37e7e5f835b8?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-50"></div>
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-yellow-300 font-bold leading-tight">Everything Your Pet Needs—All in One Place!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
          <img src="https://images.unsplash.com/photo-1560807708-8cc77767d783?w=400&h=300&fit=crop" alt="Dog Toy" className="rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">Dog Toy</h3>
          <p className="text-gray-700">$9.99</p>
          <button className="mt-4 bg-gradient-to-r from-teal-500 to-yellow-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">Add to Cart</button>
        </div>
        {/* Repeat for other products */}
      </div>
    </div>
  </section>
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Products;