import React from "react";

export interface IconContainerProps {
    children?: React.ReactNode;
    className?: string;
    size?: number;
}

const IconContainer: React.FC<IconContainerProps> = ({
    children,
    className = "fill-neutral-700",
    size = 25,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 15 15`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {children}
        </svg>
    );
};

export default IconContainer;
