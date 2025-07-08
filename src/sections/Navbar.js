// components/storefront/Navbar.js
import React from 'react';

export function Navbar({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, logo = {}, links = [], ctaButton = {}, id } = data || {};
  const { container = {}, links: linkStyles = {}, button: buttonStyles = {} } = styles;

  return (
    <nav
      // The 'flex' class from Tailwind is still useful as a base
      // className="w-full shadow-md" 
      className={`w-full shadow-md relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      onClick={() => handleComponentSelect(id)}
      // UPDATED: Apply dynamic flexbox and container styles
      style={{
        display: 'flex', // Explicitly set display for clarity
        flexDirection: container.flexDirection || 'row',
        justifyContent: container.justifyContent || 'space-between',
        alignItems: container.alignItems || 'center',
        backgroundColor: container.backgroundColor,
        padding: `${container.paddingY || 16}px ${container.paddingX || 24}px`,
      }}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src={logo.src}
          alt={logo.alt}
          style={{
            width: `${logo.width || 120}px`,
            height: `${logo.height || 40}px`,
            objectFit: 'contain'
          }}
        />
      </div>

      {/* 
        Navigation Links 
        When flexDirection is 'column', you might want different spacing.
        We'll keep it simple for now, but this is an area for future improvement.
      */}
      <ul
        className="flex items-center"
        style={{
          flexDirection: container.flexDirection || 'row',
          // Add a gap for better spacing in both row and column modes
          gap: '24px'
        }}
      >
        {links.map(link => (
          <li key={link.id}>
            <a
              href={link.url}
              className="font-medium hover:underline"
              style={{
                color: linkStyles.color,
                fontSize: `${linkStyles.fontSize || 16}px`,
                fontWeight: linkStyles.fontWeight || 500
              }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {ctaButton.enabled && (
        <a
          href={ctaButton.url}
          className="font-bold text-center no-underline"
          style={{
            backgroundColor: buttonStyles.backgroundColor,
            color: buttonStyles.textColor,
            padding: `${buttonStyles.paddingY || 8}px ${buttonStyles.paddingX || 16}px`,
            borderRadius: `${buttonStyles.borderRadius || 6}px`,
          }}
        >
          {ctaButton.text}
        </a>
      )}
    </nav>
  );
}