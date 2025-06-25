import React from 'react';

const ProductCard = ({ component, isSelected, handleComponentSelect, updateComponentContent }) => {
  const { id, content, style } = component;
  const { name, price, description, image } = content;

  return (
    <div
      className={`relative p-4 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
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
      <div className="max-w-sm mx-auto">
        <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{price}</p>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;