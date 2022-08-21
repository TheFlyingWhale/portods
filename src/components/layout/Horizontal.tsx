import React from "react";

interface HorizontalProps {
    children: React.ReactNode;
    className?: string;
}

const Horizontal: React.FC<HorizontalProps> = ({ children, className }) => {
    return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default Horizontal;
