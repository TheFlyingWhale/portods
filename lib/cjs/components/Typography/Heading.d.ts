import React from "react";
interface HeadingProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
