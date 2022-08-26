import { twMerge } from "tailwind-merge"

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				`bg-neutral-150 border-1 rounded-lg p-12 border-neutral-200  ${className}`
			)}
		>
			{children}
		</div>
	)
}

export default Container
