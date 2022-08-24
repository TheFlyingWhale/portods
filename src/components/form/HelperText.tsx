import React from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../";

const SIZE_SM = "text-xs";
const SIZE_MD = "text-sm";
const SIZE_LG = "text-base";

const getSize = (size: LabelSize) => {
    if (size === "sm") return SIZE_SM;

    if (size === "lg") return SIZE_LG;

    return SIZE_MD;
};

type LabelSize = "sm" | "md" | "lg";

interface HelperTextProps {
    children: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const HelperText: React.FC<HelperTextProps> = ({
    children,
    size = "md",
    className,
}) => {
    return (
        <Text
            className={twMerge(
                `${getSize(size)} text-neutral-600 mt-1 ${className}`
            )}
        >
            {children}
        </Text>
    );
};

export default HelperText;
