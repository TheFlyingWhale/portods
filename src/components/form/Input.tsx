import { twMerge } from "tailwind-merge"
import IconContainer from "../media/icons/IconContainer"

const SIZE_SM = `px-3 pt-1 pb-0.5 text-sm`
const SIZE_SM_LEFT_ICON = `pl-8 pr-3 pt-1 pb-0.5 text-sm`
const SIZE_MD = `px-4 pt-1.5 pb-1 text-base`
const SIZE_MD_LEFT_ICON = `pl-9 pr-3 pt-1.5 pb-1 text-base`
const SIZE_LG = `px-5 pt-2 pb-1.5 text-lg tracking-wide`
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

interface InputProps {
	name?: string
	className?: string
	placeholder?: string
	size?: InputSize
	leftIcon?: React.ReactNode
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
}

const Input: React.FC<InputProps> = ({
	className,
	placeholder,
	name,
	size = "md",
	leftIcon,
	onChange,
	value,
}) => {
	return (
		<div className="mt-1 relative rounded-md shadow-sm">
			{leftIcon && (
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<IconContainer
						className="fill-neutral-500 active:fill-orange-600"
						size={size === "md" ? 15 : size === "sm" ? 12 : 17}
					>
						{leftIcon}
					</IconContainer>
				</div>
			)}
			<input
				type="text"
				className={twMerge(
					`border-1 border-neutral-300 w-full rounded-md focus:ring-1 text-neutral-700 font-secondary ${getInputSize(
						size,
						!!leftIcon
					)} ${className}`
				)}
				placeholder={placeholder}
				name={name}
				id={name}
				onChange={onChange}
				value={value}
			/>
		</div>
	)
}

export default Input
