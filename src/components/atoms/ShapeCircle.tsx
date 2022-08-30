import { twMerge } from "tailwind-merge"

interface ShapeCircleProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: number
}

const ShapeCircle: React.FC<ShapeCircleProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			className={twMerge(
				`w-[50px] h-[50px] flex justify-center items-center rounded-full bg-neutral-400 ${className}`
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export default ShapeCircle
