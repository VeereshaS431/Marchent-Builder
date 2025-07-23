// components/storefront/Hero.js
import React from 'react';

export function Hero({ data, isSelected, handleComponentSelect, view }) {
  const { styles = {}, content = {}, id } = data || {};
  const {
    container: s_container = {},
    background: s_bg = {},
    contentLayout: s_layout = {},
    heading: s_heading = {},
    subheading: s_subheading = {},
    button: s_button = {}
  } = styles;

  const { heading, subheading, cta = {} } = content;

  // Generate dynamic styles for the main container
  const containerStyles = {
    height: `${s_container.height || 400}px`,
    padding: `${s_container.paddingY || 64}px ${s_container.paddingX || 24}px`,
    position: 'relative',
    display: 'flex',
    justifyContent: s_layout.justifyContent || 'center',
    alignItems: s_layout.alignItems || 'center',
  };

  // Inject hover styles dynamically
  const hoverStyles = `
    .hero-cta-button:hover {
      background-color: ${s_button.hoverBackgroundColor} !important;
      color: ${s_button.hoverTextColor} !important;
    }
  `;
  console.log("idddddd", id);
  return (
    <section className={view ? "relative p-8" : `relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`} style={containerStyles}
      onClick={() => !view && handleComponentSelect(id)}
    >
      <style>{hoverStyles}</style>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {s_bg.type === 'image' && s_bg.image?.src && (
          <>
            <img src={s_bg.image.src} alt={s_bg.image.alt} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0 bg-black"
              style={{ opacity: s_bg.image.overlayOpacity || 0.3 }}
            ></div>
          </>
        )}
        {s_bg.type === 'color' && (
          <div className="w-full h-full" style={{ backgroundColor: s_bg.color }}></div>
        )}
      </div>

      {/* Content Layer */}
      <div
        className="relative z-10"
        style={{ textAlign: s_layout.textAlign || 'center' }}
      >
        <h1
          style={{
            color: s_heading.color,
            fontSize: `${s_heading.fontSize || 48}px`,
            fontWeight: s_heading.fontWeight || 800,
            marginBottom: `${s_heading.marginBottom || 16}px`,
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            color: s_subheading.color,
            fontSize: `${s_subheading.fontSize || 20}px`,
            fontWeight: s_subheading.fontWeight || 400,
            maxWidth: `${s_subheading.maxWidth || 600}px`,
            marginBottom: `${s_subheading.marginBottom || 32}px`,
            margin: s_layout.textAlign === 'center' ? '0 auto' : '0', // Center the paragraph block if text is centered
            marginBottom: `${s_subheading.marginBottom || 32}px`,
          }}
        >
          {subheading}
        </p>

        {cta.enabled && (
          <a
            href={cta.url}
            className="hero-cta-button inline-block no-underline transition-colors duration-300"
            style={{
              color: s_button.textColor,
              backgroundColor: s_button.backgroundColor,
              padding: `${s_button.paddingY || 12}px ${s_button.paddingX || 24}px`,
              borderRadius: `${s_button.borderRadius || 8}px`,
              fontSize: `${s_button.fontSize || 16}px`,
              fontWeight: s_button.fontWeight || 600,
            }}
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}