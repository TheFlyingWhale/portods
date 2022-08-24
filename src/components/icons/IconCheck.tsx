import React from "react";
import { IconProps } from "./IconUtilities";
import IconContainer from "./IconContainer";

const IconCheck: React.FC<IconProps> = ({ className, size, contained }) => {
    if (contained) {
        return (
            <IconContainer className={className} size={size}>
                <path d="M4.76691 10.8044L1.21092 7.2484L0 8.45079L4.76691 13.2177L15 2.98461L13.7976 1.78223L4.76691 10.8044Z" />
            </IconContainer>
        );
    }
    return (
        <path
            d="M4.76691 10.8044L1.21092 7.2484L0 8.45079L4.76691 13.2177L15 2.98461L13.7976 1.78223L4.76691 10.8044Z"
            fill="black"
        />
    );
};

export default IconCheck;
