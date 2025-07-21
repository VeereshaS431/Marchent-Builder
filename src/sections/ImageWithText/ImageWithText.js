import React from 'react';

export function ImageWithTextSection({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, image = {}, content = {}, id } = data || {};

  const {
    container: s_container = {},
    imageWrapper: s_imageWrapper = {},
    img: s_img = {},
    textWrapper: s_textWrapper = {},
    heading: s_heading = {},
    description: s_description = {},
    button: s_button = {},
  } = styles;

  return (
    <section
      className={`relative ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      style={{
        backgroundColor: s_container.backgroundColor || '#fff',
        padding: `${s_container.paddingY || 64}px ${s_container.paddingX || 24}px`,
      }}
      onClick={() => handleComponentSelect(id)}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center"
        style={{ gap: `${s_container.gap || 32}px` }}
      >
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2"
          style={{
            textAlign: s_imageWrapper.textAlign,
            padding: s_imageWrapper.padding,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: s_img.width || '100%',
              maxHeight: s_img.maxHeight,
              objectFit: s_img.objectFit || 'cover',
              borderRadius: s_img.borderRadius || 8,
            }}
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full lg:w-1/2 space-y-4"
          style={{
            textAlign: s_textWrapper.textAlign,
            padding: s_textWrapper.padding,
          }}
        >
          <h2
            style={{
              color: s_heading.color,
              fontSize: s_heading.fontSize,
              fontWeight: s_heading.fontWeight,
              lineHeight: s_heading.lineHeight,
            }}
          >
            {content.heading}
          </h2>
          <p
            style={{
              color: s_description.color,
              fontSize: s_description.fontSize,
              lineHeight: s_description.lineHeight,
            }}
          >
            {content.description}
          </p>
          {content.button?.text && (
            <a
              href={content.button.url}
              className="inline-block"
              style={{
                backgroundColor: s_button.backgroundColor,
                color: s_button.color,
                padding: s_button.padding || '10px 20px',
                borderRadius: s_button.borderRadius || 6,
                textDecoration: 'none',
                fontSize: s_button.fontSize,
              }}
            >
              {content.button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
