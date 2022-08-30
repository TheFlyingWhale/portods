import React, { useEffect, useState } from "react"
import { Horizontal, Label, Vertical } from ".."

type Direction = "vertical" | "horizontal"

interface RadioGroupProps
	extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "onChange"> {
	label?: string
	children?: React.ReactNode
	onChange?: React.Dispatch<React.SetStateAction<string>>
	direction?: Direction
	name: string
	defaultValue?: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({
	className,
	children,
	label,
	onChange,
	direction = "vertical",
	name,
	defaultValue,
}) => {
	const [currentValue, setCurrentValue] = useState<string>(
		defaultValue ? defaultValue : ""
	)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(e.target.value)
		onChange && onChange(e.target.value)
	}

	useEffect(() => {
		onChange && onChange(currentValue)
	}, [currentValue])

	const getPropsToInject = (
		key: any,
		handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	) => {
		return {
			key: key,
			onChange: handleChange,
			name: name,
			currentValue: currentValue,
			setCurrentValue: setCurrentValue,
		}
	}

	const childrenWithProps = React.Children.map(children, (child, key) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(
				child,
				getPropsToInject(key, handleChange)
			)
		}

		return child
	})

	return (
		<Vertical>
			{label && <Label>{label}</Label>}
			<Container
				direction={direction}
				className={className}
			>
				{childrenWithProps}
			</Container>
		</Vertical>
	)
}

export default RadioGroup

interface ContainerProps {
	children: React.ReactNode
	direction: Direction
	className?: string
}

const Container: React.FC<ContainerProps> = ({
	direction,
	children,
	className,
}) => {
	if (direction === "vertical") {
		return <Vertical className={className}>{children}</Vertical>
	}
	return <Horizontal className={className}>{children}</Horizontal>
}
