// components/storefront/Footer.js
import React from 'react';
// Assuming you have SVG icons
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const socialIconMap = {
  twitter: <FaTwitter />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
};

export function Footer({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, columns = [], socialLinks = {}, copyright = {}, id } = data || {};
  // Destructure all style objects with defaults for safety
  const {
    container: s_container = {},
    columnsWrapper: s_cols = {},
    columnHeading: s_heading = {},
    descriptionText: s_desc = {},
    link: s_link = {},
    bottomSection: s_bottom = {},
    socialIcon: s_social = {},
    copyright: s_copyright = {}
  } = styles;

  // A simple way to handle hover effects without CSS-in-JS
  // Note: For complex apps, a proper styling library is better.
  const linkHoverStyles = `
    .footer-link:hover { color: ${s_link.hoverColor || '#FFFFFF'} !important; }
    .social-icon:hover { color: ${s_social.hoverColor || '#FFFFFF'} !important; }
  `;

  return (
    <footer
      style={{
        backgroundColor: s_container.backgroundColor,
        padding: `${s_container.paddingY || 64}px ${s_container.paddingX || 24}px`,
      }}
      className={`relative p-8 ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:outline hover:outline-gray-200'}`}
      onClick={() => handleComponentSelect(id)}
    >
      <style>{linkHoverStyles}</style>
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: `${s_cols.gridGap || 32}px` }}
        >
          {columns.map(column => (
            <div key={column.id}>
              {column.type === 'description' && (
                <div className="space-y-4">
                  {column.logo?.src && <img src={column.logo.src} alt={column.logo.alt} style={{ width: `${column.logo.width}px`, marginBottom: `${column.logo.marginBottom || 16}px` }} draggable="false"
                  onDragStart={(e) => e.preventDefault()}/>}
                  <p style={{ color: s_desc.color, fontSize: `${s_desc.fontSize}px`, lineHeight: s_desc.lineHeight }}>{column.text}</p>
                </div>
              )}
              {column.type === 'links' && (
                <div>
                  <h4 style={{ color: s_heading.color, fontSize: `${s_heading.fontSize}px`, fontWeight: s_heading.fontWeight, textTransform: s_heading.textTransform, marginBottom: `${s_heading.marginBottom || 16}px` }}>
                    {column.heading}
                  </h4>
                  <ul className="space-y-1">
                    {column.links.map(link => (
                      <li key={link.id} style={{ padding: `${s_link.paddingY || 4}px 0` }}>
                        <a href={link.url} style={{ color: s_link.color, fontSize: `${s_link.fontSize}px` }} className="footer-link transition-colors">
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row"
          style={{
            marginTop: `${s_bottom.marginTop || 64}px`,
            paddingTop: `${s_bottom.paddingTop || 32}px`,
            borderTop: `${s_bottom.borderTopWidth || 1}px solid ${s_bottom.borderTopColor || '#374151'}`,
            flexDirection: s_bottom.flexDirection,
            justifyContent: s_bottom.justifyContent,
            alignItems: s_bottom.alignItems,
          }}
        >
          <p style={{ color: s_copyright.color, fontSize: `${s_copyright.fontSize}px` }}>
            {copyright.text}
          </p>
          {socialLinks.enabled && (
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {socialLinks.links.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: s_social.color, fontSize: `${s_social.size || 24}px` }} className="social-icon transition-colors">
                  {socialIconMap[link.network] || link.network}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}