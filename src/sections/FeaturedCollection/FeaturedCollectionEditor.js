import React from 'react';

// Reusable StyleInput
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

// Reusable SelectInput
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


export function FeaturedCollectionEditor({ data, onUpdate }) {
  const styles = data.styles || {};

  const handleStyleChange = (e, section) => {
    const { name, value } = e.target;
    onUpdate({
      ...data,
      styles: {
        ...data.styles,
        [section]: {
          ...data.styles[section],
          [name]: value,
        },
      },
    });
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    onUpdate({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="p-4 bg-white w-96 space-y-6">
      <h3 className="text-xl font-semibold">Edit Featured Collection</h3>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Content</legend>
        <StyleInput label="Title" name="title" value={data.title} onChange={handleTextChange} />
        <StyleInput label="Description" name="description" value={data.description} onChange={handleTextChange} />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Container</legend>
        <StyleInput label="Background Color" type="color" name="backgroundColor" value={styles.container?.backgroundColor} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding Y" type="number" name="paddingY" value={styles.container?.paddingY} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
        <StyleInput label="Padding X" type="number" name="paddingX" value={styles.container?.paddingX} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Heading</legend>
        <StyleInput label="Color" type="color" name="color" value={styles.heading?.color} onChange={(e) => handleStyleChange(e, 'heading')} />
        <StyleInput label="Font Size" type="number" name="fontSize" value={styles.heading?.fontSize} onChange={(e) => handleStyleChange(e, 'heading')} unit="px" />
        <SelectInput label="Font Weight" name="fontWeight" value={styles.heading?.fontWeight} onChange={(e) => handleStyleChange(e, 'heading')} options={[{ value: '400', label: 'Normal' }, { value: '600', label: 'Semi-Bold' }, { value: '700', label: 'Bold' }]} />
        <SelectInput label="Text Transform" name="textTransform" value={styles.heading?.textTransform} onChange={(e) => handleStyleChange(e, 'heading')} options={[{ value: 'none', label: 'None' }, { value: 'uppercase', label: 'Uppercase' }]} />
        <StyleInput label="Margin Bottom" type="number" name="marginBottom" value={styles.heading?.marginBottom} onChange={(e) => handleStyleChange(e, 'heading')} unit="px" />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Description Text</legend>
        <StyleInput label="Color" type="color" name="color" value={styles.descriptionStyle?.color} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} />
        <StyleInput label="Font Size" type="number" name="fontSize" value={styles.descriptionStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} unit="px" />
        <StyleInput label="Margin Bottom" type="number" name="marginBottom" value={styles.descriptionStyle?.marginBottom} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} unit="px" />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Product Card</legend>
        <StyleInput label="Background Color" type="color" name="backgroundColor" value={styles.productCard?.backgroundColor} onChange={(e) => handleStyleChange(e, 'productCard')} />
        <StyleInput label="Padding" type="number" name="padding" value={styles.productCard?.padding} onChange={(e) => handleStyleChange(e, 'productCard')} unit="px" />
        <StyleInput label="Border Radius" type="number" name="borderRadius" value={styles.productCard?.borderRadius} onChange={(e) => handleStyleChange(e, 'productCard')} unit="px" />
        <SelectInput label="Text Align" name="textAlign" value={styles.productCard?.textAlign} onChange={(e) => handleStyleChange(e, 'productCard')} options={[{ value: 'center', label: 'Center' }, { value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }]} />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Product Image</legend>
        <StyleInput label="Width" name="width" value={styles.imageStyle?.width} onChange={(e) => handleStyleChange(e, 'imageStyle')} />
        <StyleInput label="Height" name="height" value={styles.imageStyle?.height} onChange={(e) => handleStyleChange(e, 'imageStyle')} />
        <SelectInput label="Object Fit" name="objectFit" value={styles.imageStyle?.objectFit} onChange={(e) => handleStyleChange(e, 'imageStyle')} options={[{ value: 'cover', label: 'Cover' }, { value: 'contain', label: 'Contain' }]} />
        <StyleInput label="Border Radius" type="number" name="borderRadius" value={styles.imageStyle?.borderRadius} onChange={(e) => handleStyleChange(e, 'imageStyle')} unit="px" />
        <StyleInput label="Margin Bottom" type="number" name="marginBottom" value={styles.imageStyle?.marginBottom} onChange={(e) => handleStyleChange(e, 'imageStyle')} unit="px" />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Product Title</legend>
        <StyleInput label="Font Size" type="number" name="fontSize" value={styles.titleStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'titleStyle')} unit="px" />
        <StyleInput label="Color" type="color" name="color" value={styles.titleStyle?.color} onChange={(e) => handleStyleChange(e, 'titleStyle')} />
        <SelectInput label="Font Weight" name="fontWeight" value={styles.titleStyle?.fontWeight} onChange={(e) => handleStyleChange(e, 'titleStyle')} options={[{ value: '400', label: 'Normal' }, { value: '700', label: 'Bold' }]} />
        <StyleInput label="Margin Bottom" type="number" name="marginBottom" value={styles.titleStyle?.marginBottom} onChange={(e) => handleStyleChange(e, 'titleStyle')} unit="px" />
      </fieldset>

      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Product Price</legend>
        <StyleInput label="Font Size" type="number" name="fontSize" value={styles.priceStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'priceStyle')} unit="px" />
        <StyleInput label="Color" type="color" name="color" value={styles.priceStyle?.color} onChange={(e) => handleStyleChange(e, 'priceStyle')} />
        <SelectInput label="Font Weight" name="fontWeight" value={styles.priceStyle?.fontWeight} onChange={(e) => handleStyleChange(e, 'priceStyle')} options={[{ value: '400', label: 'Normal' }, { value: '700', label: 'Bold' }]} />
      </fieldset>
    </div>
  );
}
