import React from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    valueColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, valueColor = 'text-blue-600' }) => {
    return (
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">{title}</p>
            <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
        </div>
    );
};

export default StatCard;
