import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconTypography: React.FC<IconProps> = ({
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
				<path d="M0 1.5791V3.94752H3.94737V13.4212H6.31579V3.94752H10.2632V1.5791H0ZM15 5.52647H7.89474V7.89489H10.2632V13.4212H12.6316V7.89489H15V5.52647Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M0 1.5791V3.94752H3.94737V13.4212H6.31579V3.94752H10.2632V1.5791H0ZM15 5.52647H7.89474V7.89489H10.2632V13.4212H12.6316V7.89489H15V5.52647Z" />
	)
}

export default IconTypography
