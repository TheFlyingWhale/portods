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

interface SubtitleProps {
	children: React.ReactNode
	as?: HTMLElement
	className?: string
	size?: Size
}

const Subtitle: React.FC<SubtitleProps> = ({
	children,
	as = "p",
	className,
	size = "md",
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
		>
			{children}
		</HTMLElement>
	)
}

export default Subtitle
