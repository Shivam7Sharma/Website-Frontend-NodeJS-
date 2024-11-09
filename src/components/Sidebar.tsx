import React from 'react';
import { FaHome, FaVideo, FaMap, FaComments, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="h-screen w-1/5 bg-white p-5 shadow-lg">
            <h1 className="text-xl font-bold mb-8">iPawtrol</h1>
            <nav className="flex flex-col space-y-4">
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaHome /><span>Dashboard</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaVideo /><span>Live View</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaMap /><span>Maps</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaComments /><span>Chat</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaCog /><span>Settings</span>
                </button>
                <button className="flex items-center space-x-2 text-neutral-800 hover:text-primary">
                    <FaSignOutAlt /><span>Logout</span>
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
