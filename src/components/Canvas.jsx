// import React from "react";
// import ProductGrid from "./ProductGrid";
// // import FeaturedCollection from './FeaturedCollection';
// import { FeaturedCollection } from "../sections/FeaturedCollection/FeaturedCollection";
// import ProductCard from "./ProductCard";
// import NavbarSection from "../sections/NavbarSection";
// import { Hero } from "../sections/HeroSection/Hero";
// import { FeaturedProduct } from "../sections/FeaturedProduct/FeaturedProduct";
// import { Footer } from "../sections/Footer/Footer";
// import { Navbar } from "../sections/NavbarTemplate/NavbarTemplate";
// import { ContactForm } from "../sections/ContactForm/ContactForm";
// import { PreFooterEmailSignup } from "../sections/PreFooter/PreFooter";
// import { ProductHighlight } from "../sections/ProductHighlight/ProductHighlight";
// import { SplitFeatureSection } from "../sections/SplitFeatureSection/SplitFeatureSection";
// import { ImageWithTextSection } from "../sections/ImageWithText/ImageWithText";
// import { MultimediaCollage } from "../sections/MultimediaCollage/MultimediaCollage";
// // import { FeaturedCollectionEditor } from '../sections/FeaturedCollection/FeaturedCollectionEditor';

// const Canvas = ({
//   currentPage,
//   isPageDropdownOpen,
//   setIsPageDropdownOpen,
//   pages,
//   handlePageSelect,
//   previewMode,
//   setPreviewMode,
//   showComponentPanel,
//   showPropertiesPanel,
//   setShowComponentPanel,
//   setShowPropertiesPanel,
//   // previewMode,
//   components,
//   canvasComponents,
//   handleDrop,
//   handleDragOver,
//   handleComponentSelect,
//   selectedComponent,
//   updateComponentContent,
//   logo,
//   navItems,
//   getNavbarStyle,
//   getNavItemStyle,
// }) => {
//   console.log("Canvas components:", components);
//   return (
//     <div className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
//       {!showComponentPanel && (
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-r-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
//           onClick={() => setShowComponentPanel(true)}
//         >
//           <i className="fas fa-chevron-right"></i>
//         </button>
//       )}
//       {!showPropertiesPanel && (
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-l-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
//           onClick={() => setShowPropertiesPanel(true)}
//         >
//           <i className="fas fa-chevron-left"></i>
//         </button>
//       )}
//       <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
//         <div className="flex items-center">
//           {/* <span className="text-sm font-medium text-gray-700 mr-3">Canvas:</span>
//           <div className="relative">
//             <button className="flex items-center px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap">
//               <span>Home Page</span>
//               <i className="fas fa-chevron-down ml-2 text-xs"></i>
//             </button>
//           </div> */}
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <button
//                 id="page-dropdown-button"
//                 className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 cursor-pointer !rounded-button whitespace-nowrap"
//                 onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
//               >
//                 <span>{currentPage}</span>
//                 <i
//                   className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
//                     isPageDropdownOpen ? "transform rotate-180" : ""
//                   }`}
//                 ></i>
//               </button>
//               {isPageDropdownOpen && (
//                 <div
//                   id="page-dropdown"
//                   className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
//                 >
//                   {pages.map((page) => (
//                     <button
//                       key={page.id}
//                       className={`w-full text-left px-4 py-2 text-sm ${
//                         currentPage === page.name
//                           ? "bg-blue-50 text-blue-600"
//                           : "text-gray-700 hover:bg-gray-50"
//                       } cursor-pointer whitespace-nowrap`}
//                       onClick={() => handlePageSelect(page.name)}
//                     >
//                       {page.name}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center space-x-2">
//               <button className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
//                 <i className="fas fa-undo"></i>
//               </button>
//               <button className="p-2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap">
//                 <i className="fas fa-redo"></i>
//               </button>
//             </div>
//             <div className="flex items-center bg-gray-100 rounded-md p-1">
//               <button
//                 className={`p-2 ${
//                   previewMode === "desktop"
//                     ? "bg-white shadow-sm rounded"
//                     : "text-gray-500"
//                 } cursor-pointer !rounded-button whitespace-nowrap`}
//                 onClick={() => setPreviewMode("desktop")}
//               >
//                 <i className="fas fa-desktop"></i>
//               </button>
//               <button
//                 className={`p-2 ${
//                   previewMode === "tablet"
//                     ? "bg-white shadow-sm rounded"
//                     : "text-gray-500"
//                 } cursor-pointer !rounded-button whitespace-nowrap`}
//                 onClick={() => setPreviewMode("tablet")}
//               >
//                 <i className="fas fa-tablet-alt"></i>
//               </button>
//               <button
//                 className={`p-2 ${
//                   previewMode === "mobile"
//                     ? "bg-white shadow-sm rounded"
//                     : "text-gray-500"
//                 } cursor-pointer !rounded-button whitespace-nowrap`}
//                 onClick={() => setPreviewMode("mobile")}
//               >
//                 <i className="fas fa-mobile-alt"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md cursor-pointer !rounded-button whitespace-nowrap">
//             <i className="fas fa-code mr-1"></i>Code View
//           </button>
//           <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md cursor-pointer !rounded-button whitespace-nowrap">
//             <i className="fas fa-eye mr-1"></i>Preview
//           </button>
//         </div>
//       </div>
//       <div
//         className="flex-1 overflow-y-auto p-6"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//       >
//         <div
//           className={`mx-auto bg-gray-100 rounded-lg transition-all ${
//             previewMode === "desktop"
//               ? "max-w-full"
//               : previewMode === "tablet"
//               ? "max-w-2xl"
//               : "max-w-sm"
//           }`}
//         >
//           {canvasComponents.length === 0 ? (
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
//               <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                 <i className="fas fa-plus text-gray-400 text-xl"></i>
//               </div>
//               <h3 className="text-lg font-medium text-gray-700 mb-2">
//                 Add your first component
//               </h3>
//               <p className="text-gray-500 mb-4">
//                 Drag and drop components from the left panel to start building
//                 your page
//               </p>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
//                 <i className="fas fa-plus mr-2"></i>Add Component
//               </button>
//             </div>
//           ) : (
//             <>
//               {components?.map((component) => {
//                 switch (component?.component) {
//                   case "HeroSection":
//                     return (
//                       <div className="mb-4">
//                         <Hero
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                         />
//                       </div>
//                     );
//                   case "FeaturedCollection":
//                     return (
//                       <div className="mb-4">
//                         <FeaturedCollection
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                         />
//                       </div>
//                     );
//                   case "FeaturedProduct":
//                     return (
//                       <div className="mb-4">
//                         <FeaturedProduct
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "Footer":
//                     return (
//                       <div className="mb-4">
//                         <Footer
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );

