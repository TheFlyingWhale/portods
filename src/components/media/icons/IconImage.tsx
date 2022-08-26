import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconImage: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333ZM4.58333 8.75L6.66667 11.2583L9.58333 7.5L13.3333 12.5H1.66667L4.58333 8.75Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333ZM4.58333 8.75L6.66667 11.2583L9.58333 7.5L13.3333 12.5H1.66667L4.58333 8.75Z" />
	)
}

export default IconImage
