import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
import Dashboard from "./components/Dashboard";
import Themes from "./components/Themes";
import Pages from "./components/Pages";
import Analytics from "./components/Analytics";
import { Builder } from "./sections/Builder";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [themeCustomizations, setThemeCustomizations] = useState({});
  const [userPages, setUserPages] = useState([
    { id: "home", name: "Home", path: "/", isPublished: false },
    { id: "products", name: "Products", path: "/products", isPublished: false },
    { id: "about", name: "About", path: "/about", isPublished: false },
    { id: "contact", name: "Contact", path: "/contact", isPublished: false },
  ]);
  const [showComponentPanel, setShowComponentPanel] = useState(true);
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);

  const [activePanel, setActivePanel] = useState("typography");
  const [allPageComponents, setAllPageComponents] = useState({
    Home: [
      {
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
      {
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
            { id: "social-002", network: "github", url: "https://github.com" },
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
    ],
    Products: [],
    About: [
      {
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
    ],
    Contact: [],
  });

  const handlePageChange = (e) => {
    const selectedId = e.target.value;
    setCurrentPage(selectedId);
    setComponents(allPageComponents[selectedId] || []);
  };

  const [components, setComponents] = useState([
    // {
    //     id: 'hero-1',
    //     type: 'Hero Banner',
    //     name: 'Main Hero',
    //     content: {
    //         heading: 'Summer Collection 2025',
    //         subheading: 'Discover our latest arrivals with premium quality and stunning designs.',
    //         buttonText: 'Shop Now',
    //         imageUrl: 'https://readdy.ai/api/search-image?query=A%20stylish%20summer%20fashion%20collection%20featuring%20elegant%20clothing%20items%20arranged%20aesthetically%20on%20a%20light%20neutral%20background%2C%20professional%20e-commerce%20photography%20with%20soft%20natural%20lighting%2C%20high-quality%20fabric%20textures%20visible%2C%20modern%20and%20minimalist%20styling&width=600&height=400&seq=5&orientation=landscape',
    //     },
    //     style: {
    //         backgroundColor: '#ffffff',
    //         textColor: '#1f2937',
    //         padding: '2rem',
    //     },
    // },
  ]);

  const availableThemes = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and modern design perfect for any brand",
      preview:
        "https://readdy.ai/api/search-image?query=A%20modern%20and%20minimal%20e-commerce%20website%20design%20mockup%20with%20clean%20typography%20and%20ample%20white%20space%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=20&orientation=landscape",
      colors: {
        primary: "#3b82f6",
        secondary: "#1f2937",
        accent: "#f59e0b",
      },
    },
    {
      id: "boutique",
      name: "Boutique",
      description: "Elegant and sophisticated design for fashion brands",
      preview:
        "https://readdy.ai/api/search-image?query=An%20elegant%20and%20sophisticated%20e-commerce%20website%20design%20mockup%20with%20luxury%20fashion%20elements%20and%20refined%20typography%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=21&orientation=landscape",
      colors: {
        primary: "#6366f1",
        secondary: "#18181b",
        accent: "#ec4899",
      },
    },
    {
      id: "modern",
      name: "Modern",
      description: "Bold and contemporary design for trendy brands",
      preview:
        "https://readdy.ai/api/search-image?query=A%20bold%20and%20contemporary%20e-commerce%20website%20design%20mockup%20with%20dynamic%20layouts%20and%20modern%20typography%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=22&orientation=landscape",
      colors: {
        primary: "#8b5cf6",
        secondary: "#27272a",
        accent: "#f43f5e",
      },
    },
  ];

  const pages = [
    { id: "home", name: "Home", path: "/" },
    { id: "products", name: "Products", path: "/products" },
    { id: "about", name: "About", path: "/about" },
    { id: "contact", name: "Contact", path: "/contact" },
    { id: "blog", name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    if (!currentPage) return;

    setAllPageComponents((prev) => ({
      ...prev,
      [currentPage]: components,
    }));
  }, [components, currentPage]);

  useEffect(() => {
    // Initialize with the first page's components
    setComponents(allPageComponents[currentPage] || []);
  }, []);

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
                containerWidth: "40%", // Default to 40% width (approx. max-w-lg equivalent)
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
                backgroundColor: "#F9FAFB", // Light background for Savor's clean aesthetic
                paddingY: 48,
                paddingX: 24,
                gap: 16,
                textAlign: "center",
                containerWidth: "100%", // Default to full page width
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
                backgroundColor: "#F9FAFB", // Light background for Savor's clean aesthetic
                paddingY: 48,
                paddingX: 24,
                gap: 24,
                textAlign: "center",
                containerWidth: "100%", // Default to full page width
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
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=compress&cs=tinysrgb&w=1600", // Replace with your own CDN
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
          icon: "photo-video", // Optional: for visual selection in UI
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
      ],
    },
  ];

  const canvasComponents = [
    { id: "hero-1", type: "Hero Banner", name: "Main Hero" },
    // { id: 'featured-1', type: 'Featured Collection', name: 'Summer Collection' },
    // { id: 'text-1', type: 'Text Block', name: 'About Section' },
  ];

  const mockProperties = {
    content: [
      { name: "Heading", type: "text", value: "Summer Collection 2025" },
      {
        name: "Subheading",
        type: "text",
        value: "Discover our latest arrivals",
      },
      { name: "Button Text", type: "text", value: "Shop Now" },
    ],
    style: [
      { name: "Background Color", type: "color", value: "#f8fafc" },
      { name: "Text Color", type: "color", value: "#1e293b" },
      { name: "Font Size", type: "range", value: 18, min: 12, max: 36 },
    ],
    layout: [
      { name: "Padding Top", type: "range", value: 24, min: 0, max: 100 },
      { name: "Padding Bottom", type: "range", value: 24, min: 0, max: 100 },
      {
        name: "Width",
        type: "select",
        value: "full",
        options: ["full", "contained", "narrow"],
      },
    ],
  };

  const projectName = "My Fashion Store";

  const handlePageSelect = (pageName) => {
    setCurrentPage(pageName);
    setIsPageDropdownOpen(false);
    console.log("selected page", pageName);
    setComponents(allPageComponents[pageName] || []);
  };
  console.log("slected", components);
  const updateComponentContent = (componentId, field, value) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === componentId
          ? { ...component, content: { ...component.content, [field]: value } }
          : component
      )
    );
  };
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

  const handlePropertyChange = (section, index, value) => {
    console.log(`Changed ${section} property at index ${index} to ${value}`);
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2000);
    }, 800);
  };

  const handleSave = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  const handlePublish = () => {
    alert("Site published successfully!");
  };

  useEffect(() => {
    if (activeTab === "analytics") {
      const chartDom = document.getElementById("analytics-chart");
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          animation: false,
          tooltip: { trigger: "axis" },
          legend: { data: ["Page Views", "Conversions"] },
          grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Page Views",
              type: "line",
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              smooth: true,
              lineStyle: { width: 3 },
            },
            {
              name: "Conversions",
              type: "line",
              data: [120, 132, 101, 134, 90, 230, 210],
              smooth: true,
              lineStyle: { width: 3 },
            },
          ],
        };
        myChart.setOption(option);
        return () => myChart.dispose();
      }
    }
  }, [activeTab]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("page-dropdown");
      const button = document.getElementById("page-dropdown-button");
      if (
        dropdown &&
        button &&
        !dropdown.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setIsPageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const updateStyle = (category, property, value) => {
    console.log(`Updating style: ${category} > ${property} = ${value}`);

    const selectedComponents = components.find(
      (comp) => comp.id === selectedComponent
    );
    if (!selectedComponents) {
      console.error("Selected component not found");
      return;
    }

    setComponents((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedComponent
          ? {
              ...card,
              style: {
                ...card.style,
                [category]: {
                  ...card.style[category],
                  [property]: value,
                },
              },
            }
          : card
      )
    );
  };

  const getNavbarStyle = () => {
    const { typography, spacing, background, layout, effects } = styles;
    return {
      display: "flex",
      flexDirection: layout.orientation === "horizontal" ? "row" : "column",
      alignItems: layout.orientation === "horizontal" ? "center" : "flex-start",
      justifyContent:
        layout.alignment === "start"
          ? "flex-start"
          : layout.alignment === "end"
          ? "flex-end"
          : "center",
      backgroundColor:
        background.type === "solid" ? background.color : "transparent",
      backgroundImage:
        background.type === "gradient" ? background.gradient : "none",
      opacity: background.opacity / 100,
      paddingTop: `${spacing.paddingTop}px`,
      paddingRight: `${spacing.paddingRight}px`,
      paddingBottom: `${spacing.paddingBottom}px`,
      paddingLeft: `${spacing.paddingLeft}px`,
      marginTop: `${spacing.marginTop}px`,
      marginRight: `${spacing.marginRight}px`,
      marginBottom: `${spacing.marginBottom}px`,
      marginLeft: `${spacing.marginLeft}px`,
      borderRadius: `${effects.borderRadius}px`,
      borderWidth: `${effects.borderWidth}px`,
      borderStyle: effects.borderStyle,
      borderColor: effects.borderColor,
      boxShadow: effects.boxShadow,
      fontFamily: typography.fontFamily,
      width:
        previewMode === "mobile"
          ? "100%"
          : previewMode === "tablet"
          ? "768px"
          : "100%",
      maxWidth: "100%",
    };
  };

  const getNavItemStyle = () => {
    const { typography, spacing, layout } = styles;
    return {
      color: typography.color,
      fontSize: `${typography.fontSize}px`,
      fontWeight: typography.fontWeight,
      padding: "8px 12px",
      cursor: "pointer",
      marginRight:
        layout.orientation === "horizontal" ? `${spacing.itemSpacing}px` : "0",
      marginBottom:
        layout.orientation === "vertical" ? `${spacing.itemSpacing}px` : "0",
      position: "relative",
      transition: "all 0.2s ease",
    };
  };

  console.log("selectedComponent", selectedComponent);


  const handleDeletecomponent = (id) => {
    setComponents((prevComponents) =>
      prevComponents.filter((component) => component.id !== id)
    );
    setSelectedComponent(null);
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  const updateComponentStyle = (componentId, field, value) => {
    setComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === componentId
          ? { ...component, style: { ...component.style, [field]: value } }
          : component
      )
    );
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus(null), 2000);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Navbar
        projectName={projectName}
        currentPage={currentPage}
        isPageDropdownOpen={isPageDropdownOpen}
        setIsPageDropdownOpen={setIsPageDropdownOpen}
        pages={pages}
        handlePageSelect={handlePageSelect}
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        saveStatus={saveStatus}
        handleSave={handleSave}
        handlePublish={handlePublish}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === "dashboard" && <Dashboard />}
      {activeTab === "builder" && (
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
            // previewMode={previewMode}
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
            updateComponentContent={updateComponentContent}
            // logo={logo}
            setComponents={setComponents}
            // navItems={navItems}
            // getNavbarStyle={getNavbarStyle}
            // getNavItemStyle={getNavItemStyle}
          />
          {showPropertiesPanel && selectedComponent && (
            <PropertiesPanel
              selectedComponent={selectedComponent}
              components={components}
              setComponents={setComponents}
              // canvasComponents={canvasComponents}
              // mockProperties={mockProperties}
              updateComponentContent={updateComponentContent}
              // updateComponentStyle={updateComponentStyle}
              // handlePropertyChange={handlePropertyChange}
              setShowPropertiesPanel={setShowPropertiesPanel}
              // styles={styles}
              activePanel={activePanel}
              setActivePanel={setActivePanel}
              updateStyle={updateStyle}
            />
          )}
        </div>
      )}
      {activeTab === "themes" && (
        <Themes
          availableThemes={availableThemes}
          selectedTheme={selectedTheme}
          setSelectedTheme={setSelectedTheme}
          setComponents={setComponents}
          setActiveTab={setActiveTab}
        />
      )}
      {activeTab === "pages" && (
        <Pages
          userPages={userPages}
          setUserPages={setUserPages}
          setActiveTab={setActiveTab}
        />
      )}
      {activeTab === "analytics" && <Analytics />}
      {/* <Builder/> */}
    </div>
  );
};

export default App;
