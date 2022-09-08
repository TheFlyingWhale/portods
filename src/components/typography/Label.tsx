import { twMerge } from "tailwind-merge"

const SIZE_SM = "text-sm"
const SIZE_MD = "text-base"
const SIZE_LG = "text-lg"

const getLabelSize = (size: LabelSize) => {
	if (size === "sm") return SIZE_SM

	if (size === "lg") return SIZE_LG

	return SIZE_MD
}

type LabelSize = "sm" | "md" | "lg"

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	htmlFor?: string | undefined
	size?: LabelSize
}

const Label: React.FC<LabelProps> = ({
	children,
	htmlFor,
	className,
	size = "md",
	...props
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={twMerge(
				`font-primary antialiased font-medium tracking-wide text-neutral-800 ${getLabelSize(
					size
				)} ${className}`
			)}
			{...props}
		>
			{children}
		</label>
	)
}

export default Label
