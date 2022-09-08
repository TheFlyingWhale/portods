import { twMerge } from "tailwind-merge"
import { TEXT_COLOR } from "./utils"

const FONT_FAMILY = "font-primary"
const FONT_WEIGHT = "font-bold"

const getFontSize = (size: Size) => {
	if (size === "xs") return "text-xs"
	if (size === "sm") return "text-sm"
	if (size === "base") return "text-base"
	if (size === "lg") return "text-lg"
	if (size === "xl") return "text-xl"
	if (size === "2xl") return "text-2xl"
	if (size === "3xl") return "text-3xl"
	if (size === "4xl") return "text-4xl"
	if (size === "5xl") return "text-5xl"
	if (size === "6xl") return "text-6xl"
	if (size === "7xl") return "text-7xl"
	if (size === "8xl") return "text-8xl"
	if (size === "9xl") return "text-9xl"

	return ""
}

const getDefaultSize = (as: HTMLHeadingElement) => {
	if (as === "h1") return "text-4xl"
	if (as === "h2") return "text-3xl"
	if (as === "h3") return "text-2xl"
	if (as === "h4") return "text-xl"
	if (as === "h5") return "text-lg"
	if (as === "h6") return "text-base"

	return new Error("HTMLHeadingElement must be provided")
}

type HTMLHeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type Size =
	| "xs"
	| "sm"
	| "base"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl"
	| "8xl"
	| "9xl"
	| undefined

interface HeadingProps
	extends Omit<React.AllHTMLAttributes<HTMLHeadingElement>, "size"> {
	as?: HTMLHeadingElement
	size?: Size
}

const Heading: React.FC<HeadingProps> = ({
	children,
	as = "h1",
	className,
	size,
}) => {
	const HTMLElement = as

	return (
		<HTMLElement
			className={twMerge(`
			antialiased
				${getDefaultSize(as)} 
				${getFontSize(size)} 
				${TEXT_COLOR} 
				${FONT_WEIGHT} 
				${FONT_FAMILY} 
				${className}
				`)}
		>
			{children}
		</HTMLElement>
	)
}

export default Heading
