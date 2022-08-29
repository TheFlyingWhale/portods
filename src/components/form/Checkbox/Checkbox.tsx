import React from "react"
import { Horizontal, Label, Vertical, Helper } from "../.."

const getCheckboxSize = (size: string) => {
	if (size === "sm") return "w-3.5 h-3.5"

	if (size === "lg") return "w-5 h-5"

	return "w-4 h-4"
}

const getLabelSize = (size: string) => {
	if (size === "sm") return "text-sm"

	if (size === "lg") return "text-lg"

	return "text-base"
}

const getCheckIconSize = (size: string) => {
	if (size === "sm") return "smCheckIcon"

	if (size === "lg") return "lgCheckIcon"

	return "mdCheckIcon"
}

const getHelperTextSize = (size: string) => {
	if (size === "sm") return "text-xs"

	if (size === "lg") return "text-base"

	return "text-sm"
}

const getGap = (size: string) => {
	if (size === "sm") return "gap-2"

	if (size === "lg") return "gap-3"

	return "gap-2"
}

const getMarginTop = (size: string) => {
	if (size === "sm") return "mt-0.5"

	if (size === "lg") return "mt-1"

	return "mt-1"
}

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
	name?: string
	size?: "sm" | "md" | "lg"
	helperText?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	size = "md",
	helperText,
	onChange,
	...props
}) => {
	return (
		<Horizontal
			className={`
				${getGap(size)}
				cursor-pointer 
				items-start 
				text-neutral-700 
				font-medium 
				hover:text-neutral-800
			`}
		>
			<input
				className={`
					appearance-none cursor-pointer rounded-sm 
					border
					border-neutral-300 
					
					focus:ring-2
					focus:ring-offset-1
					focus:ring-blue-200
					
					hover:border-blue-500
					
					active:bg-blue-300 
					
					checked:border-blue-600 
					checked:bg-blue-500 
					${getMarginTop(size)}
                    ${getCheckIconSize(size)} 
					${getCheckboxSize(size)}
				`}
				type="checkbox"
				name={name}
				id={name}
				onChange={onChange}
				{...props}
			/>
			<Label
				htmlFor={name}
				className={`cursor-pointer font-secondary font-normal ${getLabelSize(
					size
				)}`}
			>
				<Vertical>
					{name}
					{helperText && (
						<Helper
							className={`text-neutral-600 mt-0 ${getHelperTextSize(
								size
							)}`}
						>
							{helperText}
						</Helper>
					)}
				</Vertical>
			</Label>
		</Horizontal>
	)
}

export default Checkbox
