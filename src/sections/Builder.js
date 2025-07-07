// components/builder/Builder.js
import React, { useState, useEffect } from "react";
import { NavbarEditor } from "./NavbarEditor";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer/Footer";
import { FooterEditor } from "./Footer/FooterEditor";
import { Hero } from "./HeroSection/Hero";
import { HeroEditor } from "./HeroSection/HeroEditor";
import { FeaturedCollection } from "./FeaturedCollection/FeaturedCollection";
import { FeaturedCollectionEditor } from "./FeaturedCollection/FeaturedCollectionEditor";
import { FeaturedProduct } from "./FeaturedProduct/FeaturedProduct";
import { FeaturedProductEditor } from "./FeaturedProduct/FeaturedProductEditor";

// Mock initial data you would fetch from your API
const MOCK_INITIAL_DATA = {
  id: "navbar-section-123",
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
};
const footer_mock_data = {
  id: "footer-section-456",
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
      { id: "social-001", network: "twitter", url: "https://twitter.com" },
      { id: "social-002", network: "github", url: "https://github.com" },
      { id: "social-003", network: "linkedin", url: "https://linkedin.com" },
    ],
  },
  copyright: {
    text: "© 2024 Your Platform, Inc. All rights reserved.",
  },
};

const MOCK_HERO_DATA = {
  id: "hero-section-789",
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
};

const MOCK_FEATURED_COLLECTION_DATA = {
  id: "featured-collection-456",
  component: "FeaturedCollection",
  title: "Featured Collection",
  description: "Handpicked designs that elevate your space — elegant, functional, and timeless.",
  products: [
    {
      id: "prod-1",
      title: "Minimalist Wooden Chair",
      price: "$149",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "prod-2",
      title: "Modern Accent Lamp",
      price: "$89",
      image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "prod-3",
      title: "Contemporary Sofa",
      price: "$799",
      image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800",
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
};

const MOCK_FEATURED_PRODUCT_DATA = {
  id: "featured-product-123",
  component: "FeaturedProduct",
  title: "Featured Product",
  description: "Crafted with care and designed to impress, this exclusive item is a must-have in your home.",
  product: {
    id: "product-101",
    title: "Signature Lounge Chair",
    price: "$349",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
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
};

export function Builder() {
  const [navbarData, setNavbarData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [heroData, setHeroData] = useState(null);
  const [featuredCollectionData, setFeaturedCollectionData] = useState(null)
  const [featuredProductData, setFeaturedProductData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  // --- NEW: State to track the active editor tab ---
  const [activeEditor, setActiveEditor] = useState("navbar"); // 'navbar' or 'footer'

  // Simulate fetching data from your backend
  useEffect(() => {
    // In a real app: fetch('/api/page/home/navbar').then(res => res.json())...
    setTimeout(() => {
      setNavbarData(MOCK_INITIAL_DATA);
      setFooterData(footer_mock_data);
      setHeroData(MOCK_HERO_DATA);
      setFeaturedCollectionData(MOCK_FEATURED_COLLECTION_DATA)
      setFeaturedProductData(MOCK_FEATURED_PRODUCT_DATA)
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSave = () => {
    const pageData = {
      navbar: navbarData,
      hero: heroData,
      featuredCollection : featuredCollectionData,
      featuredProduct: featuredProductData, 
      footer: footerData,
    };
    console.log("Saving complete page data:", pageData);
    // In a real app:
    // fetch('/api/page/home/navbar', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(navbarData),
    // });
    alert("Navbar saved! Check the console for the data.");
  };

  if (isLoading) {
    return <div>Loading Builder...</div>;
  }
  // Helper function for tab styling
  const getTabStyle = (tabName) => {
    return `flex-1 p-3 font-medium text-sm ${
      activeEditor === tabName
        ? "bg-white border-b-2 border-blue-600 text-blue-600"
        : "text-gray-500 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top Bar with Save Button */}
      <div className="flex-shrink-0 bg-white p-2 border-b flex justify-end">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Save
        </button>
      </div>

      <div className="flex flex-grow ">
        {/* Live Preview Area */}
        <div className="flex-grow flex flex-col items-center p-4 bg-gray-100 overflow-y-auto">
          <h2 className="self-start text-sm text-gray-500 mb-4">
            Live Preview
          </h2>
          <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden">
            <Navbar data={navbarData} />
            {/* NEW: Render the Hero Section */}
            <Hero data={heroData} />
            <FeaturedCollection data={featuredCollectionData}/>
            <FeaturedProduct data={featuredProductData}/>
            {/* You can add other components here */}
            <div className="h-48 bg-gray-50 flex items-center justify-center text-gray-400">
              Your Page Content Goes Here
            </div>
            <Footer data={footerData} />
          </div>
        </div>

        <div className="flex-shrink-0 w-96 bg-gray-50 border-l flex flex-col">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveEditor("navbar")}
              className={`flex-1 p-3 font-medium text-sm ${
                activeEditor === "navbar"
                  ? "bg-white border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Navbar
            </button>
            {/* NEW: Hero Tab */}
            <button
              onClick={() => setActiveEditor("hero")}
              className={getTabStyle("hero")}
            >
              Hero
            </button>
            <button
              onClick={() => setActiveEditor("featuredCollection")}
              className={getTabStyle("featuredCollection")}
            >
              Featured Collection
            </button>
            <button
              onClick={() => setActiveEditor("featuredProduct")}
              className={getTabStyle("featuredProduct")}
            >
              Featured Product
            </button>
            <button
              onClick={() => setActiveEditor("footer")}
              className={`flex-1 p-3 font-medium text-sm ${
                activeEditor === "footer"
                  ? "bg-white border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Footer
            </button>
          </div>

          {/* Conditional Rendering of Editors */}
          <div className="flex-grow overflow-y-auto">
            {activeEditor === "navbar" && (
              <NavbarEditor data={navbarData} onUpdate={setNavbarData} />
            )}
            {/* NEW: Hero Editor Rendering */}
            {activeEditor === "hero" && (
              <HeroEditor data={heroData} onUpdate={setHeroData} />
            )}
            {activeEditor === "featuredCollection" && (
              <FeaturedCollectionEditor data={featuredCollectionData} onUpdate={setFeaturedCollectionData} />
            )}
            {activeEditor === "featuredProduct" && (
              <FeaturedProductEditor data={featuredProductData} onUpdate={setFeaturedProductData} />
            )}

            {activeEditor === "footer" && (
              <FooterEditor data={footerData} onUpdate={setFooterData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
