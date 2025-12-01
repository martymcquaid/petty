import React from 'react'; 

const Products = () => { 
  return ( 
    <section className="py-20"> 
      <div className="container mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-8">Our Products</h2> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> 
          {/* Repeat for each product */} 
          <div className="bg-white shadow-lg rounded-lg p-6"> 
            <h3 className="text-lg font-semibold">Dog Toy</h3> 
            <p className="text-gray-700">$9.99</p> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 

export default Products;