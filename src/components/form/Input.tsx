import { twMerge } from "tailwind-merge"
import { Container, Vertical } from ".."
import IconContainer from "../media/icons/IconContainer"

const SIZE_SM = `px-3 py-1.5 text-sm`
const SIZE_SM_LEFT_ICON = `pl-8 pr-3 pt-1 pb-0.5 text-sm`
const SIZE_MD = `px-4 pt-2 pb-2 text-base`
const SIZE_MD_LEFT_ICON = `pl-11 pr-3 py-2 text-base`
const SIZE_LG = `px-6 py-2 text-lg tracking-wide`
const SIZE_LG_LEFT_ICON = `pl-10 pr-5 pt-2 pb-1.5 text-lg tracking-wide`

const getInputSize = (size: InputSize, leftIcon: boolean) => {
	if (size === "sm" && !leftIcon) return SIZE_SM
	if (size === "sm" && leftIcon) return SIZE_SM_LEFT_ICON

	if (size === "lg" && !leftIcon) return SIZE_LG
	if (size === "lg" && leftIcon) return SIZE_LG_LEFT_ICON

	if (size === "md" && leftIcon) return SIZE_MD_LEFT_ICON
	return SIZE_MD
}

export type InputSize = "sm" | "md" | "lg"

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
	name?: string
	containerClassName?: string
	size?: InputSize
	leftIcon?: React.ReactNode
	value?: string
}

const Input: React.FC<InputProps> = ({
	containerClassName,
	className,
	placeholder,
	name,
	size = "md",
	leftIcon,
	onChange,
	value,
	...props
}) => {
	return (
		<Vertical
			className={twMerge(
				`mt-1 relative rounded-md ${containerClassName}`
			)}
		>
			{leftIcon && (
				<Container className="absolute inset-y-0 p-0 bg-transparent border-0 left-0 pl-4 flex items-center pointer-events-none">
					<IconContainer
						className="fill-neutral-700 active:fill-orange-600"
						size={size === "md" ? 15 : size === "sm" ? 12 : 17}
					>
						{leftIcon}
					</IconContainer>
				</Container>
			)}
			<input
				type="text"
				className={twMerge(
					`bg-neutral-150 w-full border-1 border-neutral-200 rounded-md focus:ring-1 drop-lg placeholder:text-neutral-600 text-neutral-800 font-secondary ${getInputSize(
						size,
						!!leftIcon
					)} ${className}`
				)}
				placeholder={placeholder}
				name={name}
				id={name}
				onChange={onChange}
				value={value}
				{...props}
			/>
		</Vertical>
	)
}

export default Input
