import { twMerge } from "tailwind-merge"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			{...props}
			className={twMerge(
				`rounded-lg p-12 bg-neutral-100 border-1 border-neutral-200 ${className}`
			)}
		>
			{children}
		</div>
	)
}

export default Container
