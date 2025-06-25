import React from 'react';

const ProductGrid = ({ component, isSelected, handleComponentSelect, updateComponentContent }) => {
  const { id, content, style } = component;
  const { title, products } = content;

  return (
    <div
      className={`relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      style={{ backgroundColor: style.backgroundColor, color: style.textColor, padding: style.padding }}
      onClick={() => handleComponentSelect(id)}
    >
      <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 bg-white rounded shadow p-1">
        <button className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-arrows-alt"></i>
        </button>
        <button className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-copy"></i>
        </button>
        <button className="p-1 text-gray-500 hover:text-red-600 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;