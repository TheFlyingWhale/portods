import IconContainer from "./IconContainer"
import { IconProps } from "./IconUtilities"

const IconBook: React.FC<IconProps> = ({ className, size, contained }) => {
	if (contained) {
		return (
			<IconContainer
				className={className}
				size={size}
			>
				<path d="M13.6364 2.0455C12.8795 1.80686 12.0477 1.70459 11.25 1.70459C9.92045 1.70459 8.48864 1.97732 7.5 2.72732C6.51136 1.97732 5.07955 1.70459 3.75 1.70459C2.42045 1.70459 0.988636 1.97732 0 2.72732V12.716C0 12.8864 0.170455 13.0569 0.340909 13.0569C0.409091 13.0569 0.443182 13.0228 0.511364 13.0228C1.43182 12.5796 2.76136 12.2728 3.75 12.2728C5.07955 12.2728 6.51136 12.5455 7.5 13.2955C8.42045 12.716 10.0909 12.2728 11.25 12.2728C12.375 12.2728 13.5341 12.4773 14.4886 12.9887C14.5568 13.0228 14.5909 13.0228 14.6591 13.0228C14.8295 13.0228 15 12.8523 15 12.6819V2.72732C14.5909 2.4205 14.1477 2.21595 13.6364 2.0455ZM13.6364 11.25C12.8864 11.0114 12.0682 10.9091 11.25 10.9091C10.0909 10.9091 8.42045 11.3523 7.5 11.9319V4.09095C8.42045 3.51141 10.0909 3.06823 11.25 3.06823C12.0682 3.06823 12.8864 3.1705 13.6364 3.40914V11.25Z" />
			</IconContainer>
		)
	}
	return (
		<path d="M13.6364 2.0455C12.8795 1.80686 12.0477 1.70459 11.25 1.70459C9.92045 1.70459 8.48864 1.97732 7.5 2.72732C6.51136 1.97732 5.07955 1.70459 3.75 1.70459C2.42045 1.70459 0.988636 1.97732 0 2.72732V12.716C0 12.8864 0.170455 13.0569 0.340909 13.0569C0.409091 13.0569 0.443182 13.0228 0.511364 13.0228C1.43182 12.5796 2.76136 12.2728 3.75 12.2728C5.07955 12.2728 6.51136 12.5455 7.5 13.2955C8.42045 12.716 10.0909 12.2728 11.25 12.2728C12.375 12.2728 13.5341 12.4773 14.4886 12.9887C14.5568 13.0228 14.5909 13.0228 14.6591 13.0228C14.8295 13.0228 15 12.8523 15 12.6819V2.72732C14.5909 2.4205 14.1477 2.21595 13.6364 2.0455ZM13.6364 11.25C12.8864 11.0114 12.0682 10.9091 11.25 10.9091C10.0909 10.9091 8.42045 11.3523 7.5 11.9319V4.09095C8.42045 3.51141 10.0909 3.06823 11.25 3.06823C12.0682 3.06823 12.8864 3.1705 13.6364 3.40914V11.25Z" />
	)
}

export default IconBook
