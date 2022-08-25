import { twMerge } from "tailwind-merge"
import { TEXT_COLOR } from "./utils"

const FONT_FAMILY = "font-primary"
const FONT_WEIGHT = "font-bold"

interface HeadingProps {
	children?: React.ReactNode
	className?: string
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading: React.FC<HeadingProps> = ({
	children,
	as = "h1",
	className,
}) => {
	if (as === "h6")
		return (
			<h6
				className={twMerge(
					`text-base ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
				)}
			>
				{children}
			</h6>
		)

	if (as === "h5")
		return (
			<h5
				className={twMerge(
					`text-lg ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
				)}
			>
				{children}
			</h5>
		)

	if (as === "h4")
		return (
			<h4
				className={twMerge(
					`text-xl ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
				)}
			>
				{children}
			</h4>
		)

	if (as === "h3")
		return (
			<h3
				className={twMerge(
					`text-2xl ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
				)}
			>
				{children}
			</h3>
		)

	if (as === "h2")
		return (
			<h2
				className={twMerge(
					`text-3xl ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
				)}
			>
				{children}
			</h2>
		)

	return (
		<h1
			className={twMerge(
				`text-4xl ${TEXT_COLOR} ${FONT_WEIGHT} ${FONT_FAMILY} ${className}`
			)}
		>
			{children}
		</h1>
	)
}

export default Heading
