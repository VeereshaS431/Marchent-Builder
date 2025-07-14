import React from 'react';
import HeroBanner from './HeroBanner';
import ProductGrid from './ProductGrid';
// import FeaturedCollection from './FeaturedCollection';
import { FeaturedCollection } from '../sections/FeaturedCollection/FeaturedCollection';
import ProductCard from './ProductCard';
import NavbarSection from '../sections/NavbarSection';
import { Hero } from '../sections/HeroSection/Hero';
import { FeaturedProduct } from '../sections/FeaturedProduct/FeaturedProduct';
import { Footer } from '../sections/Footer/Footer';
import { Navbar } from '../sections/Navbar';
import { ContactForm } from '../sections/ContactForm/ContactForm';
import { PreFooterEmailSignup } from '../sections/PreFooter/PreFooter';
import { ProductHighlight } from '../sections/ProductHighlight/ProductHighlight';
// import { FeaturedCollectionEditor } from '../sections/FeaturedCollection/FeaturedCollectionEditor';

const Canvas = ({
  showComponentPanel,
  showPropertiesPanel,
  setShowComponentPanel,
  setShowPropertiesPanel,
  previewMode,
  components,
  canvasComponents,
  handleDrop,
  handleDragOver,
  handleComponentSelect,
  selectedComponent,
  updateComponentContent,
  logo,
  navItems,
  getNavbarStyle,
  getNavItemStyle,
}) => {

  console.log('Canvas components:', components);
  return (
    <div className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
      {!showComponentPanel && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-r-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
          onClick={() => setShowComponentPanel(true)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
      {!showPropertiesPanel && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-l-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
          onClick={() => setShowPropertiesPanel(true)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-3">Canvas:</span>
          <div className="relative">
            <button className="flex items-center px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap">
              <span>Home Page</span>
              <i className="fas fa-chevron-down ml-2 text-xs"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md cursor-pointer !rounded-button whitespace-nowrap">
            <i className="fas fa-code mr-1"></i>Code View
          </button>
          <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md cursor-pointer !rounded-button whitespace-nowrap">
            <i className="fas fa-eye mr-1"></i>Preview
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6" onDrop={handleDrop} onDragOver={handleDragOver}>
        <div
          className={`mx-auto bg-gray-100 rounded-lg transition-all ${previewMode === 'desktop' ? 'max-w-full' : previewMode === 'tablet' ? 'max-w-2xl' : 'max-w-sm'
            }`}
        >
          {canvasComponents.length === 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-plus text-gray-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Add your first component</h3>
              <p className="text-gray-500 mb-4">
                Drag and drop components from the left panel to start building your page
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
                <i className="fas fa-plus mr-2"></i>Add Component
              </button>
            </div>
          ) : (
            <>
              {components?.map((component) => {
                switch (component?.component) {
                  case 'HeroSection':
                    return (
                      <div className='mb-4'>
                        {/* <HeroBanner
                          key={component.id}
                          component={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          updateComponentContent={updateComponentContent}
                        /> */}
                        <Hero
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />

                      </div>
                    );
                  case 'FeaturedCollection':
                    return (
                      <div className='mb-4'>
                        {/* <ProductGrid
                          key={component.id}
                          component={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          updateComponentContent={updateComponentContent}
                        /> */}
                        <FeaturedCollection
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  case 'FeaturedProduct':
                    return (
                      <div className='mb-4'>
                        {/* <FeaturedCollection
                          key={component.id}
                          component={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          updateComponentContent={updateComponentContent}
                        /> */}
                        <FeaturedProduct
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  case 'Footer':
                    return (
                      <div className='mb-4'>
                        {/* <ProductCard
                          key={component.id}
                          component={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          updateComponentContent={updateComponentContent}
                        /> */}
                        <Footer
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );

                  case 'Navbar':
                    return (
                      <div className='mb-4'>
                        {/* <NavbarSection
                          logo={logo}
                          navItems={navItems}
                          getNavbarStyle={getNavbarStyle}
                          getNavItemStyle={getNavItemStyle}
                          key={component.id}
                        /> */}
                        <Navbar
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  case 'ContactForm':
                    return (
                      <div className='mb-4'>
                        {/* <NavbarSection
                          logo={logo}
                          navItems={navItems}
                          getNavbarStyle={getNavbarStyle}
                          getNavItemStyle={getNavItemStyle}
                          key={component.id}
                        /> */}
                        <ContactForm
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  case 'PreFooterEmailSignup':
                    return (
                      <div className='mb-4'>
                        {/* <NavbarSection
                          logo={logo}
                          navItems={navItems}
                          getNavbarStyle={getNavbarStyle}
                          getNavItemStyle={getNavItemStyle}
                          key={component.id}
                        /> */}
                        <PreFooterEmailSignup
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  case 'ProductHighlight':
                    return (
                      <div className='mb-4'>
                        {/* <NavbarSection
                          logo={logo}
                          navItems={navItems}
                          getNavbarStyle={getNavbarStyle}
                          getNavItemStyle={getNavItemStyle}
                          key={component.id}
                        /> */}
                        <ProductHighlight
                          key={component.id}
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                          // updateComponentContent={updateComponentContent}
                        />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
              {/* <NavbarSection
                logo={logo}
                navItems={navItems}
                getNavbarStyle={getNavbarStyle}
                getNavItemStyle={getNavItemStyle}
              /> */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center" >
                <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-plus text-gray-400 text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Add your first component</h3>
                <p className="text-gray-500 mb-4">
                  Drag and drop components from the left panel to start building your page
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
                  <i className="fas fa-plus mr-2"></i>Add Component
                </button>
              </div>

              {/* featured collection component */}
              {/* <div
                className={`relative p-8 ${selectedComponent === 'featured-1' ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'
                  }`}
                onClick={() => handleComponentSelect('featured-1')}
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
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Summer Collection</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our curated selection of summer essentials designed for comfort and style.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group">
                      <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-w-1 aspect-h-1">
                        <img
                          src={`https://readdy.ai/api/search-image?query=A%20single%20fashionable%20summer%20clothing%20item%20on%20a%20clean%20light%20gray%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20detailed%20fabric%20texture%20visible%2C%20minimalist%20styling%20for%20e-commerce%20website&width=300&height=300&seq=${item + 5}&orientation=squarish`}
                          alt={`Product ${item}`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">Summer Essential #{item}</h3>
                      <p className="text-gray-600 mb-2">$59.99</p>
                      <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* about us component */}
              {/* <div
                className={`relative p-8 ${selectedComponent === 'text-1' ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'
                  }`}
                onClick={() => handleComponentSelect('text-1')}
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
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Brand</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded in 2020, our brand focuses on creating high-quality, sustainable fashion that stands the test of time. We believe in ethical manufacturing and using eco-friendly materials.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Each piece in our collection is carefully designed and crafted to ensure comfort, style, and durability. We're committed to reducing our environmental footprint while delivering exceptional products.
                  </p>
                  <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                    Learn More About Us
                  </button>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;