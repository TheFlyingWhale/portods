import React from "react"
import { Horizontal, Label } from ".."

export interface RadioProps extends React.AllHTMLAttributes<HTMLInputElement> {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	defaultChecked?: boolean
}

const Radio: React.FC<RadioProps> = ({
	className,
	id,
	name,
	value,
	children,
	onChange,
}) => {
	return (
		<Horizontal className="gap-2 items-center">
			<input
				id={id}
				name={name}
				type="radio"
				className={className}
				value={value}
				onChange={onChange && onChange}
			/>
			<Label
				htmlFor={id}
				className="font-secondary font-normal"
			>
				{children}
			</Label>
		</Horizontal>
	)
}

export default Radio
