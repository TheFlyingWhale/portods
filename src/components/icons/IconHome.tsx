import { IconProps } from "./IconUtilities"
import IconContainer from "./IconContainer"

const IconHome: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M6 13.875V9.375H9V13.875H12.75V7.875H15L7.5 1.125L0 7.875H2.25V13.875H6Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M6 13.875V9.375H9V13.875H12.75V7.875H15L7.5 1.125L0 7.875H2.25V13.875H6Z" />
	)
}

export default IconHome
