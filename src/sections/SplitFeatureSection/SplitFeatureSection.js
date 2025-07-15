import React from "react";

export function SplitFeatureSection({
  data,
  isSelected,
  handleComponentSelect,
}) {
  const { title, description, product = {}, styles = {}, id } = data || {};

  const {
    container = {},
    titleStyle = {},
    descriptionStyle = {},
    imageStyle = {},
    button = {},
  } = styles;

  return (
    <section
      style={{
        backgroundColor: container.backgroundColor || "#111",
        padding: `${container.paddingY || 64}px ${container.paddingX || 32}px`,
      }}
      className={`relative ${
        isSelected
          ? "ring-2 ring-blue-500 ring-offset-2"
          : "hover:outline hover:outline-gray-200"
      }`}
      onClick={() => handleComponentSelect(id)}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt="Ski Promo"
          style={{
            width: imageStyle.width || "100%",
            height: imageStyle.height || "auto",
            objectFit: imageStyle.objectFit || "cover",
            borderRadius: imageStyle.borderRadius || "12px",
          }}
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="space-y-6 text-white">
          <h2
            style={{
              fontSize: `${titleStyle.fontSize}px`,
              color: titleStyle.color,
              fontWeight: titleStyle.fontWeight,
              textTransform: titleStyle.textTransform,
              marginBottom: `${titleStyle.marginBottom}px`,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: `${descriptionStyle.fontSize}px`,
              color: descriptionStyle.color,
              maxWidth: descriptionStyle.maxWidth,
              marginBottom: `${descriptionStyle.marginBottom}px`,
            }}
          >
            {description}
          </p>

          {product.cta?.enabled && (
            <a
              href={product.cta.url}
              style={{
                display: "inline-block",
                padding: `${button.paddingY}px ${button.paddingX}px`,
                backgroundColor: button.backgroundColor,
                color: button.textColor,
                fontSize: `${button.fontSize}px`,
                fontWeight: button.fontWeight,
                borderRadius: `${button.borderRadius}px`,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = button.hoverBackgroundColor;
                e.target.style.color = button.hoverTextColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = button.backgroundColor;
                e.target.style.color = button.textColor;
              }}
            >
              {product.cta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
