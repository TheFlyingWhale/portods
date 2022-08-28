import React from "react"
import {
	Button,
	Container,
	Horizontal,
	IconClipboard,
	Text,
} from "../../components"

interface CodeSyntaxProps {
	clipboardSyntax?: string
}

const CodeSyntax: React.FC<CodeSyntaxProps> = ({ clipboardSyntax }) => {
	const copySyntaxToClipboard = () => {
		if (clipboardSyntax) {
			navigator.clipboard.writeText(clipboardSyntax)
		}
	}

	return (
		<Container className="bg-blue-900 border-0 rounded-lg p-4">
			<Horizontal className="justify-between items-center">
				<Text className="text-neutral-100 font-mono">
					{clipboardSyntax}
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

export default CodeSyntax
