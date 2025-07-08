// components/builder/FooterEditor.js
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

export function FooterEditor({ data, components, onUpdate }) {
  // --- Handlers for Updating State ---

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

  const handleColumnChange = (e, colIndex) => {
    const { name, value } = e.target;
    const updatedColumns = [...data.columns];
    updatedColumns[colIndex] = { ...updatedColumns[colIndex], [name]: value };

    const update = { ...data, columns: updatedColumns }
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleLogoChange = (e, colIndex) => {
    const { name, value } = e.target;
    const updatedColumns = [...data.columns];
    updatedColumns[colIndex].logo = { ...updatedColumns[colIndex].logo, [name]: value };

    const update = { ...data, columns: updatedColumns }

    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleColumnLinkChange = (e, colIndex, linkIndex) => {
    const { name, value } = e.target;
    const updatedColumns = [...data.columns];
    updatedColumns[colIndex].links[linkIndex] = {
      ...updatedColumns[colIndex].links[linkIndex],
      [name]: value,
    };

    const update = { ...data, columns: updatedColumns };
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    });
    onUpdate(updatedComponents);
  };

  const handleCopyrightChange = (e) => {
    // onUpdate({ ...data, copyright: { ...data.copyright, text: e.target.value } });

    const update = { ...data, copyright: { ...data.copyright, text: e.target.value } };
    const updatedComponents = components.map((comp) => {
      if (comp.id === data.id) {
        return update;
        // return { ...comp, styles: update.styles };
      }
      return comp;
    }
    );
    onUpdate(updatedComponents);
  };

  // Safely destructure styles to prevent errors
  const styles = data.styles || {};

  return (
    <div className="p-4 bg-white w-96 space-y-6">
      <h3 className="text-xl font-semibold">Edit Footer</h3>

      {/* --- Section 1: Content Editor --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Content</legend>
        {data.columns.map((column, colIndex) => (
          <div key={column.id} className="p-3 border bg-gray-50 rounded-md space-y-3">
            <h4 className="font-bold">Column {colIndex + 1} ({column.type})</h4>
            {column.type === 'description' && (
              <>
                <StyleInput label="Logo Width" type="number" name="width" unit="px" value={column.logo?.width} onChange={(e) => handleLogoChange(e, colIndex)} />
                <StyleInput label="Logo Margin Bottom" type="number" name="marginBottom" unit="px" value={column.logo?.marginBottom} onChange={(e) => handleLogoChange(e, colIndex)} />
                <div>
                  <label className="block text-sm font-medium">Description Text</label>
                  <textarea name="text" value={column.text} onChange={(e) => handleColumnChange(e, colIndex)} className="w-full p-1 border rounded" rows="3" />
                </div>
              </>
            )}
            {column.type === 'links' && (
              <>
                <StyleInput label="Heading" name="heading" value={column.heading} onChange={(e) => handleColumnChange(e, colIndex)} />
                <div className="space-y-2 pl-2 border-l-2">
                  <h5 className="text-sm font-semibold text-gray-600">Links</h5>
                  {column.links.map((link, linkIndex) => (
                    <div key={link.id} className="space-y-1">
                      <input type="text" name="text" placeholder="Link Text" value={link.text} onChange={(e) => handleColumnLinkChange(e, colIndex, linkIndex)} className="w-full p-1 text-sm border rounded" />
                      <input type="text" name="url" placeholder="URL" value={link.url} onChange={(e) => handleColumnLinkChange(e, colIndex, linkIndex)} className="w-full p-1 text-sm border rounded" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-600">Copyright</h4>
          <input type="text" value={data.copyright.text} onChange={handleCopyrightChange} className="w-full p-1 border rounded" />
        </div>
      </fieldset>

      {/* --- Section 2: Layout & Spacing --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Layout & Spacing</legend>
        <StyleInput label="Background Color" type="color" name="backgroundColor" value={styles.container?.backgroundColor} onChange={(e) => handleStyleChange(e, 'container')} />
        <div className="grid grid-cols-2 gap-4">
          <StyleInput label="Padding Top/Bottom" type="number" name="paddingY" value={styles.container?.paddingY} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
          <StyleInput label="Padding Left/Right" type="number" name="paddingX" value={styles.container?.paddingX} onChange={(e) => handleStyleChange(e, 'container')} unit="px" />
        </div>
        <StyleInput label="Gap Between Columns" type="number" name="gridGap" value={styles.columnsWrapper?.gridGap} onChange={(e) => handleStyleChange(e, 'columnsWrapper')} unit="px" />
      </fieldset>

      {/* --- Section 3: Typography --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Typography</legend>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-600">Column Headings</h4>
          <StyleInput label="Color" type="color" name="color" value={styles.columnHeading?.color} onChange={(e) => handleStyleChange(e, 'columnHeading')} />
          <StyleInput label="Font Size" type="number" name="fontSize" unit="px" value={styles.columnHeading?.fontSize} onChange={(e) => handleStyleChange(e, 'columnHeading')} />
          <SelectInput label="Font Weight" name="fontWeight" value={styles.columnHeading?.fontWeight} onChange={(e) => handleStyleChange(e, 'columnHeading')} options={[{ value: "400", label: "Normal" }, { value: "600", label: "Semi-Bold" }, { value: "700", label: "Bold" }]} />
          <SelectInput label="Text Transform" name="textTransform" value={styles.columnHeading?.textTransform} onChange={(e) => handleStyleChange(e, 'columnHeading')} options={[{ value: "none", label: "None" }, { value: "uppercase", label: "Uppercase" }]} />
          <StyleInput label="Margin Bottom" type="number" name="marginBottom" unit="px" value={styles.columnHeading?.marginBottom} onChange={(e) => handleStyleChange(e, 'columnHeading')} />
        </div>
        <div className="space-y-2 border-t pt-4">
          <h4 className="font-semibold text-gray-600">Links</h4>
          <StyleInput label="Color" type="color" name="color" value={styles.link?.color} onChange={(e) => handleStyleChange(e, 'link')} />
          <StyleInput label="Hover Color" type="color" name="hoverColor" value={styles.link?.hoverColor} onChange={(e) => handleStyleChange(e, 'link')} />
          <StyleInput label="Font Size" type="number" name="fontSize" unit="px" value={styles.link?.fontSize} onChange={(e) => handleStyleChange(e, 'link')} />
        </div>
      </fieldset>

      {/* --- Section 4: Bottom Bar --- */}
      <fieldset className="space-y-4 border p-4 rounded-md">
        <legend className="text-lg font-medium">Bottom Bar (Copyright & Social)</legend>
        <StyleInput label="Margin Top" type="number" name="marginTop" value={styles.bottomSection?.marginTop} onChange={(e) => handleStyleChange(e, 'bottomSection')} unit="px" />
        <div className="border-t pt-4 space-y-2">
          <h4 className="font-semibold text-gray-600">Divider Line</h4>
          <StyleInput label="Width" type="number" name="borderTopWidth" value={styles.bottomSection?.borderTopWidth} onChange={(e) => handleStyleChange(e, 'bottomSection')} unit="px" />
          <StyleInput label="Color" type="color" name="borderTopColor" value={styles.bottomSection?.borderTopColor} onChange={(e) => handleStyleChange(e, 'bottomSection')} />
        </div>
        <div className="border-t pt-4 space-y-2">
          <h4 className="font-semibold text-gray-600">Layout</h4>
          <SelectInput label="Direction" name="flexDirection" value={styles.bottomSection?.flexDirection} onChange={(e) => handleStyleChange(e, 'bottomSection')} options={[{ value: 'row', label: 'Row' }, { value: 'column', label: 'Column' }]} />
          <SelectInput label="Justify Content" name="justifyContent" value={styles.bottomSection?.justifyContent} onChange={(e) => handleStyleChange(e, 'bottomSection')} options={[{ value: 'space-between', label: 'Space Between' }, { value: 'center', label: 'Center' }, { value: 'flex-start', label: 'Start' }]} />
        </div>
        <div className="border-t pt-4 space-y-2">
          <h4 className="font-semibold text-gray-600">Copyright Text Style</h4>
          <StyleInput label="Color" type="color" name="color" value={styles.copyright?.color} onChange={(e) => handleStyleChange(e, 'copyright')} />
          <StyleInput label="Font Size" type="number" name="fontSize" value={styles.copyright?.fontSize} onChange={(e) => handleStyleChange(e, 'copyright')} unit="px" />
        </div>
        <div className="border-t pt-4 space-y-2">
          <h4 className="font-semibold text-gray-600">Social Icons</h4>
          <StyleInput label="Size" type="number" name="size" value={styles.socialIcon?.size} onChange={(e) => handleStyleChange(e, 'socialIcon')} unit="px" />
          <StyleInput label="Color" type="color" name="color" value={styles.socialIcon?.color} onChange={(e) => handleStyleChange(e, 'socialIcon')} />
          <StyleInput label="Hover Color" type="color" name="hoverColor" value={styles.socialIcon?.hoverColor} onChange={(e) => handleStyleChange(e, 'socialIcon')} />
        </div>
      </fieldset>
    </div>
  );
}