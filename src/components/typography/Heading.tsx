import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
    children?: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
    children,
    as = "h1",
    className,
}) => {
    if (as === "h6")
        return (
            <h6 className={twMerge(`text-base ${className}`)}>{children}</h6>
        );

    if (as === "h5")
        return <h5 className={twMerge(`text-lg ${className}`)}>{children}</h5>;

    if (as === "h4")
        return <h4 className={twMerge(`text-xl ${className}`)}>{children}</h4>;

    if (as === "h3")
        return <h3 className={twMerge(`text-2xl ${className}`)}>{children}</h3>;

    if (as === "h2")
        return <h2 className={twMerge(`text-3xl ${className}`)}>{children}</h2>;

    return <h1 className={twMerge(`text-4xl ${className}`)}>{children}</h1>;
};

export default Heading;
