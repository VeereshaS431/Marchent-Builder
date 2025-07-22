import React from "react";
import { HeroEditor } from "../sections/HeroSection/HeroEditor";
import { NavbarEditor } from "../sections/NavbarEditor";
import { FooterEditor } from "../sections/Footer/FooterEditor";
import { FeaturedCollectionEditor } from "../sections/FeaturedCollection/FeaturedCollectionEditor";
import { FeaturedProductEditor } from "../sections/FeaturedProduct/FeaturedProductEditor";
import { ContactFormEditor } from "../sections/ContactForm/ContactFormEditor";
import { PreFooterEmailSignupEditor } from "../sections/PreFooter/PreFooterEditor";
import { ProductHighlightEditor } from "../sections/ProductHighlight/ProductHighlightEditor";
import { SplitFeatureSectionEditor } from "../sections/SplitFeatureSection/SplitFeatureSectionEditor";
import MultimediaCollageEditor from "../sections/MultimediaCollage/MultimediaCollageEditor";
import { ImageWithTextEditor } from "../sections/ImageWithText/ImageWithTextEditor";

const PropertiesPanel = ({
  selectedComponent,
  components,
  setComponents,
  // canvasComponents,
  // mockProperties,
  // updateComponentContent,
  // updateComponentStyle,
  // handlePropertyChange,
  setShowPropertiesPanel,
  // styles,
  // activePanel,
  // setActivePanel,
  updateStyle,
}) => {
  const component = components.find((c) => c.id === selectedComponent);

  console.log(component, "selected componentssssssssss");

  if (!component) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Select a component to edit</p>
      </div>
    );
  }

  const deleteComponent = () => {
    const updatedComponents = components.filter((c) => c.id !== component.id);
    setComponents(updatedComponents);
    setShowPropertiesPanel(false);
  };
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
        {component.component === "HeroSection" && (
          <HeroEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "Navbar" && (
          <NavbarEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "Footer" && (
          <FooterEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "FeaturedCollection" && (
          <FeaturedCollectionEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "FeaturedProduct" && (
          <FeaturedProductEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "ContactForm" && (
          <ContactFormEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "PreFooterEmailSignup" && (
          <PreFooterEmailSignupEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "ProductHighlight" && (
          <ProductHighlightEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "SplitFeatureSection" && (
          <SplitFeatureSectionEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
                {component.component === "ImageWithTextSection" && (
          <ImageWithTextEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
        {component.component === "MultimediaCollage" && (
          <MultimediaCollageEditor
            data={component}
            components={components}
            onUpdate={setComponents}
          />
        )}
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={deleteComponent}
          className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fas fa-trash mr-2"></i>Delete Component
        </button>
      </div>
    </div>
  );
};

export default PropertiesPanel;