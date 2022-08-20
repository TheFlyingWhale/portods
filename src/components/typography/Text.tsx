import React from "react";

interface TextProps {
    children: React.ReactNode;
    className: string;
}

const Text: React.FC<TextProps> = ({ children }) => {
    return <p>{children}</p>;
};

export default Text;
