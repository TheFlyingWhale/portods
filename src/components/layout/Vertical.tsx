import { twMerge } from "tailwind-merge"

interface VerticalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Vertical: React.FC<VerticalProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			{...props}
			className={twMerge(`flex flex-col ${className}`)}
		>
			{children}
		</div>
	)
}

export default Vertical
