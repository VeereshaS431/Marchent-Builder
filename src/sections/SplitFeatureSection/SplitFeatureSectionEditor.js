import React from 'react';

// --- Reusable Inputs ---
const StyleInput = ({ label, name, value, onChange, type = 'text', unit = '', ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        value={value || (type === 'color' ? '#000000' : '')}
        onChange={onChange}
        className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

// --- Editor Component ---
export function SplitFeatureSectionEditor({ data, components, onUpdate }) {
  const styles = data.styles || {};
  const product = data.product || {};

  const updateComponent = (newData) => {
    const updated = components.map((c) => (c.id === data.id ? newData : c));
    onUpdate(updated);
  };

  const handleStyleChange = (e, section) => {
    const { name, value } = e.target;
    updateComponent({
      ...data,
      styles: {
        ...styles,
        [section]: {
          ...styles[section],
          [name]: value,
        },
      },
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    updateComponent({ ...data, [name]: value });
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    updateComponent({
      ...data,
      product: {
        ...product,
        [name]: value,
      },
    });
  };

  const handleCTAChange = (e) => {
    const { name, value } = e.target;
    updateComponent({
      ...data,
      product: {
        ...product,
        cta: {
          ...product.cta,
          [name]: value,
        },
      },
    });
  };

  const toggleCTA = () => {
    updateComponent({
      ...data,
      product: {
        ...product,
        cta: {
          ...product.cta,
          enabled: !product.cta?.enabled,
        },
      },
    });
  };

  return (
    <div className="p-4 bg-white w-50 space-y-6">
      <h3 className="text-xl font-semibold">Edit Snow Wax Promo</h3>

      {/* Content */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Content</legend>
        <StyleInput label="Section Title" name="title" value={data.title} onChange={handleTextChange} />
        <div>
          <label className="block text-sm font-medium">Section Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleTextChange}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>
      </fieldset>

      {/* Image & CTA */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Image & CTA</legend>
        <StyleInput label="Image URL" name="image" value={product.image} onChange={handleProductChange} />
        <label className="flex items-center space-x-2 pt-2">
          <input type="checkbox" checked={product.cta?.enabled || false} onChange={toggleCTA} />
          <span className="text-sm font-medium">Enable CTA Button</span>
        </label>

        {product.cta?.enabled && (
          <div className="space-y-2 mt-2">
            <StyleInput label="CTA Text" name="text" value={product.cta.text} onChange={handleCTAChange} />
            <StyleInput label="CTA URL" name="url" value={product.cta.url} onChange={handleCTAChange} />
          </div>
        )}
      </fieldset>

      {/* Container Layout */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Container</legend>
        <StyleInput label="Background Color" name="backgroundColor" type="color" value={styles.container?.backgroundColor} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding Y" name="paddingY" type="number" unit="px" value={styles.container?.paddingY} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding X" name="paddingX" type="number" unit="px" value={styles.container?.paddingX} onChange={(e) => handleStyleChange(e, 'container')} />
      </fieldset>

      {/* Typography */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Typography</legend>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-600">Section Title</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.titleStyle?.color} onChange={(e) => handleStyleChange(e, 'titleStyle')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.titleStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'titleStyle')} />
          <SelectInput label="Font Weight" name="fontWeight" value={styles.titleStyle?.fontWeight} onChange={(e) => handleStyleChange(e, 'titleStyle')} options={[{ value: "400", label: "Normal" }, { value: "600", label: "Semi-Bold" }, { value: "700", label: "Bold" }]} />
        </div>

        <div className="space-y-2 pt-4 border-t">
          <h4 className="font-semibold text-gray-600">Description</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.descriptionStyle?.color} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.descriptionStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} />
        </div>
      </fieldset>

      {/* CTA Button */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">CTA Button Style</legend>
        <StyleInput label="Text Color" name="textColor" type="color" value={styles.button?.textColor} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Background Color" name="backgroundColor" type="color" value={styles.button?.backgroundColor} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Hover Text Color" name="hoverTextColor" type="color" value={styles.button?.hoverTextColor} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Hover Background Color" name="hoverBackgroundColor" type="color" value={styles.button?.hoverBackgroundColor} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Padding Y" name="paddingY" type="number" unit="px" value={styles.button?.paddingY} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Padding X" name="paddingX" type="number" unit="px" value={styles.button?.paddingX} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.button?.fontSize} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Font Weight" name="fontWeight" value={styles.button?.fontWeight} onChange={(e) => handleStyleChange(e, 'button')} />
        <StyleInput label="Border Radius" name="borderRadius" type="number" unit="px" value={styles.button?.borderRadius} onChange={(e) => handleStyleChange(e, 'button')} />
      </fieldset>
    </div>
  );
}
