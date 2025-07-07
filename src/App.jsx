import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import Dashboard from './components/Dashboard';
import Themes from './components/Themes';
import Pages from './components/Pages';
import Analytics from './components/Analytics';

const App = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [previewMode, setPreviewMode] = useState('desktop');
    const [isDragging, setIsDragging] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [themeCustomizations, setThemeCustomizations] = useState({});
    const [userPages, setUserPages] = useState([
        { id: 'home', name: 'Home', path: '/', isPublished: false },
        { id: 'products', name: 'Products', path: '/products', isPublished: false },
        { id: 'about', name: 'About', path: '/about', isPublished: false },
        { id: 'contact', name: 'Contact', path: '/contact', isPublished: false },
    ]);
    const [showComponentPanel, setShowComponentPanel] = useState(true);
    const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);
    const [currentPage, setCurrentPage] = useState('Home');
    const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [saveStatus, setSaveStatus] = useState(null);

    const [activePanel, setActivePanel] = useState("typography");
    const [logo, setLogo] = useState("Your Logo");
    const [navItems, setNavItems] = useState([
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Services" },
        { id: 4, text: "Contact" },
    ]);

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
            id: 'minimal',
            name: 'Minimal',
            description: 'Clean and modern design perfect for any brand',
            preview: 'https://readdy.ai/api/search-image?query=A%20modern%20and%20minimal%20e-commerce%20website%20design%20mockup%20with%20clean%20typography%20and%20ample%20white%20space%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=20&orientation=landscape',
            colors: {
                primary: '#3b82f6',
                secondary: '#1f2937',
                accent: '#f59e0b',
            },
        },
        {
            id: 'boutique',
            name: 'Boutique',
            description: 'Elegant and sophisticated design for fashion brands',
            preview: 'https://readdy.ai/api/search-image?query=An%20elegant%20and%20sophisticated%20e-commerce%20website%20design%20mockup%20with%20luxury%20fashion%20elements%20and%20refined%20typography%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=21&orientation=landscape',
            colors: {
                primary: '#6366f1',
                secondary: '#18181b',
                accent: '#ec4899',
            },
        },
        {
            id: 'modern',
            name: 'Modern',
            description: 'Bold and contemporary design for trendy brands',
            preview: 'https://readdy.ai/api/search-image?query=A%20bold%20and%20contemporary%20e-commerce%20website%20design%20mockup%20with%20dynamic%20layouts%20and%20modern%20typography%20professional%20UI%20design%20on%20light%20background&width=600&height=400&seq=22&orientation=landscape',
            colors: {
                primary: '#8b5cf6',
                secondary: '#27272a',
                accent: '#f43f5e',
            },
        },
    ];

    const pages = [
        { id: 'home', name: 'Home', path: '/' },
        { id: 'products', name: 'Products', path: '/products' },
        { id: 'about', name: 'About', path: '/about' },
        { id: 'contact', name: 'Contact', path: '/contact' },
        { id: 'blog', name: 'Blog', path: '/blog' },
    ];

    const componentCategories = [
        {
            name: 'Layout',
            items: [
                {
                    type: 'Container',
                    icon: 'square',
                    template: {
                        id: `container-${Date.now()}`,
                        type: 'Container',
                        content: { maxWidth: 'max-w-7xl', padding: 'p-4' },
                        style: { backgroundColor: '#ffffff' },
                    },
                },
                {
                    type: 'Grid',
                    icon: 'th-large',
                    template: {
                        id: `grid-${Date.now()}`,
                        type: 'Grid',
                        content: { columns: 3, gap: 4 },
                        style: { padding: 'p-4' },
                    },
                },
            ],
        },
        {
            name: 'Commerce',
            items: [
                {
                    type: 'Product Grid',
                    icon: 'th',
                    template: {
                        id: `product-grid-${Date.now()}`,
                        type: 'Product Grid',
                        content: {
                            title: 'Featured Products',
                            products: [
                                {
                                    name: 'Classic White T-Shirt',
                                    price: '$29.99',
                                    image: 'https://readdy.ai/api/search-image?query=A%20minimal%20and%20elegant%20white%20t-shirt%20on%20a%20clean%20light%20gray%20background%20professional%20product%20photography%20with%20soft%20shadows%20high-quality%20fabric%20texture%20visible%20simple%20and%20modern%20styling%20perfect%20for%20e-commerce&width=300&height=300&seq=10&orientation=squarish',
                                },
                                {
                                    name: 'Denim Jacket',
                                    price: '$89.99',
                                    image: 'https://readdy.ai/api/search-image?query=A%20stylish%20denim%20jacket%20on%20a%20clean%20light%20gray%20background%20professional%20product%20photography%20showing%20texture%20and%20details%20modern%20minimal%20styling%20perfect%20for%20e-commerce&width=300&height=300&seq=11&orientation=squarish',
                                },
                                {
                                    name: 'Classic Sneakers',
                                    price: '$79.99',
                                    image: 'https://readdy.ai/api/search-image?query=A%20pair%20of%20classic%20white%20sneakers%20on%20a%20clean%20light%20gray%20background%20professional%20product%20photography%20showing%20design%20details%20modern%20minimal%20styling%20perfect%20for%20e-commerce&width=300&height=300&seq=12&orientation=squarish',
                                },
                            ],
                        },
                        style: {
                            typography: {
                                fontSize: 16,
                                fontWeight: 400,
                                color: "#333333",
                                fontFamily: "Inter, sans-serif",
                            },
                            spacing: {
                                paddingTop: 16,
                                paddingRight: 24,
                                paddingBottom: 16,
                                paddingLeft: 24,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                itemSpacing: 24,
                            },
                            background: {
                                type: "solid",
                                color: "#ffffff",
                                gradient: "linear-gradient(to right, #ffffff, #f0f0f0)",
                                opacity: 100,
                            },
                            layout: {
                                orientation: "horizontal",
                                alignment: "center",
                            },
                            effects: {
                                borderRadius: 4,
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "#eeeeee",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            },
                        }
                    },
                },
                {
                    type: 'Featured Collection',
                    icon: 'star',
                    template: {
                        id: `collection-${Date.now()}`,
                        type: 'Featured Collection',
                        content: {
                            title: 'Summer Collection',
                            description: 'Discover our latest summer styles',
                            buttonText: 'Shop Now',
                            image: 'https://readdy.ai/api/search-image?query=A%20collection%20of%20trendy%20summer%20clothing%20items%20arranged%20aesthetically%20on%20a%20clean%20light%20gray%20background%20professional%20e-commerce%20photography%20with%20soft%20lighting%20modern%20minimal%20styling&width=600&height=400&seq=13&orientation=landscape',
                        },
                        style: {
                            typography: {
                                fontSize: 16,
                                fontWeight: 400,
                                color: "#333333",
                                fontFamily: "Inter, sans-serif",
                            },
                            spacing: {
                                paddingTop: 16,
                                paddingRight: 24,
                                paddingBottom: 16,
                                paddingLeft: 24,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                itemSpacing: 24,
                            },
                            background: {
                                type: "solid",
                                color: "#ffffff",
                                gradient: "linear-gradient(to right, #ffffff, #f0f0f0)",
                                opacity: 100,
                            },
                            layout: {
                                orientation: "horizontal",
                                alignment: "center",
                            },
                            effects: {
                                borderRadius: 4,
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "#eeeeee",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            },
                        }
                    },
                },
                {
                    type: 'Product Card',
                    icon: 'shopping-bag',
                    template: {
                        id: `product-card-${Date.now()}`,
                        type: 'Product Card',
                        content: {
                            name: 'Premium T-Shirt',
                            price: '$29.99',
                            description: 'High-quality cotton t-shirt',
                            image: 'https://readdy.ai/api/search-image?query=A%20premium%20white%20t-shirt%20on%20a%20clean%20light%20gray%20background%20showing%20fabric%20quality%20and%20details%20professional%20product%20photography%20with%20soft%20shadows%20modern%20minimal%20styling&width=300&height=300&seq=14&orientation=squarish',
                        },
                        style: {
                            typography: {
                                fontSize: 16,
                                fontWeight: 400,
                                color: "#333333",
                                fontFamily: "Inter, sans-serif",
                            },
                            spacing: {
                                paddingTop: 16,
                                paddingRight: 24,
                                paddingBottom: 16,
                                paddingLeft: 24,
                                marginTop: 0,
                                marginRight: 0,
                                marginBottom: 0,
                                marginLeft: 0,
                                itemSpacing: 24,
                            },
                            background: {
                                type: "solid",
                                color: "#ffffff",
                                gradient: "linear-gradient(to right, #ffffff, #f0f0f0)",
                                opacity: 100,
                            },
                            layout: {
                                orientation: "horizontal",
                                alignment: "center",
                            },
                            effects: {
                                borderRadius: 4,
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "#eeeeee",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            },
                        }
                    },
                },
                {
                    type: 'Navbar',
                    // icon: 'shopping-bag',
                    // template: {
                    //     id: `product-card-${Date.now()}`,
                    //     type: 'Product Card',
                    //     content: {
                    //         name: 'Premium T-Shirt',
                    //         price: '$29.99',
                    //         description: 'High-quality cotton t-shirt',
                    //         image: 'https://readdy.ai/api/search-image?query=A%20premium%20white%20t-shirt%20on%20a%20clean%20light%20gray%20background%20showing%20fabric%20quality%20and%20details%20professional%20product%20photography%20with%20soft%20shadows%20modern%20minimal%20styling&width=300&height=300&seq=14&orientation=squarish',
                    //     },
                    //     style: { backgroundColor: '#ffffff', padding: '1rem' },
                    // },
                },
            ],
        },
        {
            name: 'Media',
            items: [
                {
                    type: 'Image',
                    icon: 'image',
                    template: {
                        id: `image-${Date.now()}`,
                        type: 'Image',
                        content: {
                            src: 'https://readdy.ai/api/search-image?query=A%20beautiful%20lifestyle%20product%20photography%20scene%20on%20a%20clean%20light%20gray%20background%20professional%20lighting%20with%20soft%20shadows%20modern%20minimal%20styling&width=800&height=600&seq=15&orientation=landscape',
                            alt: 'Featured Image',
                        },
                        style: { width: 'full', rounded: 'lg' },
                    },
                },
                {
                    type: 'Gallery',
                    icon: 'images',
                    template: {
                        id: `gallery-${Date.now()}`,
                        type: 'Gallery',
                        content: {
                            images: [
                                {
                                    src: 'https://readdy.ai/api/search-image?query=A%20lifestyle%20product%20scene%20with%20fashion%20items%20on%20clean%20light%20gray%20background%20professional%20photography%20modern%20styling%20number%201&width=400&height=400&seq=16&orientation=squarish',
                                    alt: 'Gallery Image 1',
                                },
                                {
                                    src: 'https://readdy.ai/api/search-image?query=A%20lifestyle%20product%20scene%20with%20fashion%20items%20on%20clean%20light%20gray%20background%20professional%20photography%20modern%20styling%20number%202&width=400&height=400&seq=17&orientation=squarish',
                                    alt: 'Gallery Image 2',
                                },
                                {
                                    src: 'https://readdy.ai/api/search-image?query=A%20lifestyle%20product%20scene%20with%20fashion%20items%20on%20clean%20light%20gray%20background%20professional%20photography%20modern%20styling%20number%203&width=400&height=400&seq=18&orientation=squarish',
                                    alt: 'Gallery Image 3',
                                },
                            ],
                        },
                        style: { gap: 4, rounded: 'lg' },
                    },
                },
            ],
        },
        {
            name: 'Content',
            items: [
                {
                    type: 'Heading',
                    icon: 'heading',
                    template: {
                        id: `heading-${Date.now()}`,
                        type: 'Heading',
                        content: { text: 'Section Heading', level: 'h2' },
                        style: { size: 'text-3xl', weight: 'font-bold', color: 'text-gray-900' },
                    },
                },
                {
                    type: 'Text Block',
                    icon: 'align-left',
                    template: {
                        id: `text-${Date.now()}`,
                        type: 'Text Block',
                        content: { text: 'Add your content here. Edit this text to make it your own.' },
                        style: { size: 'text-lg', color: 'text-gray-600', align: 'text-left' },
                    },
                },
                {
                    type: 'Button',
                    icon: 'mouse-pointer',
                    template: {
                        id: `button-${Date.now()}`,
                        type: 'Button',
                        content: { text: 'Click Me', url: '#' },
                        style: {
                            backgroundColor: '#3b82f6',
                            textColor: '#ffffff',
                            padding: 'px-6 py-3',
                            rounded: 'rounded-md',
                        },
                    },
                },
            ],
        },
    ];

    const canvasComponents = [
        { id: 'hero-1', type: 'Hero Banner', name: 'Main Hero' },
        // { id: 'featured-1', type: 'Featured Collection', name: 'Summer Collection' },
        // { id: 'text-1', type: 'Text Block', name: 'About Section' },
    ];

    const mockProperties = {
        content: [
            { name: 'Heading', type: 'text', value: 'Summer Collection 2025' },
            { name: 'Subheading', type: 'text', value: 'Discover our latest arrivals' },
            { name: 'Button Text', type: 'text', value: 'Shop Now' },
        ],
        style: [
            { name: 'Background Color', type: 'color', value: '#f8fafc' },
            { name: 'Text Color', type: 'color', value: '#1e293b' },
            { name: 'Font Size', type: 'range', value: 18, min: 12, max: 36 },
        ],
        layout: [
            { name: 'Padding Top', type: 'range', value: 24, min: 0, max: 100 },
            { name: 'Padding Bottom', type: 'range', value: 24, min: 0, max: 100 },
            { name: 'Width', type: 'select', value: 'full', options: ['full', 'contained', 'narrow'] },
        ],
    };

    const projectName = 'My Fashion Store';


    const [styles, setStyles] = useState({
        typography: {
            fontSize: 16,
            fontWeight: 400,
            color: "#333333",
            fontFamily: "Inter, sans-serif",
        },
        spacing: {
            paddingTop: 16,
            paddingRight: 24,
            paddingBottom: 16,
            paddingLeft: 24,
            marginTop: 0,
            marginRight: 0,
            marginBottom: 0,
            marginLeft: 0,
            itemSpacing: 24,
        },
        background: {
            type: "solid",
            color: "#ffffff",
            gradient: "linear-gradient(to right, #ffffff, #f0f0f0)",
            opacity: 100,
        },
        layout: {
            orientation: "horizontal",
            alignment: "center",
        },
        effects: {
            borderRadius: 4,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#eeeeee",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        },
    });



    const handlePageSelect = (pageName) => {
        setCurrentPage(pageName);
        setIsPageDropdownOpen(false);
    };

    const updateComponentContent = (componentId, field, value) => {
        setComponents((prevComponents) =>
            prevComponents.map((component) =>
                component.id === componentId
                    ? { ...component, content: { ...component.content, [field]: value } }
                    : component
            )
        );
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
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
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 1000);
    };

    const handleDragStart = (e, componentTemplate) => {
        e.dataTransfer.setData('componentTemplate', JSON.stringify(componentTemplate));
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const componentTemplate = JSON.parse(e.dataTransfer.getData('componentTemplate'));
        const newComponent = {
            ...componentTemplate.template,
            id: `${componentTemplate.type.toLowerCase()}-${Date.now()}`,
        };
        setComponents((prevComponents) => [...prevComponents, newComponent]);
        setIsDragging(false);
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
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
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 800);
    };

    const handleSave = () => {
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 1000);
    };

    const handlePublish = () => {
        alert('Site published successfully!');
    };

    useEffect(() => {
        if (activeTab === 'analytics') {
            const chartDom = document.getElementById('analytics-chart');
            if (chartDom) {
                const myChart = echarts.init(chartDom);
                const option = {
                    animation: false,
                    tooltip: { trigger: 'axis' },
                    legend: { data: ['Page Views', 'Conversions'] },
                    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    },
                    yAxis: { type: 'value' },
                    series: [
                        {
                            name: 'Page Views',
                            type: 'line',
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            smooth: true,
                            lineStyle: { width: 3 },
                        },
                        {
                            name: 'Conversions',
                            type: 'line',
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
            const dropdown = document.getElementById('page-dropdown');
            const button = document.getElementById('page-dropdown-button');
            if (
                dropdown &&
                button &&
                !dropdown.contains(event.target) &&
                !button.contains(event.target)
            ) {
                setIsPageDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    // const updateStyle = (category, property, value) => {
    //     setStyles({
    //         ...styles,
    //         [category]: {
    //             ...styles[category],
    //             [property]: value,
    //         },
    //     });
    // };


    const updateStyle = (category, property, value) => {
        console.log(`Updating style: ${category} > ${property} = ${value}`);

        const selectedComponents = components.find((comp) => comp.id === selectedComponent);
        if (!selectedComponents) {
            console.error('Selected component not found');
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
                                [property]: value
                            }
                        }
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
                previewMode === "mobile" ? "100%" : previewMode === "tablet" ? "768px" : "100%",
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


    // const updateStyle = (property, value) => {
    //     setProductGrid((prevGrid) => ({
    //         ...prevGrid,
    //         style: {
    //             ...prevGrid.style,
    //             [property]: value
    //         }
    //     }));
    // };

    // Example usage within the component
    // const handleStyleChange = (property, value) => {
    //     updateStyle(property, value);
    // };

    const handleDeletecomponent = (id) => {
        setComponents((prevComponents) =>
            prevComponents.filter((component) => component.id !== id)
        );
        setSelectedComponent(null);
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus(null), 2000);
        }, 1000);
    }




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
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'builder' && (
                <div className="flex-1 flex overflow-hidden">
                    <Sidebar
                        showComponentPanel={showComponentPanel}
                        setShowComponentPanel={setShowComponentPanel}
                        componentCategories={componentCategories}
                        handleDragStart={handleDragStart}
                        handleDragEnd={handleDragEnd}
                    />
                    <Canvas
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
                        logo={logo}
                        navItems={navItems}
                        getNavbarStyle={getNavbarStyle}
                        getNavItemStyle={getNavItemStyle}
                    />
                    {showPropertiesPanel && selectedComponent && (
                        <PropertiesPanel
                            selectedComponent={selectedComponent}
                            components={components}
                            canvasComponents={canvasComponents}
                            mockProperties={mockProperties}
                            updateComponentContent={updateComponentContent}
                            updateComponentStyle={updateComponentStyle}
                            handlePropertyChange={handlePropertyChange}
                            setShowPropertiesPanel={setShowPropertiesPanel}
                            styles={styles}
                            activePanel={activePanel}
                            setActivePanel={setActivePanel}
                            updateStyle={updateStyle}
                            handleDeletecomponent={handleDeletecomponent}
                        />
                    )}
                </div>
            )}
            {activeTab === 'themes' && (
                <Themes
                    availableThemes={availableThemes}
                    selectedTheme={selectedTheme}
                    setSelectedTheme={setSelectedTheme}
                    setComponents={setComponents}
                    setActiveTab={setActiveTab}
                />
            )}
            {activeTab === 'pages' && (
                <Pages
                    userPages={userPages}
                    setUserPages={setUserPages}
                    setActiveTab={setActiveTab}
                />
            )}
            {activeTab === 'analytics' && <Analytics />}
        </div>
    );
};

export default App;







// import React, { useState } from "react";
// import Sidebar from "./Sidebar.jsx";
// import LivePreview from "./LivePreview.jsx";

// const App = () => {
//     const [logo, setLogo] = useState("Your Logo");
//     const [navItems, setNavItems] = useState([
//         { id: 1, text: "Home" },
//         { id: 2, text: "About" },
//         { id: 3, text: "Services" },
//         { id: 4, text: "Contact" },
//     ]);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [editingItemId, setEditingItemId] = useState(null);
//     const [editText, setEditText] = useState("");
//     const [device, setDevice] = useState("desktop");
//     const [activePanel, setActivePanel] = useState("typography");
//     const [jsonPanelOpen, setJsonPanelOpen] = useState(true);
//     const [styles, setStyles] = useState({
//         typography: {
//             fontSize: 16,
//             fontWeight: 400,
//             color: "#333333",
//             fontFamily: "Inter, sans-serif",
//         },
//         spacing: {
//             paddingTop: 16,
//             paddingRight: 24,
//             paddingBottom: 16,
//             paddingLeft: 24,
//             marginTop: 0,
//             marginRight: 0,
//             marginBottom: 0,
//             marginLeft: 0,
//             itemSpacing: 24,
//         },
//         background: {
//             type: "solid",
//             color: "#ffffff",
//             gradient: "linear-gradient(to right, #ffffff, #f0f0f0)",
//             opacity: 100,
//         },
//         layout: {
//             orientation: "horizontal",
//             alignment: "center",
//         },
//         effects: {
//             borderRadius: 4,
//             borderWidth: 1,
//             borderStyle: "solid",
//             borderColor: "#eeeeee",
//             boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
//         },
//     });

//     const handleItemClick = (id, text) => {
//         setEditingItemId(id);
//         setEditText(text);
//     };

//     const handleInputChange = (e) => {
//         setEditText(e.target.value);
//     };

//     const handleInputBlur = () => {
//         if (editingItemId !== null) {
//             if (editingItemId === "logo") {
//                 setLogo(editText);
//             } else {
//                 setNavItems(
//                     navItems.map((item) =>
//                         item.id === editingItemId ? { ...item, text: editText } : item
//                     )
//                 );
//             }
//             setEditingItemId(null);
//         }
//     };

//     const handleInputKeyDown = (e) => {
//         if (e.key === "Enter") {
//             handleInputBlur();
//         }
//     };

//     const updateStyle = (category, property, value) => {
//         setStyles({
//             ...styles,
//             [category]: {
//                 ...styles[category],
//                 [property]: value,
//             },
//         });
//     };

//     const getNavbarStyle = () => {
//         const { typography, spacing, background, layout, effects } = styles;
//         return {
//             display: "flex",
//             flexDirection: layout.orientation === "horizontal" ? "row" : "column",
//             alignItems: layout.orientation === "horizontal" ? "center" : "flex-start",
//             justifyContent:
//                 layout.alignment === "start"
//                     ? "flex-start"
//                     : layout.alignment === "end"
//                         ? "flex-end"
//                         : "center",
//             backgroundColor:
//                 background.type === "solid" ? background.color : "transparent",
//             backgroundImage:
//                 background.type === "gradient" ? background.gradient : "none",
//             opacity: background.opacity / 100,
//             paddingTop: `${spacing.paddingTop}px`,
//             paddingRight: `${spacing.paddingRight}px`,
//             paddingBottom: `${spacing.paddingBottom}px`,
//             paddingLeft: `${spacing.paddingLeft}px`,
//             marginTop: `${spacing.marginTop}px`,
//             marginRight: `${spacing.marginRight}px`,
//             marginBottom: `${spacing.marginBottom}px`,
//             marginLeft: `${spacing.marginLeft}px`,
//             borderRadius: `${effects.borderRadius}px`,
//             borderWidth: `${effects.borderWidth}px`,
//             borderStyle: effects.borderStyle,
//             borderColor: effects.borderColor,
//             boxShadow: effects.boxShadow,
//             fontFamily: typography.fontFamily,
//             width:
//                 device === "mobile" ? "100%" : device === "tablet" ? "768px" : "100%",
//             maxWidth: "100%",
//         };
//     };

//     const getNavItemStyle = () => {
//         const { typography, spacing, layout } = styles;
//         return {
//             color: typography.color,
//             fontSize: `${typography.fontSize}px`,
//             fontWeight: typography.fontWeight,
//             padding: "8px 12px",
//             cursor: "pointer",
//             marginRight:
//                 layout.orientation === "horizontal" ? `${spacing.itemSpacing}px` : "0",
//             marginBottom:
//                 layout.orientation === "vertical" ? `${spacing.itemSpacing}px` : "0",
//             position: "relative",
//             transition: "all 0.2s ease",
//         };
//     };

//     const getDevicePreviewStyle = () => {
//         switch (device) {
//             case "mobile":
//                 return { maxWidth: "375px" };
//             case "tablet":
//                 return { maxWidth: "768px" };
//             default:
//                 return { maxWidth: "100%" };
//         }
//     };

//     const getConfigJSON = () => {
//         return JSON.stringify(
//             {
//                 navItems: navItems.map((item) => ({ text: item.text })),
//                 styles,
//             },
//             null,
//             2
//         );
//     };

//     const exportJSON = () => {
//         const dataStr =
//             "data:text/json;charset=utf-8," + encodeURIComponent(getConfigJSON());
//         const downloadAnchorNode = document.createElement("a");
//         downloadAnchorNode.setAttribute("href", dataStr);
//         downloadAnchorNode.setAttribute("download", "navbar-config.json");
//         document.body.appendChild(downloadAnchorNode);
//         downloadAnchorNode.click();
//         downloadAnchorNode.remove();
//     };

//     return (
//         <div className="flex flex-col min-h-screen bg-gray-50">
//             <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
//                 <h1 className="text-xl font-semibold text-gray-800">Navbar Builder</h1>
//                 <div className="flex items-center space-x-4">
//                     <div className="flex items-center bg-gray-100 rounded-lg p-1">
//                         <button
//                             onClick={() => setDevice("desktop")}
//                             className={`p-2 rounded-md ${device === "desktop" ? "bg-white shadow-sm" : ""}`}
//                         >
//                             <i className="fas fa-desktop text-gray-600"></i>
//                         </button>
//                         <button
//                             onClick={() => setDevice("tablet")}
//                             className={`p-2 rounded-md ${device === "tablet" ? "bg-white shadow-sm" : ""}`}
//                         >
//                             <i className="fas fa-tablet-alt text-gray-600"></i>
//                         </button>
//                         <button
//                             onClick={() => setDevice("mobile")}
//                             className={`p-2 rounded-md ${device === "mobile" ? "bg-white shadow-sm" : ""}`}
//                         >
//                             <i className="fas fa-mobile-alt text-gray-600"></i>
//                         </button>
//                     </div>
//                     <button
//                         onClick={exportJSON}
//                         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap flex items-center cursor-pointer"
//                     >
//                         <i className="fas fa-download mr-2"></i>
//                         Export JSON
//                     </button>
//                 </div>
//             </header>
//             <div className="flex flex-1 overflow-hidden">
//                 <Sidebar
//                     styles={styles}
//                     activePanel={activePanel}
//                     setActivePanel={setActivePanel}
//                     updateStyle={updateStyle}
//                 />
//                 <LivePreview
//                     logo={logo}
//                     navItems={navItems}
//                     isLoggedIn={isLoggedIn}
//                     editingItemId={editingItemId}
//                     editText={editText}
//                     device={device}
//                     styles={styles}
//                     jsonPanelOpen={jsonPanelOpen}
//                     setJsonPanelOpen={setJsonPanelOpen}
//                     handleItemClick={handleItemClick}
//                     handleInputChange={handleInputChange}
//                     handleInputBlur={handleInputBlur}
//                     handleInputKeyDown={handleInputKeyDown}
//                     getNavbarStyle={getNavbarStyle}
//                     getNavItemStyle={getNavItemStyle}
//                     getDevicePreviewStyle={getDevicePreviewStyle}
//                     getConfigJSON={getConfigJSON}
//                     exportJSON={exportJSON}
//                 />
//             </div>
//         </div>
//     );
// };

// export default App;