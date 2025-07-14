import React from "react";

// Reusable StyleInput component
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

// Reusable SelectInput component
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

// Reusable CheckboxInput component
const CheckboxInput = ({ label, name, checked, onChange }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      name={name}
      checked={checked || false}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label className="ml-2 block text-sm text-gray-700">{label}</label>
  </div>
);

export function ProductHighlightEditor({ data, components, onUpdate }) {
  // Handle style changes
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
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? update : comp
    );
    onUpdate(updatedComponents);
  };

  // Handle product content changes
  const handleProductChange = (e, field) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const update = {
      ...data,
      product: {
        ...data.product,
        [field]: field === "cta" || field === "description"
          ? { ...data.product[field], [name]: newValue }
          : newValue,
      },
    };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? update : comp
    );
    onUpdate(updatedComponents);
  };

  const styles = data.styles || {};
  const product = data.product || {};

  return (
    <div className="p-4 border-l bg-gray-50 w-96 space-y-6 overflow-y-auto h-full">
      <h3 className="text-xl font-semibold">Edit Product Highlight</h3>

      {/* Container Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Container</legend>
        <StyleInput
          label="Container Width"
          type="number"
          name="containerWidth"
          value={styles.container?.containerWidth?.replace("%", "")}
          onChange={(e) =>
            handleStyleChange(
              { target: { name: "containerWidth", value: `${e.target.value}%` } },
              "container"
            )
          }
          unit="%"
          min="10"
          max="100"
        />
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
        <StyleInput
          label="Gap"
          type="number"
          name="gap"
          value={styles.container?.gap}
          onChange={(e) => handleStyleChange(e, "container")}
          unit="px"
        />
        <SelectInput
          label="Text Alignment"
          name="textAlign"
          value={styles.container?.textAlign}
          onChange={(e) => handleStyleChange(e, "container")}
          options={[
            { value: "left", label: "Left" },
            { value: "center", label: "Center" },
            { value: "right", label: "Right" },
          ]}
        />
      </fieldset>

      {/* Image Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Image</legend>
        <StyleInput
          label="Image URL"
          type="text"
          name="image"
          value={product.image}
          onChange={(e) => handleProductChange(e, "image")}
        />
        <StyleInput
          label="Width"
          type="number"
          name="width"
          value={styles.image?.width}
          onChange={(e) => handleStyleChange(e, "image")}
          unit="%"
          min="10"
          max="100"
        />
        <StyleInput
          label="Height"
          type="number"
          name="height"
          value={styles.image?.height}
          onChange={(e) => handleStyleChange(e, "image")}
          unit="px"
        />
        <StyleInput
          label="Border Radius"
          type="number"
          name="borderRadius"
          value={styles.image?.borderRadius}
          onChange={(e) => handleStyleChange(e, "image")}
          unit="px"
        />
        <SelectInput
          label="Object Fit"
          name="objectFit"
          value={styles.image?.objectFit}
          onChange={(e) => handleStyleChange(e, "image")}
          options={[
            { value: "cover", label: "Cover" },
            { value: "contain", label: "Contain" },
            { value: "fill", label: "Fill" },
          ]}
        />
      </fieldset>

      {/* Title Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Title</legend>
        <StyleInput
          label="Text"
          type="text"
          name="title"
          value={product.title}
          onChange={(e) => handleProductChange(e, "title")}
        />
        <StyleInput
          label="Color"
          type="color"
          name="color"
          value={styles.title?.color}
          onChange={(e) => handleStyleChange(e, "title")}
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.title?.fontSize}
          onChange={(e) => handleStyleChange(e, "title")}
          unit="px"
        />
        <SelectInput
          label="Font Weight"
          name="fontWeight"
          value={styles.title?.fontWeight}
          onChange={(e) => handleStyleChange(e, "title")}
          options={[
            { value: "400", label: "Normal" },
            { value: "500", label: "Medium" },
            { value: "600", label: "Semi-bold" },
            { value: "700", label: "Bold" },
          ]}
        />
      </fieldset>

      {/* Price Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Price</legend>
        <StyleInput
          label="Price"
          type="text"
          name="price"
          value={product.price}
          onChange={(e) => handleProductChange(e, "price")}
        />
        <StyleInput
          label="Color"
          type="color"
          name="color"
          value={styles.price?.color}
          onChange={(e) => handleStyleChange(e, "price")}
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.price?.fontSize}
          onChange={(e) => handleStyleChange(e, "price")}
          unit="px"
        />
        <SelectInput
          label="Font Weight"
          name="fontWeight"
          value={styles.price?.fontWeight}
          onChange={(e) => handleStyleChange(e, "price")}
          options={[
            { value: "400", label: "Normal" },
            { value: "500", label: "Medium" },
            { value: "600", label: "Semi-bold" },
            { value: "700", label: "Bold" },
          ]}
        />
      </fieldset>

      {/* Description Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Description</legend>
        <CheckboxInput
          label="Enable Description"
          name="enabled"
          checked={product.description?.enabled}
          onChange={(e) => handleProductChange(e, "description")}
        />
        <StyleInput
          label="Text"
          type="text"
          name="text"
          value={product.description?.text}
          onChange={(e) => handleProductChange(e, "description")}
        />
        <StyleInput
          label="Color"
          type="color"
          name="color"
          value={styles.description?.color}
          onChange={(e) => handleStyleChange(e, "description")}
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.description?.fontSize}
          onChange={(e) => handleStyleChange(e, "description")}
          unit="px"
        />
        <StyleInput
          label="Max Width"
          type="number"
          name="maxWidth"
          value={styles.description?.maxWidth}
          onChange={(e) => handleStyleChange(e, "description")}
          unit="px"
        />
      </fieldset>

      {/* Button Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Button</legend>
        <CheckboxInput
          label="Enable Button"
          name="enabled"
          checked={product.cta?.enabled}
          onChange={(e) => handleProductChange(e, "cta")}
        />
        <StyleInput
          label="Text"
          type="text"
          name="text"
          value={product.cta?.text}
          onChange={(e) => handleProductChange(e, "cta")}
        />
        <StyleInput
          label="URL"
          type="text"
          name="url"
          value={product.cta?.url}
          onChange={(e) => handleProductChange(e, "cta")}
        />
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
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.button?.fontSize}
          onChange={(e) => handleStyleChange(e, "button")}
          unit="px"
        />
        <SelectInput
          label="Font Weight"
          name="fontWeight"
          value={styles.button?.fontWeight}
          onChange={(e) => handleStyleChange(e, "button")}
          options={[
            { value: "400", label: "Normal" },
            { value: "500", label: "Medium" },
            { value: "600", label: "Semi-bold" },
            { value: "700", label: "Bold" },
          ]}
        />
      </fieldset>
    </div>
  );
}