export interface IconContainerProps
	extends React.HTMLAttributes<HTMLOrSVGElement> {
	size?: number
}

const IconContainer: React.FC<IconContainerProps> = ({
	children,
	className = "fill-neutral-700",
	size = 25,
	...props
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 15 15`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			{children}
		</svg>
	)
}

export default IconContainer
