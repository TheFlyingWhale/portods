import { IconProps } from "./IconUtilities"
import IconContainer from "./IconContainer"

const IconFonts: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M5.9475 8.625H9.0525L7.5 4.485L5.9475 8.625ZM13.5 0H1.5C0.675 0 0 0.675 0 1.5V13.5C0 14.325 0.675 15 1.5 15H13.5C14.325 15 15 14.325 15 13.5V1.5C15 0.675 14.325 0 13.5 0ZM10.4625 12.375L9.6075 10.125H5.3775L4.5375 12.375H2.97L6.8025 2.625H8.1975L12.03 12.375H10.4625Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M5.9475 8.625H9.0525L7.5 4.485L5.9475 8.625ZM13.5 0H1.5C0.675 0 0 0.675 0 1.5V13.5C0 14.325 0.675 15 1.5 15H13.5C14.325 15 15 14.325 15 13.5V1.5C15 0.675 14.325 0 13.5 0ZM10.4625 12.375L9.6075 10.125H5.3775L4.5375 12.375H2.97L6.8025 2.625H8.1975L12.03 12.375H10.4625Z" />
	)
}

export default IconFonts
