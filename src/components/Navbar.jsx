import React from 'react';

const Navbar = ({
  projectName,
  currentPage,
  isPageDropdownOpen,
  setIsPageDropdownOpen,
  pages,
  handlePageSelect,
  previewMode,
  setPreviewMode,
  saveStatus,
  handleSave,
  handlePublish,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-4">
          <div className="text-blue-600 text-2xl font-bold">
            <i className="fas fa-store-alt mr-2"></i>ShopBuilder
          </div>
          <div className="h-6 w-px bg-gray-300"></div>
          <div className="text-gray-700 font-medium">{projectName}</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              id="page-dropdown-button"
              className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
              onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
            >
              <span>{currentPage}</span>
              <i
                className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
                  isPageDropdownOpen ? 'transform rotate-180' : ''
                }`}
              ></i>
            </button>
            {isPageDropdownOpen && (
              <div
                id="page-dropdown"
                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              >
                {pages.map((page) => (
                  <button
                    key={page.id}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      currentPage === page.name
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    } cursor-pointer whitespace-nowrap`}
                    onClick={() => handlePageSelect(page.name)}
                  >
                    {page.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-undo"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <div className="flex items-center bg-gray-100 rounded-md p-1">
            <button
              className={`p-2 ${
                previewMode === 'desktop' ? 'bg-white shadow-sm rounded' : 'text-gray-500'
              } cursor-pointer !rounded-button whitespace-nowrap`}
              onClick={() => setPreviewMode('desktop')}
            >
              <i className="fas fa-desktop"></i>
            </button>
            <button
              className={`p-2 ${
                previewMode === 'tablet' ? 'bg-white shadow-sm rounded' : 'text-gray-500'
              } cursor-pointer !rounded-button whitespace-nowrap`}
              onClick={() => setPreviewMode('tablet')}
            >
              <i className="fas fa-tablet-alt"></i>
            </button>
            <button
              className={`p-2 ${
                previewMode === 'mobile' ? 'bg-white shadow-sm rounded' : 'text-gray-500'
              } cursor-pointer !rounded-button whitespace-nowrap`}
              onClick={() => setPreviewMode('mobile')}
            >
              <i className="fas fa-mobile-alt"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button
            className="px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer !rounded-button whitespace-nowrap"
            onClick={handleSave}
          >
            {saveStatus === 'saving' ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>Saving
              </>
            ) : saveStatus === 'saved' ? (
              <>
                <i className="fas fa-check mr-2"></i>Saved
              </>
            ) : (
              <>
                <i className="fas fa-save mr-2"></i>Save
              </>
            )}
          </button>
          <button
            className="px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md cursor-pointer !rounded-button whitespace-nowrap"
            onClick={handlePublish}
          >
            <i className="fas fa-globe mr-2"></i>Publish
          </button>
          <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center cursor-pointer">
            <span className="text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
      <div className="flex border-t border-gray-200">
        {[
          { id: 'dashboard', icon: 'columns', label: 'Dashboard' },
          { id: 'builder', icon: 'paint-brush', label: 'Builder' },
          { id: 'products', icon: 'box', label: 'Products' },
          { id: 'analytics', icon: 'chart-line', label: 'Analytics' },
          { id: 'themes', icon: 'paint-roller', label: 'Themes' },
          { id: 'pages', icon: 'file-alt', label: 'Pages' },
          { id: 'settings', icon: 'cog', label: 'Settings' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-3 font-medium text-sm ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            } cursor-pointer !rounded-button whitespace-nowrap`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className={`fas fa-${tab.icon} mr-2`}></i>{tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;