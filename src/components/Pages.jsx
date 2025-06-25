import React, { useState } from 'react';

const Pages = ({ userPages, setUserPages, setActiveTab }) => {
  const [newPageName, setNewPageName] = useState('');

  const handleAddPage = () => {
    if (newPageName.trim()) {
      setUserPages([
        ...userPages,
        {
          id: `page-${Date.now()}`,
          name: newPageName,
          path: `/${newPageName.toLowerCase().replace(/\s+/g, '-')}`,
          isPublished: false,
        },
      ]);
      setNewPageName('');
    }
  };

  const handleEditPage = (id, newName) => {
    setUserPages(
      userPages.map((page) =>
        page.id === id
          ? { ...page, name: newName, path: `/${newName.toLowerCase().replace(/\s+/g, '-')}` }
          : page
      )
    );
  };

  const handleTogglePublish = (id) => {
    setUserPages(
      userPages.map((page) =>
        page.id === id ? { ...page, isPublished: !page.isPublished } : page
      )
    );
  };

  const handleDeletePage = (id) => {
    setUserPages(userPages.filter((page) => page.id !== id));
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Pages</h2>
        <p className="text-gray-600 mt-2">Manage your store's pages</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Add New Page</h3>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Page name (e.g., Blog)"
            value={newPageName}
            onChange={(e) => setNewPageName(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap"
            onClick={handleAddPage}
          >
            Add Page
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Page List</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="text-left py-3">Name</th>
                <th className="text-left py-3">URL Path</th>
                <th className="text-center py-3">Status</th>
                <th className="text-right py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userPages.map((page) => (
                <tr key={page.id} className="border-b hover:bg-gray-50">
                  <td className="text-left py-3">
                    <input
                      type="text"
                      value={page.name}
                      onChange={(e) => handleEditPage(page.id, e.target.value)}
                      className="px-2 py-1 border border-gray-300 rounded-md text-sm w-40 focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="text-left py-3">{page.path}</td>
                  <td className="text-center py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        page.isPublished
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {page.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="text-right py-3">
                    <button
                      className="text-blue-600 hover:text-blue-700 mr-3 cursor-pointer !rounded-button whitespace-nowrap"
                      onClick={() => setActiveTab('builder')}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="text-green-600 hover:text-green-700 mr-3 cursor-pointer !rounded-button whitespace-nowrap"
                      onClick={() => handleTogglePublish(page.id)}
                    >
                      <i className="fas fa-globe"></i>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-700 cursor-pointer !rounded-button whitespace-nowrap"
                      onClick={() => handleDeletePage(page.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pages;