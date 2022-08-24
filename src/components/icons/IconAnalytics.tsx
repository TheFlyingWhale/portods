import React from "react";
import { IconProps } from "./IconUtilities";
import IconContainer from "./IconContainer";

const IconAnalytics: React.FC<IconProps> = ({ className, size, contained }) => {
    if (contained) {
        return (
            <IconContainer className={className} size={size}>
                <path d="M13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0ZM5 11.6667H3.33333V7.5H5V11.6667ZM8.33333 11.6667H6.66667V9.16667H8.33333V11.6667ZM8.33333 7.5H6.66667V5.83333H8.33333V7.5ZM11.6667 11.6667H10V3.33333H11.6667V11.6667Z" />
            </IconContainer>
        );
    }
    return (
        <path d="M13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0ZM5 11.6667H3.33333V7.5H5V11.6667ZM8.33333 11.6667H6.66667V9.16667H8.33333V11.6667ZM8.33333 7.5H6.66667V5.83333H8.33333V7.5ZM11.6667 11.6667H10V3.33333H11.6667V11.6667Z" />
    );
};

export default IconAnalytics;
