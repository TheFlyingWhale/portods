import { twMerge } from "tailwind-merge"
import { TEXT_COLOR } from "./utils"

const FONT_FAMILY = "font-primary"
const FONT_WEIGHT = "font-bold"

const getFontSize = (size: HTMLHeadingElement) => {
	if (size === "h1") return "text-4xl"
	if (size === "h2") return "text-3xl"
	if (size === "h3") return "text-2xl"
	if (size === "h4") return "text-xl"
	if (size === "h5") return "text-lg"
	if (size === "h6") return "text-base"

	return new Error("HTMLHeadingElement must be provided")
}
type HTMLHeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
interface HeadingProps {
	children?: React.ReactNode
	className?: string
	as?: HTMLHeadingElement
}

const Heading: React.FC<HeadingProps> = ({
	children,
	as = "h1",
	className,
}) => {
	const HTMLElement = as

	return (
		<HTMLElement
			className={twMerge(`
				${getFontSize(as)} 
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
