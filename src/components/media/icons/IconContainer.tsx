import { twMerge } from "tailwind-merge"

export interface IconContainerProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	size?: number
	viewBox?: string
}

const IconContainer: React.FC<IconContainerProps> = ({
	children,
	className = "fill-neutral-700",
	size = 25,
	viewBox = "0 0 15 15",
	...props
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge(`shrink-0 ${className}`)}
			{...props}
		>
			{children}
		</svg>
	)
}

export default IconContainer
