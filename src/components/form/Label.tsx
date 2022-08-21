import React from "react";
import { twMerge } from "tailwind-merge";

const SIZE_SM = "text-sm";
const SIZE_MD = "text-base";
const SIZE_LG = "text-lg";

const getLabelSize = (size: LabelSize) => {
    if (size === "sm") return SIZE_SM;

    if (size === "lg") return SIZE_LG;

    return SIZE_MD;
};

type LabelSize = "sm" | "md" | "lg" | undefined;

interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string | undefined;
    className?: string;
    size?: LabelSize;
}

const Label: React.FC<LabelProps> = ({
    children,
    htmlFor,
    className,
    size = "md",
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={twMerge(
                `font-primary font-medium text-neutral-800 ${getLabelSize(
                    size
                )} ${className}`
            )}
        >
            {children}
        </label>
    );
};

export default Label;
