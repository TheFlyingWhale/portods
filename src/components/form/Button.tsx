import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import IconContainer from "../icons/IconContainer";
import { HStack, Text } from "../";

/* To do:
    rewrite to handle different sizes
    smarter way to handle colors and variants
 */

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outlined" | "ghost" | "round";
    color?: "neutral" | "blue" | "green" | "red" | "orange";
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const PADDING = "px-4 pt-2.5 pb-3";
const BORDER_RADIUS = "rounded-md";
const FONT = "font-primary font-medium";

const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    if (variant === "secondary")
        return (
            <Secondary
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                className={className}
                color={color}
            >
                {children}
            </Secondary>
        );

    if (variant === "outlined")
        return (
            <Outlined
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                className={className}
                color={color}
            >
                {children}
            </Outlined>
        );

    if (variant === "ghost")
        return (
            <Ghost
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                className={className}
                color={color}
            >
                {children}
            </Ghost>
        );

    if (variant === "round")
        return (
            <Round
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                className={className}
                color={color}
            >
                {children}
            </Round>
        );

    return (
        <Primary
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            className={className}
            color={color}
        >
            {children}
        </Primary>
    );
};

export default Button;

const Primary: React.FC<ButtonProps> = ({
    children,
    className,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-500 text-blue-50 hover:bg-blue-400 active:bg-blue-600";
            case "green":
                return "bg-green-700 text-green-50 hover:bg-green-400 active:bg-green-800";
            case "red":
                return "bg-red-500 text-red-50 hover:bg-red-300 active:bg-red-700";
            case "orange":
                return "bg-orange-500 text-orange-50 hover:bg-orange-400 active:bg-orange-600";
            default:
                return "bg-neutral-800 text-neutral-100 hover:bg-neutral-500 active:bg-neutral-800";
        }
    };

    return (
        <button
            className={twMerge(
                `${getColorClasses(
                    color
                )} ${PADDING} ${BORDER_RADIUS} ${FONT} ${className}`
            )}
        >
            <HStack className="justify-center items-center gap-2 whitespace-nowrap">
                {leftIcon && (
                    <IconContainer className="fill-neutral-100" size={15}>
                        {leftIcon}
                    </IconContainer>
                )}
                <Text className={`leading-none mt-1`}>{children}</Text>
                {rightIcon && (
                    <IconContainer className="fill-neutral-100" size={15}>
                        {rightIcon}
                    </IconContainer>
                )}
            </HStack>
        </button>
    );
};

const Secondary: React.FC<ButtonProps> = ({
    children,
    className,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 active:text-blue-900";
            case "green":
                return "bg-green-100 text-green-800 hover:bg-green-200 active:bg-green-300 active:text-green-900";
            case "red":
                return "bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 active:bg-red-300 active:text-red-900";
            case "orange":
                return "bg-orange-100 text-orange-800 hover:bg-orange-200 active:bg-orange-300 active:text-orange-900";
            default:
                return "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 hover:text-neutral-900 active:bg-neutral-500 active:text-neutral-900";
        }
    };

    const getIconFill = (color: string) => {
        switch (color) {
            case "blue":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-blue-700",
                    "fill-blue-700",
                    "fill-blue-900"
                );
            case "green":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-green-800",
                    "fill-green-800",
                    "fill-green-900"
                );
            case "red":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-red-600",
                    "fill-red-700",
                    "fill-red-900"
                );
            case "orange":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-orange-800",
                    "fill-orange-800",
                    "fill-orange-900"
                );
            default:
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-neutral-800",
                    "fill-neutral-900",
                    "fill-neutral-900"
                );
        }
    };

    return (
        <button
            className={twMerge(
                `${getColorClasses(
                    color
                )} ${PADDING} ${BORDER_RADIUS} ${FONT} ${className}`
            )}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        >
            <HStack className="justify-center items-center gap-2 whitespace-nowrap">
                {leftIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {leftIcon}
                    </IconContainer>
                )}
                <Text className="leading-none mt-1">{children}</Text>
                {rightIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {rightIcon}
                    </IconContainer>
                )}
            </HStack>
        </button>
    );
};

const Outlined: React.FC<ButtonProps> = ({
    children,
    className,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue": {
                const inactive =
                    "bg-blue-50 text-blue-600 outline outline-blue-600 outline-1";
                const hover =
                    "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-700";
                const active =
                    "active:bg-blue-200 active:text-blue-900 active:outline-blue-900";
                return `${inactive} ${hover} ${active}`;
            }
            case "green": {
                const inactive =
                    "bg-green-50 text-green-800 outline outline-green-800 outline-1";
                const hover =
                    "hover:bg-green-100 hover:text-green-800 hover:outline-green-800";
                const active =
                    "active:bg-green-200 active:text-green-900 active:outline-green-900";
                return `${inactive} ${hover} ${active}`;
            }
            case "red": {
                const inactive =
                    "bg-red-50 text-red-600 outline outline-red-600 outline-1";
                const hover =
                    "hover:bg-red-100 hover:text-red-700 hover:outline-red-700";
                const active =
                    "active:bg-red-200 active:text-red-900 active:outline-red-900";
                return `${inactive} ${hover} ${active}`;
            }
            case "orange": {
                const inactive =
                    "bg-orange-50 text-orange-700 outline outline-orange-700 outline-1";
                const hover =
                    "hover:bg-orange-100 hover:text-orange-700 hover:outline-orange-700";
                const active =
                    "active:bg-orange-200 active:text-orange-900 active:outline-orange-900";
                return `${inactive} ${hover} ${active}`;
            }
            default: {
                const inactive =
                    "bg-neutral-150 text-neutral-700 outline outline-neutral-700 outline-1";
                const hover = "hover:bg-neutral-200";
                const active =
                    "active:bg-neutral-300 active:text-neutral-900 active:outline-neutral-900";
                return `${inactive} ${hover} ${active}`;
            }
        }
    };

    const getIconFill = (color: string) => {
        switch (color) {
            case "blue":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-blue-600",
                    "fill-blue-700",
                    "fill-blue-900"
                );
            case "green":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-green-800",
                    "fill-green-800",
                    "fill-green-900"
                );
            case "red":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-red-600",
                    "fill-red-700",
                    "fill-red-900"
                );
            case "orange":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-orange-700",
                    "fill-orange-700",
                    "fill-orange-900"
                );
            default:
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-neutral-700",
                    "fill-neutral-700",
                    "fill-neutral-900"
                );
        }
    };

    return (
        <button
            className={twMerge(
                `${getColorClasses(
                    color
                )} ${PADDING} ${BORDER_RADIUS} ${FONT} ${className}`
            )}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        >
            <HStack className="justify-center items-center gap-2 whitespace-nowrap">
                {leftIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {leftIcon}
                    </IconContainer>
                )}
                <Text className="leading-none mt-1">{children}</Text>
                {rightIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {rightIcon}
                    </IconContainer>
                )}
            </HStack>
        </button>
    );
};

