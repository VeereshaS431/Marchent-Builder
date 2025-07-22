import React from 'react';

const FeaturedCollection = ({ component, isSelected, handleComponentSelect, updateComponentContent }) => {
  const { id, content, style } = component;
  const { title, description, buttonText, image } = content;

  return (
    <div
      className={`relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      style={{
        color: style.typography.color, paddingTop: style.spacing.paddingTop, paddingBottom: style.spacing.paddingBottom, paddingLeft: style.spacing.paddingLeft, paddingRight: style.spacing.paddingRight, marginTop: style.spacing.marginTop, marginBottom: style.spacing.marginBottom, marginLeft: style.spacing.marginLeft, marginRight: style.spacing.marginRight, itemSpacing: style.spacing.itemSpacing,
        borderRadius: style.effects.borderRadius, borderWidth: style.effects.borderWidth, borderStyle: style.effects.borderStyle, borderColor: style.effects.borderColor, boxShadow: style.effects.boxShadow,
        display: "flex", flexDirection: style.layout.orientation === 'horizontal' ? 'row' : 'column', alignItems: style.layout.orientation === 'horizontal' ? 'center' : 'flex-start',
        justifyContent:
          style.layout.alignment === "start"
            ? "flex-start"
            : style.layout.alignment === "end"
              ? "flex-end"
              : "center",
        opacity: style.background.opacity / 100,
        backgroundColor:
          style.background.type === "solid" ? style.background.color : "transparent",
        backgroundImage:
          style.background.type === "gradient" ? style.background.gradient : "none",
      }}
      onClick={() => handleComponentSelect(id)}
    >
      {/* <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 bg-white rounded shadow p-1">
        <button className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-arrows-alt"></i>
        </button>
        <button className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-copy"></i>
        </button>
        <button className="p-1 text-gray-500 hover:text-red-600 cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-trash"></i>
        </button>
      </div> */}
      <div className="max-w-7xl mx-auto"
        style={{
          display: "flex", flexDirection: style.layout.orientation === 'horizontal' ? 'row' : 'column', alignItems: style.layout.orientation === 'horizontal' ? 'center' : 'flex-start',
          justifyContent:
            style.layout.alignment === "start"
              ? "flex-start"
              : style.layout.alignment === "end"
                ? "flex-end"
                : "center",
        }}
      >
        <div className="flex-1 mr-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{description}</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
            {buttonText}
          </button>
        </div>
        <div className="flex-1">
          <img
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            src={image} alt="Collection"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;