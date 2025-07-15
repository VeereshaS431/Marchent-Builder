// components/builder/HeroEditor.js
import React from 'react';

// --- Reusable Form Control Components ---

// A helper for standard text, number, and color inputs
const StyleInput = ({ label, name, value, onChange, type = 'text', unit = '', ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        // Provide a safe default for color inputs to prevent errors
        value={value || (type === 'color' ? '#000000' : '')}
        onChange={onChange}
        className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        {...props}
      />
      {unit && <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">{unit}</span>}
    </div>
  </div>
);

// A helper for dropdown/select inputs
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


// --- The Main Editor Component ---

export function HeroEditor({ data, components, onUpdate }) {
  // --- Handlers for Updating State ---

  // Handles changes in top-level style objects (e.g., styles.container)
  const handleStyleChange = (e, element) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      styles: {
        ...data.styles,
        [element]: { ...data.styles[element], [name]: value },
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

  // Handles changes in nested style objects (e.g., styles.background.image)
  const handleNestedStyleChange = (e, parent, child) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      styles: {
        ...data.styles,
        [parent]: {
          ...data.styles[parent],
          [child]: { ...data.styles[parent][child], [name]: value },
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



  // Handles changes to top-level content fields (e.g., content.heading)
  const handleContentChange = (e) => {
    const { name, value } = e.target;
    const update = {
      ...data,
      content: {
        ...data.content,
        [name]: value,
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

  // Handles changes within the CTA object (e.g., content.cta.text)
  const handleCtaChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const update = {
      ...data,
      content: {
        ...data.content,
        cta: {
          ...data.content.cta,
          [name]: val,
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

  const styles = data.styles || {};
  const content = data.content || {};

  return (
    <div className="p-4 bg-white w-50 space-y-6">
      <h3 className="text-xl font-semibold">Edit Hero Section</h3>

      {/* --- Section 1: Background --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Background</legend>
        <SelectInput label="Type" name="type" value={styles.background?.type} onChange={(e) => handleStyleChange(e, 'background')} options={[{ value: 'color', label: 'Solid Color' }, { value: 'image', label: 'Image' }]} />
        {styles.background?.type === 'color' && (
          <StyleInput label="Background Color" type="color" name="color" value={styles.background?.color} onChange={(e) => handleStyleChange(e, 'background')} />
        )}
        {styles.background?.type === 'image' && (
          <div className="space-y-2 border-t pt-4">
            <StyleInput label="Image URL" name="src" value={styles.background?.image?.src} onChange={(e) => handleNestedStyleChange(e, 'background', 'image')} />
            <StyleInput label="Dark Overlay Opacity" type="number" name="overlayOpacity" min="0" max="1" step="0.1" value={styles.background?.image?.overlayOpacity} onChange={(e) => handleNestedStyleChange(e, 'background', 'image')} />
          </div>
        )}
      </fieldset>

      {/* --- Section 2: Layout --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Layout & Sizing</legend>
        <StyleInput label="Section Height" type="number" name="height" value={styles.container?.height} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
        <div className="border-t pt-4 space-y-2">
          <h4 className="font-semibold text-gray-600">Content Alignment</h4>
          <SelectInput label="Horizontal" name="justifyContent" value={styles.contentLayout?.justifyContent} onChange={(e) => handleStyleChange(e, 'contentLayout')} options={[{ value: 'flex-start', label: 'Left' }, { value: 'center', label: 'Center' }, { value: 'flex-end', label: 'Right' }]} />
          <SelectInput label="Vertical" name="alignItems" value={styles.contentLayout?.alignItems} onChange={(e) => handleStyleChange(e, 'contentLayout')} options={[{ value: 'flex-start', label: 'Top' }, { value: 'center', label: 'Middle' }, { value: 'flex-end', label: 'Bottom' }]} />
          <SelectInput label="Text Align" name="textAlign" value={styles.contentLayout?.textAlign} onChange={(e) => handleStyleChange(e, 'contentLayout')} options={[{ value: 'left', label: 'Left' }, { value: 'center', label: 'Center' }, { value: 'right', label: 'Right' }]} />
        </div>
      </fieldset>

      {/* --- Section 3: Content --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Content & Typography</legend>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-600">Heading</h4>
          <textarea name="heading" value={content.heading} onChange={handleContentChange} className="w-full p-1 border rounded" rows="2" />
          <StyleInput label="Color" type="color" name="color" value={styles.heading?.color} onChange={(e) => handleStyleChange(e, 'heading')} />
          <StyleInput label="Font Size" type="number" name="fontSize" unit="px" value={styles.heading?.fontSize} onChange={(e) => handleStyleChange(e, 'heading')} />
          <SelectInput label="Font Weight" name="fontWeight" value={styles.heading?.fontWeight} onChange={(e) => handleStyleChange(e, 'heading')} options={[{ value: "400", label: "Normal" }, { value: "600", label: "Semi-Bold" }, { value: "800", label: "Extra-Bold" }]} />
          <StyleInput label="Margin Bottom" type="number" name="marginBottom" unit="px" value={styles.heading?.marginBottom} onChange={(e) => handleStyleChange(e, 'heading')} />
        </div>
        <div className="space-y-2 border-t pt-4">
          <h4 className="font-semibold text-gray-600">Subheading</h4>
          <textarea name="subheading" value={content.subheading} onChange={handleContentChange} className="w-full p-1 border rounded" rows="4" />
          <StyleInput label="Color" type="color" name="color" value={styles.subheading?.color} onChange={(e) => handleStyleChange(e, 'subheading')} />
          <StyleInput label="Font Size" type="number" name="fontSize" unit="px" value={styles.subheading?.fontSize} onChange={(e) => handleStyleChange(e, 'subheading')} />
          <StyleInput label="Max Width" type="number" name="maxWidth" unit="px" value={styles.subheading?.maxWidth} onChange={(e) => handleStyleChange(e, 'subheading')} />
        </div>
      </fieldset>

      {/* --- Section 4: Button --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Call to Action Button</legend>
        <div className="flex items-center">
          <input type="checkbox" id="ctaEnabled" name="enabled" checked={content.cta?.enabled} onChange={handleCtaChange} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label htmlFor="ctaEnabled" className="ml-2 block text-sm text-gray-900">Enable Button</label>
        </div>
        {content.cta?.enabled && (
          <div className="space-y-2 border-t pt-4">
            <StyleInput label="Text" name="text" value={content.cta?.text} onChange={handleCtaChange} />
            <StyleInput label="URL" name="url" value={content.cta?.url} onChange={handleCtaChange} />
            <div className="border-t pt-2 grid grid-cols-2 gap-4">
              <StyleInput label="BG Color" type="color" name="backgroundColor" value={styles.button?.backgroundColor} onChange={(e) => handleStyleChange(e, 'button')} />
              <StyleInput label="Text Color" type="color" name="textColor" value={styles.button?.textColor} onChange={(e) => handleStyleChange(e, 'button')} />
              <StyleInput label="Hover BG" type="color" name="hoverBackgroundColor" value={styles.button?.hoverBackgroundColor} onChange={(e) => handleStyleChange(e, 'button')} />
              <StyleInput label="Hover Text" type="color" name="hoverTextColor" value={styles.button?.hoverTextColor} onChange={(e) => handleStyleChange(e, 'button')} />
            </div>
            <div className="border-t pt-2 grid grid-cols-2 gap-4">
              <StyleInput label="Padding Y" type="number" unit="px" name="paddingY" value={styles.button?.paddingY} onChange={(e) => handleStyleChange(e, 'button')} />
              <StyleInput label="Padding X" type="number" unit="px" name="paddingX" value={styles.button?.paddingX} onChange={(e) => handleStyleChange(e, 'button')} />
            </div>
            <StyleInput label="Border Radius" type="number" unit="px" name="borderRadius" value={styles.button?.borderRadius} onChange={(e) => handleStyleChange(e, 'button')} />
          </div>
        )}
      </fieldset>
    </div>
  );
}