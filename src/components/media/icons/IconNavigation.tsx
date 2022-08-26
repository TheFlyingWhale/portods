import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconNavigation: React.FC<IconProps> = ({
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
				<path d="M7.49991 0L1.57886 14.4395L2.13938 15L7.49991 12.6316L12.8604 15L13.421 14.4395L7.49991 0Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M7.49991 0L1.57886 14.4395L2.13938 15L7.49991 12.6316L12.8604 15L13.421 14.4395L7.49991 0Z" />
	)
}

export default IconNavigation
