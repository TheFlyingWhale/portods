import React from "react";
import { twMerge } from "tailwind-merge";

interface VerticalProps {
    children: React.ReactNode;
    className?: string;
}

const Vertical: React.FC<VerticalProps> = ({ children, className }) => {
    return (
        <div className={twMerge(`flex flex-col ${className}`)}>{children}</div>
    );
};

export default Vertical;
