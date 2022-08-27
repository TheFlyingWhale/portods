import React from "react"
import { Text } from "../../components"

interface PropsProps {
	props?: string[]
}

const Props: React.FC<PropsProps> = ({ props }) => {
	return (
		<Text className="font-mono text-orange-500">{props?.join(", ")}</Text>
	)
}

export default Props
