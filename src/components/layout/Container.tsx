import { twMerge } from "tailwind-merge"

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				`rounded-lg p-12 bg-neutral-100 border-1 border-neutral-200 ${className}`
			)}
		>
			{children}
		</div>
	)
}

export default Container
