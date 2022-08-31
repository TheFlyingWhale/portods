import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Horizontal, IconContainer, Text } from "../"

/* To do:
    Include focus styles
    Needs to be able to be disabled
    Add focus:ring styles
 */

export type ButtonVariant = "primary" | "secondary" | "ghost" | undefined

export type ButtonColor =
	| "neutral"
	| "blue"
	| "green"
	| "red"
	| "orange"
	| undefined

export type ButtonSize = "xs" | "sm" | "md" | "lg" | undefined

export type ButtonAlign =
	| "start"
	| "end"
	| "center"
	| "between"
	| "around"
	| "evenly"
	| undefined

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	color?: ButtonColor
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	size?: ButtonSize
	align?: ButtonAlign
	type?: "button" | "submit" | "reset" | undefined
}

/**
 * @prop {ButtonVariant} variant - "primary" | "secondary" | "ghost""
 * @prop {ButtonColor} color - "primary" | "secondary" | "outlined" | "ghost" | "round"
 * @prop {React.ReactNode?} leftIcon - icon with the prop "contained" set to false
 * @prop {React.ReactNode?} rightIcon - icon with the prop "contained" set to false
 * @prop {ButtonSize} size - "xs" | "sm" | "md" | "lg"
 * @prop {ButtonAlgin} align - "start" | "end" | "center" | "between" | "around" | "evenly"
 */
const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = "primary",
	color = "neutral",
	leftIcon,
	rightIcon,
	size = "md",
	align = "center",
	onClick,
	type,
	...props
}) => {
	const [isMouseOver, setIsMouseOver] = useState(false)
	const [isMouseDown, setIsMouseDown] = useState(false)

	return (
		<button
			className={twMerge(
				`${getVariantAndColorClasses(variant, color)} ${getButtonSize(
					size
				)} ${FONT} ${BORDER_RADIUS} ${className} transition-colors`
			)}
			onMouseOver={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}
			onMouseDown={() => setIsMouseDown(true)}
			onMouseUp={() => setIsMouseDown(false)}
			onClick={onClick}
			type={type}
			{...props}
		>
			<Horizontal
				className={`
					${getButtonAlignment(align)} 
					items-center 
					whitespace-nowrap 
					${getGapSize(size)}
				`}
			>
				{leftIcon && (
					<IconContainer
						className={`transition-colors ${getIconFill(
							variant,
							color,
							isMouseOver,
							isMouseDown
						)}`}
						size={getIconSize(size)}
					>
						{leftIcon}
					</IconContainer>
				)}
				<Text className="text-inherit leading-none mt-1 font-primary">
					{children}
				</Text>
				{rightIcon && (
					<IconContainer
						className={`transition-colors ${getIconFill(
							variant,
							color,
							isMouseOver,
							isMouseDown
						)}`}
						size={getIconSize(size)}
					>
						{rightIcon}
					</IconContainer>
				)}
			</Horizontal>
		</button>
	)
}

export default Button

const BORDER_RADIUS = "rounded-md"
const FONT = "font-primary font-medium"

const SIZE_EXTRA_SMALL = `px-4 py-1.5 text-xs`
const SIZE_SMALL = `px-5 py-2 text-sm`
const SIZE_MEDIUM = `px-6 py-2.5 text-base`
const SIZE_LARGE = `px-7 py-3 text-xl`

const ICON_SIZE_EXTRA_SMALL = 10
const ICON_SIZE_SMALL = 13
const ICON_SIZE_MEDIUM = 15
const ICON_SIZE_LARGE = 20

const GAP_SIZE_EXTRA_SMALL = `gap-2`
const GAP_SIZE_SMALL = `gap-2`
const GAP_SIZE_MEDIUM = `gap-3`
const GAP_SIZE_LARGE = `gap-4`

const getButtonSize = (size: ButtonSize) => {
	if (size === "xs") return SIZE_EXTRA_SMALL

	if (size === "sm") return SIZE_SMALL

	if (size === "lg") return SIZE_LARGE

	return SIZE_MEDIUM
}

const getIconSize = (size: ButtonSize) => {
	if (size === "xs") return ICON_SIZE_EXTRA_SMALL

	if (size === "sm") return ICON_SIZE_SMALL

	if (size === "lg") return ICON_SIZE_LARGE

	return ICON_SIZE_MEDIUM
}

