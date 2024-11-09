import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    iconSrc: string;
    change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, iconSrc, change }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
            <img src={iconSrc} alt={title} className="w-12 h-12 mr-4" />
            <div>
                <div className="text-lg font-bold">{title}</div>
                <div className="text-2xl font-bold">{value}</div>
                {change !== undefined && (
                    <div className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {change > 0 ? '▲' : '▼'} {Math.abs(change)}%
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCard;
