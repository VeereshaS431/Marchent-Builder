import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  projectName,
  // currentPage,
  // isPageDropdownOpen,
  // setIsPageDropdownOpen,
  // pages,
  // handlePageSelect,
  // previewMode,
  // setPreviewMode,
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
        <div className="flex items-center space-x-3">
          <button
            className="px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer !rounded-button whitespace-nowrap"
            onClick={handleSave}
          >
            {saveStatus === "saving" ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>Saving
              </>
            ) : saveStatus === "saved" ? (
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
          { id: "dashboard", icon: "columns", label: "Dashboard", paths:"/" },
          { id: "builder", icon: "paint-brush", label: "Builder", paths:"/builder" },
          { id: "products", icon: "box", label: "Products", paths:'/products' },
          { id: "analytics", icon: "chart-line", label: "Analytics", paths:'/analytics' },
          { id: "themes", icon: "paint-roller", label: "Themes" , paths:'/themes'},
          { id: "pages", icon: "file-alt", label: "Pages" , paths:'/pages'},
          { id: "settings", icon: "cog", label: "Settings", paths:'/settings' },
        ].map((tab) => (
          <Link to={tab.paths}>
            <button
              key={tab.id}
              className={`px-4 py-3 font-medium text-sm ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              } cursor-pointer !rounded-button whitespace-nowrap`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fas fa-${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
