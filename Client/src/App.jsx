// export default App;
import React, { useState, useEffect, useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import * as echarts from "echarts";
import Navbar from "./components/Navbar";

import Themes from "./pages/Themes/Themes";
import Pages from "./pages/Pages/Pages";
import Analytics from "./pages/Analytics/Analytics";

import Dashboard from "./pages/Dashboard/Dashboard";
import Builder from "./pages/Builder/Builder";
import Settings from "./pages/Settings/Settings";
import PageGenerator from "./pages/PageGenerator/PageGenerator";
// import { convertOptionIdName } from "echarts/types/src/util/model.js";



export const DataShare = createContext();

// Main App component
const App = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("dashboard");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [userPages, setUserPages] = useState([
    { id: "home", name: "Home", path: "/home", isPublished: false },
    { id: "products", name: "Products", path: "/products", isPublished: false },
    { id: "about", name: "About", path: "/about", isPublished: false },
    { id: "contact", name: "Contact", path: "/contact", isPublished: false },
    { id: "blog", name: "Blogs", path: "/blogs", isPublished: false },
  ]);
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [saveStatus, setSaveStatus] = useState(null);
  const [isUserPage, setIsUserPage] = useState(null)
  const [components, setComponents] = useState([]);

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
      {
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
      {
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
      {
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
  console.log(allPageComponents, "alll")
  const handlePageChange = (e) => {
    const selectedId = e.target.value;
    setCurrentPage(selectedId);
    setComponents(allPageComponents[selectedId] || []);
  };
  const projectName = "My Fashion Store";

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
    setComponents(allPageComponents[currentPage] || []);
  }, [currentPage]);

  const handlePageSelect = (pageName) => {
    setCurrentPage(pageName);
    setIsPageDropdownOpen(false);
    setComponents(allPageComponents[pageName] || []);
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

  useEffect(() => {
    if (!currentPage) return;
    setAllPageComponents((prev) => ({
      ...prev,
      [currentPage]: components,
    }));
  }, [components, currentPage]);

  const shopname = "veeresh"

  useEffect(() => {
    const isPage = userPages.some((page) => {
      console.log(location.pathname, `/${shopname}${page.path}`, "from path")
      return location.pathname == `/${shopname}${page.path}`
    })
    console.log(isPage, location.pathname, "currectPath")
    setIsUserPage(isPage)
  }, [location.pathname])



  return (
    <DataShare.Provider
      value={{
        isPageDropdownOpen,
        setIsPageDropdownOpen,
        allPageComponents,
        handlePageSelect,
        currentPage,
        setSaveStatus,
        setComponents,
        components,
      }}
    >
      {/* <Router> */}
      <div className="flex flex-col h-screen bg-gray-50">
        {
          !isUserPage && (
            <Navbar
              projectName={projectName}
              isPageDropdownOpen={isPageDropdownOpen}
              setIsPageDropdownOpen={setIsPageDropdownOpen}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              saveStatus={saveStatus}
              handleSave={handleSave}
              handlePublish={handlePublish}
            />
          )
        }
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
          <Route
            path="/themes"
            element={
              <Themes
                availableThemes={availableThemes}
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
                setComponents={setComponents}
                setActiveTab={setActiveTab}
              />
            }
          />
          <Route
            path="/pages"
            element={
              <Pages
                userPages={userPages}
                setUserPages={setUserPages}
                setActiveTab={setActiveTab}
              />
            }
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/settings" element={<Settings />} />

          {
            userPages.map((page) => {
              // if()
              console.log("Rendering Route:", `/${shopname}${page.path}`, page.id);
              let pageName = page.name
              console.log(allPageComponents[pageName], "components")
              return (
                <Route path={`${shopname}${page.path}`} element={<PageGenerator components={allPageComponents[pageName]} />} />
              )
            })
          }
        </Routes>
      </div>
      {/* </Router> */}
    </DataShare.Provider>
  );
};

export default App;
