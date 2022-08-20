import React from "react";

interface IconProps {
    children: React.ReactNode;
    fill?: string;
    size?: number;
}

const IconContainer: React.FC<IconProps> = ({
    children,
    fill = "fill-neutral-700",
    size = 25,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 15 15`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={fill}
        >
            {children}
        </svg>
    );
};

export default IconContainer;
