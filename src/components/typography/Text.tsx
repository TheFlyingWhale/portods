import { twMerge } from "tailwind-merge"

/* To do:
    add default color from utils
*/

interface TextProps extends React.AllHTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<TextProps> = ({ children, className }) => {
	return (
		<p
			className={twMerge(
				`font-secondary font-normal tracking-wide ${className}`
			)}
		>
			{children}
		</p>
	)
}

export default Text
