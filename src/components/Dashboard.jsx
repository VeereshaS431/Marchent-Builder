import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Store Overview</h3>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer !rounded-button whitespace-nowrap">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Total Products</p>
              <p className="text-2xl font-semibold text-gray-800">24</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-800">142</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <p className="textelementor-400 text-2xl font-semibold text-gray-800">$5,240</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
              <p className="text-2xl font-semibold text-gray-800">3.2%</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Recent Orders</h3>
            <button className="text-blue-600 text-sm hover:text-blue-600 text-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Order #1082</p>
                <p className="text-xs text-gray-500">June 25, 2025 • $124.00</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Completed
              </span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Order #1081</p>
                <p className="text-xs text-gray-500">June 24, 2025 • $89.50</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Processing
              </span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Order #1080</p>
                <p className="text-xs text-gray-500">June 24, 2025 • $215.75</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer !rounded-button whitespace-nowrap">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <i className="fas fa-plus"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">Add Product</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer !rounded-button whitespace-nowrap">
              <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-2">
                <i className="fas fa-paint-brush"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">Edit Theme</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer !rounded-button whitespace-nowrap">
              <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <i className="fas fa-tag"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">Create Discount</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer !rounded-button whitespace-nowrap">
              <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <i className="fas fa-bullhorn"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">Marketing</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Store Performance</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
                Last 7 Days
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer !rounded-button whitespace-nowrap">
                Last 30 Days
              </button>
            </div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <i className="fas fa-chart-line text-4xl text-gray-300 mb-2"></i>
              <p className="text-gray-500">Performance chart will appear here</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Top Products</h3>
            <button className="text-blue-600 text-sm hover:text-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                name: 'Premium Cotton T-Shirt',
                image: 'https://readdy.ai/api/search-image?query=A%20minimal%20and%20elegant%20white%20t-shirt%20on%20a%20clean%20light%20gray%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20high-quality%20fabric%20texture%20visible%2C%20simple%20and%20modern%20styling%20perfect%20for%20e-commerce&width=100&height=100&seq=1&orientation=squarish',
                sold: 18,
                price: '$29.99',
              },
              {
                name: 'Vintage Denim Jacket',
                image: 'https://readdy.ai/api/search-image?query=A%20stylish%20denim%20jacket%20photographed%20on%20a%20light%20gray%20background%2C%20showing%20texture%20details%20and%20quality%20stitching%2C%20professional%20e-commerce%20product%20photography%20with%20clean%20lighting%20and%20minimal%20shadows&width=100&height=100&seq=2&orientation=squarish',
                sold: 12,
                price: '$89.99',
              },
              {
                name: 'Classic White Sneakers',
                image: 'https://readdy.ai/api/search-image?query=A%20pair%20of%20minimalist%20white%20sneakers%20on%20a%20light%20gray%20background%2C%20showing%20clean%20design%20details%2C%20high-quality%20leather%20texture%2C%20professional%20product%20photography%20with%20soft%20shadows%20for%20e-commerce%20website&width=100&height=100&seq=3&orientation=squarish',
                sold: 10,
                price: '$79.99',
              },
              {
                name: 'Leather Slim Wallet',
                image: 'https://readdy.ai/api/search-image?query=A%20stylish%20black%20leather%20wallet%20photographed%20on%20a%20light%20gray%20background%2C%20showing%20texture%20details%20and%20craftsmanship%2C%20professional%20e-commerce%20product%20photography%20with%20clean%20lighting%20and%20minimal%20shadows&width=100&height=100&seq=4&orientation=squarish',
                sold: 8,
                price: '$49.99',
              },
            ].map((product, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 object-cover rounded mr-3"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-500">{product.sold} sold • {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;