import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
            <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none"
            />
            <div className="flex items-center">
                <div className="text-sm mr-4">Shivam Sharma</div>
                <img
                    src="Profile.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
            </div>
        </header>
    );
};

export default Header;
