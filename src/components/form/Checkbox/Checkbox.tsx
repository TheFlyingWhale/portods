import { Horizontal, Label, Vertical, Text } from "../.."

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

	if (size === "lg") return "gap-4"

	return "gap-3"
}

interface CheckboxProps {
	name?: string
	size?: "sm" | "md" | "lg"
	helperText?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
	name,
	size = "md",
	helperText,
}) => {
	return (
		<Horizontal
			className={`
				${getGap(size)}
				cursor-pointer 
				items-center 
				text-neutral-700 
				font-medium 
				hover:text-neutral-800
			`}
		>
			<input
				className={`
					appearance-none cursor-pointer rounded-sm 
					border 
					border-neutral-500 
					bg-blue-50 
					
					focus:ring-2
					focus:ring-offset-1
					focus:ring-blue-200
					
					hover:border-blue-500
					
					active:bg-blue-300 

					checked:border-blue-600 
					checked:bg-blue-500 
                    ${getCheckIconSize(size)} ${getCheckboxSize(size)}`}
				type="checkbox"
				name={name}
				id={name}
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
						<Text
							className={`text-neutral-600 ${getHelperTextSize(
								size
							)}`}
						>
							{helperText}
						</Text>
					)}
				</Vertical>
			</Label>
		</Horizontal>
	)
}

export default Checkbox
