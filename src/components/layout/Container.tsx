import { twMerge } from "tailwind-merge"

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={twMerge(`rounded-lg p-12 ${className}`)}>
			{children}
		</div>
	)
}

export default Container
