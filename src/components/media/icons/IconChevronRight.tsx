import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconChevronRight: React.FC<IconProps> = ({
	className,
	size,
	contained,
}) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M2.86865 13.2375L8.59365 7.5L2.86865 1.7625L4.63115 0L12.1312 7.5L4.63115 15L2.86865 13.2375Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M2.86865 13.2375L8.59365 7.5L2.86865 1.7625L4.63115 0L12.1312 7.5L4.63115 15L2.86865 13.2375Z" />
	)
}

export default IconChevronRight
