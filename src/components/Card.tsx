import React from 'react';

interface CardProps {
    title: string;
    filter: React.ReactNode;
    children: React.ReactNode;
}

function Card({ title, filter, children }: CardProps) {
    return (
        <div className="bg-white w-full h-screen rounded-lg shadow p-4 overflow-y-scroll">
            <div className="flex justify-between">
                <h2 className="font-bold text-lg mb-4">{title}</h2>
                <section>{filter}</section>
            </div>
            {children}
        </div>
    )
}

export default Card