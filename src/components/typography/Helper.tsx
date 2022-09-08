import { twMerge } from "tailwind-merge"
import { Text } from "../"

const SIZE_SM = "text-xs"
const SIZE_MD = "text-sm"
const SIZE_LG = "text-base"

const getSize = (size: HelperTextSize) => {
	if (size === "sm") return SIZE_SM

	if (size === "lg") return SIZE_LG

	return SIZE_MD
}

type HelperTextSize = "sm" | "md" | "lg"

interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	size?: HelperTextSize
}

const HelperText: React.FC<HelperTextProps> = ({
	children,
	size = "md",
	className,
	...props
}) => {
	return (
		<Text
			className={twMerge(
				`${getSize(
					size
				)} antialiased text-neutral-600 mt-1 ${className}`
			)}
			{...props}
		>
			{children}
		</Text>
	)
}

export default HelperText
