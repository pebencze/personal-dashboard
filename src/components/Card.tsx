import React from 'react';

interface CardProps {
    title: string;
    children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
    return (
        <div className="bg-white w-full h-screen rounded-lg shadow p-4">
            <h2 className="font-bold text-lg mb-4">{title}</h2>
            {children}
        </div>
    )
}

export default Card