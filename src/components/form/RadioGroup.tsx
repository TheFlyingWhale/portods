import React from "react"
import { Horizontal, Label, Vertical } from ".."

type Direction = "vertical" | "horizontal"

interface RadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
	label?: string
	children?: React.ReactNode
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	direction?: Direction
}

const RadioGroup: React.FC<RadioGroupProps> = ({
	className,
	children,
	label,
	onChange,
	direction = "vertical",
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e)
	}

	const getNewProps = (
		key: any,
		handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	) => {
		return {
			key: key,
			onChange: handleChange,
		}
	}

	const childrenWithProps = React.Children.map(children, (child, key) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, getNewProps(key, handleChange))
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
