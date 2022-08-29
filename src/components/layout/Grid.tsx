import { twMerge } from "tailwind-merge"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {}

const Grid: React.FC<GridProps> = ({ children, className, ...props }) => {
	return (
		<div
			{...props}
			className={twMerge(`grid ${className}`)}
		>
			{children}
		</div>
	)
}

export default Grid
