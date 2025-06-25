import React from 'react';

const PropertiesPanel = ({
  selectedComponent,
  components,
  canvasComponents,
  mockProperties,
  updateComponentContent,
  updateComponentStyle,
  handlePropertyChange,
  setShowPropertiesPanel,
}) => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-medium text-gray-800">Edit Component</h3>
        <button
          className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
          onClick={() => setShowPropertiesPanel(false)}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Content</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Heading</label>
              <input
                type="text"
                value={components.find((c) => c.id === selectedComponent)?.content.heading || ''}
                onChange={(e) => updateComponentContent(selectedComponent, 'heading', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Subheading</label>
              <input
                type="text"
                value={components.find((c) => c.id === selectedComponent)?.content.subheading || ''}
                onChange={(e) => updateComponentContent(selectedComponent, 'subheading', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Button Text</label>
              <input
                type="text"
                value={components.find((c) => c.id === selectedComponent)?.content.buttonText || ''}
                onChange={(e) => updateComponentContent(selectedComponent, 'buttonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Style</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Background Color</label>
              <input
                type="color"
                value={components.find((c) => c.id === selectedComponent)?.style.backgroundColor || '#ffffff'}
                onChange={(e) => updateComponentStyle(selectedComponent, 'backgroundColor', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Text Color</label>
              <input
                type="color"
                value={components.find((c) => c.id === selectedComponent)?.style.textColor || '#1f2937'}
                onChange={(e) => updateComponentStyle(selectedComponent, 'textColor', e.target.value)}
                className="w-full h-10 p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Padding</label>
              <select
                value={components.find((c) => c.id === selectedComponent)?.style.padding || '2rem'}
                onChange={(e) => updateComponentStyle(selectedComponent, 'padding', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="1rem">Small</option>
                <option value="2rem">Medium</option>
                <option value="3rem">Large</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Component</h4>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Type</label>
              <div className="bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-700">
                {canvasComponents.find((c) => c.id === selectedComponent)?.type || 'Component'}
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Name</label>
              <input
                type="text"
                value={canvasComponents.find((c) => c.id === selectedComponent)?.name || ''}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Content</h4>
            <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
          <div className="space-y-4">
            {mockProperties.content.map((prop, index) => (
              <div key={index}>
                <label className="block text-xs text-gray-500 mb-1">{prop.name}</label>
                <input
                  type="text"
                  value={prop.value}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => handlePropertyChange('content', index, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Style</h4>
            <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
          <div className="space-y-4">
            {mockProperties.style.map((prop, index) => (
              <div key={index}>
                <label className="block text-xs text-gray-500 mb-1">{prop.name}</label>
                {prop.type === 'color' ? (
                  <div className="flex items-center">
                    <div
                      className="h-6 w-6 rounded-md border border-gray-300 mr-2"
                      style={{ backgroundColor: prop.value }}
                    ></div>
                    <input
                      type="text"
                      value={prop.value}
                      className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      onChange={(e) => handlePropertyChange('style', index, e.target.value)}
                    />
                  </div>
                ) : prop.type === 'range' ? (
                  <div className="flex items-center">
                    <input
                      type="range"
                      min={prop.min}
                      max={prop.max}
                      value={prop.value}
                      className="flex-1 mr-2"
                      onChange={(e) => handlePropertyChange('style', index, parseInt(e.target.value))}
                    />
                    <span className="text-sm text-gray-700 w-8 text-center">{prop.value}</span>
                  </div>
                ) : (
                  <input
                    type="text"
                    value={prop.value}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handlePropertyChange('style', index, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-sm font-medium text-gray-700">Layout</h4>
            <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
          <div className="space-y-4">
            {mockProperties.layout.map((prop, index) => (
              <div key={index}>
                <label className="block text-xs text-gray-500 mb-1">{prop.name}</label>
                {prop.type === 'range' ? (
                  <div className="flex items-center">
                    <input
                      type="range"
                      min={prop.min}
                      max={prop.max}
                      value={prop.value}
                      className="flex-1 mr-2"
                      onChange={(e) => handlePropertyChange('layout', index, parseInt(e.target.value))}
                    />
                    <span className="text-sm text-gray-700 w-8 text-center">{prop.value}</span>
                  </div>
                ) : prop.type === 'select' ? (
                  <div className="relative">
                    <select
                      value={prop.value}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      onChange={(e) => handlePropertyChange('layout', index, e.target.value)}
                    >
                      {prop.options?.map((option, optIndex) => (
                        <option key={optIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-2.5 pointer-events-none">
                      <i className="fas fa-chevron-down text-gray-400"></i>
                    </div>
                  </div>
                ) : (
                  <input
                    type="text"
                    value={prop.value}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => handlePropertyChange('layout', index, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-trash mr-2"></i>Delete Component
        </button>
      </div>
    </div>
  );
};

export default PropertiesPanel;