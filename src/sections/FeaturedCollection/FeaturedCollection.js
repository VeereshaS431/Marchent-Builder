import React from 'react';

export function FeaturedCollection({ data, isSelected, handleComponentSelect }) {
  const {
    title = '',
    description = '',
    products = [],
    styles = {},
    id,
  } = data || {};

  const {
    container = {},
    heading = {},
    descriptionStyle = {},
    productCard = {},
    imageStyle = {},
    titleStyle = {},
    priceStyle = {},
  } = styles;

  return (
    <section
      style={{
        backgroundColor: container.backgroundColor,
        padding: `${container.paddingY || 64}px ${container.paddingX || 24}px`,
      }}
      className={`relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      onClick={() => handleComponentSelect(id)}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 style={{
          color: heading.color,
          fontSize: `${heading.fontSize}px`,
          fontWeight: heading.fontWeight,
          textTransform: heading.textTransform,
          marginBottom: `${heading.marginBottom || 16}px`,
        }}>
          {title}
        </h2>
        <p style={{
          color: descriptionStyle.color,
          fontSize: `${descriptionStyle.fontSize}px`,
          marginBottom: `${descriptionStyle.marginBottom || 32}px`,
        }}>
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} style={{
              backgroundColor: productCard.backgroundColor,
              padding: `${productCard.padding || 16}px`,
              borderRadius: `${productCard.borderRadius || 8}px`,
              textAlign: productCard.textAlign || 'center',
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: imageStyle.width || '100%',
                  height: imageStyle.height || 'auto',
                  objectFit: imageStyle.objectFit || 'cover',
                  borderRadius: imageStyle.borderRadius || '8px',
                  marginBottom: `${imageStyle.marginBottom || 16}px`,
                }}
              />
              <h3 style={{
                fontSize: `${titleStyle.fontSize}px`,
                color: titleStyle.color,
                fontWeight: titleStyle.fontWeight,
                marginBottom: `${titleStyle.marginBottom || 8}px`,
              }}>
                {product.title}
              </h3>
              <p style={{
                fontSize: `${priceStyle.fontSize}px`,
                color: priceStyle.color,
                fontWeight: priceStyle.fontWeight,
              }}>
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
