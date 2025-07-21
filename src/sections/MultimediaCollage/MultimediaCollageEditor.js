import React from "react";

// Reusable input field
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
        value={value || (type === "color" ? "#000000" : "")}
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

export function MultimediaCollageEditor({ data, components, onUpdate }) {
  const items = data.items || [];

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    const updatedData = { ...data, items: updatedItems };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? updatedData : comp
    );
    onUpdate(updatedComponents);
  };

  const handleAddItem = () => {
    const newItem = {
      id: `item-${Date.now()}`,
      type: "image", // or "video"
      src: "",
      alt: "",
      caption: "",
    };
    const updatedData = { ...data, items: [...items, newItem] };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? updatedData : comp
    );
    onUpdate(updatedComponents);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    const updatedData = { ...data, items: updatedItems };
    const updatedComponents = components.map((comp) =>
      comp.id === data.id ? updatedData : comp
    );
    onUpdate(updatedComponents);
  };

  return (
    <div className="p-4 bg-white w-full space-y-6">
      <h3 className="text-xl font-semibold">Edit Multimedia Collage</h3>

      {items.map((item, index) => (
        <div
          key={item.id}
          className="border p-4 rounded-md space-y-4 bg-gray-50"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              name="type"
              value={item.type}
              onChange={(e) => handleItemChange(e, index)}
              className="w-full p-2 border rounded"
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          <StyleInput
            label="Media URL"
            name="src"
            value={item.src}
            onChange={(e) => handleItemChange(e, index)}
          />
          <StyleInput
            label="Alt Text"
            name="alt"
            value={item.alt}
            onChange={(e) => handleItemChange(e, index)}
          />
          <StyleInput
            label="Caption"
            name="caption"
            value={item.caption}
            onChange={(e) => handleItemChange(e, index)}
          />
          <button
            type="button"
            onClick={() => handleRemoveItem(index)}
            className="text-red-600 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddItem}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Media Item
      </button>
    </div>
  );
}

export default MultimediaCollageEditor;
