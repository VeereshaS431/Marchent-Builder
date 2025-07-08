// components/builder/NavbarEditor.js
import React from "react";

// A helper component to reduce repetitive code for style inputs
const StyleInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  unit = "",
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        {...props}
      />
      {unit && (
        <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {unit}
        </span>
      )}
    </div>
  </div>
);
// NEW: Helper component for select/dropdown inputs
const SelectInput = ({ label, name, value, onChange, options = [] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value || ""}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export function NavbarEditor({ data, components, onUpdate }) {
  // A generic handler for any change within the 'styles' object
  const handleStyleChange = (e, element) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      styles: {
        ...data.styles,
        [element]: {
          ...data.styles[element],
          [name]: value,
        },
      },
    };
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  // A specific handler for the logo object
  const handleLogoChange = (e) => {
    const { name, value } = e.target;
    const update = { ...data, logo: { ...data.logo, [name]: value } }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  // Handler for link text/url changes (no changes needed here)
  const handleLinkChange = (e, linkId) => {
    const { name, value } = e.target;
    const updatedLinks = data.links.map((link) =>
      link.id === linkId ? { ...link, [name]: value } : link
    );
    const update = { ...data, links: updatedLinks };
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const styles = data.styles || {};
  const containerStyles = styles.container || {};

  return (
    <div className="p-4 border-l bg-gray-50 w-96 space-y-6 overflow-y-auto h-full">
      <h3 className="text-xl font-semibold">Edit Navbar</h3>

      {/* UPDATED: Container now has a Layout section */}
      {/* <fieldset className="space-y-4 border p-4 rounded-md"> */}
      <legend className="text-lg font-medium">Container & Layout</legend>

      {/* NEW: Flexbox Layout Controls */}
      <div className="space-y-4 border-t pt-4 mt-4">
        <SelectInput
          label="Direction"
          name="flexDirection"
          value={containerStyles.flexDirection}
          onChange={(e) => handleStyleChange(e, "container")}
          options={[
            { value: "row", label: "Row (Horizontal)" },
            { value: "column", label: "Column (Vertical)" },
          ]}
        />
        <SelectInput
          label="Justify Content (Main Axis)"
          name="justifyContent"
          value={containerStyles.justifyContent}
          onChange={(e) => handleStyleChange(e, "container")}
          options={[
            { value: "flex-start", label: "Start" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "End" },
            { value: "space-between", label: "Space Between" },
            { value: "space-around", label: "Space Around" },
          ]}
        />
        <SelectInput
          label="Align Items (Cross Axis)"
          name="alignItems"
          value={containerStyles.alignItems}
          onChange={(e) => handleStyleChange(e, "container")}
          options={[
            { value: "flex-start", label: "Start (Top)" },
            { value: "center", label: "Center" },
            { value: "flex-end", label: "End (Bottom)" },
            { value: "stretch", label: "Stretch" },
          ]}
        />
      </div>
      {/* NEW: Container Styling Section */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Container</legend>
        <StyleInput
          label="Background Color"
          type="color"
          name="backgroundColor"
          value={styles.container?.backgroundColor}
          onChange={(e) => handleStyleChange(e, "container")}
        />
        <div className="grid grid-cols-2 gap-4">
          <StyleInput
            label="Padding Y"
            type="number"
            name="paddingY"
            value={styles.container?.paddingY}
            onChange={(e) => handleStyleChange(e, "container")}
            unit="px"
          />
          <StyleInput
            label="Padding X"
            type="number"
            name="paddingX"
            value={styles.container?.paddingX}
            onChange={(e) => handleStyleChange(e, "container")}
            unit="px"
          />
        </div>
      </fieldset>

      {/* NEW: Logo Styling Section */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Logo</legend>
        <div className="grid grid-cols-2 gap-4">
          <StyleInput
            label="Width"
            type="number"
            name="width"
            value={data.logo?.width}
            onChange={handleLogoChange}
            unit="px"
          />
          <StyleInput
            label="Height"
            type="number"
            name="height"
            value={data.logo?.height}
            onChange={handleLogoChange}
            unit="px"
          />
        </div>
      </fieldset>

      {/* NEW: Links Styling Section */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Links</legend>
        <StyleInput
          label="Color"
          type="color"
          name="color"
          value={styles.links?.color}
          onChange={(e) => handleStyleChange(e, "links")}
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.links?.fontSize}
          onChange={(e) => handleStyleChange(e, "links")}
          unit="px"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Font Weight
          </label>
          <select
            name="fontWeight"
            value={styles.links?.fontWeight}
            onChange={(e) => handleStyleChange(e, "links")}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="400">Normal</option>
            <option value="500">Medium</option>
            <option value="600">Semi-Bold</option>
            <option value="700">Bold</option>
          </select>
        </div>
      </fieldset>

      {/* NEW: Button Styling Section */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">CTA Button</legend>
        <StyleInput
          label="Background Color"
          type="color"
          name="backgroundColor"
          value={styles.button?.backgroundColor}
          onChange={(e) => handleStyleChange(e, "button")}
        />
        <StyleInput
          label="Text Color"
          type="color"
          name="textColor"
          value={styles.button?.textColor}
          onChange={(e) => handleStyleChange(e, "button")}
        />
        <div className="grid grid-cols-2 gap-4">
          <StyleInput
            label="Padding Y"
            type="number"
            name="paddingY"
            value={styles.button?.paddingY}
            onChange={(e) => handleStyleChange(e, "button")}
            unit="px"
          />
          <StyleInput
            label="Padding X"
            type="number"
            name="paddingX"
            value={styles.button?.paddingX}
            onChange={(e) => handleStyleChange(e, "button")}
            unit="px"
          />
        </div>
        <StyleInput
          label="Border Radius"
          type="number"
          name="borderRadius"
          value={styles.button?.borderRadius}
          onChange={(e) => handleStyleChange(e, "button")}
          unit="px"
        />
      </fieldset>

      {/* Links Editor (Content) - No major changes needed */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Link Content</legend>
        {data.links.map((link, index) => (
          <div key={link.id} className="p-2 border rounded-md bg-white">
            <label className="block text-xs font-bold">Link {index + 1}</label>
            <StyleInput
              label="Text"
              name="text"
              value={link.text}
              onChange={(e) => handleLinkChange(e, link.id)}
            />
            <StyleInput
              label="URL"
              name="url"
              value={link.url}
              onChange={(e) => handleLinkChange(e, link.id)}
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
}
