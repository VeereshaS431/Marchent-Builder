import React from "react";

export function ContactForm({ data, isSelected, handleComponentSelect }) {
  const { styles = {}, fields = {}, submitButton = {}, id } = data || {};
  const {
    container = {},
    labels = {},
    inputs = {},
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
        padding: `${container.paddingY || 32}px ${container.paddingX || 24}px`,
      }}
    >
      <div
        className="mx-auto"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${container.gap || 16}px`,
          width: container.containerWidth || "100%", // Default to full width
        }}
      >
        <h2
          style={{
            color: labels.color,
            fontSize: `${labels.titleFontSize || 24}px`,
            fontWeight: labels.fontWeight || 600,
            marginBottom: `${labels.marginBottom || 16}px`,
            textAlign: container.textAlign || "center",
          }}
        >
          {fields.title || "Contact Us"}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${inputs.gap || 12}px`,
          }}
        >
          {/* First Row: Name and Email */}
          {(fields.name?.enabled || fields.email?.enabled) && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  fields.name?.enabled && fields.email?.enabled
                    ? "1fr 1fr"
                    : "1fr",
                gap: `${inputs.gap || 12}px`,
              }}
            >
              {fields.name?.enabled && (
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="name"
                    className="block"
                    style={{
                      color: labels.color,
                      fontSize: `${labels.fontSize || 16}px`,
                      fontWeight: labels.fontWeight || 500,
                      marginBottom: `${labels.marginBottom || 4}px`,
                    }}
                  >
                    {fields.name.label || "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={fields.name.placeholder || "Your Name"}
                    className="w-full"
                    style={{
                      backgroundColor: inputs.backgroundColor,
                      color: inputs.textColor,
                      borderColor: inputs.borderColor,
                      borderWidth: `${inputs.borderWidth || 1}px`,
                      borderRadius: `${inputs.borderRadius || 4}px`,
                      padding: `${inputs.paddingY || 8}px ${inputs.paddingX || 12}px`,
                      fontSize: `${inputs.fontSize || 16}px`,
                    }}
                  />
                </div>
              )}
              {fields.email?.enabled && (
                <div style={{ width: "100%" }}>
                  <label
                    htmlFor="email"
                    className="block"
                    style={{
                      color: labels.color,
                      fontSize: `${labels.fontSize || 16}px`,
                      fontWeight: labels.fontWeight || 500,
                      marginBottom: `${labels.marginBottom || 4}px`,
                    }}
                  >
                    {fields.email.label || "Email"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={fields.email.placeholder || "Your Email"}
                    className="w-full"
                    style={{
                      backgroundColor: inputs.backgroundColor,
                      color: inputs.textColor,
                      borderColor: inputs.borderColor,
                      borderWidth: `${inputs.borderWidth || 1}px`,
                      borderRadius: `${inputs.borderRadius || 4}px`,
                      padding: `${inputs.paddingY || 8}px ${inputs.paddingX || 12}px`,
                      fontSize: `${inputs.fontSize || 16}px`,
                    }}
                  />
                </div>
              )}
            </div>
          )}
          {/* Second Row: Phone */}
          {fields.phone?.enabled && (
            <div style={{ width: "100%" }}>
              <label
                htmlFor="phone"
                className="block"
                style={{
                  color: labels.color,
                  fontSize: `${labels.fontSize || 16}px`,
                  fontWeight: labels.fontWeight || 500,
                  marginBottom: `${labels.marginBottom || 4}px`,
                }}
              >
                {fields.phone.label || "Phone"}
              </label>
              <input
                type="tel"
                id="phone"
                placeholder={fields.phone.placeholder || "Your Phone"}
                className="w-full"
                style={{
                  backgroundColor: inputs.backgroundColor,
                  color: inputs.textColor,
                  borderColor: inputs.borderColor,
                  borderWidth: `${inputs.borderWidth || 1}px`,
                  borderRadius: `${inputs.borderRadius || 4}px`,
                  padding: `${inputs.paddingY || 8}px ${inputs.paddingX || 12}px`,
                  fontSize: `${inputs.fontSize || 16}px`,
                }}
              />
            </div>
          )}
          {/* Last Row: Message */}
          {fields.message?.enabled && (
            <div style={{ width: "100%" }}>
              <label
                htmlFor="message"
                className="block"
                style={{
                  color: labels.color,
                  fontSize: `${labels.fontSize || 16}px`,
                  fontWeight: labels.fontWeight || 500,
                  marginBottom: `${labels.marginBottom || 4}px`,
                }}
              >
                {fields.message.label || "Message"}
              </label>
              <textarea
                id="message"
                placeholder={fields.message.placeholder || "Your Message"}
                className="w-full"
                style={{
                  backgroundColor: inputs.backgroundColor,
                  color: inputs.textColor,
                  borderColor: inputs.borderColor,
                  borderWidth: `${inputs.borderWidth || 1}px`,
                  borderRadius: `${inputs.borderRadius || 4}px`,
                  padding: `${inputs.paddingY || 8}px ${inputs.paddingX || 12}px`,
                  fontSize: `${inputs.fontSize || 16}px`,
                  minHeight: `${inputs.minHeight || 100}px`,
                }}
              />
            </div>
          )}
        </div>
        {submitButton.enabled && (
          <button
            type="button"
            className="font-bold text-center no-underline"
            style={{
              backgroundColor: button.backgroundColor,
              color: button.textColor,
              padding: `${button.paddingY || 8}px ${button.paddingX || 16}px`,
              borderRadius: `${button.borderRadius || 6}px`,
              fontSize: `${button.fontSize || 16}px`,
              fontWeight: button.fontWeight || 600,
              width: container.buttonWidth || "auto",
            }}
          >
            {submitButton.text || "Submit"}
          </button>
        )}
      </div>
    </section>
  );
}