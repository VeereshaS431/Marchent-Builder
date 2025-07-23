import React from 'react';

// --- Embedded Reusable Inputs ---
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

// --- Main Editor Component ---
export function FeaturedProductEditor({ data, components, onUpdate }) {
  const styles = data.styles || {};
  const product = data.product || {};

  const handleStyleChange = (e, section) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      styles: {
        ...styles,
        [section]: {
          ...styles[section],
          [name]: value,
        },
      },
    }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    const update = {
      ...data,
      [name]: value,
    }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      product: {
        ...product,
        [name]: value,
      },
    }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleCTAChange = (e) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      product: {
        ...product,
        cta: {
          ...product.cta,
          [name]: value,
        },
      },
    }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const toggleCTA = () => {

    const update = {
      ...data,
      product: {
        ...product,
        cta: {
          ...product.cta,
          enabled: !product.cta?.enabled,
        },
      },
    }

    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  return (
    <div className="p-4 bg-white w-50 space-y-6">
      <h3 className="text-xl font-semibold">Edit Featured Product</h3>

      {/* Section: General Text Content */}
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

      {/* Section: Product Details */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Product Info</legend>
        <StyleInput label="Product Title" name="title" value={product.title} onChange={handleProductChange} />
        <StyleInput label="Product Price" name="price" value={product.price} onChange={handleProductChange} />
        <StyleInput label="Product Image URL" name="image" value={product.image} onChange={handleProductChange} />

        <div className="border-t pt-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={product.cta?.enabled || false} onChange={toggleCTA} />
            <span className="text-sm font-medium">Enable CTA Button</span>
          </label>

          {product.cta?.enabled && (
            <div className="space-y-2 mt-2">
              <StyleInput label="CTA Text" name="text" value={product.cta.text} onChange={handleCTAChange} />
              <StyleInput label="CTA URL" name="url" value={product.cta.url} onChange={handleCTAChange} />
            </div>
          )}
        </div>
      </fieldset>

      {/* Section: Layout & Container */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Container</legend>
        <StyleInput label="Background Color" name="backgroundColor" type="color" value={styles.container?.backgroundColor} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding Y" name="paddingY" type="number" unit="px" value={styles.container?.paddingY} onChange={(e) => handleStyleChange(e, 'container')} />
        <StyleInput label="Padding X" name="paddingX" type="number" unit="px" value={styles.container?.paddingX} onChange={(e) => handleStyleChange(e, 'container')} />
      </fieldset>

      {/* Section: Typography */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Typography</legend>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-600">Section Title</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.titleStyle?.color} onChange={(e) => handleStyleChange(e, 'titleStyle')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.titleStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'titleStyle')} />
          <SelectInput label="Font Weight" name="fontWeight" value={styles.titleStyle?.fontWeight} onChange={(e) => handleStyleChange(e, 'titleStyle')} options={[{ value: "400", label: "Normal" }, { value: "600", label: "Semi-Bold" }, { value: "700", label: "Bold" }]} />
          <SelectInput label="Text Transform" name="textTransform" value={styles.titleStyle?.textTransform} onChange={(e) => handleStyleChange(e, 'titleStyle')} options={[{ value: "none", label: "None" }, { value: "uppercase", label: "Uppercase" }]} />
        </div>

        <div className="space-y-2 pt-4 border-t">
          <h4 className="font-semibold text-gray-600">Description</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.descriptionStyle?.color} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.descriptionStyle?.fontSize} onChange={(e) => handleStyleChange(e, 'descriptionStyle')} />
        </div>

        <div className="space-y-2 pt-4 border-t">
          <h4 className="font-semibold text-gray-600">Product Title</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.productTitle?.color} onChange={(e) => handleStyleChange(e, 'productTitle')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.productTitle?.fontSize} onChange={(e) => handleStyleChange(e, 'productTitle')} />
        </div>

        <div className="space-y-2 pt-4 border-t">
          <h4 className="font-semibold text-gray-600">Product Price</h4>
          <StyleInput label="Color" name="color" type="color" value={styles.productPrice?.color} onChange={(e) => handleStyleChange(e, 'productPrice')} />
          <StyleInput label="Font Size" name="fontSize" type="number" unit="px" value={styles.productPrice?.fontSize} onChange={(e) => handleStyleChange(e, 'productPrice')} />
        </div>
      </fieldset>

      {/* Section: CTA Button */}
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
