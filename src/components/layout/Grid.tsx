import React from "react";
import { twMerge } from "tailwind-merge";

interface GridProps {
    children: React.ReactNode;
    className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className }) => {
    return <div className={twMerge(`grid ${className}`)}>{children}</div>;
};

export default Grid;
