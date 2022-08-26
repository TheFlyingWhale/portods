import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconMail: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M13.5 1.5H1.5C0.675 1.5 0.00749999 2.175 0.00749999 3L0 12C0 12.825 0.675 13.5 1.5 13.5H13.5C14.325 13.5 15 12.825 15 12V3C15 2.175 14.325 1.5 13.5 1.5ZM13.5 4.5L7.5 8.25L1.5 4.5V3L7.5 6.75L13.5 3V4.5Z" />
			</IconContainer>
		)
	}

	return (
		<path d="M13.5 1.5H1.5C0.675 1.5 0.00749999 2.175 0.00749999 3L0 12C0 12.825 0.675 13.5 1.5 13.5H13.5C14.325 13.5 15 12.825 15 12V3C15 2.175 14.325 1.5 13.5 1.5ZM13.5 4.5L7.5 8.25L1.5 4.5V3L7.5 6.75L13.5 3V4.5Z" />
	)
}

export default IconMail
