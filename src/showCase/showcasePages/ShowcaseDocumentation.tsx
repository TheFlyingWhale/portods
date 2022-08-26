import React from "react"
import {
	Container,
	Heading,
	Subtitle,
	Vertical,
	Text,
	Horizontal,
	Button,
	IconClipboard,
} from "../../components"

const ShowcaseDocumentation = () => {
	const copyInstallPorto = () => {
		navigator.clipboard.writeText("npm install portods")
	}

	const copyInstallTailwind = () => {
		navigator.clipboard.writeText("npm install tailwindcss")
	}

	return (
		<Vertical className="w-full gap-6">
			<Heading>Documenation</Heading>
			<Vertical className="gap-2">
				<Subtitle size="lg">Installation</Subtitle>
				<Text>Install portods via npm</Text>
				<Container className="bg-orange-900 rounded-xl p-4">
					<Horizontal className="justify-between items-center">
						<Text className="text-neutral-100 font-mono">
							$ npm install portods
						</Text>
						<Button
							size="sm"
							color="orange"
							onClick={copyInstallPorto}
							leftIcon={<IconClipboard />}
						>
							Copy
						</Button>
					</Horizontal>
				</Container>
			</Vertical>
			<Vertical className="gap-2">
				<Subtitle size="lg">Expand with tailwindcss</Subtitle>
				<Text>Install tailwind via npm</Text>
				<Container className="bg-orange-900 rounded-xl p-4">
					<Horizontal className="justify-between items-center">
						<Text className="text-neutral-100 font-mono">
							$ npm install tailwindcss
						</Text>
						<Button
							size="sm"
							color="orange"
							onClick={copyInstallTailwind}
							leftIcon={<IconClipboard />}
						>
							Copy
						</Button>
					</Horizontal>
				</Container>
			</Vertical>
		</Vertical>
	)
}

export default ShowcaseDocumentation
