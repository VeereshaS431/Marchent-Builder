import React from "react";

const NavbarSection = ({
    logo,
    navItems,
    getNavbarStyle,
    getNavItemStyle,
}) => {

    
    return (
        <nav
            style={getNavbarStyle()}
            className="relative flex items-center justify-between w-full"
        >
            <div className="flex items-center">
                <div
                    className="text-xl font-bold cursor-pointer"
                >
                    <div className="flex items-center">
                        <i className="fas fa-cube mr-2"></i>
                        {logo}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-8">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        style={getNavItemStyle()}
                        className="relative group"
                    >
                        <div
                            className="cursor-pointer"
                        >
                            {item.text}
                            <div className="absolute inset-0 border border-dashed border-blue-400 opacity-0 group-hover:opacity-100 rounded pointer-events-none"></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-8 pr-4 py-1 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-sm !rounded-button whitespace-nowrap">
                    Login
                </button>
            </div>
        </nav>
    );
};

export default NavbarSection;