//                   case "Navbar":
//                     return (
//                       <div className="mb-4">
//                         <Navbar
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "ContactForm":
//                     return (
//                       <div className="mb-4">
//                         <ContactForm
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "PreFooterEmailSignup":
//                     return (
//                       <div className="mb-4">
//                         <PreFooterEmailSignup
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "ProductHighlight":
//                     return (
//                       <div className="mb-4">
//                         <ProductHighlight
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "SplitFeatureSection":
//                     return (
//                       <div className="mb-4">
//                         <SplitFeatureSection
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "ImageWithTextSection":
//                     return (
//                       <div className="mb-4">
//                         <ImageWithTextSection
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   case "MultimediaCollage":
//                     return (
//                       <div className="mb-4">
//                         <MultimediaCollage
//                           key={component.id}
//                           data={component}
//                           isSelected={selectedComponent === component.id}
//                           handleComponentSelect={handleComponentSelect}
//                           // updateComponentContent={updateComponentContent}
//                         />
//                       </div>
//                     );
//                   default:
//                     return null;
//                 }
//               })}

//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
//                 <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                   <i className="fas fa-plus text-gray-400 text-xl"></i>
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-700 mb-2">
//                   Add your first component
//                 </h3>
//                 <p className="text-gray-500 mb-4">
//                   Drag and drop components from the left panel to start building
//                   your page
//                 </p>
//                 <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer !rounded-button whitespace-nowrap">
//                   <i className="fas fa-plus mr-2"></i>Add Component
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Canvas;



import React from "react";
import ProductGrid from "./ProductGrid";
// import FeaturedCollection from './FeaturedCollection';
import { FeaturedCollection } from "../sections/FeaturedCollection/FeaturedCollection";
import ProductCard from "./ProductCard";
import NavbarSection from "../sections/NavbarSection";
import { Hero } from "../sections/HeroSection/Hero";
import { FeaturedProduct } from "../sections/FeaturedProduct/FeaturedProduct";
import { Footer } from "../sections/Footer/Footer";
import { Navbar } from "../sections/NavbarTemplate/NavbarTemplate";
import { ContactForm } from "../sections/ContactForm/ContactForm";
import { PreFooterEmailSignup } from "../sections/PreFooter/PreFooter";
import { ProductHighlight } from "../sections/ProductHighlight/ProductHighlight";
import { SplitFeatureSection } from "../sections/SplitFeatureSection/SplitFeatureSection";
import { ImageWithTextSection } from "../sections/ImageWithText/ImageWithText";
import { MultimediaCollage } from "../sections/MultimediaCollage/MultimediaCollage";

