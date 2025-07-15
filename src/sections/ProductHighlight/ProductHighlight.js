import React from "react";

export function ProductHighlight({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, product = {}, id } = data || {};
  const {
    container = {},
    image = {},
    title = {},
    price = {},
    description = {},
    button = {},
  } = styles;

  return (
    <section
      className={`w-full relative p-8 ${
        isSelected
          ? "ring-2 ring-blue-500 ring-offset-2"
          : "hover:outline hover:outline-gray-200"
      }`}
      onClick={() => handleComponentSelect(id)}
      style={{
        backgroundColor: container.backgroundColor,
        padding: `${container.paddingY || 48}px ${container.paddingX || 24}px`,
      }}
    >
      <div
        className="mx-auto"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${container.gap || 24}px`,
          width: container.containerWidth || "100%",
          textAlign: container.textAlign || "center",
        }}
      >
        <img
          src={product.image || "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800"}
          alt={product.title || "Product"}
          className="w-full mx-auto"
          style={{
            width: `${image.width || 100}%`,
            height: image.height || "400px",
            objectFit: image.objectFit || "cover",
            borderRadius: `${image.borderRadius || 8}px`,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${container.gap || 24}px`,
          }}
        >
          <h2
            style={{
              color: title.color,
              fontSize: `${title.fontSize || 28}px`,
              fontWeight: title.fontWeight || 700,
            }}
          >
            {product.title || "Signature Product"}
          </h2>
          <p
            style={{
              color: price.color,
              fontSize: `${price.fontSize || 20}px`,
              fontWeight: price.fontWeight || 600,
            }}
          >
            {product.price || "$99.00"}
          </p>
          {product.description?.enabled && (
            <p
              className="mx-auto"
              style={{
                color: description.color,
                fontSize: `${description.fontSize || 16}px`,
                maxWidth: `${description.maxWidth || 600}px`,
              }}
            >
              {product.description.text || "Discover the quality and craftsmanship of our signature product."}
            </p>
          )}
          {product.cta?.enabled && (
            <a
              href={product.cta.url || "#"}
              className="font-bold text-center no-underline inline-block"
              style={{
                backgroundColor: button.backgroundColor,
                color: button.textColor,
                padding: `${button.paddingY || 12}px ${button.paddingX || 24}px`,
                borderRadius: `${button.borderRadius || 6}px`,
                fontSize: `${button.fontSize || 16}px`,
                fontWeight: button.fontWeight || 600,
              }}
            >
              {product.cta.text || "Shop Now"}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}