import React from "react";

export function PreFooterEmailSignup({ data, isSelected, handleComponentSelect, view }) {
  const { styles = {}, content = {}, submitButton = {}, id } = data || {};
  const {
    container = {},
    heading = {},
    input = {},
    button = {},
  } = styles;

  return (
    <section
      className={view ? "w-full relative p-8" : `w-full relative p-8 ${isSelected
        ? "ring-2 ring-blue-500 ring-offset-2"
        : "hover:outline hover:outline-gray-200"
        }`}
      onClick={() => !view && handleComponentSelect(id)}
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
          gap: `${container.gap || 16}px`,
          width: container.containerWidth || "100%",
          textAlign: container.textAlign || "center",
        }}
      >
        <h2
          style={{
            color: heading.color,
            fontSize: `${heading.fontSize || 28}px`,
            fontWeight: heading.fontWeight || 700,
            marginBottom: `${heading.marginBottom || 16}px`,
          }}
        >
          {content.heading || "Join Our Newsletter"}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: `${input.gap || 8}px`,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            id="email-signup"
            placeholder={content.placeholder || "Enter your email"}
            className="w-full max-w-md"
            style={{
              backgroundColor: input.backgroundColor,
              color: input.textColor,
              borderColor: input.borderColor,
              borderWidth: `${input.borderWidth || 1}px`,
              borderRadius: `${input.borderRadius || 4}px`,
              padding: `${input.paddingY || 10}px ${input.paddingX || 12}px`,
              fontSize: `${input.fontSize || 16}px`,
            }}
          />
          {submitButton.enabled && (
            <button
              type="button"
              className="font-bold text-center no-underline"
              style={{
                backgroundColor: button.backgroundColor,
                color: button.textColor,
                padding: `${button.paddingY || 10}px ${button.paddingX || 16}px`,
                borderRadius: `${button.borderRadius || 4}px`,
                fontSize: `${button.fontSize || 16}px`,
                fontWeight: button.fontWeight || 600,
              }}
            >
              {submitButton.text || "Subscribe"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}