const Canvas = ({
  currentPage,
  isPageDropdownOpen,
  setIsPageDropdownOpen,
  pages,
  handlePageSelect,
  previewMode,
  setPreviewMode,
  showComponentPanel,
  showPropertiesPanel,
  setShowComponentPanel,
  setShowPropertiesPanel,
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
  console.log("Canvas components:", components);

  const renderAddComponentDropZone = () => (
    <div className="mb-4 border-2 border-dashed border-blue-400 rounded-lg p-6 text-center bg-blue-50">
      <div className="mx-auto h-12 w-12 bg-white rounded-full flex items-center justify-center mb-3 border border-blue-200">
        <i className="fas fa-plus text-blue-500 text-lg"></i>
      </div>
      <h4 className="text-md font-semibold text-blue-700 mb-1">
        Add a new component here
      </h4>
      <p className="text-blue-600 text-sm mb-2">
        Drag and drop or click to add a new component
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        <i className="fas fa-plus mr-2"></i>Add Component
      </button>
    </div>
  );

  return (
    <div className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
      {!showComponentPanel && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-r-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => setShowComponentPanel(true)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
      {!showPropertiesPanel && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-l-md p-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => setShowPropertiesPanel(true)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              className="flex items-center px-3 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200"
              onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
            >
              <span>{currentPage}</span>
              <i
                className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${
                  isPageDropdownOpen ? "transform rotate-180" : ""
                }`}
              ></i>
            </button>
            {isPageDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      currentPage === page.name
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => handlePageSelect(page.name)}
                  >
                    {page.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-undo"></i>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <i className="fas fa-redo"></i>
            </button>
          </div>
          <div className="flex items-center bg-gray-100 rounded-md p-1">
            <button
              className={`p-2 ${
                previewMode === "desktop"
                  ? "bg-white shadow-sm rounded"
                  : "text-gray-500"
              }`}
              onClick={() => setPreviewMode("desktop")}
            >
              <i className="fas fa-desktop"></i>
            </button>
            <button
              className={`p-2 ${
                previewMode === "tablet"
                  ? "bg-white shadow-sm rounded"
                  : "text-gray-500"
              }`}
              onClick={() => setPreviewMode("tablet")}
            >
              <i className="fas fa-tablet-alt"></i>
            </button>
            <button
              className={`p-2 ${
                previewMode === "mobile"
                  ? "bg-white shadow-sm rounded"
                  : "text-gray-500"
              }`}
              onClick={() => setPreviewMode("mobile")}
            >
              <i className="fas fa-mobile-alt"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md">
            <i className="fas fa-code mr-1"></i>Code View
          </button>
          <button className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md">
            <i className="fas fa-eye mr-1"></i>Preview
          </button>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto p-6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div
          className={`mx-auto bg-gray-100 rounded-lg transition-all ${
            previewMode === "desktop"
              ? "max-w-full"
              : previewMode === "tablet"
              ? "max-w-2xl"
              : "max-w-sm"
          }`}
        >
          {canvasComponents.length === 0 ? (
            renderAddComponentDropZone()
          ) : (
            <>
              {components.map((component) => (
                <React.Fragment key={component.id}>
                  <div className="mb-4">
                    {{
                      HeroSection: (
                        <Hero
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      FeaturedCollection: (
                        <FeaturedCollection
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      FeaturedProduct: (
                        <FeaturedProduct
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      Footer: (
                        <>
                          {renderAddComponentDropZone()}
                          <Footer
                            data={component}
                            isSelected={selectedComponent === component.id}
                            handleComponentSelect={handleComponentSelect}
                          />
                        </>
                      ),
                      Navbar: (
                        <>
                          <Navbar
                            data={component}
                            isSelected={selectedComponent === component.id}
                            handleComponentSelect={handleComponentSelect}
                          />
                          {/* {renderAddComponentDropZone()} */}
                        </>
                      ),
                      ContactForm: (
                        <ContactForm
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      PreFooterEmailSignup: (
                        <PreFooterEmailSignup
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      ProductHighlight: (
                        <ProductHighlight
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      SplitFeatureSection: (
                        <SplitFeatureSection
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      ImageWithTextSection: (
                        <ImageWithTextSection
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                      MultimediaCollage: (
                        <MultimediaCollage
                          data={component}
                          isSelected={selectedComponent === component.id}
                          handleComponentSelect={handleComponentSelect}
                        />
                      ),
                    }[component.component] || null}
                  </div>
                  
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
