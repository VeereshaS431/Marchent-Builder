import React from 'react';

const Themes = ({
  availableThemes,
  selectedTheme,
  setSelectedTheme,
  setComponents,
  setActiveTab,
}) => {
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme.id);
    setComponents((prev) =>
      prev.map((comp) => ({
        ...comp,
        style: {
          ...comp.style,
          backgroundColor: theme.colors.background || comp.style.backgroundColor,
          textColor: theme.colors.text || comp.style.textColor,
        },
      }))
    );
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Themes</h2>
        <p className="text-gray-600 mt-2">Choose a theme to style your online store</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {availableThemes.map((theme) => (
          <div
            key={theme.id}
            className={`bg-white rounded-lg shadow p-4 cursor-pointer transition ${
              selectedTheme === theme.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
            }`}
            onClick={() => handleThemeSelect(theme)}
          >
            <img
              src={theme.preview}
              alt={theme.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium text-gray-800">{theme.name}</h3>
            <p className="text-sm text-gray-600">{theme.description}</p>
            <div className="mt-4 flex space-x-2">
              <div
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              ></div>
              <div
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: theme.colors.secondary }}
              ></div>
              <div
                className="h-6 w-6 rounded-full"
                style={{ backgroundColor: theme.colors.accent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Customize Theme</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Primary Color</label>
            <input
              type="color"
              className="w-full h-10 p-1 border border-gray-300 rounded"
              disabled={!selectedTheme}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Secondary Color</label>
            <input
              type="color"
              className="w-full h-10 p-1 border border-gray-300 rounded"
              disabled={!selectedTheme}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Accent Color</label>
            <input
              type="color"
              className="w-full h-10 p-1 border border-gray-300 rounded"
              disabled={!selectedTheme}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Typography</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              disabled={!selectedTheme}
            >
              <option>Sans-serif</option>
              <option>Serif</option>
              <option>Monospace</option>
            </select>
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap"
          disabled={!selectedTheme}
          onClick={() => setActiveTab('builder')}
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default Themes;