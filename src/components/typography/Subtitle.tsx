import React from "react"
import { twMerge } from "tailwind-merge"
import { TEXT_COLOR } from "./utils"

const FONT_WEIGHT = "font-medium"

const getFontSize = (size: Size) => {
	if (size === "xs") return "text-xs"
	if (size === "sm") return "text-sm"
	if (size === "md") return "text-base"
	if (size === "lg") return "text-lg"
	if (size === "xl") return "text-xl"

	return new Error("Size must be provided")
}

type HTMLElement = "p" | "h2" | "h3" | "h4" | "h5" | "h6"
type Size = "xs" | "sm" | "md" | "lg" | "xl"

interface SubtitleProps
	extends React.HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
	as?: HTMLElement
	size?: Size
}

const Subtitle: React.FC<SubtitleProps> = ({
	children,
	as = "p",
	className,
	size = "md",
	...props
}) => {
	const HTMLElement = as

	return (
		<HTMLElement
			className={twMerge(`
				${getFontSize(size)}			
				${TEXT_COLOR}
				${FONT_WEIGHT}
				${className}
			`)}
			{...props}
		>
			{children}
		</HTMLElement>
	)
}

export default Subtitle
