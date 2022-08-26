import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconProfileDocument: React.FC<IconProps> = ({ className, size }) => {
	return (
		<IconContainer
			className={className}
			size={size}
		>
			<path d="M9 0H3C2.175 0 1.5 0.675 1.5 1.5V13.5C1.5 14.325 2.175 15 3 15H12C12.825 15 13.5 14.325 13.5 13.5V4.5L9 0ZM7.5 6C8.325 6 9 6.675 9 7.5C9 8.325 8.325 9 7.5 9C6.675 9 6 8.325 6 7.5C6 6.675 6.675 6 7.5 6ZM10.5 12H4.5V11.5725C4.5 10.965 4.86 10.425 5.415 10.185C6.0525 9.9075 6.7575 9.75 7.5 9.75C8.2425 9.75 8.9475 9.9075 9.585 10.185C10.14 10.425 10.5 10.965 10.5 11.5725V12Z" />
		</IconContainer>
	)
}

export default IconProfileDocument
