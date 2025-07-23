import React from 'react';

// --- Reusable Form Control Components ---
const StyleInput = ({ label, name, value, onChange, type = 'text', unit = '' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        value={value || (type === 'color' ? '#000000' : '')}
        onChange={onChange}
        className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      />
      {unit && (
        <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
          {unit}
        </span>
      )}
    </div>
  </div>
);

const SelectInput = ({ label, name, value, onChange, options = [] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value || ''}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// --- Main Editor Component ---
export function ImageWithTextEditor({ data, components, onUpdate }) {
  const styles = data.styles || {};

  const updateComponent = (newData) => {
    const updatedComponents = components.map(comp =>
      comp.id === data.id ? newData : comp
    );
    onUpdate(updatedComponents);
  };

  const handleStyleChange = (e, section) => {
    const { name, value } = e.target;
    const updated = {
      ...data,
      styles: {
        ...styles,
        [section]: {
          ...styles[section],
          [name]: value,
        },
      },
    };
    updateComponent(updated);
  };

  const handleContentChange = (e) => {
    const { name, value } = e.target;
    const updated = {
      ...data,
      content: {
        ...data.content,
        [name]: value,
        button: {
          ...data.content?.button,
        },
      },
    };
    updateComponent(updated);
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    const updated = {
      ...data,
      image: {
        ...data.image,
        [name]: value,
      },
    };
    updateComponent(updated);
  };

  const handleButtonChange = (e) => {
    const { name, value } = e.target;
    const updated = {
      ...data,
      content: {
        ...data.content,
        button: {
          ...data.content.button,
          [name]: value,
        },
      },
    };
    updateComponent(updated);
  };

  return (
    <div className="p-4 bg-white w-50 space-y-6">
      <h3 className="text-xl font-semibold">Edit Image with Text Section</h3>

      {/* --- Image Section --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Image</legend>
        <StyleInput label="Image URL" name="src" value={data.image?.src} onChange={handleImageChange} />
        <StyleInput label="Alt Text" name="alt" value={data.image?.alt} onChange={handleImageChange} />
        <StyleInput label="Width" name="width" type="text" value={styles.img?.width} onChange={(e) => handleStyleChange(e, 'img')} />
        <StyleInput label="Max Height" name="maxHeight" type="text" value={styles.img?.maxHeight} onChange={(e) => handleStyleChange(e, 'img')} />
        <StyleInput label="Border Radius" name="borderRadius" type="number" unit="px" value={styles.img?.borderRadius} onChange={(e) => handleStyleChange(e, 'img')} />
      </fieldset>

      {/* --- Text Section --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Text Content</legend>
        <StyleInput label="Heading" name="heading" value={data.content?.heading} onChange={handleContentChange} />
        <StyleInput label="Description" name="description" value={data.content?.description} onChange={handleContentChange} />
      </fieldset>

      {/* --- Button Section --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Button</legend>
        <StyleInput label="Text" name="text" value={data.content?.button?.text} onChange={handleButtonChange} />
        <StyleInput label="URL" name="url" value={data.content?.button?.url} onChange={handleButtonChange} />
        <StyleInput label="Background Color" name="backgroundColor" type="color" value={styles.button?.backgroundColor} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Text Color" name="color" type="color" value={styles.button?.color} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Border Radius" name="borderRadius" type="number" unit="px" value={styles.button?.borderRadius} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Padding" name="padding" value={styles.button?.padding} onChange={(e) => handleStyleChange(e, 'button')} />
      </fieldset>

      {/* --- Container Styling --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Layout & Spacing</legend>
        <StyleInput label="Background Color" type="color" name="backgroundColor" value={styles.container?.backgroundColor} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding Y" type="number" name="paddingY" value={styles.container?.paddingY} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
        <StyleInput label="Padding X" type="number" name="paddingX" value={styles.container?.paddingX} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
        <StyleInput label="Gap" type="number" name="gap" value={styles.container?.gap} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
      </fieldset>

      {/* --- Typography --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Typography</legend>

        <h4 className="font-semibold text-gray-600">Heading</h4>
        <StyleInput label="Color" name="color" type="color" value={styles.heading?.color} onChange={(e) => handleStyleChange(e, 'heading')} />
        <StyleInput label="Font Size" name="fontSize" value={styles.heading?.fontSize} onChange={(e) => handleStyleChange(e, 'heading')} />
        <StyleInput label="Font Weight" name="fontWeight" value={styles.heading?.fontWeight} onChange={(e) => handleStyleChange(e, 'heading')} />
        <StyleInput label="Line Height" name="lineHeight" value={styles.heading?.lineHeight} onChange={(e) => handleStyleChange(e, 'heading')} />

        <h4 className="font-semibold text-gray-600 pt-4">Description</h4>
        <StyleInput label="Color" name="color" type="color" value={styles.description?.color} onChange={(e) => handleStyleChange(e, 'description')} />
        <StyleInput label="Font Size" name="fontSize" value={styles.description?.fontSize} onChange={(e) => handleStyleChange(e, 'description')} />
        <StyleInput label="Line Height" name="lineHeight" value={styles.description?.lineHeight} onChange={(e) => handleStyleChange(e, 'description')} />
      </fieldset>
    </div>
  );
}
