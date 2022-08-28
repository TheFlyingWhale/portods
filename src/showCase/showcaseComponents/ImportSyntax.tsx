import React from "react"
import {
	Button,
	Container,
	Horizontal,
	IconClipboard,
	Text,
} from "../../components"

interface ImportSyntaxProps {
	componentNames?: string[]
}

const ImportSyntax: React.FC<ImportSyntaxProps> = ({ componentNames }) => {
	const copySyntaxToClipboard = () => {
		if (componentNames) {
			navigator.clipboard.writeText(
				`import { ${componentNames.join(",")} } from 'portods'`
			)
		}
	}

	return (
		<Container className="bg-blue-900 border-0 w-full rounded-lg p-4">
			<Horizontal className="justify-between items-center">
				<Text className="text-neutral-100 font-mono">
					<span className="text-orange-300">import</span> {"{ "}
					{componentNames?.join(",")}
					{" } "}
					<span className="text-orange-300">from</span> "portods"
				</Text>
				<Button
					size="sm"
					color="orange"
					onClick={copySyntaxToClipboard}
					leftIcon={<IconClipboard />}
				>
					Copy
				</Button>
			</Horizontal>
		</Container>
	)
}

export default ImportSyntax
