import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconChevronLeft: React.FC<IconProps> = ({
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
				<path d="M12.1312 13.2375L6.40615 7.5L12.1312 1.7625L10.3687 0L2.86865 7.5L10.3687 15L12.1312 13.2375Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M12.1312 13.2375L6.40615 7.5L12.1312 1.7625L10.3687 0L2.86865 7.5L10.3687 15L12.1312 13.2375Z" />
	)
}

export default IconChevronLeft
