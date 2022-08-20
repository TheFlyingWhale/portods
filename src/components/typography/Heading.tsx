import React from "react";

interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
    children,
    as = "h1",
    className,
}) => {
    return React.createElement(as, { className }, children);
};

export default Heading;
