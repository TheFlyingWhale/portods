import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconChevronDown: React.FC<IconProps> = ({
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
				<path d="M1.7625 2.86865L7.5 8.59365L13.2375 2.86865L15 4.63115L7.5 12.1312L0 4.63115L1.7625 2.86865Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M1.7625 2.86865L7.5 8.59365L13.2375 2.86865L15 4.63115L7.5 12.1312L0 4.63115L1.7625 2.86865Z" />
	)
}

export default IconChevronDown
