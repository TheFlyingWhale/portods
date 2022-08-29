import { twMerge } from "tailwind-merge"

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const GridItem: React.FC<GridItemProps> = ({ children, className }) => {
	return <div className={twMerge(`flex ${className}`)}>{children}</div>
}

export default GridItem