const getGapSize = (size: ButtonSize) => {
	if (size === "xs") return GAP_SIZE_EXTRA_SMALL

	if (size === "sm") return GAP_SIZE_SMALL

	if (size === "lg") return GAP_SIZE_LARGE

	return GAP_SIZE_MEDIUM
}

const determineIconFill = (
	isMouseOver: boolean,
	isMouseDown: boolean,
	defaultFill: string,
	hoverFill: string,
	activeFill: string
) => {
	if (isMouseDown) return activeFill
	if (isMouseOver) return hoverFill
	return defaultFill
}

const getButtonAlignment = (align: ButtonAlign) => {
	if (align === "start") return "justify-start"

	if (align === "end") return "justify-end"

	if (align === "between") return "justify-between"

	if (align === "around") return "justify-around"

	if (align === "evenly") return "justify-evenly"

	return "justify-center"
}

const getVariantAndColorClasses = (
	variant: string | undefined,
	color: string | undefined
) => {
	switch (variant) {
		case "primary": {
			switch (color) {
				case "blue":
					return "bg-blue-500 text-blue-50 hover:bg-blue-400 active:bg-blue-600"

				case "green":
					return "bg-green-700 text-green-50 hover:bg-green-400 active:bg-green-800"

				case "red":
					return "bg-red-500 text-red-50 hover:bg-red-300 active:bg-red-700"

				case "orange":
					return "bg-orange-500 text-orange-50 hover:bg-orange-400 active:bg-orange-600"

				default:
					return "bg-neutral-800 text-neutral-100 hover:bg-neutral-500 active:bg-neutral-800"
			}
		}

		case "secondary": {
			switch (color) {
				case "blue":
					return "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 active:text-blue-900"

				case "green":
					return "bg-green-100 text-green-800 hover:bg-green-200 active:bg-green-300 active:text-green-900"

				case "red":
					return "bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 active:bg-red-300 active:text-red-900"

				case "orange":
					return "bg-orange-100 text-orange-800 hover:bg-orange-200 active:bg-orange-300 active:text-orange-900"

				default:
					return "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 hover:text-neutral-900 active:bg-neutral-500 active:text-neutral-900"
			}
		}

		case "ghost": {
			switch (color) {
				case "blue":
					return "text-blue-500 hover:bg-blue-100 active:bg-blue-100 active:text-blue-700 active:bg-blue-200"
				case "green":
					return "text-green-700 hover:bg-green-100 hover:text-green-800 active:bg-green-200 active:text-green-900"
				case "red":
					return "text-red-500 hover:bg-red-100 hover:text-red-700 active:bg-red-200 active:text-red-900"
				case "orange":
					return "text-orange-500 hover:bg-orange-100 hover:text-orange-700 active:bg-orange-200 active:text-orange-900"
				default:
					return "text-neutral-900 hover:bg-neutral-200 hover:text-neutral-900 active:bg-neutral-300 active:text-neutral-900"
			}
		}

		default: {
			return ""
		}
	}
}

const getIconFill = (
	variant: string | undefined,
	color: string,
	isMouseOver: boolean,
	isMouseDown: boolean
) => {
	switch (variant) {
		case "secondary": {
			switch (color) {
				case "blue":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-blue-700",
						"fill-blue-700",
						"fill-blue-900"
					)

				case "green":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-green-800",
						"fill-green-800",
						"fill-green-900"
					)

				case "red":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-red-600",
						"fill-red-700",
						"fill-red-900"
					)

				case "orange":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-orange-800",
						"fill-orange-800",
						"fill-orange-900"
					)

				default:
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-neutral-800",
						"fill-neutral-900",
						"fill-neutral-900"
					)
			}
		}

		case "ghost": {
			switch (color) {
				case "blue":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-blue-500",
						"fill-blue-500",
						"fill-blue-700"
					)

				case "green":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-green-700",
						"fill-green-800",
						"fill-green-900"
					)

				case "red":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-red-500",
						"fill-red-700",
						"fill-red-900"
					)

				case "orange":
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-orange-500",
						"fill-orange-700",
						"fill-orange-900"
					)

				default:
					return determineIconFill(
						isMouseOver,
						isMouseDown,
						"fill-neutral-900",
						"fill-neutral-900",
						"fill-neutral-900"
					)
			}
		}

		default: {
			return "fill-neutral-100"
		}
	}
}
