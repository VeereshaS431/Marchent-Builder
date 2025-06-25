import React from 'react';

const Sidebar = ({
  showComponentPanel,
  setShowComponentPanel,
  componentCategories,
  handleDragStart,
  handleDragEnd,
}) => {
  return (
    showComponentPanel && (
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-9 pr-4 py-2 bg-gray-100 border-none rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {componentCategories.map((category, index) => (
            <div key={index} className="mb-2">
              <div className="px-4 py-2 text-sm font-medium text-gray-700 flex justify-between items-center">
                <span>{category.name}</span>
                <i className="fas fa-chevron-down text-xs text-gray-400"></i>
              </div>
              <div className="px-2">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-move"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    onDragEnd={handleDragEnd}
                  >
                    <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center mr-3">
                      <i className={`fas fa-${item.icon} text-gray-500`}></i>
                    </div>
                    <span className="text-sm text-gray-700">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <button
            className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap"
            onClick={() => setShowComponentPanel(false)}
          >
            <i className="fas fa-chevron-left mr-2"></i>Hide Panel
          </button>
        </div>
      </div>
    )
  );
};

export default Sidebar;