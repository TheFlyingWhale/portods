import React, { useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { Horizontal, Label } from ".."

export interface RadioProps
	extends Omit<React.AllHTMLAttributes<HTMLInputElement>, "defaultValue"> {
	value: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	defaultChecked?: boolean
	currentValue?: string
	setCurrentValue?: React.Dispatch<React.SetStateAction<string>>
	defaultValue?: boolean
}

const Radio: React.FC<RadioProps> = ({
	className,
	id,
	name,
	value,
	children,
	onChange,
	currentValue,
	defaultValue,
	setCurrentValue,
	...props
}) => {
	useEffect(() => {
		if (defaultValue && setCurrentValue) setCurrentValue(value)
	}, [])

	return (
		<Horizontal className="gap-2 items-center hover:cursor-pointer">
			<input
				id={id}
				name={name}
				type="radio"
				className={twMerge(`hover:cursor-pointer ${className}`)}
				value={value}
				onChange={onChange && onChange}
				checked={currentValue === value}
				{...props}
			/>
			<Label
				htmlFor={id}
				className="font-secondary font-normal hover:cursor-pointer"
			>
				{children}
			</Label>
		</Horizontal>
	)
}

export default Radio
