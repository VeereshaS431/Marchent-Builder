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

export function PreFooterEmailSignupEditor({ data, components, onUpdate }) {
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

  // Handle content changes
  const handleContentChange = (e) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      content: {
        ...data.content,
        [name]: value,
      },
    };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? update : comp
    );
    onUpdate(updatedComponents);
  };

  // Handle submit button changes
  const handleButtonChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const update = {
      ...data,
      submitButton: {
        ...data.submitButton,
        [name]: newValue,
      },
    };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? update : comp
    );
    onUpdate(updatedComponents);
  };

  const styles = data.styles || {};
  const content = data.content || {};
  const submitButton = data.submitButton || {};

  return (
    <div className="p-4 border-l bg-gray-50 w-96 space-y-6 overflow-y-auto h-full">
      <h3 className="text-xl font-semibold">Edit Pre-Footer Email Signup</h3>

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
          label="Field Gap"
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

      {/* Heading Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Heading</legend>
        <StyleInput
          label="Text"
          type="text"
          name="heading"
          value={content.heading}
          onChange={handleContentChange}
        />
        <StyleInput
          label="Color"
          type="color"
          name="color"
          value={styles.heading?.color}
          onChange={(e) => handleStyleChange(e, "heading")}
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.heading?.fontSize}
          onChange={(e) => handleStyleChange(e, "heading")}
          unit="px"
        />
        <SelectInput
          label="Font Weight"
          name="fontWeight"
          value={styles.heading?.fontWeight}
          onChange={(e) => handleStyleChange(e, "heading")}
          options={[
            { value: "400", label: "Normal" },
            { value: "500", label: "Medium" },
            { value: "600", label: "Semi-bold" },
            { value: "700", label: "Bold" },
          ]}
        />
        <StyleInput
          label="Margin Bottom"
          type="number"
          name="marginBottom"
          value={styles.heading?.marginBottom}
          onChange={(e) => handleStyleChange(e, "heading")}
          unit="px"
        />
      </fieldset>

      {/* Input Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Input</legend>
        <StyleInput
          label="Placeholder"
          type="text"
          name="placeholder"
          value={content.placeholder}
          onChange={handleContentChange}
        />
        <StyleInput
          label="Background Color"
          type="color"
          name="backgroundColor"
          value={styles.input?.backgroundColor}
          onChange={(e) => handleStyleChange(e, "input")}
        />
        <StyleInput
          label="Text Color"
          type="color"
          name="textColor"
          value={styles.input?.textColor}
          onChange={(e) => handleStyleChange(e, "input")}
        />
        <StyleInput
          label="Border Color"
          type="color"
          name="borderColor"
          value={styles.input?.borderColor}
          onChange={(e) => handleStyleChange(e, "input")}
        />
        <div className="grid grid-cols-2 gap-4">
          <StyleInput
            label="Padding Y"
            type="number"
            name="paddingY"
            value={styles.input?.paddingY}
            onChange={(e) => handleStyleChange(e, "input")}
            unit="px"
          />
          <StyleInput
            label="Padding X"
            type="number"
            name="paddingX"
            value={styles.input?.paddingX}
            onChange={(e) => handleStyleChange(e, "input")}
            unit="px"
          />
        </div>
        <StyleInput
          label="Border Width"
          type="number"
          name="borderWidth"
          value={styles.input?.borderWidth}
          onChange={(e) => handleStyleChange(e, "input")}
          unit="px"
        />
        <StyleInput
          label="Border Radius"
          type="number"
          name="borderRadius"
          value={styles.input?.borderRadius}
          onChange={(e) => handleStyleChange(e, "input")}
          unit="px"
        />
        <StyleInput
          label="Font Size"
          type="number"
          name="fontSize"
          value={styles.input?.fontSize}
          onChange={(e) => handleStyleChange(e, "input")}
          unit="px"
        />
        <StyleInput
          label="Field Gap"
          type="number"
          name="gap"
          value={styles.input?.gap}
          onChange={(e) => handleStyleChange(e, "input")}
          unit="px"
        />
      </fieldset>

      {/* Submit Button Styling */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Submit Button</legend>
        <CheckboxInput
          label="Enable Button"
          name="enabled"
          checked={submitButton.enabled}
          onChange={handleButtonChange}
        />
        <StyleInput
          label="Text"
          type="text"
          name="text"
          value={submitButton.text}
          onChange={handleButtonChange}
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