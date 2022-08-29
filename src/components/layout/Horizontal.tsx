interface HorizontalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Horizontal: React.FC<HorizontalProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<div
			{...props}
			className={`flex flex-row ${className}`}
		>
			{children}
		</div>
	)
}

export default Horizontal
