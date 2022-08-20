import React from "react";
import { twMerge } from "tailwind-merge";

interface VStackProps {
    children: React.ReactNode;
    className?: string;
}

const VStack: React.FC<VStackProps> = ({ children, className }) => {
    return (
        <div className={twMerge(`flex flex-col ${className}`)}>{children}</div>
    );
};

export default VStack;
