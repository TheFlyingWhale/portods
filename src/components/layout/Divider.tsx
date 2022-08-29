interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
	className?: string
}

const Divider: React.FC<DividerProps> = () => {
	return <hr className="border-neutral-200 w-full" />
}

export default Divider
