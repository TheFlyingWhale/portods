import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button
            className={twMerge(
                `bg-blue-500 hover:bg-orange-500 px-6 py-3 rounded-md ${className}`
            )}
        >
            {children}
        </button>
    );
};

export default Button;