const Ghost: React.FC<ButtonProps> = ({
    children,
    className,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue":
                return "text-blue-500 hover:bg-blue-100 active:bg-blue-100 active:text-blue-700 active:bg-blue-200";
            case "green":
                return "text-green-700 hover:bg-green-100 hover:text-green-800 active:bg-green-200 active:text-green-900";
            case "red":
                return "text-red-500 hover:bg-red-100 hover:text-red-700 active:bg-red-200 active:text-red-900";
            case "orange":
                return "text-orange-500 hover:bg-orange-100 hover:text-orange-700 active:bg-orange-200 active:text-orange-900";
            default:
                return "text-neutral-900 hover:bg-neutral-200 hover:text-neutral-900 active:bg-neutral-300 active:text-neutral-900";
        }
    };

    const getIconFill = (color: string) => {
        switch (color) {
            case "blue":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-blue-500",
                    "fill-blue-500",
                    "fill-blue-700"
                );
            case "green":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-green-700",
                    "fill-green-800",
                    "fill-green-900"
                );
            case "red":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-red-500",
                    "fill-red-700",
                    "fill-red-900"
                );
            case "orange":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-orange-500",
                    "fill-orange-700",
                    "fill-orange-900"
                );
            default:
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-neutral-900",
                    "fill-neutral-900",
                    "fill-neutral-900"
                );
        }
    };

    return (
        <button
            className={twMerge(
                `${getColorClasses(
                    color
                )} ${PADDING} ${BORDER_RADIUS} ${FONT} ${className}`
            )}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        >
            <HStack className="justify-center items-center gap-2 whitespace-nowrap">
                {leftIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {leftIcon}
                    </IconContainer>
                )}
                <Text className="leading-none mt-1">{children}</Text>
                {rightIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {rightIcon}
                    </IconContainer>
                )}
            </HStack>
        </button>
    );
};

const Round: React.FC<ButtonProps> = ({
    children,
    className,
    color = "neutral",
    leftIcon,
    rightIcon,
}) => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const getColorClasses = (color: string) => {
        switch (color) {
            case "blue":
                return "bg-blue-500 text-blue-50 hover:bg-blue-400 active:bg-blue-600";
            case "green":
                return "bg-green-700 text-green-50 hover:bg-green-400 active:bg-green-800";
            case "red":
                return "bg-red-500 text-red-50 hover:bg-red-300 active:bg-red-700";
            case "orange":
                return "bg-orange-500 text-orange-50 hover:bg-orange-400 active:bg-orange-600";
            default:
                return "bg-neutral-800 text-neutral-100 hover:bg-neutral-500 active:bg-neutral-800";
        }
    };

    const getIconFill = (color: string) => {
        switch (color) {
            case "blue":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-blue-50",
                    "fill-blue-50",
                    "fill-blue-50"
                );
            case "green":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-green-50",
                    "fill-green-50",
                    "fill-green-50"
                );
            case "red":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-red-50",
                    "fill-red-50",
                    "fill-red-50"
                );
            case "orange":
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-orange-50",
                    "fill-orange-50",
                    "fill-orange-50"
                );
            default:
                return determineIconFill(
                    isMouseOver,
                    isMouseDown,
                    "fill-neutral-100",
                    "fill-neutral-100",
                    "fill-neutral-100"
                );
        }
    };

    return (
        <button
            className={twMerge(
                `${getColorClasses(
                    color
                )} ${PADDING} ${FONT} rounded-full ${className}`
            )}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        >
            <HStack className="justify-center items-center gap-2 whitespace-nowrap">
                {leftIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {leftIcon}
                    </IconContainer>
                )}
                <Text className="leading-none mt-1">{children}</Text>
                {rightIcon && (
                    <IconContainer className={getIconFill(color)} size={15}>
                        {rightIcon}
                    </IconContainer>
                )}
            </HStack>
        </button>
    );
};

const determineIconFill = (
    isMouseOver: boolean,
    isMouseDown: boolean,
    defaultFill: string,
    hoverFill: string,
    activeFill: string
) => {
    if (isMouseDown) return activeFill;
    if (isMouseOver) return hoverFill;
    return defaultFill;
};
