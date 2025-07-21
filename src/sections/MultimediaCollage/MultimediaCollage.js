// components/storefront/MultimediaCollage.js
import React from "react";


export function MultimediaCollage({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, items = [], title = {}, id } = data || {};

  const {
    container = {},
    grid = {},
    mediaItem = {},
    textOverlay = {},
  } = styles;

  return (
    <section
      style={{
        backgroundColor: container.backgroundColor || "#fff",
        padding: `${container.paddingY || 64}px ${container.paddingX || 24}px`,
      }}
      className={`relative ${
        isSelected
          ? "ring-2 ring-blue-500 ring-offset-2"
          : "hover:outline hover:outline-gray-200"
      }`}
      onClick={() => handleComponentSelect(id)}
    >
      <div className="max-w-7xl mx-auto">
        {title.text && (
          <h2
            className="text-center mb-10"
            style={{
              color: title.color || "#111827",
              fontSize: `${title.fontSize || 32}px`,
              fontWeight: title.fontWeight || 700,
            }}
          >
            {title.text}
          </h2>
        )}

        <div
          className="grid"
          style={{
            gridTemplateColumns:
              grid.columns || "repeat(auto-fit, minmax(250px, 1fr))",
            gap: grid.gap || "16px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ borderRadius: mediaItem.borderRadius || 8 }}
                />
              )}
              {item.type === "video" && (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto object-cover"
                  style={{ borderRadius: mediaItem.borderRadius || 8 }}
                />
              )}
              {item.caption && (
                <div
                  className="absolute inset-0 flex items-center justify-center text-center transition-opacity duration-300 group-hover:bg-black/40"
                  style={{
                    color: textOverlay.color || "#fff",
                    fontSize: `${textOverlay.fontSize || 18}px`,
                    padding: `${textOverlay.padding || "16px"}`,
                    fontWeight: textOverlay.fontWeight || 600,
                  }}
                >
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
