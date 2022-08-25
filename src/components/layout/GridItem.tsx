import { twMerge } from "tailwind-merge"

interface GridItemProps {
	children: React.ReactNode
	className?: string
}

const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
	return <div className={twMerge(`flex ${className}`)}>{children}</div>
}

export default GridItem
