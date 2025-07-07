import React from 'react';

const PropertiesPanel = ({
  selectedComponent,
  components,
  // canvasComponents,
  // mockProperties,
  updateComponentContent,
  // updateComponentStyle,
  // handlePropertyChange,
  setShowPropertiesPanel,
  handleDeletecomponent,
  styles, activePanel, setActivePanel, updateStyle
}) => {

  console.log("PropertiesPanel", components.find((c) => c.id === selectedComponent));

  const selected = components.find((c) => c.id === selectedComponent);
  console.log("Selected Component", selected.style.background.type);

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
                value={components.find((c) => c.id === selectedComponent)?.content.title || ''}
                onChange={(e) => updateComponentContent(selectedComponent, 'title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Subheading</label>
              <input
                type="text"
                value={components.find((c) => c.id === selectedComponent)?.content.description || ''}
                onChange={(e) => updateComponentContent(selectedComponent, 'description', e.target.value)}
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



        <div className=" bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Navbar Settings
            </h2>
            <div className="space-y-2">
              {/* Typography Panel */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "typography" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() =>
                    setActivePanel(
                      activePanel === "typography" ? "" : "typography"
                    )
                  }
                >
                  <span>Typography</span>
                  <i
                    className={`fas fa-chevron-${activePanel === "typography" ? "up" : "down"} text-gray-500`}
                  ></i>
                </button>
                {activePanel === "typography" && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Font Family
                      </label>
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={components.find((c) => c.id === selectedComponent)?.style.typography.fontFamily || ''}
                        onChange={(e) =>
                          updateStyle("typography", "fontFamily", e.target.value)
                        }
                      >
                        <option value="Inter, sans-serif">Inter</option>
                        <option value="Roboto, sans-serif">Roboto</option>
                        <option value="Poppins, sans-serif">Poppins</option>
                        <option value="Montserrat, sans-serif">Montserrat</option>
                        <option value="Open Sans, sans-serif">Open Sans</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Font Size: {components.find((c) => c.id === selectedComponent)?.style.typography.fontSize}px
                      </label>
                      <input
                        type="range"
                        min="12"
                        max="32"
                        value={components.find((c) => c.id === selectedComponent)?.style.typography.fontSize || 16}
                        onChange={(e) =>
                          updateStyle(
                            "typography",
                            "fontSize",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Font Weight
                      </label>
                      <div className="flex flex-wrap align-center gap-2">
                        {[300, 400, 500, 600, 700].map((weight) => (
                          <button
                            key={weight}
                            className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style.typography.fontWeight === weight ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                            onClick={() =>
                              updateStyle("typography", "fontWeight", weight)
                            }
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Text Color
                      </label>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md border border-gray-300 overflow-hidden mr-2">
                          <input
                            type="color"
                            value={components.find((c) => c.id === selectedComponent)?.style.typography.color}
                            onChange={(e) =>
                              updateStyle("typography", "color", e.target.value)
                            }
                            className="w-12 h-12 transform -translate-x-1 -translate-y-1 cursor-pointer"
                          />
                        </div>
                        <input
                          type="text"
                          value={components.find((c) => c.id === selectedComponent)?.style.typography.color}
                          onChange={(e) =>
                            updateStyle("typography", "color", e.target.value)
                          }
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Spacing Panel */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "spacing" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() =>
                    setActivePanel(activePanel === "spacing" ? "" : "spacing")
                  }
                >
                  <span>Spacing</span>
                  <i
                    className={`fas fa-chevron-${activePanel === "spacing" ? "up" : "down"} text-gray-500`}
                  ></i>
                </button>
                {activePanel === "spacing" && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Padding (px)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Top
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.paddingTop || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "paddingTop",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Right
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.paddingRight || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "paddingRight",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Bottom
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.paddingBottom || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "paddingBottom",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Left
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.paddingLeft || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "paddingLeft",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Margin (px)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Top
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.marginTop || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "marginTop",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Right
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.marginRight || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "marginRight",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Bottom
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.marginBottom || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "marginBottom",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Left
                          </label>
                          <input
                            type="number"
                            value={components.find((c) => c.id === selectedComponent)?.style.spacing.marginLeft || 0}
                            onChange={(e) =>
                              updateStyle(
                                "spacing",
                                "marginLeft",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Item Spacing: {components.find((c) => c.id === selectedComponent)?.style.spacing.itemSpacing}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="48"
                        value={components.find((c) => c.id === selectedComponent)?.style.spacing.itemSpacing || 0}
                        onChange={(e) =>
                          updateStyle(
                            "spacing",
                            "itemSpacing",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Background Panel */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "background" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() =>
                    setActivePanel(activePanel === "background" ? "" : "background")
                  }
                >
                  <span>Background</span>
                  <i
                    className={`fas fa-chevron-${activePanel === "background" ? "up" : "down"} text-gray-500`}
                  ></i>
                </button>
                {activePanel === "background" && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Type
                      </label>
                      <div className="flex space-x-2">
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.background?.type === "solid" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() => updateStyle("background", "type", "solid")}
                        >
                          Solid
                        </button>
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.background?.type === "gradient" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() => updateStyle("background", "type", "gradient")}
                        >
                          Gradient
                        </button>
                      </div>
                    </div>
                    {/* {components.find((c) => c.id === selectedComponent)?.style?.background?.type === "solid" ? ( */}
                    {selected?.style?.background?.type == "solid" ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Color
                        </label>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-md border border-gray-300 overflow-hidden mr-2">
                            <input
                              type="color"
                              value={components.find((c) => c.id === selectedComponent)?.style?.background?.color}
                              onChange={(e) =>
                                updateStyle("background", "color", e.target.value)
                              }
                              className="w-12 h-12 transform -translate-x-1 -translate-y-1 cursor-pointer"
                            />
                          </div>
                          <input
                            type="text"
                            value={components.find((c) => c.id === selectedComponent)?.style?.background?.color}
                            onChange={(e) =>
                              updateStyle("background", "color", e.target.value)
                            }
                            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gradient
                        </label>
                        <select
                          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
                          value={components.find((c) => c.id === selectedComponent)?.style?.background?.gradient}
                          onChange={(e) =>
                            updateStyle("background", "gradient", e.target.value)
                          }
                        >
                          <option value="linear-gradient(to right, #ffffff, #f0f0f0)">
                            Light Gray
                          </option>
                          <option value="linear-gradient(to right, #4f46e5, #7c3aed)">
                            Purple
                          </option>
                          <option value="linear-gradient(to right, #3b82f6, #2dd4bf)">
                            Blue to Teal
                          </option>
                          <option value="linear-gradient(to right, #f97316, #ec4899)">
                            Orange to Pink
                          </option>
                          <option value="linear-gradient(to right, #0f172a, #334155)">
                            Dark Blue
                          </option>
                        </select>
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Opacity: {components.find((c) => c.id === selectedComponent)?.style?.background?.opacity}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={components.find((c) => c.id === selectedComponent)?.style?.background?.opacity || 100}
                        onChange={(e) =>
                          updateStyle(
                            "background",
                            "opacity",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Layout Panel */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "layout" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() =>
                    setActivePanel(activePanel === "layout" ? "" : "layout")
                  }
                >
                  <span>Layout</span>
                  <i
                    className={`fas fa-chevron-${activePanel === "layout" ? "up" : "down"} text-gray-500`}
                  ></i>
                </button>
                {activePanel === "layout" && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Orientation
                      </label>
                      <div className="flex space-x-2">
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.layout?.orientation === "horizontal" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() =>
                            updateStyle("layout", "orientation", "horizontal")
                          }
                        >
                          <i className="fas fa-grip-lines mr-1"></i>
                          Horizontal
                        </button>
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.layout?.orientation === "vertical" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() =>
                            updateStyle("layout", "orientation", "vertical")
                          }
                        >
                          <i className="fas fa-grip-lines-vertical mr-1"></i>
                          Vertical
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alignment
                      </label>
                      <div className="flex space-x-2">
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.layout?.alignment === "start" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() => updateStyle("layout", "alignment", "start")}
                        >
                          <i className="fas fa-align-left mr-1"></i>
                          Start
                        </button>
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.layout?.alignment === "center" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() => updateStyle("layout", "alignment", "center")}
                        >
                          <i className="fas fa-align-center mr-1"></i>
                          Center
                        </button>
                        <button
                          className={`px-3 py-1 border ${components.find((c) => c.id === selectedComponent)?.style?.layout?.alignment === "end" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
                          onClick={() => updateStyle("layout", "alignment", "end")}
                        >
                          <i className="fas fa-align-right mr-1"></i>
                          End
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Effects Panel */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "effects" ? "bg-gray-50" : "bg-white"}`}
                  onClick={() =>
                    setActivePanel(activePanel === "effects" ? "" : "effects")
                  }
                >
                  <span>Effects</span>
                  <i
                    className={`fas fa-chevron-${activePanel === "effects" ? "up" : "down"} text-gray-500`}
                  ></i>
                </button>
                {activePanel === "effects" && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Border Radius: {components.find((c) => c.id === selectedComponent)?.style?.effects?.borderRadius}px
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="24"
                        value={components.find((c) => c.id === selectedComponent)?.style?.effects?.borderRadius}
                        onChange={(e) =>
                          updateStyle(
                            "effects",
                            "borderRadius",
                            parseInt(e.target.value)
                          )
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Border
                      </label>
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Width
                          </label>
                          <input
                            type="number"
                            min="0"
                            max="10"
                            value={components.find((c) => c.id === selectedComponent)?.style?.effects?.borderWidth}
                            onChange={(e) =>
                              updateStyle(
                                "effects",
                                "borderWidth",
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Style
                          </label>
                          <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                            value={components.find((c) => c.id === selectedComponent)?.style?.effects?.borderStyle}
                            onChange={(e) =>
                              updateStyle("effects", "borderStyle", e.target.value)
                            }
                          >
                            <option value="solid">Solid</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Color
                          </label>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-md border border-gray-300 overflow-hidden">
                              <input
                                type="color"
                                value={components.find((c) => c.id === selectedComponent)?.style?.effects?.borderColor}
                                onChange={(e) =>
                                  updateStyle("effects", "borderColor", e.target.value)
                                }
                                className="w-10 h-10 transform -translate-x-1 -translate-y-1 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Box Shadow
                      </label>
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={components.find((c) => c.id === selectedComponent)?.style?.effects?.boxShadow}
                        onChange={(e) =>
                          updateStyle("effects", "boxShadow", e.target.value)
                        }
                      >
                        <option value="none">None</option>
                        <option value="0 1px 3px rgba(0, 0, 0, 0.1)">Subtle</option>
                        <option value="0 2px 4px rgba(0, 0, 0, 0.05)">Light</option>
                        <option value="0 4px 6px rgba(0, 0, 0, 0.1)">Medium</option>
                        <option value="0 10px 15px -3px rgba(0, 0, 0, 0.1)">
                          Large
                        </option>
                        <option value="0 20px 25px -5px rgba(0, 0, 0, 0.1)">
                          Extra Large
                        </option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>




      </div>
      <div className="p-4 border-t border-gray-200">
        <button onClick={() => handleDeletecomponent(selectedComponent)} className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-md text-sm font-medium cursor-pointer !rounded-button whitespace-nowrap">
          <i className="fas fa-trash mr-2"></i>Delete Component
        </button>
      </div>
    </div>
  );
};

export default PropertiesPanel;







// const Sidebar = ({ styles, activePanel, setActivePanel, updateStyle }) => {
//   return (
//     <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
//       <div className="p-4">
//         <h2 className="text-lg font-medium text-gray-800 mb-4">
//           Navbar Settings
//         </h2>
//         <div className="space-y-2">
//           {/* Typography Panel */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button
//               className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "typography" ? "bg-gray-50" : "bg-white"}`}
//               onClick={() =>
//                 setActivePanel(
//                   activePanel === "typography" ? "" : "typography"
//                 )
//               }
//             >
//               <span>Typography</span>
//               <i
//                 className={`fas fa-chevron-${activePanel === "typography" ? "up" : "down"} text-gray-500`}
//               ></i>
//             </button>
//             {activePanel === "typography" && (
//               <div className="p-4 border-t border-gray-200 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Font Family
//                   </label>
//                   <select
//                     className="w-full border border-gray-300 rounded-md px-3 py-2"
//                     value={styles.typography.fontFamily}
//                     onChange={(e) =>
//                       updateStyle("typography", "fontFamily", e.target.value)
//                     }
//                   >
//                     <option value="Inter, sans-serif">Inter</option>
//                     <option value="Roboto, sans-serif">Roboto</option>
//                     <option value="Poppins, sans-serif">Poppins</option>
//                     <option value="Montserrat, sans-serif">Montserrat</option>
//                     <option value="Open Sans, sans-serif">Open Sans</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Font Size: {styles.typography.fontSize}px
//                   </label>
//                   <input
//                     type="range"
//                     min="12"
//                     max="32"
//                     value={styles.typography.fontSize}
//                     onChange={(e) =>
//                       updateStyle(
//                         "typography",
//                         "fontSize",
//                         parseInt(e.target.value)
//                       )
//                     }
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Font Weight
//                   </label>
//                   <div className="flex space-x-2">
//                     {[300, 400, 500, 600, 700].map((weight) => (
//                       <button
//                         key={weight}
//                         className={`px-3 py-1 border ${styles.typography.fontWeight === weight ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                         onClick={() =>
//                           updateStyle("typography", "fontWeight", weight)
//                         }
//                       >
//                         {weight}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Text Color
//                   </label>
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 rounded-md border border-gray-300 overflow-hidden mr-2">
//                       <input
//                         type="color"
//                         value={styles.typography.color}
//                         onChange={(e) =>
//                           updateStyle("typography", "color", e.target.value)
//                         }
//                         className="w-12 h-12 transform -translate-x-1 -translate-y-1 cursor-pointer"
//                       />
//                     </div>
//                     <input
//                       type="text"
//                       value={styles.typography.color}
//                       onChange={(e) =>
//                         updateStyle("typography", "color", e.target.value)
//                       }
//                       className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Spacing Panel */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button
//               className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "spacing" ? "bg-gray-50" : "bg-white"}`}
//               onClick={() =>
//                 setActivePanel(activePanel === "spacing" ? "" : "spacing")
//               }
//             >
//               <span>Spacing</span>
//               <i
//                 className={`fas fa-chevron-${activePanel === "spacing" ? "up" : "down"} text-gray-500`}
//               ></i>
//             </button>
//             {activePanel === "spacing" && (
//               <div className="p-4 border-t border-gray-200 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Padding (px)
//                   </label>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Top
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.paddingTop}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "paddingTop",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Right
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.paddingRight}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "paddingRight",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Bottom
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.paddingBottom}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "paddingBottom",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Left
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.paddingLeft}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "paddingLeft",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Margin (px)
//                   </label>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Top
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.marginTop}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "marginTop",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Right
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.marginRight}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "marginRight",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Bottom
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.marginBottom}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "marginBottom",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Left
//                       </label>
//                       <input
//                         type="number"
//                         value={styles.spacing.marginLeft}
//                         onChange={(e) =>
//                           updateStyle(
//                             "spacing",
//                             "marginLeft",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Item Spacing: {styles.spacing.itemSpacing}px
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="48"
//                     value={styles.spacing.itemSpacing}
//                     onChange={(e) =>
//                       updateStyle(
//                         "spacing",
//                         "itemSpacing",
//                         parseInt(e.target.value)
//                       )
//                     }
//                     className="w-full"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Background Panel */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button
//               className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "background" ? "bg-gray-50" : "bg-white"}`}
//               onClick={() =>
//                 setActivePanel(activePanel === "background" ? "" : "background")
//               }
//             >
//               <span>Background</span>
//               <i
//                 className={`fas fa-chevron-${activePanel === "background" ? "up" : "down"} text-gray-500`}
//               ></i>
//             </button>
//             {activePanel === "background" && (
//               <div className="p-4 border-t border-gray-200 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Type
//                   </label>
//                   <div className="flex space-x-2">
//                     <button
//                       className={`px-3 py-1 border ${styles.background.type === "solid" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() => updateStyle("background", "type", "solid")}
//                     >
//                       Solid
//                     </button>
//                     <button
//                       className={`px-3 py-1 border ${styles.background.type === "gradient" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() => updateStyle("background", "type", "gradient")}
//                     >
//                       Gradient
//                     </button>
//                   </div>
//                 </div>
//                 {styles.background.type === "solid" ? (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Color
//                     </label>
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 rounded-md border border-gray-300 overflow-hidden mr-2">
//                         <input
//                           type="color"
//                           value={styles.background.color}
//                           onChange={(e) =>
//                             updateStyle("background", "color", e.target.value)
//                           }
//                           className="w-12 h-12 transform -translate-x-1 -translate-y-1 cursor-pointer"
//                         />
//                       </div>
//                       <input
//                         type="text"
//                         value={styles.background.color}
//                         onChange={(e) =>
//                           updateStyle("background", "color", e.target.value)
//                         }
//                         className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Gradient
//                     </label>
//                     <select
//                       className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2"
//                       value={styles.background.gradient}
//                       onChange={(e) =>
//                         updateStyle("background", "gradient", e.target.value)
//                       }
//                     >
//                       <option value="linear-gradient(to right, #ffffff, #f0f0f0)">
//                         Light Gray
//                       </option>
//                       <option value="linear-gradient(to right, #4f46e5, #7c3aed)">
//                         Purple
//                       </option>
//                       <option value="linear-gradient(to right, #3b82f6, #2dd4bf)">
//                         Blue to Teal
//                       </option>
//                       <option value="linear-gradient(to right, #f97316, #ec4899)">
//                         Orange to Pink
//                       </option>
//                       <option value="linear-gradient(to right, #0f172a, #334155)">
//                         Dark Blue
//                       </option>
//                     </select>
//                   </div>
//                 )}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Opacity: {styles.background.opacity}%
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={styles.background.opacity}
//                     onChange={(e) =>
//                       updateStyle(
//                         "background",
//                         "opacity",
//                         parseInt(e.target.value)
//                       )
//                     }
//                     className="w-full"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Layout Panel */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button
//               className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "layout" ? "bg-gray-50" : "bg-white"}`}
//               onClick={() =>
//                 setActivePanel(activePanel === "layout" ? "" : "layout")
//               }
//             >
//               <span>Layout</span>
//               <i
//                 className={`fas fa-chevron-${activePanel === "layout" ? "up" : "down"} text-gray-500`}
//               ></i>
//             </button>
//             {activePanel === "layout" && (
//               <div className="p-4 border-t border-gray-200 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Orientation
//                   </label>
//                   <div className="flex space-x-2">
//                     <button
//                       className={`px-3 py-1 border ${styles.layout.orientation === "horizontal" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() =>
//                         updateStyle("layout", "orientation", "horizontal")
//                       }
//                     >
//                       <i className="fas fa-grip-lines mr-1"></i>
//                       Horizontal
//                     </button>
//                     <button
//                       className={`px-3 py-1 border ${styles.layout.orientation === "vertical" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() =>
//                         updateStyle("layout", "orientation", "vertical")
//                       }
//                     >
//                       <i className="fas fa-grip-lines-vertical mr-1"></i>
//                       Vertical
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Alignment
//                   </label>
//                   <div className="flex space-x-2">
//                     <button
//                       className={`px-3 py-1 border ${styles.layout.alignment === "start" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() => updateStyle("layout", "alignment", "start")}
//                     >
//                       <i className="fas fa-align-left mr-1"></i>
//                       Start
//                     </button>
//                     <button
//                       className={`px-3 py-1 border ${styles.layout.alignment === "center" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() => updateStyle("layout", "alignment", "center")}
//                     >
//                       <i className="fas fa-align-center mr-1"></i>
//                       Center
//                     </button>
//                     <button
//                       className={`px-3 py-1 border ${styles.layout.alignment === "end" ? "bg-gray-100 border-gray-400" : "border-gray-300"} rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button`}
//                       onClick={() => updateStyle("layout", "alignment", "end")}
//                     >
//                       <i className="fas fa-align-right mr-1"></i>
//                       End
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Effects Panel */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden">
//             <button
//               className={`w-full flex items-center justify-between p-3 text-left font-medium ${activePanel === "effects" ? "bg-gray-50" : "bg-white"}`}
//               onClick={() =>
//                 setActivePanel(activePanel === "effects" ? "" : "effects")
//               }
//             >
//               <span>Effects</span>
//               <i
//                 className={`fas fa-chevron-${activePanel === "effects" ? "up" : "down"} text-gray-500`}
//               ></i>
//             </button>
//             {activePanel === "effects" && (
//               <div className="p-4 border-t border-gray-200 space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Border Radius: {styles.effects.borderRadius}px
//                   </label>
//                   <input
//                     type="range"
//                     min="0"
//                     max="24"
//                     value={styles.effects.borderRadius}
//                     onChange={(e) =>
//                       updateStyle(
//                         "effects",
//                         "borderRadius",
//                         parseInt(e.target.value)
//                       )
//                     }
//                     className="w-full"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Border
//                   </label>
//                   <div className="grid grid-cols-3 gap-2 mb-2">
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Width
//                       </label>
//                       <input
//                         type="number"
//                         min="0"
//                         max="10"
//                         value={styles.effects.borderWidth}
//                         onChange={(e) =>
//                           updateStyle(
//                             "effects",
//                             "borderWidth",
//                             parseInt(e.target.value) || 0
//                           )
//                         }
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Style
//                       </label>
//                       <select
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
//                         value={styles.effects.borderStyle}
//                         onChange={(e) =>
//                           updateStyle("effects", "borderStyle", e.target.value)
//                         }
//                       >
//                         <option value="solid">Solid</option>
//                         <option value="dashed">Dashed</option>
//                         <option value="dotted">Dotted</option>
//                         <option value="none">None</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-xs text-gray-500 mb-1">
//                         Color
//                       </label>
//                       <div className="flex items-center">
//                         <div className="w-8 h-8 rounded-md border border-gray-300 overflow-hidden">
//                           <input
//                             type="color"
//                             value={styles.effects.borderColor}
//                             onChange={(e) =>
//                               updateStyle("effects", "borderColor", e.target.value)
//                             }
//                             className="w-10 h-10 transform -translate-x-1 -translate-y-1 cursor-pointer"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Box Shadow
//                   </label>
//                   <select
//                     className="w-full border border-gray-300 rounded-md px-3 py-2"
//                     value={styles.effects.boxShadow}
//                     onChange={(e) =>
//                       updateStyle("effects", "boxShadow", e.target.value)
//                     }
//                   >
//                     <option value="none">None</option>
//                     <option value="0 1px 3px rgba(0, 0, 0, 0.1)">Subtle</option>
//                     <option value="0 2px 4px börsen(0, 0, 0, 0.05)">Light</option>
//                     <option value="0 4px 6px rgba(0, 0, 0, 0.1)">Medium</option>
//                     <option value="0 10px 15px -3px rgba(0, 0, 0, 0.1)">
//                       Large
//                     </option>
//                     <option value="0 20px 25px -5px rgba(0, 0, 0, 0.1)">
//                       Extra Large
//                     </option>
//                   </select>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

