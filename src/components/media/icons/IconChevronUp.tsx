import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconChevronUp: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M1.7625 12.1312L7.5 6.40615L13.2375 12.1312L15 10.3687L7.5 2.86865L0 10.3687L1.7625 12.1312Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M1.7625 12.1312L7.5 6.40615L13.2375 12.1312L15 10.3687L7.5 2.86865L0 10.3687L1.7625 12.1312Z" />
	)
}

export default IconChevronUp
