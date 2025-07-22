import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Canvas from "../../components/Canvas";
import PropertiesPanel from "../../components/PropertiesPanel";
import { DataShare } from "../../App";

const Builder = () => {
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [activePanel, setActivePanel] = useState("typography");
  const [showComponentPanel, setShowComponentPanel] = useState(true);
  const [previewMode, setPreviewMode] = useState("desktop");
  const [isDragging, setIsDragging] = useState(false);
  const {
    setComponents,
    isPageDropdownOpen,
    setIsPageDropdownOpen,
    handlePageSelect,
    currentPage,
    setSaveStatus,
    components,
  } = useContext(DataShare);

  const handleDragStart = (e, componentTemplate) => {
    e.dataTransfer.setData(
      "componentTemplate",
      JSON.stringify(componentTemplate)
    );
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const componentTemplate = JSON.parse(
      e.dataTransfer.getData("componentTemplate")
    );
    const newComponent = {
      ...componentTemplate.template,
      id: `${componentTemplate.type.toLowerCase()}-${Date.now()}`,
    };
    setComponents((prevComponents) => [...prevComponents, newComponent]);
    setIsDragging(false);
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleComponentSelect = (id) => {
    setSelectedComponent(id);
    setShowPropertiesPanel(true);
  };

  //   const updateComponentContent = (componentId, field, value) => {
  //     setComponents((prevComponents) =>
  //       prevComponents.map((component) =>
  //         component.id === componentId
  //           ? { ...component, content: { ...component.content, [field]: value } }
  //           : component
  //       )
  //     );
  //   };

  const componentCategories = [
    {
      name: "Commerce",
      items: [
        {
          type: "Featured Collection",
          icon: "th",
          template: {
            id: `featured-collection-${Date.now()}`,
            component: "FeaturedCollection",
            title: "Featured Collection",
            description:
              "Handpicked designs that elevate your space — elegant, functional, and timeless.",
            products: [
              {
                id: "prod-1",
                title: "Minimalist Wooden Chair",
                price: "$149",
                image:
                  "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                id: "prod-2",
                title: "Modern Accent Lamp",
                price: "$89",
                image:
                  "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
              {
                id: "prod-3",
                title: "Contemporary Sofa",
                price: "$799",
                image:
                  "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
              },
            ],
            styles: {
              container: {
                backgroundColor: "#F9FAFB",
                paddingY: "64",
                paddingX: "24",
              },
              heading: {
                color: "#111827",
                fontSize: "36",
                fontWeight: "700",
                textTransform: "none",
                marginBottom: "16",
              },
              descriptionStyle: {
                color: "#6B7280",
                fontSize: "18",
                marginBottom: "40",
              },
              productCard: {
                backgroundColor: "#FFFFFF",
                padding: "16",
                borderRadius: "8",
                textAlign: "center",
              },
              imageStyle: {
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "6px",
                marginBottom: "12",
              },
              titleStyle: {
                fontSize: "18",
                color: "#111827",
                fontWeight: "600",
                marginBottom: "4",
              },
              priceStyle: {
                fontSize: "16",
                color: "#10B981",
                fontWeight: "500",
              },
            },
          },
        },
        {
          type: "Hero Banner",
          icon: "th",
          template: {
            id: `hero-banner-${Date.now()}`,
            component: "HeroSection",
            styles: {
              container: {
                height: "500",
                paddingX: "24",
                paddingY: "64",
              },
              background: {
                type: "image",
                color: "#1F2937",
                image: {
                  src: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                  alt: "Modern living room with stylish furniture",
                  overlayOpacity: "0.5",
                },
              },
              contentLayout: {
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "left",
              },
              heading: {
                color: "#FFFFFF",
                fontSize: "48",
                fontWeight: "800",
                marginBottom: "16",
              },
              subheading: {
                color: "#E5E7EB",
                fontSize: "20",
                fontWeight: "400",
                maxWidth: "600",
                marginBottom: "32",
              },
              button: {
                textColor: "#1F2937",
                backgroundColor: "#FFFFFF",
                hoverTextColor: "#FFFFFF",
                hoverBackgroundColor: "#10B981",
                paddingY: "12",
                paddingX: "24",
                borderRadius: "8",
                fontSize: "16",
                fontWeight: "600",
              },
            },
            content: {
              heading: "Designed for Today, Built for Tomorrow",
              subheading:
                "Discover our new collection of handcrafted furniture that blends timeless aesthetics with modern functionality. Perfect for any home.",
              cta: {
                enabled: true,
                text: "Shop New Arrivals",
                url: "/collections/new",
              },
            },
          },
        },
        {
          type: "Featured Product",
          icon: "shopping-bag",
          template: {
            id: `featured-product-${Date.now()}`,
            component: "FeaturedProduct",
            title: "Featured Product",
            description:
              "Crafted with care and designed to impress, this exclusive item is a must-have in your home.",
            product: {
              id: "product-101",
              title: "Signature Lounge Chair",
              price: "$349",
              image:
                "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
              cta: {
                enabled: true,
                text: "Shop Now",
                url: "/products/lounge-chair",
              },
            },
            styles: {
              container: {
                backgroundColor: "#F9FAFB",
                paddingY: "64",
                paddingX: "32",
              },
              titleStyle: {
                fontSize: "36",
                fontWeight: "700",
                color: "#111827",
                textTransform: "none",
                marginBottom: "16",
              },
              descriptionStyle: {
                fontSize: "18",
                color: "#6B7280",
                maxWidth: "600",
                marginBottom: "24",
              },
              imageStyle: {
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
              },
              productTitle: {
                fontSize: "22",
                fontWeight: "600",
                color: "#111827",
              },
              productPrice: {
                fontSize: "18",
                fontWeight: "500",
                color: "#10B981",
              },
              button: {
                paddingY: "12",
                paddingX: "24",
                backgroundColor: "#1F2937",
                textColor: "#FFFFFF",
                hoverBackgroundColor: "#10B981",
                hoverTextColor: "#FFFFFF",
                fontSize: "16",
                fontWeight: "600",
                borderRadius: "6",
              },
            },
          },
        },
        {
          type: "Footer",
          icon: "th",
          template: {
            id: `footer-section-${Date.now()}`,
            component: "Footer",
            styles: {
              container: {
                backgroundColor: "#111827",
                paddingY: "64",
                paddingX: "24",
              },
              columnsWrapper: {
                gridGap: "32",
              },
              columnHeading: {
                color: "#9CA3AF",
                fontSize: "14",
                fontWeight: "600",
                textTransform: "uppercase",
                marginBottom: "16",
              },
              descriptionText: {
                color: "#D1D5DB",
                fontSize: "16",
                lineHeight: "1.5",
              },
              link: {
                color: "#D1D5DB",
                hoverColor: "#FFFFFF",
                fontSize: "16",
                paddingY: "4",
              },
              bottomSection: {
                marginTop: "64",
                paddingTop: "32",
                borderTopWidth: "1",
                borderTopColor: "#374151",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              socialIcon: {
                color: "#9CA3AF",
                hoverColor: "#FFFFFF",
                size: "24",
              },
              copyright: {
                color: "#9CA3AF",
                fontSize: "14",
              },
            },
            columns: [
              {
                id: "col-001",
                type: "description",
                logo: {
                  src: "https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?cs=srgb&dl=pexels-goumbik-669502.jpg&fm=jpg",
                  width: 100,
                  alt: "White Logo",
                  marginBottom: "16",
                },
                text: "Making commerce better for everyone, everywhere.",
              },
              {
                id: "col-002",
                type: "links",
                heading: "Products",
                links: [
                  { id: "f-link-001", text: "Templates", url: "/templates" },
                  { id: "f-link-002", text: "Pricing", url: "/pricing" },
                  { id: "f-link-003", text: "Features", url: "/features" },
                ],
              },
              {
                id: "col-003",
                type: "links",
                heading: "Company",
                links: [
                  { id: "f-link-004", text: "About Us", url: "/about" },
                  { id: "f-link-005", text: "Careers", url: "/careers" },
                  { id: "f-link-006", text: "Contact", url: "/contact" },
                ],
              },
            ],
            socialLinks: {
              enabled: true,
              links: [
                {
                  id: "social-001",
                  network: "twitter",
                  url: "https://twitter.com",
                },
                {
                  id: "social-002",
                  network: "github",
                  url: "https://github.com",
                },
                {
                  id: "social-003",
                  network: "linkedin",
                  url: "https://linkedin.com",
                },
              ],
            },
            copyright: {
              text: "© 2024 Your Platform, Inc. All rights reserved.",
            },
          },
        },
        {
          type: "ContactForm",
          icon: "phone",
          template: {
            id: `contact-form-${Date.now()}`,
            component: "ContactForm",
            styles: {
              container: {
                backgroundColor: "#F5F5F5",
                paddingY: 32,
                paddingX: 24,
                gap: 16,
                textAlign: "center",
                buttonWidth: "400",
                containerWidth: "40%",
              },
              labels: {
                color: "#111827",
                titleFontSize: 24,
                fontSize: 16,
                fontWeight: "500",
                marginBottom: 4,
              },
              inputs: {
                backgroundColor: "#FFFFFF",
                textColor: "#111827",
                borderColor: "#D1D5DB",
                borderWidth: 1,
                fontSize: 16,
                borderRadius: 4,
                paddingY: 8,
                paddingX: 12,
                minHeight: 100,
                gap: 12,
              },
              button: {
                backgroundColor: "#2563EB",
                textColor: "#FFFFFF",
                paddingY: 12,
                paddingX: 16,
                borderRadius: 6,
                fontSize: 16,
                fontWeight: "600",
              },
            },
            fields: {
              title: "Contact Us",
              name: {
                enabled: true,
                label: "Name",
                placeholder: "Your Name",
              },
              email: {
                enabled: true,
                label: "Email",
                placeholder: "Your Email",
              },
              phone: {
                enabled: true,
                label: "Phone",
                placeholder: "Your Phone Number",
              },
              message: {
                enabled: true,
                label: "Message",
                placeholder: "Your Message Here",
              },
            },
            submitButton: {
              enabled: true,
              text: "Submit Form",
            },
          },
        },
        {
          type: "PreFooterEmailSignup",
          icon: "envelope",
          template: {
            id: `prefooter-email-signup-${Date.now()}`,
            component: "PreFooterEmailSignup",
            styles: {
              container: {
                backgroundColor: "#F9FAFB",
                paddingY: 48,
                paddingX: 24,
                gap: 16,
                textAlign: "center",
                containerWidth: "100%",
              },
              heading: {
                color: "#111827",
                fontSize: 28,
                fontWeight: "700",
                marginBottom: 16,
              },
              input: {
                backgroundColor: "#FFFFFF",
                textColor: "#111827",
                borderColor: "#D1D5DB",
                borderWidth: 1,
                fontSize: 16,
                borderRadius: 4,
                paddingY: 10,
                paddingX: 12,
                gap: 8,
              },
              button: {
                backgroundColor: "#2563EB",
                textColor: "#FFFFFF",
                paddingY: 10,
                paddingX: 16,
                borderRadius: 4,
                fontSize: 16,
                fontWeight: "600",
              },
            },
            content: {
              heading: "Join Our Newsletter",
              placeholder: "Enter your email",
            },
            submitButton: {
              enabled: true,
              text: "Subscribe",
            },
          },
        },
        {
          type: "ProductHighlight",
          icon: "star",
          template: {
            id: `product-highlight-${Date.now()}`,
            component: "ProductHighlight",
            styles: {
              container: {
                backgroundColor: "#F9FAFB",
                paddingY: 48,
                paddingX: 24,
                gap: 24,
                textAlign: "center",
                containerWidth: "100%",
              },
              image: {
                width: 100,
                height: "400",
                borderRadius: 8,
                objectFit: "cover",
              },
              title: {
                color: "#111827",
                fontSize: 28,
                fontWeight: "700",
              },
              price: {
                color: "#10B981",
                fontSize: 20,
                fontWeight: "600",
              },
              description: {
                color: "#6B7280",
                fontSize: 16,
                maxWidth: 600,
              },
              button: {
                backgroundColor: "#2563EB",
                textColor: "#FFFFFF",
                paddingY: 12,
                paddingX: 24,
                borderRadius: 6,
                fontSize: 16,
                fontWeight: "600",
              },
            },
            product: {
              title: "Signature Lounge Chair",
              price: "$349",
              image:
                "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
              description: {
                enabled: true,
                text: "Crafted with care and designed to impress, this exclusive item is a must-have in your home.",
              },
              cta: {
                enabled: true,
                text: "Shop Now",
                url: "/products/lounge-chair",
              },
            },
          },
        },
        {
          type: "SplitFeatureSection",
          icon: "snowflake",
          template: {
            id: `snow-wax-promo-${Date.now()}`,
            component: "SplitFeatureSection",
            title: "Stay hydrated",
            description:
              "Try our wax subscription so you can fly high, but never dry.",
            product: {
              id: "wax-subscription-001",
              title: "",
              price: "",
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=compress&cs=tinysrgb&w=1600",
              cta: {
                enabled: true,
                text: "Get waxy now",
                url: "/subscribe",
              },
            },
            styles: {
              container: {
                backgroundColor: "#111111",
                paddingY: "64",
                paddingX: "32",
              },
              titleStyle: {
                fontSize: "36",
                fontWeight: "700",
                color: "#FFFFFF",
                textTransform: "none",
                marginBottom: "16",
              },
              descriptionStyle: {
                fontSize: "18",
                color: "#D1D5DB",
                maxWidth: "480",
                marginBottom: "24",
              },
              imageStyle: {
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
              },
              button: {
                paddingY: "12",
                paddingX: "24",
                backgroundColor: "#FFFFFF",
                textColor: "#111111",
                hoverBackgroundColor: "#E5E7EB",
                hoverTextColor: "#111111",
                fontSize: "16",
                fontWeight: "600",
                borderRadius: "6",
              },
            },
          },
        },
        {
          type: "ImageWithTextSection",
          template: {
            id: `image-text-${Date.now()}`,
            component: "ImageWithTextSection",
            image: {
              src: "https://cdn.pixabay.com/photo/2024/02/24/01/32/ai-generated-8593080_1280.jpg",
              alt: "Beautiful workspace",
            },
            content: {
              heading: "Designed for Productivity",
              description:
                "Create a focused and inspiring work environment with our ergonomic furniture collection.",
              button: {
                text: "Shop Now",
                url: "/products/workspace",
              },
            },
            styles: {
              container: {
                backgroundColor: "#F9FAFB",
                paddingY: 64,
                paddingX: 32,
                gap: 40,
              },
              imageWrapper: {
                textAlign: "center",
                padding: "0px",
              },
              img: {
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: 12,
              },
              textWrapper: {
                textAlign: "left",
                padding: "0px",
              },
              heading: {
                color: "#111827",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "1.2",
              },
              description: {
                color: "#4B5563",
                fontSize: "18px",
                lineHeight: "1.5",
              },
              button: {
                backgroundColor: "#111827",
                color: "#FFFFFF",
                padding: "12px 24px",
                borderRadius: 8,
                fontSize: "16px",
              },
            },
          },
        },
        {
          type: "MultimediaCollage",
          icon: "photo-video",
          template: {
            id: `multimedia-collage-${Date.now()}`,
            component: "MultimediaCollage",
            title: {
              text: "Create a Visual Impact",
              fontSize: "32",
              fontWeight: "700",
              color: "#111827",
            },
            items: [
              {
                id: "item-1",
                type: "image",
                src: "https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg",
                alt: "Nature 1",
                caption: "Fresh yogurt",
              },
              {
                id: "item-2",
                type: "image",
                src: "https://cdn.pixabay.com/photo/2024/12/29/09/14/product-9297608_1280.jpg",
                alt: "Nature 2",
                caption: "Healthy product",
              },
              {
                id: "item-3",
                type: "video",
                src: "https://www.w3schools.com/html/mov_bbb.mp4",
                alt: "Sample video",
                caption: "Video showcase",
              },
              {
                id: "item-4",
                type: "image",
                src: "https://cdn.pixabay.com/photo/2016/10/14/16/00/showroom-1740447_1280.jpg",
                alt: "Workspace",
                caption: "Modern workspace",
              },
            ],
            styles: {
              container: {
                backgroundColor: "#f8fafc",
                paddingY: "64",
                paddingX: "32",
              },
              titleStyle: {
                fontSize: "32",
                fontWeight: "700",
                color: "#111827",
                textAlign: "center",
                marginBottom: "16",
              },
              grid: {
                columns: "repeat(2, 1fr)",
                gap: "16px",
              },
              mediaItem: {
                borderRadius: "12px",
              },
              textOverlay: {
                color: "#fff",
                fontSize: "18",
                padding: "16px",
                fontWeight: "600",
              },
            },
          },
        },
        {
          type: "Navbar",
          icon: "bars",
          template: {
            id: `navbar-section-${Date.now()}`,
            component: "Navbar",
            styles: {
              container: {
                backgroundColor: "#FFFFFF",
                paddingY: "16",
                paddingX: "24",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              links: {
                color: "#111827",
                fontSize: "16",
                fontWeight: "500",
              },
              button: {
                textColor: "#FFFFFF",
                backgroundColor: "#2563EB",
                paddingY: "8",
                paddingX: "16",
                borderRadius: "6",
              },
            },
            logo: {
              type: "image",
              src: "https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?cs=srgb&dl=pexels-goumbik-669502.jpg&fm=jpg",
              alt: "My Awesome Store",
              width: 120,
              height: 40,
            },
            links: [
              { id: "link-001", text: "Home", url: "/" },
              { id: "link-002", text: "Shop All", url: "/collections/all" },
              { id: "link-003", text: "About Us", url: "/pages/about" },
            ],
            ctaButton: {
              enabled: true,
              text: "Contact Us",
              url: "/pages/contact",
            },
          },
        },
      ],
    },
  ];

  const canvasComponents = [
    { id: "hero-1", type: "Hero Banner", name: "Main Hero" },
  ];
  const pages = [
    { id: "home", name: "Home", path: "/" },
    { id: "products", name: "Products", path: "/products" },
    { id: "about", name: "About", path: "/about" },
    { id: "contact", name: "Contact", path: "/contact" },
    { id: "blog", name: "Blog", path: "/blog" },
  ];
  return (
    <div className="flex-1 flex overflow-hidden">
      <Sidebar
        showComponentPanel={showComponentPanel}
        setShowComponentPanel={setShowComponentPanel}
        componentCategories={componentCategories}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
      />
      <Canvas
        currentPage={currentPage}
        isPageDropdownOpen={isPageDropdownOpen}
        setIsPageDropdownOpen={setIsPageDropdownOpen}
        pages={pages}
        handlePageSelect={handlePageSelect}
        setPreviewMode={setPreviewMode}
        showComponentPanel={showComponentPanel}
        showPropertiesPanel={showPropertiesPanel}
        setShowComponentPanel={setShowComponentPanel}
        setShowPropertiesPanel={setShowPropertiesPanel}
        previewMode={previewMode}
        components={components}
        canvasComponents={canvasComponents}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        handleComponentSelect={handleComponentSelect}
        selectedComponent={selectedComponent}
        // updateComponentContent={updateComponentContent}
        setComponents={setComponents}
      />
      {showPropertiesPanel && selectedComponent && (
        <PropertiesPanel
          selectedComponent={selectedComponent}
          components={components}
          setComponents={setComponents}
          //   updateComponentContent={updateComponentContent}
          setShowPropertiesPanel={setShowPropertiesPanel}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
        />
      )}
    </div>
  );
};

export default Builder;
